"use client";
import { authClient } from "@/lib/auth-client";
import Button from "@mui/material/Button";
import Link from "next/link";
import { useState } from "react";
const icons = {
  Menu: (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="lucide lucide-menu"
    >
      <line x1="4" x2="20" y1="12" y2="12" />
      <line x1="4" x2="20" y1="6" y2="6" />
      <line x1="4" x2="20" y1="18" y2="18" />
    </svg>
  ),
  X: (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="lucide lucide-x"
    >
      <path d="M18 6 6 18" />
      <path d="m6 6 12 12" />
    </svg>
  ),
  Search: (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="lucide lucide-search"
    >
      <circle cx="11" cy="11" r="8" />
      <path d="m21 21-4.3-4.3" />
    </svg>
  ),
  ChevronDown: (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="lucide lucide-chevron-down"
    >
      <path d="m6 9 6 6 6-6" />
    </svg>
  ),
  Star: (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="lucide lucide-star"
    >
      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
    </svg>
  ),
  Code: (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="lucide lucide-code"
    >
      <polyline points="16 18 22 12 16 6" />
      <polyline points="8 6 2 12 8 18" />
    </svg>
  ),
  Palette: (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="lucide lucide-palette"
    >
      <circle cx="13.5" cy="6.5" r="2.5" />
      <path d="M17.5 19.5 9 11l-4.5 4.5" />
      <path d="m10.5 10.5 2-2" />
      <path d="M12 21.5V19" />
      <path d="M4 21.5V19" />
      <path d="M20 16.5c-3 0-5.5 2.5-5.5 5.5v0" />
      <path d="M7.5 16.5c-3 0-5.5 2.5-5.5 5.5v0" />
      <path d="M12 13.5c-3 0-5.5 2.5-5.5 5.5v0" />
    </svg>
  ),
  Bot: (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="lucide lucide-bot"
    >
      <path d="M12 8V4H8" />
      <rect width="16" height="12" x="4" y="8" rx="2" />
      <path d="M2 14h2" />
      <path d="M20 14h2" />
      <path d="M15 13v2" />
      <path d="M9 13v2" />
    </svg>
  ),
  BarChart3: (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="lucide lucide-bar-chart-3"
    >
      <path d="M3 3v18h18" />
      <path d="M7 12h4v8" />
      <path d="M12 8h4v12" />
      <path d="M17 4h4v16" />
    </svg>
  ),
  Briefcase: (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="lucide lucide-briefcase"
    >
      <rect width="20" height="14" x="2" y="7" rx="2" ry="2" />
      <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
    </svg>
  ),
  DollarSign: (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="lucide lucide-dollar-sign"
    >
      <line x1="12" x2="12" y1="2" y2="22" />
      <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
    </svg>
  ),
  Facebook: (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="lucide lucide-facebook"
    >
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </svg>
  ),
  Linkedin: (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="lucide lucide-linkedin"
    >
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect width="4" height="12" x="2" y="9" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  ),
  Twitter: (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="lucide lucide-twitter"
    >
      <path d="M22 4s-.7 2.1-2 3.4c1.6 1.7 2.9 4.2 3.5 6.9 1 4.6-2.2 8.4-6.7 9.2-3.8.7-7.2-1.3-9.5-4.2-2.3-3-3-6.8-2.3-10.3 1.1-4.8 5.1-8.5 10-9.2 1.5-.2 3.1-.1 4.6.4 1.4.5 2.7 1.3 3.8 2.3z" />
    </svg>
  ),
  Youtube: (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="lucide lucide-youtube"
    >
      <path d="M2.5 17a24.12 24.12 0 0 1 0-10C2.5 6 7.5 4 12 4s9.5 2 9.5 3a24.12 24.12 0 0 1 0 10c0 1-5 3-9.5 3s-9.5-2-9.5-3z" />
      <path d="M10 10.5v3l4-1.5-4-1.5z" />
    </svg>
  ),
};

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { data: session } = authClient.useSession();

  const navLinks = [
    { name: "Adult Courses", href: "#" },
    { name: "Certification Exam Prep", href: "#" },
    { name: "Software Training", href: "#" },
    { name: "E-Learning", href: "#" },
    { name: "Specialization", href: "#" },
  ];

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      {/* Top bar for contact info, hidden on small screens */}
      <div className="hidden lg:block bg-gray-100 border-b border-gray-200">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-8 text-sm text-gray-600">
            <div className="flex gap-4">
              <span>Call +60 7931 9658</span>
              <span>Email: sales@tertiarycourses.com.my</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main navigation */}
      <nav className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex-shrink-0 flex items-center">
            <span className="text-3xl font-bold text-blue-600">TCOURSES</span>
          </Link>

          {/* Desktop Nav Links */}
          <div className="hidden lg:flex lg:items-center lg:gap-x-6">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm font-medium text-gray-700 hover:text-blue-600"
              >
                {link.name}
              </a>
            ))}
            <a
              href="#"
              className="text-sm font-medium text-gray-700 hover:text-blue-600"
            >
              Contact Us
            </a>
          </div>

          {/* Search and Auth (Desktop) */}
          {!session && (
            <div className="hidden lg:flex items-center gap-4">
              <button
                aria-label="Search"
                className="text-gray-600 hover:text-blue-600"
              >
                {icons.Search}
              </button>
              <Link
                href="/auth/login"
                className="text-sm font-medium text-gray-700 hover:text-blue-600"
              >
                Log In
              </Link>
              <a
                href="#"
                className="ml-2 px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-md shadow-sm hover:bg-blue-700"
              >
                Sign Up
              </a>
            </div>
          )}
          {session && (
            <div className="hidden lg:flex items-center gap-4">
              <h3>Hi {session?.user?.name}</h3>
              <Link href="/dashboard">Dashboard</Link>
              <Button onClick={() => authClient.signOut()}>Logout</Button>
            </div>
          )}

          {/* Mobile Menu Button */}
          <div className="lg:hidden flex items-center">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-600 hover:text-gray-900"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? icons.X : icons.Menu}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="lg:hidden absolute top-16 left-0 w-full bg-white shadow-lg z-40">
          <div className="flex flex-col p-4 gap-y-4">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="block px-3 py-2 text-base font-medium text-gray-700 rounded-md hover:bg-gray-50 hover:text-blue-600"
              >
                {link.name}
              </a>
            ))}
            <a
              href="#"
              className="block px-3 py-2 text-base font-medium text-gray-700 rounded-md hover:bg-gray-50 hover:text-blue-600"
            >
              Contact Us
            </a>
            {!session && (
              <div className="border-t border-gray-200 pt-4 flex flex-col gap-y-4">
                <a
                  href="#"
                  className="block px-3 py-2 text-base font-medium text-gray-700 rounded-md hover:bg-gray-50 hover:text-blue-600"
                >
                  Log In
                </a>
                <a
                  href="#"
                  className="block w-full px-4 py-2 text-base font-medium text-center text-white bg-blue-600 rounded-md shadow-sm hover:bg-blue-700"
                >
                  Sign Up
                </a>
              </div>
            )}
          </div>
        </div>
      )}
    </header>
  );
}
