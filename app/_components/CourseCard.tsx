import { Prisma } from "@/app/generated/prisma/client";
import { StarRating } from "./StarRating";
import Link from "next/link";
interface Props {
  course: Prisma.CourseGetPayload<{}>
}


function TableauIcon() {
  return (
    <svg viewBox="0 0 100 100" className="w-full h-full">
      <text x="50" y="20" textAnchor="middle" fontSize="10" fill="#333" stroke="none" fontFamily="sans-serif">Tableau Desktop</text>
      <text x="50" y="32" textAnchor="middle" fontSize="10" fill="#333" stroke="none" fontFamily="sans-serif">Intermediate Training</text>
      <g transform="translate(25, 35) scale(0.5)">
        {/* Abstract Tableau-like plus signs */}
        <path d="M40 0 V20 M50 0 V20 M60 0 V20" stroke="#E8751A" strokeWidth="5" strokeLinecap="round" />
        <path d="M30 30 H70 M50 10 V90" stroke="#2C5F9E" strokeWidth="5" strokeLinecap="round" />
        <circle cx="20" cy="50" r="5" fill="#E8751A" />
        <circle cx="80" cy="50" r="5" fill="#898989" />
        <path d="M40 60 H60 M50 40 V80" stroke="#2C5F9E" strokeWidth="4" />
      </g>
    </svg>
  );
}

function PythonIcon() {
  return (
    <svg viewBox="0 0 100 100" className="w-full h-full">
      {/* Python Logo approximation */}
      <g transform="translate(30, 30) scale(0.4)">
        <path d="M50 0 C25 0 25 25 25 25 L50 25 L50 35 L15 35 C0 35 0 65 15 65 L35 65 L35 50 C35 25 65 25 65 50 L65 65 C90 65 90 40 90 40 L65 40 L65 25 C65 0 50 0 50 0 Z" fill="#3776AB" />
        <path d="M50 100 C75 100 75 75 75 75 L50 75 L50 65 L85 65 C100 65 100 35 85 35 L65 35 L65 50 C65 75 35 75 35 50 L35 35 C10 35 10 60 10 60 L35 60 L35 75 C35 100 50 100 50 100 Z" fill="#FFD43B" />
      </g>
      <text x="50" y="85" textAnchor="middle" fontSize="8" fontWeight="bold" fill="#333" fontFamily="sans-serif">Python 3 Essential Training</text>
      <rect x="45" y="45" width="10" height="10" fill="#333" rx="2" />
      <text x="50" y="53" textAnchor="middle" fontSize="8" fill="white" fontWeight="bold">3</text>
    </svg>
  );
}

function AIIcon() {
  return (
    <svg viewBox="0 0 100 100" className="w-full h-full">
      <text x="50" y="15" textAnchor="middle" fontSize="7" fill="#333" fontFamily="sans-serif">ChatGPT and Generative AI (GenAI)</text>
      <text x="50" y="24" textAnchor="middle" fontSize="7" fill="#333" fontFamily="sans-serif">for Creating Engaging Content</text>

      <g transform="translate(10, 35)">
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
        <text x="70" y="25" fontSize="14" fontWeight="bold" fill="#555">AI</text>
        <text x="60" y="40" fontSize="10" fontWeight="bold" fill="#4285F4">Gemini</text>
      </g>
    </svg>
  );
}

export const CourseCard = ({ course }: Props) => {
  return (
    <div className="flex flex-col items-center p-2 w-full max-w-[300px] mx-auto group transition-transform duration-300 hover:-translate-y-1">
      {/* Thumbnail Area - Mimicking the specific graphics from the screenshot */}
      <div className="w-full h-32 mb-4 flex items-center justify-center bg-white overflow-hidden">
        <div className="w-full h-full p-2">
          <Link href={`/course-detail/${course.id}`}>
            <PythonIcon /></Link>

        </div>
      </div>

      {/* Content Area */}
      <div className="text-center w-full px-2">
        <h3 className="text-gray-800 text-lg font-normal leading-tight min-h-[3.5rem] mb-2 font-sans">
          <Link href={`/course-detail/${course.id}`}>
            {course.name}
          </Link>

        </h3>

        <StarRating rating={5} count={6} />

        <div className="text-[#2A6496] text-base font-medium mb-4">
          {course.fee}
        </div>

        <button className="bg-[#0E4C82] hover:bg-[#0a3861] text-white text-xs font-medium py-2 px-6 rounded-[2px] transition-colors">
          <Link href={`/course-detail/${course.id}`}>
            See Details
          </Link>
        </button>
      </div>
    </div>
  );
};