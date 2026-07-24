import { NextRequest, NextResponse } from "next/server";

import { authService } from "@/Modules/Identity/AuthService";

export async function POST(request: NextRequest) {
  try {
    const token = request.cookies.get("spedo_session")?.value;

    if (token) {
      await authService.logout(
        token,
        request.headers.get("x-forwarded-for") ??
          request.headers.get("x-real-ip"),
        request.headers.get("user-agent")
      );
    }

    const response = NextResponse.json({
      success: true,
      message: "Logged out successfully.",
    });

    response.cookies.set({
      name: "spedo_session",
      value: "",
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "lax",
      expires: new Date(0),
      path: "/",
    });

    return response;
  } catch (error) {
    console.error(error);

    return NextResponse.json(
      {
        success: false,
        message: "Internal Server Error",
      },
      {
        status: 500,
      }
    );
  }
}