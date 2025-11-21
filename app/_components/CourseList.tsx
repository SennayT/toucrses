import React from 'react';
import { Star, ChevronLeft, ChevronRight } from 'lucide-react';
import { CourseCard } from './CourseCard';
import prisma from '@/lib/prisma';



// --- SVG Icons (Recreating the visuals) ---

function CommunicationIcon() {
  return (
    <svg viewBox="0 0 100 100" className="w-full h-full" fill="none" stroke="currentColor" strokeWidth="5">
      <text x="50" y="20" textAnchor="middle" fontSize="10" fill="#333" stroke="none" fontFamily="sans-serif">Effective Communication Training</text>
      {/* Chat bubbles */}
      <path d="M30 40 Q20 40 20 50 V70 Q20 80 30 80 H40 L50 90 L60 80 H70 Q80 80 80 70 V50 Q80 40 70 40 Z" stroke="#1f2937" fill="white" strokeWidth="3" />
      <line x1="35" y1="55" x2="65" y2="55" stroke="#1f2937" strokeWidth="3" />
      <line x1="35" y1="65" x2="65" y2="65" stroke="#1f2937" strokeWidth="3" />
      {/* Second bubble behind */}
      <path d="M50 30 Q40 30 40 35 V40 H70 V60 H80 Q90 60 90 50 V30 Q90 20 80 20 H60 L50 30 Z" stroke="#1f2937" fill="none" strokeWidth="3" opacity="0.5" />
    </svg>
  );
}

// --- Components ---


const Pagination = () => (
  <div className="flex justify-center gap-3 mt-12">
    <div className="w-3 h-3 rounded-full bg-gray-200 cursor-pointer hover:bg-gray-300"></div>
    <div className="w-3 h-3 rounded-full bg-gray-200 cursor-pointer hover:bg-gray-300"></div>
  </div>
);

export async function CourseSection() {
  const courses = await prisma.course.findMany({
    take: 10
  })

  return <div className=" w-full flex justify-center ">
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 divide-y sm:divide-y-0">
      {courses.map((course) => (
        <CourseCard key={course.id} course={course} />
      ))}
    </div>

    <Pagination />
  </div>


}