"use client";
import React from "react";

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

export function Footer() {
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
