"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function AddProduct() {
  const [name, setName] = useState("");
  const [color, setColor] = useState("");
  const [category, setCategory] = useState("");
  const [price, setPrice] = useState(0);
  const router = useRouter();

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    if (!name) {
      alert("Name are required");
      return;
    }

    try {
      const res = await fetch("http://localhost:3000/api/products", {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({ name, color, category, price }),
      });
      if (!res.ok) {
        throw new Error("Failed to create the product");
      }
      router.refresh();
      router.push("/");
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <>
      <form className="flex flex-col gap-3 text-black" onSubmit={handleSubmit}>
        <input
          onChange={(e) => setName(e.target.value)}
          value={name}
          className="border border-slate-500 px-8 py-2"
          type="text"
          placeholder="Product Name"
        />
        <input
          onChange={(e) => setColor(e.target.value)}
          value={color}
          className="border border-slate-500 px-8 py-2"
          type="text"
          placeholder="Product Color"
        />
        <input
          onChange={(e) => setCategory(e.target.value)}
          value={category}
          className="border border-slate-500 px-8 py-2"
          type="text"
          placeholder="Product Category"
        />
        <input
          onChange={(e) => setPrice(parseFloat(e.target.value))}
          value={price}
          className="border border-slate-500 px-8 py-2"
          type="number"
          placeholder="Product Price"
        />
        <button
          type="submit"
          className="bg-green-600 font-bold text-white py-3 px-6 w-fit"
        >
          Add Product
        </button>
      </form>
    </>
  );
}
