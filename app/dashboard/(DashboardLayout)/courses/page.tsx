import prisma from "@/lib/prisma";
import { CoursesTable } from "./_components/course-list-table";

export default async function CoursePage({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}) {
  const params = await searchParams;

  //  const courses = await
  let limit = 5;
  let offset = 0;
  if (params.limit) {
    limit = Number(params.limit);
  }
  if (params.offset) {
    offset = Number(params.offset);
  }
  const courses = await prisma.course.findMany({
    take: limit,
    skip: offset * limit,
    include: {
      category: true,
    },
    orderBy: {
      name: "asc",
    },
  });
  const total = await prisma.course.count();
  return (
    <CoursesTable
      courses={courses}
      limit={limit}
      offset={offset}
      total={total}
    />
  );
}
