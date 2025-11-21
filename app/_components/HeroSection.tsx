import prisma from "@/lib/prisma";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { CategoryMenu } from "./CategoryMenu";
import { HeroCarousel } from "./HeroCarousel";
// const CATEGORIES = [
//   "Infocomm Technology",
//   "Media & Design",
//   "Robotics & IoT",
//   "Digital Marketing",
//   "Business & Soft Skills",
//   "Financial Services",
//   "Logistics & Supply Chain",
//   "Semiconductor & Electronics",
//   "Healthcare & WSH",
//   "Sustainability & ESG"
// ];
export const HeroSection = async () => {
  const categories = await prisma.courseCategory.findMany({
    where: {
      parentId: null,
    },
    include: {
      _count: {
        select: {
          children: true,
          courses: true,
        },
      },
    },
    orderBy: {
      name: "asc",
    },
    take: 10,
  });
  return (
    <div className="container mx-auto px-4 py-6">
      <div className="flex flex-col md:flex-row gap-6">
        {/* Sidebar Categories */}
        <div className="w-full md:w-64 flex-shrink-0">
          <h3 className="text-lg font-bold text-gray-800 mb-3 px-1">
            Categories
          </h3>
          <CategoryMenu categories={categories} />
        </div>

        {/* Hero Carousel */}
        <HeroCarousel />
      </div>
    </div>
  );
};
