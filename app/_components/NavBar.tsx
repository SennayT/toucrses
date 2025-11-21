import prisma from "@/lib/prisma";
import { Home, ChevronDown } from "lucide-react";



export const NavBar = async () => {
    const categories = await prisma.courseCategory.findMany()
    return (
        <div className="bg-gray-50 border-b border-gray-200 hidden md:block">
            <div className="container mx-auto px-4">
                <ul className="flex items-center text-[11px] font-bold text-gray-700 tracking-wide">
                    <li className="py-3 pr-4 cursor-pointer hover:text-blue-700"><Home size={16} /></li>
                    {categories.map((item, idx) => (
                        <li key={item.id} className="py-3 px-3 cursor-pointer hover:text-blue-700 flex items-center gap-1 whitespace-nowrap">
                            {item.name} <ChevronDown size={10} className="text-gray-400" />
                        </li>
                    ))}
                    <li className="py-3 px-3 ml-auto cursor-pointer hover:text-blue-700 whitespace-nowrap">CONTACT US</li>
                </ul>
            </div>
        </div>
    );
}