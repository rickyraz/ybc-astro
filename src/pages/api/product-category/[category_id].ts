import { prisma } from "../../../utils/prisma";
import type { APIRoute } from "astro";

export const GET: APIRoute = async ({ params, request }) => {
  const categoryId = parseInt(params.category_id); // Assuming `params.category_id` is the category ID

  const productsByCategory = await prisma.product.findMany({
    where: { categoryId: categoryId },
    include: {
      variations: {
        select: {
          id: true,
          price: true,
        },
        orderBy: { price: "asc" },
      },
      images: true,
    },
  });

  return new Response(JSON.stringify({ data: productsByCategory }), {
    status: 200,
    headers: {
      "Content-Type": "application/json",
    },
  });
};
