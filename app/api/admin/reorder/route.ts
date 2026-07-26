import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { verifyToken } from "@/lib/auth";

export async function POST(req: NextRequest) {
  try {
    const token = req.cookies.get("auth-token")?.value;
    if (!token || !verifyToken(token)) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const { type, items } = await req.json();

    if (!type || !Array.isArray(items)) {
      return NextResponse.json({ error: "Invalid request" }, { status: 400 });
    }

    // Update order for all items
    const updates = items.map((item: { id: string; order: number }, index: number) =>
      prisma[type as keyof typeof prisma].update({
        where: { id: item.id },
        data: { order: index },
      })
    );

    await Promise.all(updates);

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Error reordering items:", error);
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}
