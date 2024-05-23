import { prisma } from "../../../utils/prisma";
import type { APIRoute } from "astro";

export const GET: APIRoute = async ({ params, request }) => {
  const allCategory = await prisma.category.findMany({
    include: {
      products: {
        include: {
          variations: true,
        },
      },
    },
  });

  return new Response(JSON.stringify({ data: allCategory }), {
    status: 200,
    headers: {
      "Content-Type": "application/json",
    },
  });
};
