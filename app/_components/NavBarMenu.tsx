"use client";

import { useState } from "react";
import Link from "next/link";
import { ChevronDown } from "lucide-react";
import { Prisma } from "@/app/generated/prisma/client";

type CategoryWithChildren = Prisma.CourseCategoryGetPayload<{
  include: {
    children: true;
  };
}>;

interface Props {
  categories: CategoryWithChildren[];
}

export function NavBarMenu({ categories }: Props) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <li
      className="relative py-3 px-3 cursor-pointer hover:text-blue-700 flex items-center gap-1 whitespace-nowrap group"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <span className="bg-blue-900 text-white px-3 py-4 -my-3 -mx-3 hover:bg-blue-800 transition-colors flex items-center gap-1">
        ADULT COURSES <ChevronDown size={10} className="text-white" />
      </span>

      {/* Mega Menu Dropdown */}
      <div
        className={`absolute top-full left-0 w-[90vw] max-w-7xl bg-white shadow-xl border-t-4 border-blue-900 z-50 transition-all duration-200 ease-in-out ${
          isHovered
            ? "opacity-100 visible translate-y-0"
            : "opacity-0 invisible -translate-y-2"
        }`}
        style={{ left: "-1rem" }} // Offset to align with the container edge if needed, or adjust based on parent
      >
        <div className="flex flex-wrap p-6 gap-y-8">
          {categories.map((category) => (
            <div
              key={category.id}
              className="w-1/4 px-4 mb-4 break-inside-avoid"
            >
              <h3 className="font-bold text-gray-800 mb-2 uppercase text-xs tracking-wider">
                {category.name}
              </h3>
              <ul className="space-y-1.5">
                {category.children.map((child) => (
                  <li key={child.id}>
                    <Link
                      href={`/category/${child.id}`} // Assuming a category page exists or will exist
                      className="text-gray-600 hover:text-blue-700 text-sm flex items-center gap-2"
                    >
                      <span className="text-gray-400 text-xs">›</span>
                      {child.name}
                      {/* Placeholder for Hot/New badges if data was available */}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </li>
  );
}
