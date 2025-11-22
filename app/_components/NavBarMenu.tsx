"use client";

import { useState } from "react";
import Link from "next/link";
import { ChevronDown, ChevronRight } from "lucide-react";
import { Prisma } from "@/app/generated/prisma/client";

// Define the type for the tag include
type CategoryTagWithTag = Prisma.CategoryTagsGetPayload<{
  include: {
    tag: true;
  };
}>;

// Define the recursive type structure manually since Prisma's generated types can be tricky with deep nesting
type CategoryWithChildren = Prisma.CourseCategoryGetPayload<{
  include: {
    categoryTags: {
      include: {
        tag: true;
      };
    };
    children: {
      include: {
        categoryTags: {
          include: {
            tag: true;
          };
        };
        children: {
          include: {
            categoryTags: {
              include: {
                tag: true;
              };
            };
            children: {
              include: {
                categoryTags: {
                  include: {
                    tag: true;
                  };
                };
                children: true;
              };
            };
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

function Badge({ tags }: { tags: CategoryTagWithTag[] }) {
  if (!tags || tags.length === 0) return null;
  // Prioritize "Hot" or "New" if multiple, or just take the first one
  // Logic: Check for specific names, else default
  const tag = tags[0].tag.name;

  let bgColor = "bg-red-600"; // Default to Hot color
  if (tag.toLowerCase() === "new") {
    bgColor = "bg-blue-800";
  } else if (tag.toLowerCase() === "hot!" || tag.toLowerCase() === "hot") {
    bgColor = "bg-red-600";
  }

  return (
    <span
      className={`${bgColor} text-white text-[9px] font-bold px-1 py-0.5 rounded ml-2 uppercase leading-none`}
    >
      {tag}
    </span>
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
          className={`absolute top-full left-0 w-72 bg-white shadow-xl border-t-4 border-blue-900 z-50 transition-all duration-200 ease-in-out ${
            isHovered
              ? "opacity-100 visible translate-y-0"
              : "opacity-0 invisible -translate-y-2"
          }`}
        >
          <ul className="py-3 px-2">
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
  // No hover state needed for inline expansion, assuming always visible or just static list
  // The request says "visible as a sublist", implying they are always there or just listed.
  // Given the screenshot shows a flat-ish list under headers, I'll render them.

  const hasChildren = category.children && category.children.length > 0;

  return (
    <li className="relative px-2 py-1.5">
      <div className="flex items-center group/item">
        <ChevronRight size={12} className="text-gray-400 mr-1 flex-shrink-0" />
        <Link
          href={`/category/${category.id}`}
          className="text-gray-600 hover:text-blue-700 text-sm font-medium flex items-center"
        >
          {category.name}
          <Badge tags={category.categoryTags} />
        </Link>
      </div>

      {/* Inline Sublist */}
      {hasChildren && (
        <ul className="pl-5 mt-1 space-y-1 border-l border-gray-100 ml-1.5">
          {category.children.map((grandChild) => (
            <li key={grandChild.id} className="py-0.5">
              <Link
                href={`/category/${grandChild.id}`}
                className="text-gray-500 hover:text-blue-700 text-xs block"
              >
                {grandChild.name}
                <Badge tags={grandChild.categoryTags} />
              </Link>
            </li>
          ))}
        </ul>
      )}
    </li>
  );
}
