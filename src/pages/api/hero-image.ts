import { prisma } from "../../utils/prisma";
import type { APIRoute } from "astro";

export const GET: APIRoute = async ({ params, request }) => {
  const heroImages = await prisma.productImage.findMany({
    where: {
      variationColorId: null, // Filter untuk mendapatkan hero images
    },
    select: {
      imageUrl: true, // Hanya mengambil field imageUrl
      product: {
        select: {
          slug: true,
        },
      },
    },
  });

  return new Response(JSON.stringify({ data: heroImages }), {
    status: 200,
    headers: {
      "Content-Type": "application/json",
    },
  });
};
