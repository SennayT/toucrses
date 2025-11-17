import prisma from "@/lib/prisma";
import { CourseDetailPage } from "./_components/detail-course-page";
import { getParentsForCategory } from "@/services/category/category.service";
import { CategoryNavigation } from "./_components/CategoryNavigation";
interface props {
  params: Promise<{ id: string }>;
}

const icons = {
  // Navigation
  ChevronRight: (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="lucide lucide-chevron-right"
    >
      <path d="m9 18 6-6-6-6" />
    </svg>
  ),
};
export default async function Page({ params }: props) {
  const { id } = await params;
  if (!id) return <p>not found</p>;

  const course = await prisma.course.findUnique({
    where: {
      id,
    },
  });
  if (!course) return <p>not found</p>;

  return (
    <div className="min-h-screen bg-gray-50 font-sans">
      {/* Header Placeholder for context */}
      {/* Main Content Area */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-10 lg:py-16">
        <CategoryNavigation
          categoryId={course.categoryId}
          courseName={course.name}
        />
        <CourseDetailPage courseData={course} />;
      </div>
    </div>
  );
}
