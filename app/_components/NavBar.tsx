import prisma from "@/lib/prisma";
import { Home, ChevronDown } from "lucide-react";
import { NavBarMenu } from "./NavBarMenu";

export const NavBar = async () => {
  const categories = await prisma.courseCategory.findMany({
    where: {
      parentId: null,
      isHeader: true,
    },
    include: {
      children: {
        include: {
          children: {
            include: {
              children: true,
            },
          },
        },
      },
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
        </ul>
      </div>
    </div>
  );
};
