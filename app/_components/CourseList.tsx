import prisma from "@/lib/prisma";
import { CourseCard } from "./CourseCard";

export async function CourseList() {
  const list = await prisma.course.findMany({
    take: 10,
  });
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Popular Courses */}
        <h2 className="text-3xl font-extrabold text-gray-900 mb-8">
          Popular Courses
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {list.map((course) => (
            <CourseCard key={course.id} course={course} />
          ))}
        </div>

        {/* Certification Courses */}
      </div>
    </section>
  );
}
