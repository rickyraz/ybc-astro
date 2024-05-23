/**
 *
 * Needs :
 *
 * 1. fetch Random Hero API
 * 2. fetch product has attribute : best seller
 * 3. fetch category + fetch per params
 * 4. fetch Articels
 *
 */

// : Promise<types.Todo[]>
export async function fetchCategory() {
  const response = await fetch("/api/category");
  return response.json();
}
