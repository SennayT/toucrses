"use client";
import React, { useState } from "react";

// Using lucide-react for icons. In a real app, you'd install this.
// For this single-file setup, I'll use simple SVG strings.
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

// --- Header Component ---
function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

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
            <div className="flex gap-4">
              <a href="#" className="hover:text-blue-600">
                My Account
              </a>
              <a href="#" className="hover:text-blue-600">
                Sign Up
              </a>
              <a href="#" className="hover:text-blue-600">
                Cart
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Main navigation */}
      <nav className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <a href="#" className="flex-shrink-0 flex items-center">
            <span className="text-3xl font-bold text-blue-600">TCOURSES</span>
          </a>

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
          <div className="hidden lg:flex items-center gap-4">
            <button
              aria-label="Search"
              className="text-gray-600 hover:text-blue-600"
            >
              {icons.Search}
            </button>
            <a
              href="#"
              className="text-sm font-medium text-gray-700 hover:text-blue-600"
            >
              Log In
            </a>
            <a
              href="#"
              className="ml-2 px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-md shadow-sm hover:bg-blue-700"
            >
              Sign Up
            </a>
          </div>

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
          </div>
        </div>
      )}
    </header>
  );
}

// --- Hero Section Component ---
function HeroSection() {
  return (
    <div className="relative bg-gray-800">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          className="w-full h-full object-cover"
          src="https://placehold.co/1600x600/334155/E2E8F0?text=Learn+In-Demand+Skills"
          alt="Man holding a certificate"
        />
        <div className="absolute inset-0 bg-black/60 mix-blend-multiply"></div>
      </div>

      {/* Content */}
      <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32 lg:py-48 text-center">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-white">
          Certify Your Skills. Advance Your Career.
        </h1>
        <p className="mt-6 max-w-3xl mx-auto text-xl text-gray-200">
          Explore thousands of hands-on courses from top industry experts. HRD
          Corp claimable.
        </p>
        <div className="mt-10 max-w-lg mx-auto">
          <form className="sm:flex">
            <label htmlFor="search-course" className="sr-only">
              Search for a course
            </label>
            <input
              type="text"
              name="search-course"
              id="search-course"
              className="block w-full px-5 py-3 text-base text-gray-900 placeholder-gray-500 border border-transparent rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
              placeholder="What do you want to learn?"
            />
            <button
              type="submit"
              className="mt-3 sm:mt-0 sm:ml-3 w-full sm:w-auto px-6 py-3 text-base font-medium text-white bg-blue-600 border border-transparent rounded-md shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
            >
              Search
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

// --- Categories Section Component ---
function CategoriesSection() {
  const categories = [
    { name: "Infocomm Technology", icon: icons.Code },
    { name: "Media & Design", icon: icons.Palette },
    { name: "Robotics & IoT", icon: icons.Bot },
    { name: "Digital Marketing", icon: icons.BarChart3 },
    { name: "Business & Soft Skills", icon: icons.Briefcase },
    { name: "Financial Services", icon: icons.DollarSign },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-extrabold text-gray-900 text-center">
          Explore by Category
        </h2>
        <div className="mt-12 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6">
          {categories.map((category) => (
            <a
              key={category.name}
              href="#"
              className="group p-6 bg-gray-50 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300 text-center"
            >
              <div className="flex justify-center items-center w-16 h-16 bg-blue-100 text-blue-600 rounded-full mx-auto group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300">
                {React.cloneElement(category.icon, {
                  className: "w-8 h-8",
                })}
              </div>
              <h3 className="mt-4 text-lg font-semibold text-gray-900 group-hover:text-blue-600 transition-colors duration-300">
                {category.name}
              </h3>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

// --- Course Card Component ---
function StarRating({ rating, reviewCount }) {
  const fullStars = Math.floor(rating);
  const halfStar = rating % 1 >= 0.5 ? 1 : 0;
  const emptyStars = 5 - fullStars - halfStar;

  const filledStar = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="currentColor"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="text-yellow-400"
    >
      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
    </svg>
  );

  const emptyStar = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="text-yellow-400"
    >
      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
    </svg>
  );

  return (
    <div className="flex items-center">
      <div className="flex">
        {[...Array(fullStars)].map((_, i) => (
          <span key={`full-${i}`}>{filledStar}</span>
        ))}
        {[...Array(emptyStars)].map((_, i) => (
          <span key={`empty-${i}`}>{emptyStar}</span>
        ))}
      </div>
      <span className="ml-2 text-sm text-gray-500">
        ({reviewCount} reviews)
      </span>
    </div>
  );
}

function CourseCard({ course }) {
  return (
    <div className="flex flex-col bg-white rounded-lg shadow-lg overflow-hidden transition-transform duration-300 hover:scale-105 hover:shadow-xl">
      <a href="#" className="block">
        <img
          className="w-full h-48 object-cover"
          src={course.imageUrl}
          alt={course.title}
        />
      </a>
      <div className="flex flex-col flex-1 p-6">
        <div className="flex-1">
          {course.isHrdCorp && (
            <span className="inline-block px-3 py-1 mb-2 text-xs font-semibold text-blue-800 bg-blue-100 rounded-full">
              HRD Corp Fundable
            </span>
          )}
          <a href="#" className="block mt-2">
            <h3 className="text-xl font-semibold text-gray-900 hover:text-blue-600">
              {course.title}
            </h3>
          </a>
          <p className="mt-3 text-base text-gray-500">{course.description}</p>
        </div>
        <div className="mt-6">
          <StarRating rating={course.rating} reviewCount={course.reviewCount} />
          <div className="mt-4 flex justify-between items-center">
            <span className="text-2xl font-bold text-gray-900">
              {course.price}
            </span>
            <a
              href="#"
              className="px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-md shadow-sm hover:bg-blue-700"
            >
              See Details
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

// --- Course List Section Component ---
function CourseList() {
  const courses = [
    {
      id: 1,
      title: "Power BI Business Analytics Training",
      description: "Master Power BI for data visualization and analysis.",
      imageUrl: "https://placehold.co/400x300/FBBF24/333?text=Power+BI",
      rating: 4.8,
      reviewCount: 159,
      price: "MYR2,000.00",
      isHrdCorp: true,
    },
    {
      id: 2,
      title: "Digital Transformation with Generative AI (GenAI)",
      description: "Leverage GenAI to drive digital transformation.",
      imageUrl: "https://placehold.co/400x300/60A5FA/FFF?text=GenAI",
      rating: 4.9,
      reviewCount: 12,
      price: "MYR2,000.00",
      isHrdCorp: true,
    },
    {
      id: 3,
      title: "Finance for Non-Finance Managers",
      description:
        "Understand key financial concepts to make better decisions.",
      imageUrl: "https://placehold.co/400x300/34D399/FFF?text=Finance",
      rating: 4.7,
      reviewCount: 78,
      price: "MYR1,000.00",
      isHrdCorp: true,
    },
    {
      id: 4,
      title: "ChatGPT and GenAI for Creating Engaging Content",
      description: "Use AI tools to create compelling content faster.",
      imageUrl: "https://placehold.co/400x300/A78BFA/FFF?text=ChatGPT",
      rating: 5.0,
      reviewCount: 9,
      price: "MYR1,000.00",
      isHrdCorp: true,
    },
  ];

  const certificationCourses = [
    {
      id: 5,
      title: "AZ-700 Azure Network Engineer Exam Prep",
      description: "Get certified as an Azure Network Engineer.",
      imageUrl: "https://placehold.co/400x300/0EA5E9/FFF?text=AZ-700",
      rating: 4.8,
      reviewCount: 45,
      price: "MYR1,800.00",
      isHrdCorp: false,
    },
    {
      id: 6,
      title: "AZ-104 Azure Administrator Associate Exam Prep",
      description: "Prepare for the AZ-104 Microsoft certification.",
      imageUrl: "https://placehold.co/400x300/0EA5E9/FFF?text=AZ-104",
      rating: 4.9,
      reviewCount: 210,
      price: "MYR1,800.00",
      isHrdCorp: false,
    },
    {
      id: 7,
      title: "MS-102 Microsoft 365 Administrator Exam Prep",
      description: "Master Microsoft 365 administration.",
      imageUrl: "https://placehold.co/400x300/0EA5E9/FFF?text=MS-102",
      rating: 4.7,
      reviewCount: 88,
      price: "MYR1,800.00",
      isHrdCorp: false,
    },
    {
      id: 8,
      title: "MB-920 Microsoft Dynamics 365 Fundamentals",
      description: "Learn the fundamentals of Dynamics 365.",
      imageUrl: "https://placehold.co/400x300/0EA5E9/FFF?text=MB-920",
      rating: 4.6,
      reviewCount: 30,
      price: "MYR1,200.00",
      isHrdCorp: false,
    },
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Popular Courses */}
        <h2 className="text-3xl font-extrabold text-gray-900 mb-8">
          Popular HRD Corp Funded Courses
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {courses.map((course) => (
            <CourseCard key={course.id} course={course} />
          ))}
        </div>

        {/* Certification Courses */}
        <h2 className="text-3xl font-extrabold text-gray-900 mt-20 mb-8">
          HRD Corp Funded Microsoft Certification Courses
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {certificationCourses.map((course) => (
            <CourseCard key={course.id} course={course} />
          ))}
        </div>
      </div>
    </section>
  );
}

// --- Partners Section Component ---
function PartnersSection() {
  const partners = [
    "Microsoft Learning Partner",
    "CompTIA Authorised Delivery Partner",
    "Linux Foundations Authorised Training Partner",
    "AWS Authorised Training Partner (Reseller)",
    "Autodesk Authorised Training Center",
    "Pearson VUE Authorised Training Partner",
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-extrabold text-gray-900 text-center">
          Our Authorised Training Partners
        </h2>
        <p className="mt-4 max-w-2xl mx-auto text-lg text-gray-500 text-center">
          We are proud to be partnered with the world's leading technology
          companies.
        </p>
        <div className="mt-10 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center">
          {partners.map((partner) => (
            <div key={partner} className="flex justify-center items-center p-4">
              <span className="text-center font-semibold text-gray-500">
                {partner}
              </span>
              {/* In a real app, you'd use logos: <img src="..." alt={partner} /> */}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// --- Footer Component ---
function Footer() {
  return (
    <footer className="bg-gray-800 text-gray-300">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8">
          {/* Contact Info */}
          <div className="col-span-2 md:col-span-4 lg:col-span-2">
            <h3 className="text-2xl font-bold text-white mb-4">TCOURSES</h3>
            <p className="mb-2">
              Management Office/Mailing Address: Level 29, Tower A, Vertical
              Business Suite, Avenue 3, Bangsar South, No.8, Jalan Kerinchi
              59200 Kuala Lumpur
            </p>
            <p className="mb-2">
              <strong>Email:</strong> sales@tertiarycourses.com.my
            </p>
            <p className="mb-2">
              <strong>Phone:</strong> +603 7931 9658
            </p>
            <p className="mb-2">
              <strong>WhatsApp:</strong> +601123244187
            </p>
          </div>

          {/* Links: Get To Know Us */}
          <div>
            <h4 className="text-sm font-semibold text-gray-100 tracking-wider uppercase mb-4">
              Get To Know Us
            </h4>
            <ul className="space-y-2">
              <li>
                <a href="#" className="hover:text-white">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Clientele
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Course Cancellation & Refund
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Disclaimer and Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  FAQ
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Contact Us
                </a>
              </li>
            </ul>
          </div>

          {/* Links: Enquiries */}
          <div>
            <h4 className="text-sm font-semibold text-gray-100 tracking-wider uppercase mb-4">
              Enquiries
            </h4>
            <ul className="space-y-2">
              <li>
                <a href="#" className="hover:text-white">
                  Group and Corporate Training
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Regional Franchising
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Trainer Application
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Affiliate Application
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Classroom Rental
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Course Feedback
                </a>
              </li>
            </ul>
          </div>

          {/* Links: Our Websites */}
          <div>
            <h4 className="text-sm font-semibold text-gray-100 tracking-wider uppercase mb-4">
              Our Websites
            </h4>
            <ul className="space-y-2">
              <li>
                <a href="#" className="hover:text-white">
                  Tertiary Courses
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Tertiary Infotech
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Tertiary Robotics
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-gray-700 flex flex-col md:flex-row justify-between items-center">
          <p className="text-base text-gray-400 text-center md:text-left">
            &copy; {new Date().getFullYear()} Tertiary Courses Malaysia. All
            Rights Reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="text-gray-400 hover:text-white">
              <span className="sr-only">Facebook</span>
              {React.cloneElement(icons.Facebook, { className: "w-6 h-6" })}
            </a>
            <a href="#" className="text-gray-400 hover:text-white">
              <span className="sr-only">LinkedIn</span>
              {React.cloneElement(icons.Linkedin, { className: "w-6 h-6" })}
            </a>
            <a href="#" className="text-gray-400 hover:text-white">
              <span className="sr-only">Twitter</span>
              {React.cloneElement(icons.Twitter, { className: "w-6 h-6" })}
            </a>
            <a href="#" className="text-gray-400 hover:text-white">
              <span className="sr-only">YouTube</span>
              {React.cloneElement(icons.Youtube, { className: "w-6 h-6" })}
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

// --- Main App Component ---
export default function App() {
  return (
    <div className="bg-white font-sans antialiased">
      <Header />
      <main>
        <HeroSection />
        <CategoriesSection />
        <CourseList />
        <PartnersSection />
      </main>
      <Footer />
    </div>
  );
}
