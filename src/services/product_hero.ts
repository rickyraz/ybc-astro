export async function fetchHeroAll() {
  const response = await fetch(`/api/hero-image`);
  if (!response.ok) {
    throw new Error("Failed to fetch heroImage");
  }
  return response.json();
}
