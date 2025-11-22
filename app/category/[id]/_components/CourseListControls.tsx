"use client";

import { useRouter, useSearchParams } from "next/navigation";

interface Props {
  total: number;
  start: number;
  end: number;
}

export const CourseListControls = ({ total, start, end }: Props) => {
  const router = useRouter();
  const searchParams = useSearchParams();

  const handleSortChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const params = new URLSearchParams(searchParams.toString());
    params.set("sort", e.target.value);
    router.push(`?${params.toString()}`);
  };

  const handleLimitChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const params = new URLSearchParams(searchParams.toString());
    params.set("limit", e.target.value);
    params.set("page", "1"); // Reset to page 1
    router.push(`?${params.toString()}`);
  };

  return (
    <div className="flex flex-col md:flex-row justify-between items-center py-4 border-b border-gray-200 text-sm text-gray-600 mb-6">
      <div className="mb-2 md:mb-0">
        Items {start} to {Math.min(end, total)} of {total} total
      </div>

      <div className="flex items-center gap-6">
        <div className="flex items-center gap-2">
          <label htmlFor="sort" className="whitespace-nowrap">
            Sort By
          </label>
          <select
            id="sort"
            className="border border-gray-300 rounded px-2 py-1 text-gray-700 focus:outline-none focus:border-blue-500"
            onChange={handleSortChange}
            defaultValue={searchParams.get("sort") || "position"}
          >
            <option value="position">Position</option>
            <option value="name">Name</option>
            <option value="price">Price</option>
          </select>
          <button className="text-gray-500 hover:text-gray-700">↓</button>
        </div>

        <div className="flex items-center gap-2">
          <label htmlFor="limit" className="whitespace-nowrap">
            Show
          </label>
          <select
            id="limit"
            className="border border-gray-300 rounded px-2 py-1 text-gray-700 focus:outline-none focus:border-blue-500"
            onChange={handleLimitChange}
            defaultValue={searchParams.get("limit") || "20"}
          >
            <option value="10">10</option>
            <option value="20">20</option>
            <option value="50">50</option>
          </select>
          <span className="whitespace-nowrap">per page</span>
        </div>
      </div>
    </div>
  );
};
