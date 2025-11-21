"use client";
import React from "react";
import { Star, Share2, Printer, Mail } from "lucide-react";
import { SanitizedText } from "@/app/_components/SanitizedText";

interface CourseHeaderProps {
  courseName: string;
  courseDescription: string;
}

export function CourseHeader({
  courseName,
  courseDescription,
}: CourseHeaderProps) {
  return (
    <div className="mb-6">
      <h1 className="text-3xl font-bold text-gray-800 mb-2">{courseName}</h1>
      <div className="flex items-center gap-4 text-sm mb-4">
        <div className="flex items-center text-yellow-400">
          <Star size={16} fill="currentColor" />
          <Star size={16} fill="currentColor" />
          <Star size={16} fill="currentColor" />
          <Star size={16} fill="currentColor" />
          <Star size={16} fill="currentColor" />
          <span className="text-gray-500 ml-2 text-xs uppercase tracking-wide hover:text-blue-600 cursor-pointer">
            2 Review(s) | Add Your Review
          </span>
        </div>
        <div className="flex gap-2">
          <button className="p-1 bg-blue-600 text-white rounded-sm">
            <Share2 size={12} />
          </button>
          <button className="p-1 bg-gray-200 text-gray-600 rounded-sm">
            <Printer size={12} />
          </button>
          <button className="p-1 bg-gray-200 text-gray-600 rounded-sm">
            <Mail size={12} />
          </button>
        </div>
      </div>

      <div className="prose max-w-none text-gray-600 text-sm leading-relaxed mb-6">
        <div className="mb-4">
          <SanitizedText text={courseDescription} />
        </div>
      </div>
    </div>
  );
}
