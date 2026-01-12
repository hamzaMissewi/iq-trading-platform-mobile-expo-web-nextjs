import { Hono } from "hono";
import type { Handler } from "hono/types";
import updatedFetch from "../src/__create/fetch";

const API_BASENAME = "/api";
const api = new Hono();

if (globalThis.fetch) {
  globalThis.fetch = updatedFetch;
}

// Helper function to transform file path to Hono route path
function getHonoPath(
  relativePath: string
): { name: string; pattern: string }[] {
  // relativePath will be like 'auth/token/route.js' or 'route.js'
  const parts = relativePath.split("/").filter(Boolean);
  // Support both JS and TS
  const routeParts = parts.slice(0, -1);

  if (routeParts.length === 0) {
    return [{ name: "root", pattern: "" }];
  }
  const transformedParts = routeParts.map((segment) => {
    const match = segment.match(/^\[(\.{3})?([^\]]+)\]$/);
    if (match) {
      const [_, dots, param] = match;
      return dots === "..."
        ? { name: param, pattern: `:${param}{.+}` }
        : { name: param, pattern: `:${param}` };
    }
    return { name: segment, pattern: segment };
  });
  return transformedParts;
}

// Import and register all routes using Vite's import.meta.glob
// This ensures routes are bundled and available in production
async function registerRoutes() {
  const modules = import.meta.glob("../src/app/api/**/route.{js,ts}", {
    eager: true,
  });

  const entries = Object.entries(modules).sort(([pathA], [pathB]) => {
    const isRootA =
      pathA.endsWith("/api/route.js") || pathA.endsWith("/api/route.ts");
    const isRootB =
      pathB.endsWith("/api/route.js") || pathB.endsWith("/api/route.ts");
    if (isRootA) return -1;
    if (isRootB) return 1;
    return pathB.length - pathA.length;
  });

  // Clear existing routes if called during HMR
  api.routes = [];

  for (const [fileImportPath, routeModule] of entries) {
    const route = routeModule as any;
    // Extract relative path from the import path
    // pathA is like '../src/app/api/auth/token/route.js'
    const relativePath = fileImportPath.split("/src/app/api/")[1];
    if (!relativePath) continue;

    const methods = ["GET", "POST", "PUT", "DELETE", "PATCH"];
    for (const method of methods) {
      if (route[method]) {
        const parts = getHonoPath(relativePath);
        const honoPath = `/${parts.map(({ pattern }) => pattern).join("/")}`;

        const handler: Handler = async (c) => {
          const params = c.req.param();
          // In development, we can still use the eager loaded module.
          // Vite handles HMR by re-evaluating the module.
          return await route[method](c.req.raw, { params });
        };

        const methodLowercase = method.toLowerCase() as
          | "get"
          | "post"
          | "put"
          | "delete"
          | "patch";
        api[methodLowercase](honoPath, handler);
      }
    }
  }
}

// Initial route registration
await registerRoutes();

// Hot reload routes in development
if (import.meta.env!.DEV && import.meta.hot) {
  import.meta.hot.accept(() => {
    registerRoutes().catch((err) => {
      console.error("Error reloading routes:", err);
    });
  });
}

export { api, API_BASENAME };
