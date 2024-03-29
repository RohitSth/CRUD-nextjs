"use client";

import { HiOutlineTrash } from "react-icons/hi";
import { useRouter } from "next/navigation";

const DeleteBtn = ({ id }: { id: number }) => {
  const router = useRouter();
  async function removeProduct() {
    const confirmed = confirm("are you sure you want to delete the product?");
    if (confirmed) {
      const res = await fetch(`http://localhost:3000/api/products/${id}`, {
        method: "DELETE",
      });

      if (res.ok) {
        router.refresh();
      }
    }
  }
  return (
    <>
      <button onClick={removeProduct} className="text-red-500">
        <HiOutlineTrash size={24} />
      </button>
    </>
  );
};

export default DeleteBtn;
