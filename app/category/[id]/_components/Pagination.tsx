"use client";

import { useRouter, useSearchParams } from "next/navigation";
import Link from "next/link";

interface Props {
  currentPage: number;
  totalPages: number;
}

export const Pagination = ({ currentPage, totalPages }: Props) => {
  const searchParams = useSearchParams();

  const createPageURL = (pageNumber: number | string) => {
    const params = new URLSearchParams(searchParams.toString());
    params.set("page", pageNumber.toString());
    return `?${params.toString()}`;
  };

  if (totalPages <= 1) return null;

  return (
    <div className="flex items-center justify-center gap-2 py-4 text-sm">
      <span className="text-gray-600 font-medium mr-2">Page:</span>

      {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
        <Link
          key={page}
          href={createPageURL(page)}
          className={`px-3 py-1 rounded ${
            currentPage === page
              ? "bg-gray-200 text-gray-800 font-bold"
              : "text-gray-600 hover:bg-gray-100"
          }`}
        >
          {page}
        </Link>
      ))}

      {currentPage < totalPages && (
        <Link
          href={createPageURL(currentPage + 1)}
          className="px-3 py-1 text-gray-600 hover:bg-gray-100 rounded"
        >
          ›
        </Link>
      )}
    </div>
  );
};
