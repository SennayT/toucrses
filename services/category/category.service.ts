import prisma from "@/lib/prisma";

export const getParentsForCategory = async (categoryId: string) => {
  const category = await prisma.courseCategory.findUnique({
    where: {
      id: categoryId,
    },
  });
  if (!category) throw new Error("Category not found");
  const categories: (typeof category)[] = [category];
  //get 5 categories
  let current = category;
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  for (const _ of Array.from({ length: 5 })) {
    if (current.parentId === null) break;
    const parent = await prisma.courseCategory.findUnique({
      where: { id: current.parentId },
    });
    if (!parent) break;
    categories.push(parent);
    current = parent;
  }

  return categories.reverse();
};
