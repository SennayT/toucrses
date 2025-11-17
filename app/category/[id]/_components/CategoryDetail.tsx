"use client";
import React, { useState, useMemo } from "react";
import SearchIcon from "@mui/icons-material/Search";
import {
  ExpandMore,
  Filter,
  People as Users,
  BarChart as BarChart3,
  Search,
  Campaign as Megaphone,
  Email as List,
  Public as Globe,
  Check as CheckCircle,
} from "@mui/icons-material";

const cardIconMap = {
  "Social Commerce": Users,
  Analytics: BarChart3,
  SEO: Search,
  "Social Media": Megaphone,
  Email: List,
  Advertising: Globe,
};
// Mock data for the courses
const initialCourses = [
  {
    id: 1,
    name: "XiaoHongShu for Business: Boost Your Sales with Social Commerce",
    price: 1000.0,
    currency: "MYR",
    platform: "Social Commerce",
    reviews: 4,
    duration: "8 hours",
  },
  {
    id: 2,
    name: "Mastering Google Analytics 4 (GA4) Essentials",
    price: 850.0,
    currency: "MYR",
    platform: "Analytics",
    reviews: 5,
    duration: "12 hours",
  },
  {
    id: 3,
    name: "Advanced SEO & Content Strategy Workshop",
    price: 1200.0,
    currency: "MYR",
    platform: "SEO",
    reviews: 4.5,
    duration: "16 hours",
  },
  {
    id: 4,
    name: "LinkedIn Lead Generation for B2B",
    price: 950.0,
    currency: "MYR",
    platform: "Social Media",
    reviews: 4.2,
    duration: "10 hours",
  },
  {
    id: 5,
    name: "Email Marketing Automation with Drip Campaigns",
    price: 750.0,
    currency: "MYR",
    platform: "Email",
    reviews: 4.8,
    duration: "6 hours",
  },
  {
    id: 6,
    name: "Google Ads (PPC) Certification Preparation",
    price: 1100.0,
    currency: "MYR",
    platform: "Advertising",
    reviews: 4.9,
    duration: "20 hours",
  },
];

// Helper function to render star ratings
const StarRating = ({ rating }) => {
  const fullStars = Math.floor(rating);
  const hasHalfStar = rating % 1 !== 0;
  const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);

  return (
    <div className="flex items-center text-yellow-500">
      {[...Array(fullStars)].map((_, i) => (
        <CheckCircle
          key={`full-${i}`}
          className="w-4 h-4 fill-current text-green-500"
        />
      ))}
      {hasHalfStar && (
        <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24" key="half">
          <defs>
            <linearGradient id="half-star-fill">
              <stop offset="50%" stopColor="currentColor" />
              <stop offset="50%" stopColor="#d1d5db" /> {/* Gray-300 */}
            </linearGradient>
          </defs>
          <path
            d="M12 .587l3.668 7.568 8.332 1.151-6.064 5.828 1.48 8.279L12 18.896l-7.416 3.815 1.48-8.279L.001 9.306l8.332-1.151L12 .587z"
            fill="url(#half-star-fill)"
          />
        </svg>
      )}
      {[...Array(emptyStars)].map((_, i) => (
        <CheckCircle key={`empty-${i}`} className="w-4 h-4 text-gray-300" />
      ))}
    </div>
  );
};

// Course Card Component
const CourseCard = ({ course }) => {
  const { name, price, currency, platform, reviews, duration } = course;
  const cardIconMap = {
    "Social Commerce": Users,
    Analytics: BarChart3,
    SEO: Search,
    "Social Media": Megaphone,
    Email: List,
    Advertising: Globe,
  };
  const IconComponent = cardIconMap[platform] || LayoutGrid;

  return (
    <div className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 ease-in-out overflow-hidden transform hover:-translate-y-1 border border-gray-100">
      <div className="p-6 flex flex-col h-full">
        <div className="flex justify-between items-start mb-3">
          <div className="flex items-center space-x-3">
            <span className="text-sm font-medium text-gray-500">
              {platform}
            </span>
          </div>
        </div>

        <h3 className="text-xl font-bold text-gray-900 mb-2 leading-snug flex-grow">
          {name}
        </h3>

        <div className="flex items-center mb-4">
          <StarRating rating={reviews} />
          <span className="ml-2 text-sm text-gray-500">
            ({reviews} reviews)
          </span>
        </div>

        <div className="flex justify-between items-center pt-4 border-t border-gray-100">
          <div className="text-2xl font-extrabold text-indigo-600">
            {currency} {price.toFixed(2)}
          </div>
          <button
            className="px-4 py-2 bg-indigo-600 text-white font-semibold rounded-full hover:bg-indigo-700 transition-colors duration-200 shadow-md hover:shadow-lg focus:outline-none focus:ring-4 focus:ring-indigo-500 focus:ring-opacity-50 text-sm"
            onClick={() =>
              console.log(`Viewing details for course ${course.id}`)
            }
          >
            See Details
          </button>
        </div>
      </div>
    </div>
  );
};

// Filter and Sort Bar Component
const FilterBar = ({ itemCount, sortOption, setSortOption }) => {
  const sortOptions = [
    { value: "position", label: "Position" },
    { value: "price_asc", label: "Price: Low to High" },
    { value: "price_desc", label: "Price: High to Low" },
    { value: "reviews", label: "Top Reviews" },
  ];

  const displayOptions = [10, 20, 50];

  return (
    <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center p-4 bg-gray-50 rounded-lg border border-gray-200 text-sm shadow-inner mb-8">
      <p className="font-medium text-gray-700 mb-4 sm:mb-0">
        {itemCount} Item(s) Found
      </p>

      <div className="flex flex-wrap items-center gap-4 text-gray-600">
        <div className="flex items-center space-x-2">
          <label htmlFor="sort" className="hidden sm:inline">
            Sort By:
          </label>
          <div className="relative">
            <select
              id="sort"
              value={sortOption}
              onChange={(e) => setSortOption(e.target.value)}
              className="appearance-none bg-white border border-gray-300 rounded-lg pl-3 pr-8 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500 cursor-pointer"
            >
              {sortOptions.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
            <ExpandMore className="absolute right-2 top-1/2 transform -translate-y-1/2 w-4 h-4 pointer-events-none" />
          </div>
        </div>

        <div className="flex items-center space-x-2">
          <label htmlFor="show" className="hidden sm:inline">
            Show:
          </label>
          <div className="relative">
            <select
              id="show"
              className="appearance-none bg-white border border-gray-300 rounded-lg pl-3 pr-8 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500 cursor-pointer"
            >
              {displayOptions.map((num) => (
                <option key={num} value={num}>
                  {num} per page
                </option>
              ))}
            </select>
            <ExpandMore className="absolute right-2 top-1/2 transform -translate-y-1/2 w-4 h-4 pointer-events-none" />
          </div>
        </div>

        <button className="flex items-center space-x-1 p-2 bg-white border border-gray-300 rounded-lg hover:bg-gray-100 transition-colors">
          <Filter className="w-4 h-4" />
          <span className="hidden sm:inline">Filter</span>
        </button>
      </div>
    </div>
  );
};

// Main App Component
export const CategoryDetail = () => {
  const [sortOption, setSortOption] = useState("position");
  const [searchTerm, setSearchTerm] = useState("");

  const filteredAndSortedCourses = useMemo(() => {
    let courses = [...initialCourses];

    // 1. Filtering (Basic search by name or platform)
    if (searchTerm) {
      const lowerCaseSearch = searchTerm.toLowerCase();
      courses = courses.filter(
        (course) =>
          course.name.toLowerCase().includes(lowerCaseSearch) ||
          course.platform.toLowerCase().includes(lowerCaseSearch)
      );
    }

    // 2. Sorting
    switch (sortOption) {
      case "price_asc":
        courses.sort((a, b) => a.price - b.price);
        break;
      case "price_desc":
        courses.sort((a, b) => b.price - a.price);
        break;
      case "reviews":
        courses.sort((a, b) => b.reviews - a.reviews);
        break;
      case "position":
      default:
        // Default sorting (by id/position)
        courses.sort((a, b) => a.id - b.id);
        break;
    }

    return courses;
  }, [sortOption, searchTerm]);

  return (
    <div>
      {/* Header & Hero Section */}

      {/* Course Search and Filter */}
      <div className="mb-8 flex flex-col sm:flex-row gap-4">
        <div className="relative flex-grow">
          <input
            type="text"
            placeholder="Search courses (e.g., SEO, Analytics, LinkedIn...)"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full p-4 pl-12 border border-gray-300 rounded-xl focus:ring-indigo-500 focus:border-indigo-500 transition-shadow shadow-sm"
          />
          <SearchIcon className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
        </div>
      </div>

      {/* Filter/Sort Controls */}
      <FilterBar
        itemCount={filteredAndSortedCourses.length}
        sortOption={sortOption}
        setSortOption={setSortOption}
      />

      {/* Course Listing Grid */}
      {filteredAndSortedCourses.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredAndSortedCourses.map((course) => (
            <CourseCard key={course.id} course={course} />
          ))}
        </div>
      ) : (
        <div className="text-center p-10 bg-white rounded-xl shadow-lg">
          <SearchIcon className="w-12 h-12 text-gray-400 mx-auto mb-4" />
          <h3 className="text-xl font-semibold text-gray-700">
            No Courses Found
          </h3>
          <p className="text-gray-500 mt-2">
            Try adjusting your search query or filters.
          </p>
        </div>
      )}
    </div>
  );
};
