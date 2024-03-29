import { NextResponse } from "next/server";

import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export async function POST(request: Request) {
  try {
    const data = await request.json();
    const { name, color, category, price } = data;
    await prisma.product.create({
      data: {
        name,
        color,
        category,
        price,
      },
    });
    return NextResponse.json(
      {
        message: "Product Created",
      },
      {
        status: 201,
      }
    );
  } catch (error) {
    console.error("Failed to create product", error);
    return NextResponse.json({
      message: "Failed to create product",
      error,
    });
  }
}

export async function GET() {
  try {
    const products = await prisma.product.findMany();
    return NextResponse.json({
      message: "Products fetched successfully",
      products,
    });
  } catch (error) {
    console.error("Failed to fetch products", error);
    return NextResponse.json({
      message: "Failed to fetch products",
      error,
    });
  }
}
