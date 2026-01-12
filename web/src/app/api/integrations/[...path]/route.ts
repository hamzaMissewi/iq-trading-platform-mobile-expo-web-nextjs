import { NextRequest, NextResponse } from "next/server";

export async function GET(
  request: NextRequest,
  { params }: { params: { path: string[] } }
) {
  const path = params.path.join("/");
  const searchParams = request.nextUrl.searchParams;
  const baseUrl =
    process.env.NEXT_PUBLIC_CREATE_BASE_URL ?? "https://www.create.xyz";
  const url = `${baseUrl}/integrations/${path}${searchParams.toString() ? `?${searchParams.toString()}` : ""}`;

  try {
    const response = await fetch(url, {
      method: "GET",
      headers: {
        "X-Forwarded-For": process.env.NEXT_PUBLIC_CREATE_HOST || "",
        "x-createxyz-host": process.env.NEXT_PUBLIC_CREATE_HOST || "",
        Host: process.env.NEXT_PUBLIC_CREATE_HOST || "",
        "x-createxyz-project-group-id":
          process.env.NEXT_PUBLIC_PROJECT_GROUP_ID || "",
        "Content-Type": "application/json",
      },
    });

    const data = await response.arrayBuffer();

    return new NextResponse(data, {
      status: response.status,
      headers: {
        ...Object.fromEntries(response.headers.entries()),
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, OPTIONS",
        "Access-Control-Allow-Headers": "Content-Type, Authorization",
      },
    });
  } catch (error) {
    console.error("Proxy error:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}

export async function POST(
  request: NextRequest,
  { params }: { params: { path: string[] } }
) {
  const path = params.path.join("/");
  const searchParams = request.nextUrl.searchParams;
  const baseUrl =
    process.env.NEXT_PUBLIC_CREATE_BASE_URL ?? "https://www.create.xyz";
  const url = `${baseUrl}/integrations/${path}${searchParams.toString() ? `?${searchParams.toString()}` : ""}`;

  try {
    const body = await request.arrayBuffer();

    const response = await fetch(url, {
      method: "POST",
      body,
      headers: {
        "X-Forwarded-For": process.env.NEXT_PUBLIC_CREATE_HOST || "",
        "x-createxyz-host": process.env.NEXT_PUBLIC_CREATE_HOST || "",
        Host: process.env.NEXT_PUBLIC_CREATE_HOST || "",
        "x-createxyz-project-group-id":
          process.env.NEXT_PUBLIC_PROJECT_GROUP_ID || "",
        "Content-Type":
          request.headers.get("Content-Type") || "application/json",
      },
    });

    const responseData = await response.arrayBuffer();

    return new NextResponse(responseData, {
      status: response.status,
      headers: {
        ...Object.fromEntries(response.headers.entries()),
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, OPTIONS",
        "Access-Control-Allow-Headers": "Content-Type, Authorization",
      },
    });
  } catch (error) {
    console.error("Proxy error:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}

export async function PUT(
  request: NextRequest,
  { params }: { params: { path: string[] } }
) {
  const path = params.path.join("/");
  const searchParams = request.nextUrl.searchParams;
  const baseUrl =
    process.env.NEXT_PUBLIC_CREATE_BASE_URL ?? "https://www.create.xyz";
  const url = `${baseUrl}/integrations/${path}${searchParams.toString() ? `?${searchParams.toString()}` : ""}`;

  try {
    const body = await request.arrayBuffer();

    const response = await fetch(url, {
      method: "PUT",
      body,
      headers: {
        "X-Forwarded-For": process.env.NEXT_PUBLIC_CREATE_HOST || "",
        "x-createxyz-host": process.env.NEXT_PUBLIC_CREATE_HOST || "",
        Host: process.env.NEXT_PUBLIC_CREATE_HOST || "",
        "x-createxyz-project-group-id":
          process.env.NEXT_PUBLIC_PROJECT_GROUP_ID || "",
        "Content-Type":
          request.headers.get("Content-Type") || "application/json",
      },
    });

    const responseData = await response.arrayBuffer();

    return new NextResponse(responseData, {
      status: response.status,
      headers: {
        ...Object.fromEntries(response.headers.entries()),
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, OPTIONS",
        "Access-Control-Allow-Headers": "Content-Type, Authorization",
      },
    });
  } catch (error) {
    console.error("Proxy error:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}

export async function DELETE(
  request: NextRequest,
  { params }: { params: { path: string[] } }
) {
  const path = params.path.join("/");
  const searchParams = request.nextUrl.searchParams;
  const baseUrl =
    process.env.NEXT_PUBLIC_CREATE_BASE_URL ?? "https://www.create.xyz";
  const url = `${baseUrl}/integrations/${path}${searchParams.toString() ? `?${searchParams.toString()}` : ""}`;

  try {
    const response = await fetch(url, {
      method: "DELETE",
      headers: {
        "X-Forwarded-For": process.env.NEXT_PUBLIC_CREATE_HOST || "",
        "x-createxyz-host": process.env.NEXT_PUBLIC_CREATE_HOST || "",
        Host: process.env.NEXT_PUBLIC_CREATE_HOST || "",
        "x-createxyz-project-group-id":
          process.env.NEXT_PUBLIC_PROJECT_GROUP_ID || "",
        "Content-Type": "application/json",
      },
    });

    const data = await response.arrayBuffer();

    return new NextResponse(data, {
      status: response.status,
      headers: {
        ...Object.fromEntries(response.headers.entries()),
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, OPTIONS",
        "Access-Control-Allow-Headers": "Content-Type, Authorization",
      },
    });
  } catch (error) {
    console.error("Proxy error:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}

export async function OPTIONS() {
  return new NextResponse(null, {
    status: 200,
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, OPTIONS",
      "Access-Control-Allow-Headers": "Content-Type, Authorization",
    },
  });
}
