"use client";
import React from "react";
import { BookOpen, Info, Users, User, MessageSquare } from "lucide-react";

interface TabButtonProps {
  active: boolean;
  label: string;
  onClick: () => void;
  icon?: React.ComponentType<{ size?: number }>;
}

const TabButton: React.FC<TabButtonProps> = ({
  active,
  label,
  onClick,
  icon: Icon,
}) => (
  <button
    onClick={onClick}
    className={`flex items-center gap-2 px-6 py-3 font-medium text-sm transition-colors border-t-2 ${
      active
        ? "border-blue-500 bg-white text-gray-800"
        : "border-transparent bg-gray-100 text-gray-500 hover:bg-gray-200"
    }`}
  >
    {Icon && <Icon size={16} />}
    {label}
  </button>
);

interface CourseTabNavigationProps {
  activeTab: string;
  onTabChange: (tab: string) => void;
}

export function CourseTabNavigation({
  activeTab,
  onTabChange,
}: CourseTabNavigationProps) {
  return (
    <div className="flex flex-wrap border-b border-gray-300 mb-6">
      <TabButton
        active={activeTab === "details"}
        label="Course Details"
        icon={BookOpen}
        onClick={() => onTabChange("details")}
      />
      <TabButton
        active={activeTab === "info"}
        label="Course Info"
        icon={Info}
        onClick={() => onTabChange("info")}
      />
      <TabButton
        active={activeTab === "roles"}
        label="Job Roles"
        icon={Users}
        onClick={() => onTabChange("roles")}
      />
      <TabButton
        active={activeTab === "trainers"}
        label="Trainers"
        icon={User}
        onClick={() => onTabChange("trainers")}
      />
      <TabButton
        active={activeTab === "reviews"}
        label="Review"
        icon={MessageSquare}
        onClick={() => onTabChange("reviews")}
      />
    </div>
  );
}
