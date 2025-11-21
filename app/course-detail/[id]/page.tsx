"use client"
import React, { useState } from 'react';
import {
  Star,
  Calendar,
  Clock,
  MapPin,
  User,
  CheckCircle,
  ChevronDown,
  Info,
  BookOpen,
  Users,
  MessageSquare,
  Share2,
  Printer,
  Mail
} from 'lucide-react';

// --- Mock Data based on the URL content ---

const courseTopics = [
  { title: "Topic 1: Preparing for the Project", items: ["Understand Project Management Basics", "Develop the Business Case", "Identify Project Characteristics"] },
  { title: "Topic 2: Selecting the Project Framework", items: ["Identify Project Methodologies", "Compare Agile and Waterfall Projects"] },
  { title: "Topic 3: Initiating the Project", items: ["Build a Project Team", "Prepare Project Initiation Documents"] },
  { title: "Topic 4: Facilitating Effective Meetings", items: ["Lead Effective Meeting", "Use Project Management Tools", "Create a Communication Plan"] },
  { title: "Topic 5: Implementing Solution Design", items: ["Create a Solution Design Document", "Evaluate IT Infrastructure Needs"] },
  { title: "Topic 6: Managing Resources", items: ["Describe the Resource Life Cycle", "Conduct a Needs Assessment"] },
  { title: "Topic 7: Managing Risk", items: ["Identify and Analyze Risk", "Exam objectives covered: Treat and Monitor Risk"] },
  { title: "Topic 8: Creating a Project Schedule", items: ["Define Units of Work", "Sequence the Activities"] },
  { title: "Topic 9: Creating a Project Plan", items: ["Refine the Timeline", "Establish Project Baselines", "Create a Quality Assurance Plan"] },
  { title: "Topic 10: Procuring Solutions", items: ["Compare Procurement Options", "Evaluate and Select Vendors"] },
  { title: "Topic 11: Managing Project Execution", items: ["Document Progress", "Communicate Progress"] },
  { title: "Topic 12: Managing Issues and Changes", items: ["Resolve Issues", "Control Changes"] },
  { title: "Topic 13: Managing Performance", items: ["Measure Performance", "Maintain the Project Schedule"] },
  { title: "Topic 14: Wrapping Up the Project", items: ["Prepare for Project Closure", "Close the Project"] },
];

const dates = [
  "1/2/9/16/23 Nov 2025 (Sat/Sun)",
  "17-21 Nov 2025 (Mon-Fri)",
  "6/7/14/21/28 Dec 2025 (Sat/Sun)",
  "22-26 Dec 2025 (Mon-Fri)",
  "3/4/11/18/25 Jan 2026 (Sat/Sun)"
];

const jobRoles = [
  "Project Manager", "Assistant Project Manager", "Project Coordinator", "IT Project Manager",
  "Business Analyst", "Project Administrator", "Project Scheduler", "Operations Manager",
  "Program Manager", "Project Support Specialist", "Product Manager"
];

// --- Components ---

const TabButton = ({ active, label, onClick, icon: Icon }) => (
  <button
    onClick={onClick}
    className={`flex items-center gap-2 px-6 py-3 font-medium text-sm transition-colors border-t-2 ${active
        ? 'border-blue-500 bg-white text-gray-800'
        : 'border-transparent bg-gray-100 text-gray-500 hover:bg-gray-200'
      }`}
  >
    {Icon && <Icon size={16} />}
    {label}
  </button>
);

const SectionTitle = ({ children }) => (
  <h3 className="text-xl font-bold text-gray-800 border-b border-gray-200 pb-2 mb-4 mt-6">
    {children}
  </h3>
);

const SidebarItem = ({ label, children, required }) => (
  <div className="mb-4">
    <label className="block text-sm font-bold text-gray-700 mb-1">
      {label} {required && <span className="text-red-500">*</span>}
    </label>
    {children}
  </div>
);

export default function App() {
  const [activeTab, setActiveTab] = useState('details');
  const [selectedDate, setSelectedDate] = useState('');
  const [participants, setParticipants] = useState(1);
  const [includeExam, setIncludeExam] = useState(false);
  const [includeVoucher, setIncludeVoucher] = useState(false);

  const basePrice = 6500;
  const examPrice = 1660;
  const voucherPrice = 1800;

  const totalPrice = (basePrice + (includeExam ? examPrice : 0) + (includeVoucher ? voucherPrice : 0)) * participants;

  return (
    <div className="min-h-screen bg-gray-50 font-sans text-gray-600">

      {/* Breadcrumb */}
      <div className="bg-gray-100 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 py-2 text-xs text-gray-500 flex items-center gap-2">
          <span>Home</span>
          <span>/</span>
          <span>CompTIA Project+ Training</span>
        </div>
      </div>

      {/* Main Container */}
      <div className="max-w-7xl mx-auto px-4 py-8 grid grid-cols-1 lg:grid-cols-3 gap-8">

        {/* LEFT CONTENT COLUMN */}
        <div className="lg:col-span-2">

          {/* Header Section */}
          <div className="mb-6">
            <h1 className="text-3xl font-bold text-gray-800 mb-2">
              CompTIA Project+ Training
            </h1>
            <div className="flex items-center gap-4 text-sm mb-4">
              <div className="flex items-center text-yellow-400">
                <Star size={16} fill="currentColor" />
                <Star size={16} fill="currentColor" />
                <Star size={16} fill="currentColor" />
                <Star size={16} fill="currentColor" />
                <Star size={16} fill="currentColor" />
                <span className="text-gray-500 ml-2 text-xs uppercase tracking-wide hover:text-blue-600 cursor-pointer">
                  2 Review(s) | Add Your Review
                </span>
              </div>
              <div className="flex gap-2">
                {/* Social Placeholders */}
                <button className="p-1 bg-blue-600 text-white rounded-sm"><Share2 size={12} /></button>
                <button className="p-1 bg-gray-200 text-gray-600 rounded-sm"><Printer size={12} /></button>
                <button className="p-1 bg-gray-200 text-gray-600 rounded-sm"><Mail size={12} /></button>
              </div>
            </div>

            <div className="prose max-w-none text-gray-600 text-sm leading-relaxed mb-6">
              <p className="mb-4">
                The CompTIA Project+ Exam Prep course is meticulously designed to provide you with the foundational and advanced knowledge required to pass the CompTIA Project+ certification exam. This course covers a wide array of essential project management topics, beginning with the basics of project management and the development of a robust business case.
              </p>
              <p>
                You will learn to identify and compare different project methodologies, including Agile and Waterfall, enabling you to choose the best framework for your projects. The course also delves into critical aspects such as risk management, resource allocation, and project scheduling.
              </p>
            </div>
          </div>

          {/* Tabs Navigation */}
          <div className="flex flex-wrap border-b border-gray-300 mb-6">
            <TabButton
              active={activeTab === 'details'}
              label="Course Details"
              icon={BookOpen}
              onClick={() => setActiveTab('details')}
            />
            <TabButton
              active={activeTab === 'info'}
              label="Course Info"
              icon={Info}
              onClick={() => setActiveTab('info')}
            />
            <TabButton
              active={activeTab === 'roles'}
              label="Job Roles"
              icon={Users}
              onClick={() => setActiveTab('roles')}
            />
            <TabButton
              active={activeTab === 'trainers'}
              label="Trainers"
              icon={User}
              onClick={() => setActiveTab('trainers')}
            />
            <TabButton
              active={activeTab === 'reviews'}
              label="Review"
              icon={MessageSquare}
              onClick={() => setActiveTab('reviews')}
            />
          </div>

          {/* Tab Content Area */}
          <div className="bg-white p-6 border border-gray-200 rounded-sm shadow-sm min-h-[400px]">

            {activeTab === 'details' && (
              <div className="animate-fadeIn">
                <h2 className="text-xl font-bold text-gray-800 mb-4">Course Topic Outline</h2>
                <div className="space-y-6">
                  {courseTopics.map((topic, idx) => (
                    <div key={idx} className="border-l-4 border-blue-500 pl-4">
                      <h4 className="font-bold text-gray-800 mb-2">{topic.title}</h4>
                      <ul className="list-disc list-inside text-sm text-gray-600 space-y-1">
                        {topic.items.map((item, i) => (
                          <li key={i}>{item}</li>
                        ))}
                      </ul>
                    </div>
                  ))}

                  <SectionTitle>Certification</SectionTitle>
                  <div className="text-sm space-y-4">
                    <p><span className="font-bold">Certificate of Completion:</span> Participants meeting 75% attendance will receive a certificate from Tertiary Infotech.</p>
                    <p><span className="font-bold">External Certification:</span> Prepares participants for the CompTIA Project+ exam (PK0-005).</p>
                    <div className="bg-blue-50 p-3 rounded border border-blue-100 text-blue-800 font-medium text-center">
                      We are an Authorized CompTIA Delivery Partner
                    </div>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'info' && (
              <div className="animate-fadeIn text-sm space-y-4">
                <h3 className="font-bold text-lg text-gray-800">Prerequisites</h3>
                <p>
                  While no specific prerequisites are mandatory, basic familiarity with project workflow is beneficial.
                  The official scrape mentions basic knowledge of Python is assumed, though this appears to be a listing error on the source site for Project+.
                  However, general computer literacy is required.
                </p>
                <h3 className="font-bold text-lg text-gray-800 mt-6">Target Audience</h3>
                <p>
                  Professionals who manage smaller, less complex projects as part of their other job duties but still have foundational project management skills.
                </p>
              </div>
            )}

            {activeTab === 'roles' && (
              <div className="animate-fadeIn">
                <h3 className="font-bold text-lg text-gray-800 mb-4">Relevant Job Roles</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-2 text-sm">
                  {jobRoles.map((role, idx) => (
                    <div key={idx} className="flex items-center gap-2">
                      <CheckCircle size={14} className="text-green-500" />
                      {role}
                    </div>
                  ))}
                </div>
              </div>
            )}

            {activeTab === 'trainers' && (
              <div className="animate-fadeIn text-sm space-y-6">
                <div className="flex gap-4 items-start">
                  <div className="w-16 h-16 bg-gray-200 rounded-full flex items-center justify-center text-gray-400 flex-shrink-0">
                    <User size={32} />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-800 text-base">Alec Tan</h4>
                    <p className="text-xs text-gray-500 mb-2">ACTA Certified Trainer</p>
                    <p>Alec Tan is an ACTA certified trainer with multiple CompTIA certifications. Has been in the IT industry since 2002, ranging from technical support to sales and management.</p>
                  </div>
                </div>
                <div className="border-t border-gray-100 pt-4 flex gap-4 items-start">
                  <div className="w-16 h-16 bg-gray-200 rounded-full flex items-center justify-center text-gray-400 flex-shrink-0">
                    <User size={32} />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-800 text-base">Peter Cheong</h4>
                    <p className="text-xs text-gray-500 mb-2">ACLP Certified Trainer</p>
                    <p>Specializes in IT related knowledge including Wintel, Linux, and CompTIA. Formerly worked with Motorola Solutions on trunking systems for regional police forces.</p>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'reviews' && (
              <div className="animate-fadeIn">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="font-bold text-lg text-gray-800">Customer Reviews</h3>
                  <button className="text-blue-600 text-sm font-medium hover:underline">Write a Review</button>
                </div>

                <div className="space-y-6">
                  {[1, 2].map((review) => (
                    <div key={review} className="border-b border-gray-100 pb-6">
                      <div className="flex items-center gap-2 mb-2">
                        <div className="flex text-yellow-400 text-xs">
                          {[1, 2, 3, 4, 5].map(s => <Star key={s} size={12} fill="currentColor" />)}
                        </div>
                        <span className="text-xs font-bold text-gray-700">Recommended</span>
                      </div>
                      <p className="text-sm text-gray-600 italic mb-2">"Course can be conducted in several days since one full day is so packed."</p>
                      <div className="text-xs text-gray-400">Review by Course Participant/Trainee • Posted on 09/12/2022</div>
                    </div>
                  ))}
                </div>
              </div>
            )}

          </div>
        </div>

        {/* RIGHT SIDEBAR COLUMN */}
        <div className="lg:col-span-1 space-y-6">

          {/* Price / Registration Box */}
          <div className="bg-white p-5 border border-gray-200 shadow-md rounded-sm">
            <div className="text-sm text-gray-500 mb-4 flex justify-between border-b border-gray-100 pb-2">
              <span>Course Code: <span className="font-mono text-gray-700">M792</span></span>
              <span className="text-green-600 font-bold text-xs flex items-center"><CheckCircle size={12} className="mr-1" /> HRD Corp Claimable</span>
            </div>

            <div className="text-3xl font-bold text-gray-800 mb-6">
              MYR{totalPrice.toLocaleString()}.00
            </div>

            {/* Form Controls */}
            <div className="space-y-4">
              <SidebarItem label="Include Exam Voucher">
                <select
                  className="w-full border border-gray-300 rounded p-2 text-sm focus:ring-2 focus:ring-blue-500 focus:outline-none"
                  onChange={(e) => setIncludeExam(e.target.value === 'yes')}
                >
                  <option value="no">No</option>
                  <option value="yes">Yes (+MYR{examPrice.toLocaleString()})</option>
                </select>
              </SidebarItem>

              <SidebarItem label="CompTIA Project+ Exam Voucher">
                <select
                  className="w-full border border-gray-300 rounded p-2 text-sm focus:ring-2 focus:ring-blue-500 focus:outline-none"
                  onChange={(e) => setIncludeVoucher(e.target.value === 'yes')}
                >
                  <option value="no">No</option>
                  <option value="yes">Yes (+MYR{voucherPrice.toLocaleString()})</option>
                </select>
              </SidebarItem>

              <SidebarItem label="Training Mode" required>
                <select className="w-full border border-gray-300 rounded p-2 text-sm bg-white">
                  <option>Physical Classroom Training</option>
                  <option>Synchronised Teaching using ZOOM</option>
                  <option>Corporate Training at Company Premise</option>
                </select>
              </SidebarItem>

              <SidebarItem label="Course Date" required>
                <div className="relative">
                  <select
                    className="w-full border border-gray-300 rounded p-2 text-sm bg-white appearance-none pr-8"
                    value={selectedDate}
                    onChange={(e) => setSelectedDate(e.target.value)}
                  >
                    <option value="">-- Please Select --</option>
                    {dates.map((d, i) => (
                      <option key={i} value={d}>{d}</option>
                    ))}
                  </select>
                  <ChevronDown size={16} className="absolute right-2 top-3 text-gray-400 pointer-events-none" />
                </div>
              </SidebarItem>

              <SidebarItem label="Course Time" required>
                <div className="w-full border border-gray-300 rounded p-2 text-sm bg-gray-50 text-gray-500 cursor-not-allowed">
                  9:30am - 5:30pm
                </div>
              </SidebarItem>

              <div className="mb-4">
                <label className="block text-sm font-bold text-gray-700 mb-2">No. of Participants</label>
                <div className="flex flex-wrap gap-1">
                  {[1, 2, 3, 4, 5].map(num => (
                    <button
                      key={num}
                      onClick={() => setParticipants(num)}
                      className={`w-8 h-8 flex items-center justify-center text-sm border rounded ${participants === num
                          ? 'bg-blue-600 text-white border-blue-600'
                          : 'bg-white text-gray-600 border-gray-300 hover:border-blue-400'
                        }`}
                    >
                      {num}
                    </button>
                  ))}
                </div>
              </div>

              <SidebarItem label="Sponsorship">
                <div className="flex gap-4">
                  <label className="flex items-center gap-2 text-sm cursor-pointer">
                    <input type="radio" name="sponsorship" defaultChecked className="text-blue-600 focus:ring-blue-500" />
                    Self-Sponsored
                  </label>
                  <label className="flex items-center gap-2 text-sm cursor-pointer">
                    <input type="radio" name="sponsorship" className="text-blue-600 focus:ring-blue-500" />
                    Employer-Sponsored
                  </label>
                </div>
              </SidebarItem>

              <button className="w-full bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 rounded shadow transition-colors uppercase text-sm tracking-wide">
                Register Your Interest
              </button>

              <div className="text-center text-xs text-gray-400 pt-2">
                * Required Fields
              </div>

            </div>
          </div>

          {/* Info Box */}
          <div className="bg-white p-5 border border-gray-200 shadow-sm rounded-sm">
            <h3 className="font-bold text-gray-800 border-b border-gray-100 pb-2 mb-3">Course Information</h3>
            <ul className="space-y-3 text-sm text-gray-600">
              <li className="flex gap-2">
                <Calendar size={16} className="text-blue-500 flex-shrink-0 mt-0.5" />
                <div>
                  <span className="font-semibold text-gray-700">Session (days):</span> 5
                </div>
              </li>
              <li className="flex gap-2">
                <Clock size={16} className="text-blue-500 flex-shrink-0 mt-0.5" />
                <div>
                  <span className="font-semibold text-gray-700">Duration (hrs):</span> 37.5
                </div>
              </li>
              <li className="flex gap-2">
                <User size={16} className="text-blue-500 flex-shrink-0 mt-0.5" />
                <div>
                  <span className="font-semibold text-gray-700">Level:</span> Beginner
                </div>
              </li>
              <li className="flex gap-2">
                <Info size={16} className="text-blue-500 flex-shrink-0 mt-0.5" />
                <div>
                  <span className="font-semibold text-gray-700">Note:</span> Students need to bring their own laptops.
                </div>
              </li>
              <li className="flex gap-2 border-t border-gray-100 pt-3 mt-2">
                <MapPin size={16} className="text-blue-500 flex-shrink-0 mt-0.5" />
                <div>
                  <span className="font-semibold text-gray-700 block mb-1">Venue (KL):</span>
                  KL Gateway, No 2, Jalan kerinchi, Gerbang kernichi Lestari, 59200 Kuala Lumpur
                </div>
              </li>
            </ul>
          </div>

          {/* Contact/Support Box */}
          <div className="bg-gray-100 p-5 border border-gray-200 rounded-sm">
            <h3 className="font-bold text-gray-800 mb-2">Post-Course Support</h3>
            <p className="text-xs text-gray-600 mb-4">
              We provide consultation related to the subject matter after the course. Email queries to sales@tertiarycourses.com.my
            </p>
            <h3 className="font-bold text-gray-800 mb-2">Cancellation Policy</h3>
            <p className="text-xs text-gray-600">
              We reserve the right to cancel or re-schedule. 100% refund if cancelled by us.
            </p>
          </div>

        </div>
      </div>

      <footer className="bg-white border-t border-gray-200 py-8 mt-8">
        <div className="max-w-7xl mx-auto px-4 text-center text-xs text-gray-500">
          <p>© 2025 Tertiary Courses Malaysia. All Rights Reserved.</p>
        </div>
      </footer>
    </div>
  );
}