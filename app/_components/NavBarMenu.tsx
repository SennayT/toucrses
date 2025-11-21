"use client";

import { useState } from "react";
import Link from "next/link";
import { ChevronDown, ChevronRight } from "lucide-react";
import { Prisma } from "@/app/generated/prisma/client";

type CategoryWithChildren = Prisma.CourseCategoryGetPayload<{
  include: {
    children: {
      include: {
        children: {
          include: {
            children: true;
          };
        };
      };
    };
  };
}>;

interface Props {
  categories: CategoryWithChildren[];
}

export function NavBarMenu({ categories }: Props) {
  return (
    <>
      {categories.map((category) => (
        <MenuItem key={category.id} category={category} />
      ))}
    </>
  );
}

function MenuItem({ category }: { category: CategoryWithChildren }) {
  const [isHovered, setIsHovered] = useState(false);
  const hasChildren = category.children && category.children.length > 0;

  return (
    <li
      className="relative py-3 px-3 cursor-pointer hover:text-blue-700 flex items-center gap-1 whitespace-nowrap group"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <span className="flex items-center gap-1 uppercase text-[11px] font-bold">
        {category.name}
        {hasChildren && <ChevronDown size={10} className="text-gray-400" />}
      </span>

      {hasChildren && (
        <div
          className={`absolute top-full left-0 w-64 bg-white shadow-xl border-t-4 border-blue-900 z-50 transition-all duration-200 ease-in-out ${
            isHovered
              ? "opacity-100 visible translate-y-0"
              : "opacity-0 invisible -translate-y-2"
          }`}
        >
          <ul className="py-2">
            {category.children.map((child) => (
              <SubMenuItem key={child.id} category={child} />
            ))}
          </ul>
        </div>
      )}
    </li>
  );
}

function SubMenuItem({
  category,
}: {
  category: CategoryWithChildren["children"][number];
}) {
  const [isHovered, setIsHovered] = useState(false);
  const hasChildren = category.children && category.children.length > 0;

  return (
    <li
      className="relative px-4 py-2 hover:bg-gray-50 flex items-center justify-between group/submenu"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Link
        href={`/category/${category.id}`}
        className="text-gray-600 hover:text-blue-700 text-sm w-full flex justify-between items-center font-medium"
      >
        {category.name}
        {hasChildren && <ChevronRight size={14} className="text-gray-400" />}
      </Link>

      {hasChildren && (
        <div
          className={`absolute top-0 left-full w-[600px] bg-white shadow-xl border-l border-gray-100 z-50 transition-all duration-200 ease-in-out p-6 ${
            isHovered
              ? "opacity-100 visible translate-x-0"
              : "opacity-0 invisible -translate-x-2"
          }`}
          style={{ marginLeft: "-1px" }}
        >
          <div className="grid grid-cols-2 gap-x-8 gap-y-6">
            {category.children.map((grandChild) => (
              <div key={grandChild.id} className="break-inside-avoid">
                <Link
                  href={`/category/${grandChild.id}`}
                  className="font-bold text-gray-800 mb-2 uppercase text-xs tracking-wider block hover:text-blue-700"
                >
                  {grandChild.name}
                  {/* Placeholder for badges if needed */}
                </Link>
                {grandChild.children && grandChild.children.length > 0 && (
                  <ul className="space-y-1.5">
                    {grandChild.children.map((greatGrandChild) => (
                      <li key={greatGrandChild.id}>
                        <Link
                          href={`/category/${greatGrandChild.id}`}
                          className="text-gray-600 hover:text-blue-700 text-sm flex items-center gap-2"
                        >
                          <span className="text-gray-400 text-xs">›</span>
                          {greatGrandChild.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </div>
        </div>
      )}
    </li>
  );
}
