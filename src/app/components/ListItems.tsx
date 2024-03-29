import Link from "next/link";
import { HiPencilAlt } from "react-icons/hi";
import DeleteBtn from "./DeleteBtn";
import { Product } from "@prisma/client";

async function getProducts() {
  try {
    const res = await fetch("http://localhost:3000/api/products", {
      cache: "no-store",
    });

    if (!res.ok) {
      throw new Error("Failed to fetch products");
    }
    return res.json();
  } catch (error) {
    console.error("error loading products", error);
  }
}

export default async function ListItems() {
  const { products } = await getProducts();
  return (
    <>
      {products.map((product: Product) => (
        <tr
          key={product.id}
          className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
        >
          <th
            scope="row"
            className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
          >
            {product.name}
          </th>
          <td className="px-6 py-4">{product.color}</td>
          <td className="px-6 py-4">{product.category}</td>
          <td className="px-6 py-4">${product.price}</td>
          <td className="px-6 py-4 flex justify-start">
            <Link href={`/editProduct/${product.id}`}>
              <HiPencilAlt size={24} />
            </Link>
            <DeleteBtn id={product.id} />
          </td>
        </tr>
      ))}
    </>
  );
}
