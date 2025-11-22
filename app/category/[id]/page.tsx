import prisma from "@/lib/prisma";
import { CategoryHeader } from "./_components/CategoryHeader";
import { CategoryCourseCard } from "./_components/CategoryCourseCard";
import { CourseListControls } from "./_components/CourseListControls";
import { Pagination } from "./_components/Pagination";
import { SearchInput } from "./_components/SearchInput";
import { Prisma } from "@/app/generated/prisma/client";

interface Props {
  params: Promise<{ id: string }>;
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}

export default async function Page({ params, searchParams }: Props) {
  const { id } = await params;
  const resolvedSearchParams = await searchParams;

  const page = Number(resolvedSearchParams.page) || 1;
  const limit = Number(resolvedSearchParams.limit) || 20;
  const sort = (resolvedSearchParams.sort as string) || "position";
  const query = (resolvedSearchParams.q as string) || "";

  const category = await prisma.courseCategory.findUnique({
    where: { id },
  });

  if (!category) {
    return (
      <div className="container mx-auto px-4 py-8">Category not found</div>
    );
  }

  // Build where clause
  const where: Prisma.CourseWhereInput = {
    categoryId: id,
    OR: query
      ? [
          { name: { contains: query, mode: "insensitive" } },
          { description: { contains: query, mode: "insensitive" } },
        ]
      : undefined,
  };

  // Build orderBy
  let orderBy: Prisma.CourseOrderByWithRelationInput = {};
  if (sort === "name") {
    orderBy = { name: "asc" };
  } else if (sort === "price") {
    orderBy = { fee: "asc" };
  } else {
    // Default to something, maybe createdAt if it existed, or name
    orderBy = { name: "asc" };
  }

  const [courses, total] = await Promise.all([
    prisma.course.findMany({
      where,
      orderBy,
      skip: (page - 1) * limit,
      take: limit,
    }),
    prisma.course.count({ where }),
  ]);

  const totalPages = Math.ceil(total / limit);

  return (
    <div className="container mx-auto px-4 py-8 max-w-7xl">
      <CategoryHeader
        title={category.name}
        description={category.description}
      />

      <div className="mt-12">
        <SearchInput />

        <CourseListControls
          total={total}
          start={(page - 1) * limit + 1}
          end={page * limit}
        />

        <div className="flex flex-col">
          {courses.length > 0 ? (
            courses.map((course) => (
              <CategoryCourseCard key={course.id} course={course} />
            ))
          ) : (
            <div className="py-12 text-center text-gray-500">
              No courses found in this category.
            </div>
          )}
        </div>

        <div className="mt-8">
          <Pagination currentPage={page} totalPages={totalPages} />
        </div>
      </div>
    </div>
  );
}
