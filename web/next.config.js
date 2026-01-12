/** @type {import('next').NextConfig} */
const nextConfig = {
  serverExternalPackages: ["@neondatabase/serverless"],
  eslint: {
    ignoreDuringBuilds: true,
  },
  env: {
    NEXT_PUBLIC_CREATE_BASE_URL: process.env.NEXT_PUBLIC_CREATE_BASE_URL,
    NEXT_PUBLIC_CREATE_HOST: process.env.NEXT_PUBLIC_CREATE_HOST,
    NEXT_PUBLIC_PROJECT_GROUP_ID: process.env.NEXT_PUBLIC_PROJECT_GROUP_ID,
    DATABASE_URL: process.env.DATABASE_URL,
    AUTH_SECRET: process.env.AUTH_SECRET,
    CORS_ORIGINS: process.env.CORS_ORIGINS,
  },
  async rewrites() {
    return [
      {
        source: "/integrations/:path*",
        destination: `${process.env.NEXT_PUBLIC_CREATE_BASE_URL ?? "https://www.create.xyz"}/integrations/:path*`,
      },
    ];
  },
  async headers() {
    return [
      {
        source: "/integrations/:path*",
        headers: [
          {
            key: "X-Forwarded-For",
            value: process.env.NEXT_PUBLIC_CREATE_HOST || "",
          },
          {
            key: "x-createxyz-host",
            value: process.env.NEXT_PUBLIC_CREATE_HOST || "",
          },
          {
            key: "x-createxyz-project-group-id",
            value: process.env.NEXT_PUBLIC_PROJECT_GROUP_ID || "",
          },
        ],
      },
    ];
  },
};

export default nextConfig;
