import { prisma } from "../../../utils/prisma";

export async function GET({ params }) {
  const allCategory = await prisma.category.findMany({
    include: {
      products: true,
    },
  });

  // return new Response(JSON.stringify({ msg: "hello world" }), {
  return new Response(JSON.stringify({ data: allCategory }), {
    status: 200,
    headers: {
      "Content-Type": "application/json",
    },
  });
}
