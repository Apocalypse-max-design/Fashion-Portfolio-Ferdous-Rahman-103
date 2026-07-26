import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { verifyToken } from "@/lib/auth";
import { portfolioItemSchema } from "@/lib/validators";

export async function GET(req: NextRequest) {
  try {
    const token = req.cookies.get("auth-token")?.value;
    if (!token || !verifyToken(token)) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const items = await prisma.portfolioItem.findMany({
      orderBy: { order: "asc" },
    });

    return NextResponse.json(items);
  } catch (error) {
    console.error("Error fetching portfolio items:", error);
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}

export async function POST(req: NextRequest) {
  try {
    const token = req.cookies.get("auth-token")?.value;
    if (!token || !verifyToken(token)) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const body = await req.json();
    const data = portfolioItemSchema.parse(body);

    const maxOrder = await prisma.portfolioItem.findFirst({
      orderBy: { order: "desc" },
      select: { order: true },
    });

    const item = await prisma.portfolioItem.create({
      data: {
        ...data,
        imageUrl: "",
        order: (maxOrder?.order ?? -1) + 1,
      },
    });

    return NextResponse.json(item);
  } catch (error) {
    console.error("Error creating portfolio item:", error);
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}

export async function PUT(req: NextRequest) {
  try {
    const token = req.cookies.get("auth-token")?.value;
    if (!token || !verifyToken(token)) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const body = await req.json();
    const { id, ...data } = body;

    const item = await prisma.portfolioItem.update({
      where: { id },
      data,
    });

    return NextResponse.json(item);
  } catch (error) {
    console.error("Error updating portfolio item:", error);
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}

export async function DELETE(req: NextRequest) {
  try {
    const token = req.cookies.get("auth-token")?.value;
    if (!token || !verifyToken(token)) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const { searchParams } = new URL(req.url);
    const id = searchParams.get("id");

    if (!id) {
      return NextResponse.json({ error: "ID required" }, { status: 400 });
    }

    await prisma.portfolioItem.delete({ where: { id } });
    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Error deleting portfolio item:", error);
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}
