import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { verifyToken } from "@/lib/auth";

export async function GET(req: NextRequest) {
  try {
    const token = req.cookies.get("auth-token")?.value;
    if (!token || !verifyToken(token)) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const profile = await prisma.profile.findUnique({
      where: { id: "main-profile" },
      select: { cvUrl: true },
    });

    return NextResponse.json({ cvUrl: profile?.cvUrl || null });
  } catch (error) {
    console.error("Error fetching CV:", error);
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}

export async function PUT(req: NextRequest) {
  try {
    const token = req.cookies.get("auth-token")?.value;
    if (!token || !verifyToken(token)) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const { cvUrl } = await req.json();

    const profile = await prisma.profile.update({
      where: { id: "main-profile" },
      data: { cvUrl },
    });

    return NextResponse.json(profile);
  } catch (error) {
    console.error("Error updating CV:", error);
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}
