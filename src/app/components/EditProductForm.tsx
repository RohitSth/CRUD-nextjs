"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function EditProductForm({
  id,
  name,
  color,
  category,
  price,
}: {
  id: any;
  name: any;
  color: any;
  category: any;
  price: any;
}) {
  const [newName, setNewName] = useState(name);
  const [newColor, setNewColor] = useState(color);
  const [newCategory, setNewCategory] = useState(category);
  const [newPrice, setNewPrice] = useState(price);
  const router = useRouter();

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    try {
      const res = await fetch(`http://localhost:3000/api/products/${id}`, {
        method: "PUT",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({
          name: newName,
          color: newColor,
          category: newCategory,
          price: newPrice,
        }),
      });

      if (!res.ok) {
        throw new Error("Failed to update the product");
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
          onChange={(e) => setNewName(e.target.value)}
          value={newName}
          className="border border-slate-500 px-8 py-2"
          type="text"
          placeholder="Product Name"
        />
        <input
          onChange={(e) => setNewColor(e.target.value)}
          value={newColor}
          className="border border-slate-500 px-8 py-2"
          type="text"
          placeholder="Product Color"
        />
        <input
          onChange={(e) => setNewCategory(e.target.value)}
          value={newCategory}
          className="border border-slate-500 px-8 py-2"
          type="text"
          placeholder="Product Category"
        />
        <input
          onChange={(e) => setNewPrice(parseFloat(e.target.value))}
          value={newPrice}
          className="border border-slate-500 px-8 py-2"
          type="number"
          placeholder="Product Price"
        />
        <button
          type="submit"
          className="bg-green-600 font-bold text-white py-3 px-6 w-fit"
        >
          Update Product
        </button>
      </form>
    </>
  );
}
