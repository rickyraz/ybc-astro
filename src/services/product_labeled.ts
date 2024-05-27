export async function fetchProductLabeled() {
  const response = await fetch(`/api/labeled`);
  if (!response.ok) {
    throw new Error("Failed to fetch labelled Product");
  }
  return response.json();
}
