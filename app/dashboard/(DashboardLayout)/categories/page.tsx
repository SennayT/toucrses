import prisma from "@/lib/prisma";
import { CategoriesTable } from "./_components/categories-list-table";

export default async function CoursePage({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}) {
  const params = await searchParams;

  let limit = 5;
  let offset = 0;
  if (params.limit) {
    limit = Number(params.limit);
  }
  if (params.offset) {
    offset = Number(params.offset);
  }
  const categories = await prisma.courseCategory.findMany({
    take: limit,
    skip: offset * limit,
    include: {
      parent: true,
    },
    orderBy: {
      name: "asc",
    },
  });
  const total = await prisma.courseCategory.count();
  return (
    <CategoriesTable
      categories={categories}
      limit={limit}
      offset={offset}
      total={total}
    />
  );
}
