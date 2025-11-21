"use client";

import { useState } from "react";
import { Prisma } from "@/app/generated/prisma/client";
import { getCategoryContents } from "@/app/actions/get-category-contents";
import { Loader2, Minus, Plus } from "lucide-react";
import Link from "next/link";

type CategoryWithCount = Prisma.CourseCategoryGetPayload<{
  include: {
    _count: {
      select: {
        children: true;
        courses: true;
      };
    };
  };
}> & { isHeader?: boolean };

type Course = Prisma.CourseGetPayload<{}>;

interface Props {
  categories: CategoryWithCount[];
}

export function CategoryMenu({ categories }: Props) {
  return (
    <div>
      <div className="bg-white border border-gray-200 rounded shadow-sm">
        {categories.map((cat) => (
          <CategoryItem key={cat.id} category={cat} level={0} />
        ))}
      </div>
    </div>
  );
}

function CategoryItem({
  category,
  level,
}: {
  category: CategoryWithCount;
  level: number;
}) {
  const [isOpen, setIsOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [children, setChildren] = useState<CategoryWithCount[]>([]);
  const [courses, setCourses] = useState<Course[]>([]);
  const [hasLoaded, setHasLoaded] = useState(false);

  const hasChildren = category._count.children > 0;
  const hasCourses = category._count.courses > 0;
  const isExpandable = hasChildren || hasCourses;

  const handleToggle = async (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();

    if (!isExpandable) return;

    if (!isOpen && !hasLoaded) {
      setIsLoading(true);
      try {
        const data = await getCategoryContents(category.id);
        setChildren(data.subCategories);
        setCourses(data.courses);
        setHasLoaded(true);
      } catch (error) {
        console.error("Failed to load category contents", error);
      } finally {
        setIsLoading(false);
      }
    }
    setIsOpen(!isOpen);
  };

  return (
    <div className="border-b border-gray-100 last:border-0">
      <div
        className={`flex justify-between items-center px-4 py-2.5 text-sm text-gray-600 hover:bg-gray-50 hover:text-blue-700 cursor-pointer transition-colors ${
          level > 0 ? "pl-" + (4 + level * 4) : ""
        }`}
        style={{ paddingLeft: `${1 + level * 1}rem` }}
        onClick={handleToggle}
      >
        <span className={isOpen ? "font-medium text-blue-700" : ""}>
          {category.name}
          {category.isHeader && (
            <span className="ml-2 text-xs font-bold text-white bg-red-600 px-1.5 py-0.5 rounded">
              Hot!
            </span>
          )}
        </span>
        {isExpandable && (
          <button
            onClick={handleToggle}
            className="p-1 hover:bg-gray-200 rounded text-gray-400 hover:text-gray-600"
          >
            {isLoading ? (
              <Loader2 className="w-4 h-4 animate-spin" />
            ) : isOpen ? (
              <Minus className="w-4 h-4" />
            ) : (
              <Plus className="w-4 h-4" />
            )}
          </button>
        )}
      </div>

      {isOpen && (
        <div className="bg-gray-50">
          {children.map((child) => (
            <CategoryItem key={child.id} category={child} level={level + 1} />
          ))}
          {courses.map((course) => (
            <Link
              key={course.id}
              href={`/course-detail/${course.id}`}
              className="block px-4 py-2 text-sm text-gray-500 hover:text-blue-700 hover:bg-gray-100 pl-8"
              style={{ paddingLeft: `${2 + level * 1}rem` }}
            >
              {course.name}
            </Link>
          ))}
          {children.length === 0 && courses.length === 0 && !isLoading && (
            <div
              className="px-4 py-2 text-sm text-gray-400 italic"
              style={{ paddingLeft: `${2 + level * 1}rem` }}
            >
              No items found
            </div>
          )}
        </div>
      )}
    </div>
  );
}
