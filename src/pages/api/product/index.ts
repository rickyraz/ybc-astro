import { prisma } from "../../../utils/prisma";
import type { APIRoute } from "astro";

export const GET: APIRoute = async ({ params, request }) => {
  const slugProduct = params.slug;

  const spesificProductBySlug = await prisma.product.findUnique({
    where: { slug: slugProduct },
  });

  return new Response(JSON.stringify({ data: spesificProductBySlug }), {
    status: 200,
    headers: {
      "Content-Type": "application/json",
    },
  });
};
