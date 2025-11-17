import prisma from "@/lib/prisma";

import { StarRating } from "./StarRating";
import { Prisma } from "../generated/prisma/client";
import { SanitizedText } from "./SanitizedText";
import Link from "next/link";

interface Course {
  id: number;
  title: string;
  description: string;
  imageUrl: string;
  rating: number;
  reviewCount: number;
  price: string;
  isHrdCorp: boolean;
}
export function CourseCard({
  course,
}: {
  course: Prisma.CourseGetPayload<{ include: null }>;
}) {
  return (
    <div className="flex flex-col bg-white rounded-lg shadow-lg overflow-hidden transition-transform duration-300 hover:scale-105 hover:shadow-xl">
      <div className="flex flex-col flex-1 p-6">
        <div className="flex-1">
          <h3 className="text-xl font-semibold text-gray-900 hover:text-blue-600">
            {course.courseCode}
          </h3>

          <Link className="block mt-2" href={`course-detail/${course.id}`}>
            <h3 className="text-xl font-semibold text-gray-900 hover:text-blue-600">
              {course.name}
            </h3>
          </Link>

          <div className="mt-3 text-base text-gray-500">
            <SanitizedText text={course.description} />
          </div>
        </div>
        <div className="mt-6">
          <StarRating rating={5} reviewCount={5} />
          <div className="mt-4 flex justify-between items-center">
            <span className="text-2xl font-bold text-gray-900">
              {course.fee}
            </span>
            <a
              href="#"
              className="px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-md shadow-sm hover:bg-blue-700"
            >
              See Details
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
