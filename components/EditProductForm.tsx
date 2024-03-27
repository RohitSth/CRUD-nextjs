export default function EditProductForm() {
  return (
    <>
      <form className="flex flex-col gap-3" action="">
        <input
          className="border border-slate-500 px-8 py-2"
          type="text"
          placeholder="Product Name"
        />
        <input
          className="border border-slate-500 px-8 py-2"
          type="text"
          placeholder="Product Color"
        />
        <input
          className="border border-slate-500 px-8 py-2"
          type="text"
          placeholder="Product Category"
        />
        <input
          className="border border-slate-500 px-8 py-2"
          type="text"
          placeholder="Product Price"
        />
        <button className="bg-green-600 font-bold text-white py-3 px-6 w-fit">
          Update Product
        </button>
      </form>
    </>
  );
}
