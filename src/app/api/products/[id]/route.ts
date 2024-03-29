import { NextResponse } from "next/server";

import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export async function GET(
  request: Request,
  { params }: { params: { id: number } }
) {
  try {
    const id = parseInt(params.id.toString());
    const product = await prisma.product.findUnique({
      where: {
        id,
      },
    });

    if (product) {
      return NextResponse.json({
        message: "Product fetched",
        product,
      });
    } else {
      return NextResponse.json({
        message: "Product not found",
      });
    }
  } catch (error) {
    console.error(error);
    return NextResponse.json({
      message: "error",
      error,
    });
  }
}

export async function PUT(
  request: Request,
  { params }: { params: { id: number } }
) {
  try {
    const id = parseInt(params.id.toString());
    const task = await prisma.product.findUnique({
      where: {
        id,
      },
    });

    if (task) {
      const data = await request.json();
      const { name, color, category, price } = data;
      await prisma.product.update({
        where: {
          id,
        },
        data: {
          name,
          color,
          category,
          price,
        },
      });
      return NextResponse.json({
        message: "Product updated",
      });
    } else {
      return NextResponse.json({
        message: "Product not found",
      });
    }
  } catch (error) {
    console.error(error);
    return NextResponse.json({
      message: "error",
      error,
    });
  }
}

export async function DELETE(
  request: Request,
  { params }: { params: { id: number } }
) {
  const id = parseInt(params.id.toString());
  await prisma.product.delete({
    where: {
      id,
    },
  });
  return NextResponse.json({
    message: "Product Deleted",
  });
}
