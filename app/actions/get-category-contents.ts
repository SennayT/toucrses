"use server";

import prisma from "@/lib/prisma";

export async function getCategoryContents(categoryId: string) {
  const [subCategories, courses] = await Promise.all([
    prisma.courseCategory.findMany({
      where: {
        parentId: categoryId,
      },
      include: {
        _count: {
          select: {
            children: true,
            courses: true,
          },
        },
      },
      orderBy: {
        name: "asc",
      },
    }),
    prisma.course.findMany({
      where: {
        categoryId: categoryId,
      },
      orderBy: {
        name: "asc",
      },
    }),
  ]);

  return {
    subCategories,
    courses,
  };
}
