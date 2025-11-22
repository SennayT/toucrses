import React from "react";

interface CategoryHeaderProps {
  title: string;
  description: string;
}

export const CategoryHeader = ({ title, description }: CategoryHeaderProps) => {
  return (
    <div className="w-full mb-12">
      <h1 className="text-4xl font-bold text-gray-900 mb-6 font-sans">
        {title}
      </h1>

      <div className="relative w-full h-[300px] mb-6 rounded-lg overflow-hidden bg-gradient-to-r from-blue-900 to-cyan-600">
        {/* Placeholder for banner image since generation failed */}
        <div className="absolute inset-0 flex items-center justify-center text-white/20 text-6xl font-bold">
          {title}
        </div>
        <div className="absolute bottom-4 right-4 bg-black/70 text-white px-3 py-1 text-sm rounded">
          {title}
        </div>
      </div>

      <div className="prose max-w-none text-gray-600 leading-relaxed">
        <p>{description}</p>
      </div>
    </div>
  );
};
