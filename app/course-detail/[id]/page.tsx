import prisma from "@/lib/prisma";
import { CourseDetail } from "./_components/course-detail";
interface Props {
  params: Promise<{ id: string }>;
}

export default async function Page({ params }: Props) {
  const { id } = await params;
  const course = await prisma.course.findUnique({
    where: {
      id,
    },
    include: {
      category: true,
    },
  });
  if (!course) return <p>Couse Missing</p>;
  return <CourseDetail course={course} />;
}
