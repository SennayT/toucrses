import { Prisma } from "@/app/generated/prisma/client";
import prisma from "@/lib/prisma";
import { CourseEditor } from "./_components/course-editor";

export default async function Page({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  let course: Prisma.CourseGetPayload<{ include: null }> | null = null;
  if (id && id !== "new") {
    try {
      course = await prisma.course.findUnique({
        where: {
          id,
        },
      });
    } catch (err) {
      return <p>Course Not Found</p>;
    }
  }
  if (id && id !== "new" && !course) {
    return <p>Course Not Found</p>;
  }
  return (
    <div>
      <CourseEditor course={course} />
    </div>
  );
}
