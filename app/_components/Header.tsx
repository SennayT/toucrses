import { auth } from "@/lib/auth";
import { Button } from "@mui/material";
import { ChevronDown, Search, ShoppingCart } from "lucide-react";
import { headers } from "next/headers";
import Link from "next/link";
import { LogoutButton } from "./LogoutButton";

export const Header = async () => {
  const session = await auth.api.getSession({
    headers: await headers()
  })
  const signout = () => { }

  return <div className="bg-white py-4 shadow-sm relative z-20">
    <div className="container mx-auto px-4 flex flex-wrap md:flex-nowrap items-center justify-between gap-4">
      {/* Logo */}
      <div className="flex-shrink-0">
        <div className="flex items-center gap-1">
          {/* Mock Logo Recreation */}
          <div className="text-4xl font-black text-blue-900 tracking-tighter flex items-center">
            <span className="bg-blue-900 text-white px-1 mr-1 rounded-sm">T</span>
            COURSES
          </div>
        </div>
      </div>

      {/* Search Bar */}
      <div className="flex-grow max-w-2xl mx-auto w-full order-3 md:order-2">
        <div className="relative">
          <input
            type="text"
            placeholder="Search your course here...."
            className="w-full border border-gray-300 rounded pl-4 pr-10 py-2 text-sm focus:outline-none focus:border-blue-500"
          />
          <Search className="absolute right-3 top-2.5 text-gray-400" size={18} />
        </div>
      </div>

      {/* User Actions */}
      <div className="flex items-center space-x-4 text-xs text-gray-600 font-medium order-2 md:order-3 ml-auto">
        {session && <a href="#" className="hover:text-blue-800">My Account</a>}
        {session && <LogoutButton />}
        <span className="text-gray-300">|</span>
        {!session && <Link href="/auth/login" className="hover:text-blue-800">Log In</Link>}
        {!session && <Link href="/auth/signup" className="hover:text-blue-800">Sign Up</Link>}
        <a href="#" className="flex items-center gap-1 hover:text-blue-800 font-bold text-gray-800">
          <ShoppingCart size={16} /> Cart <ChevronDown size={12} />
        </a>
      </div>
    </div>
  </div>
}