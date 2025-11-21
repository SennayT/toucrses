import { ChevronLeft, ChevronRight } from "lucide-react";
import { CourseCard } from "./CourseCard";

export const CourseSection = ({ title, courses, type = "standard" }: { title: string, courses: any[], type?: string | undefined }) => (
  <div className="bg-white py-8 border-t border-gray-100">
    <div className="container mx-auto px-4">
      <div className="flex justify-between items-center mb-6">
        <div className="flex-1 text-center">
          <h2 className="text-2xl text-gray-700 font-medium tracking-tight inline-block relative">
            {title}
          </h2>
        </div>
        <div className="flex gap-1">
          <button className="w-8 h-8 flex items-center justify-center border border-gray-200 hover:bg-gray-100 text-gray-500"><ChevronLeft size={14} /></button>
          <button className="w-8 h-8 flex items-center justify-center border border-gray-200 hover:bg-gray-100 text-gray-500"><ChevronRight size={14} /></button>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        {courses.map(course => (
          <CourseCard key={course.id} course={course} type={type} />
        ))}
      </div>

      <div className="flex justify-center mt-8 gap-2">
        <div className="w-2 h-2 rounded-full bg-gray-300"></div>
        <div className="w-2 h-2 rounded-full bg-gray-300"></div>
      </div>
    </div>
  </div>
);