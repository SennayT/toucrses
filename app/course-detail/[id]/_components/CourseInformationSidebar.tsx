"use client";
import React from "react";
import { Calendar, Clock, User, Info, MapPin } from "lucide-react";

export function CourseInformationSidebar() {
  return (
    <div className="bg-white p-5 border border-gray-200 shadow-sm rounded-sm">
      <h3 className="font-bold text-gray-800 border-b border-gray-100 pb-2 mb-3">
        Course Information
      </h3>
      <ul className="space-y-3 text-sm text-gray-600">
        <li className="flex gap-2">
          <Calendar size={16} className="text-blue-500 flex-shrink-0 mt-0.5" />
          <div>
            <span className="font-semibold text-gray-700">Session (days):</span>{" "}
            5
          </div>
        </li>
        <li className="flex gap-2">
          <Clock size={16} className="text-blue-500 flex-shrink-0 mt-0.5" />
          <div>
            <span className="font-semibold text-gray-700">Duration (hrs):</span>{" "}
            37.5
          </div>
        </li>
        <li className="flex gap-2">
          <User size={16} className="text-blue-500 flex-shrink-0 mt-0.5" />
          <div>
            <span className="font-semibold text-gray-700">Level:</span> Beginner
          </div>
        </li>
        <li className="flex gap-2">
          <Info size={16} className="text-blue-500 flex-shrink-0 mt-0.5" />
          <div>
            <span className="font-semibold text-gray-700">Note:</span> Students
            need to bring their own laptops.
          </div>
        </li>
        <li className="flex gap-2 border-t border-gray-100 pt-3 mt-2">
          <MapPin size={16} className="text-blue-500 flex-shrink-0 mt-0.5" />
          <div>
            <span className="font-semibold text-gray-700 block mb-1">
              Venue (KL):
            </span>
            KL Gateway, No 2, Jalan kerinchi, Gerbang kernichi Lestari, 59200
            Kuala Lumpur
          </div>
        </li>
      </ul>
    </div>
  );
}
