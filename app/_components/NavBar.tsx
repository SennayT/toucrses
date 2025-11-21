import prisma from "@/lib/prisma";
import { Home, ChevronDown } from "lucide-react";
import { NavBarMenu } from "./NavBarMenu";

export const NavBar = async () => {
  const categories = await prisma.courseCategory.findMany({
    where: {
      parentId: null,
    },
    include: {
      children: true,
    },
    orderBy: {
      name: "asc",
    },
    take: 10,
  });

  return (
    <div className="bg-gray-50 border-b border-gray-200 hidden md:block relative">
      <div className="container mx-auto px-4">
        <ul className="flex items-center text-[11px] font-bold text-gray-700 tracking-wide">
          <li className="py-3 pr-4 cursor-pointer hover:text-blue-700">
            <Home size={16} />
          </li>
          <NavBarMenu categories={categories} />
          <li className="py-3 px-3 cursor-pointer hover:text-blue-700 flex items-center gap-1 whitespace-nowrap">
            CERTIFICATION PREP{" "}
            <ChevronDown size={10} className="text-gray-400" />
          </li>
          <li className="py-3 px-3 cursor-pointer hover:text-blue-700 flex items-center gap-1 whitespace-nowrap">
            SOFTWARE TRAINING{" "}
            <ChevronDown size={10} className="text-gray-400" />
          </li>
          <li className="py-3 px-3 cursor-pointer hover:text-blue-700 flex items-center gap-1 whitespace-nowrap">
            E-LEARNING <ChevronDown size={10} className="text-gray-400" />
          </li>
          <li className="py-3 px-3 cursor-pointer hover:text-blue-700 whitespace-nowrap">
            BOOTCAMP
          </li>
          <li className="py-3 px-3 cursor-pointer hover:text-blue-700 flex items-center gap-1 whitespace-nowrap">
            KIDS & TOURS <ChevronDown size={10} className="text-gray-400" />
          </li>
          <li className="py-3 px-3 cursor-pointer hover:text-blue-700 flex items-center gap-1 whitespace-nowrap">
            ENQUIRIES <ChevronDown size={10} className="text-gray-400" />
          </li>
          <li className="py-3 px-3 cursor-pointer hover:text-blue-700 whitespace-nowrap">
            FREE WORKSHOPS
          </li>
          <li className="py-3 px-3 ml-auto cursor-pointer hover:text-blue-700 whitespace-nowrap">
            CONTACT US
          </li>
        </ul>
      </div>
    </div>
  );
};
