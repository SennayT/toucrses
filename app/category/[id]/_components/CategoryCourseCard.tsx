import { Prisma } from "@/app/generated/prisma/client";
import { StarRating } from "@/app/_components/StarRating";
import Link from "next/link";
import { SanitizedText } from "@/app/_components/SanitizedText";

interface Props {
  course: Prisma.CourseGetPayload<{}>;
}

function AIIcon() {
  return (
    <svg viewBox="0 0 100 100" className="w-full h-full">
      <g transform="translate(10, 10) scale(0.8)">
        {/* OpenAI Logo Approx */}
        <circle cx="15" cy="20" r="12" fill="#74AA9C" />
        <path d="M15 12 L20 20 L15 28 L10 20 Z" fill="white" />

        {/* Colorful Abstract shape */}
        <rect x="35" y="10" width="20" height="20" rx="5" fill="url(#grad1)" />
        <defs>
          <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#FFD700" />
            <stop offset="100%" stopColor="#FF007F" />
          </linearGradient>
        </defs>

        {/* Gemini/AI text */}
        <text x="70" y="25" fontSize="14" fontWeight="bold" fill="#555">
          Image
        </text>
        <text x="60" y="40" fontSize="10" fontWeight="bold" fill="#4285F4">
          Image
        </text>
      </g>
    </svg>
  );
}

export const CategoryCourseCard = ({ course }: Props) => {
  return (
    <div className="flex flex-col md:flex-row bg-white p-6 border-b border-gray-100 gap-6 hover:bg-gray-50 transition-colors">
      {/* Thumbnail */}
      <div className="w-full md:w-48 flex-shrink-0">
        <div className="aspect-[4/3] w-full bg-white flex items-center justify-center p-2">
          <AIIcon />
        </div>
      </div>

      {/* Content */}
      <div className="flex-grow">
        <h3 className="text-xl font-medium text-gray-900 mb-2 font-sans">
          <Link
            href={`/course-detail/${course.id}`}
            className="hover:text-blue-600 transition-colors"
          >
            {course.name}
          </Link>
        </h3>

        <div className="mb-3">
          <StarRating rating={5} count={Math.floor(Math.random() * 50) + 10} />
        </div>

        <p className="text-gray-600 text-sm leading-relaxed line-clamp-3 mb-4">
          <SanitizedText text={course?.description} />
        </p>
      </div>

      {/* Price and Action */}
      <div className="w-full md:w-48 flex-shrink-0 flex flex-col items-start md:items-end justify-start gap-4">
        <div className="text-2xl font-medium text-[#0E4C82]">
          MYR
          {course.fee.toLocaleString("en-US", {
            minimumFractionDigits: 2,
            maximumFractionDigits: 2,
          })}
        </div>

        <Link
          href={`/course-detail/${course.id}`}
          className="bg-[#0E4C82] hover:bg-[#0a3861] text-white text-sm font-medium py-2 px-8 rounded-[2px] transition-colors text-center w-full md:w-auto"
        >
          See Details
        </Link>
      </div>
    </div>
  );
};
