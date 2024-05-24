export async function fetchProduct(slug: string) {
  const response = await fetch(`/api/product/${slug}`);
  if (!response.ok) {
    throw new Error("Failed to fetch product");
  }
  return response.json();
}
