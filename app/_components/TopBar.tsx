import { Phone, Mail } from "lucide-react";

export const TopBar = () => (
    <div className="bg-white border-b border-gray-200 text-xs py-2 hidden md:block">
        <div className="container mx-auto px-4 flex justify-between items-center text-gray-600">
            <div className="flex items-center space-x-4">
                <span className="flex items-center gap-1"><Phone size={12} /> Call +603 7931 9658</span>
                <span className="flex items-center gap-1"><Mail size={12} /> Email: sales@tertiarycourses.com.my</span>
                <span className="text-gray-500 hidden lg:inline">HRD Corp Approved Training Provider Malaysia - Industrial 4.0 Certification Training and Education</span>
            </div>
            <div className="flex items-center gap-2">
                <span>Currency:</span>
                <select className="border-none bg-transparent font-semibold text-gray-700 focus:ring-0 cursor-pointer">
                    <option>MYR</option>
                    <option>USD</option>
                    <option>SGD</option>
                </select>
            </div>
        </div>
    </div>
);
