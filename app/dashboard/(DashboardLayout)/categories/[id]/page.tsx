import { Prisma } from "@/app/generated/prisma/client";
import prisma from "@/lib/prisma";
import { CategoryEditor } from "./_components/category-editor";

export default async function Page({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  let category: Prisma.CourseCategoryGetPayload<{ include: null }> | null =
    null;
  if (id && id !== "new") {
    try {
      category = await prisma.courseCategory.findUnique({
        where: {
          id,
        },
      });
    } catch (err) {
      return <p>Course Not Found</p>;
    }
  }
  if (id && id !== "new" && !category) {
    return <p>Category Not Found</p>;
  }
  return (
    <div>
      <CategoryEditor category={category} />
    </div>
  );
}
