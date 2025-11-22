"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { useState, useEffect } from "react";
import { useDebounce } from "use-debounce";

export const SearchInput = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [text, setText] = useState(searchParams.get("q") || "");
  const [query] = useDebounce(text, 500);

  useEffect(() => {
    const params = new URLSearchParams(searchParams.toString());
    if (query) {
      params.set("q", query);
    } else {
      params.delete("q");
    }
    params.set("page", "1"); // Reset to page 1 on search
    router.push(`?${params.toString()}`);
  }, [query, router, searchParams.toString()]);

  return (
    <div className="mb-6">
      <input
        type="text"
        placeholder="Search courses..."
        className="w-full md:w-1/3 px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
    </div>
  );
};
