import EditProductForm from "../../components/EditProductForm";

async function getProductById(id: number) {
  try {
    const res = await fetch(`http://localhost:3000/api/products/${id}`, {
      cache: "no-store",
    });
    if (!res) {
      throw new Error("Failed to fetch the product");
    }
    return res.json();
  } catch (error) {
    console.error(error);
  }
}

export default async function EditProduct({
  params,
}: {
  params: { id: number };
}) {
  const { id } = params;
  const { product } = await getProductById(id);
  const { name, color, category, price } = product;
  return (
    <>
      <EditProductForm
        id={id}
        name={name}
        color={color}
        category={category}
        price={price}
      />
    </>
  );
}
