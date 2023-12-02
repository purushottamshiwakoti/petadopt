import prismadb from "@/lib/prismadb";
import { NextRequest, NextResponse } from "next/server";

export async function PATCH(req: NextRequest, { params }: { params: any }) {
  try {
    const { status, message } = await req.json();
    const updateStatus = await prismadb.requestPet.update({
      where: {
        id: params.id,
      },
      data: {
        status,
        message,
      },
    });
    return NextResponse.json(
      { message: "Successfully Performed actions", updateStatus },
      { status: 200 }
    );
  } catch (error) {
    console.log(error);
    return NextResponse.json({ message: error }, { status: 500 });
  }
}
