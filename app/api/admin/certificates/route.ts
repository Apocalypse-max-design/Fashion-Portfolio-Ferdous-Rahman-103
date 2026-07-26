import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { verifyToken } from "@/lib/auth";
import { certificateSchema } from "@/lib/validators";

export async function GET(req: NextRequest) {
  try {
    const token = req.cookies.get("auth-token")?.value;
    if (!token || !verifyToken(token)) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const certificates = await prisma.certificate.findMany({
      orderBy: { order: "asc" },
    });

    return NextResponse.json(certificates);
  } catch (error) {
    console.error("Error fetching certificates:", error);
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
    const data = certificateSchema.parse(body);

    const maxOrder = await prisma.certificate.findFirst({
      orderBy: { order: "desc" },
      select: { order: true },
    });

    const certificate = await prisma.certificate.create({
      data: {
        ...data,
        order: (maxOrder?.order ?? -1) + 1,
      },
    });

    return NextResponse.json(certificate);
  } catch (error) {
    console.error("Error creating certificate:", error);
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
    const validatedData = certificateSchema.partial().parse(data);

    const certificate = await prisma.certificate.update({
      where: { id },
      data: validatedData,
    });

    return NextResponse.json(certificate);
  } catch (error) {
    console.error("Error updating certificate:", error);
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

    await prisma.certificate.delete({ where: { id } });
    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Error deleting certificate:", error);
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}
