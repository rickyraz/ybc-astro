export async function fetchProductByCategory(category_id: string) {
  const response = await fetch(`/api/product-category/${category_id}`);
  if (!response.ok) {
    throw new Error("Failed to fetch product");
  }
  return response.json();
}
