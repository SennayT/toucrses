import { Facebook, Linkedin, Twitter, Youtube, Phone, User, Mail, MapPin, ChevronRight } from "lucide-react";


const PARTNERS = [
  "Microsoft Learning Partner",
  "CompTIA Authorised Delivery Partner",
  "Linux Foundations Authorised Training Partner",
  "AWS Authorised Training Partner (Reseller)",
  "Autodesk Authorised Training Center",
  "Pearson Vue Authorised Training Partner"
];
const LOCATIONS = [
  { city: "Kuala Lumpur", address: "G-3A-02, Corporate Office Suite, KL Gateway, No 2, Jalan Kerinchi, Gerbang Kerinchi Lestari, 59200 Kuala Lumpur, Malaysia" },
  { city: "Penang", address: "Jalan Sungai Dua, 11700 Penang, Malaysia." }
];

export const Footer = () => (
  <footer className="bg-gray-50 pt-12 pb-8 text-sm text-gray-600 border-t border-gray-200">
    <div className="container mx-auto px-4">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
        {/* Column 1 */}
        <div>
          <h4 className="font-bold text-gray-800 mb-4">About Tertiary Courses Malaysia</h4>
          <p className="mb-4 text-xs leading-relaxed text-gray-500">
            Tertiary Courses Malaysia, a subsidiary of Tertiary Infotech Sdn. Bhd. (Company Reg #: 1187680-U) was founded in Jun 2016. We are a HRD Corp approved training provider in Malaysia. We provide high quality classroom instructor-led adult learning trainings to professionals, executives, students in Malaysia. We provide professional adult trainings in various industries such as Infocomm, Digital Media, Robotics, Telecommunication, Life Science, Semiconductor, Horticulture and Business Administration.
          </p>
          <div className="flex gap-2 mt-4">
            <div className="w-8 h-8 bg-blue-900 text-white flex items-center justify-center"><Facebook size={16} /></div>
            <div className="w-8 h-8 bg-blue-800 text-white flex items-center justify-center"><Linkedin size={16} /></div>
            <div className="w-8 h-8 bg-sky-500 text-white flex items-center justify-center"><Twitter size={16} /></div>
            <div className="w-8 h-8 bg-red-600 text-white flex items-center justify-center"><Youtube size={16} /></div>
          </div>
        </div>

        {/* Column 2 */}
        <div>
          <h4 className="font-bold text-gray-800 mb-4">Authorised Training Partners</h4>
          <ul className="space-y-2">
            {PARTNERS.map((p, i) => (
              <li key={i} className="flex items-start gap-3">
                <span className="bg-blue-900 text-white text-[10px] font-bold w-5 h-5 flex-shrink-0 flex items-center justify-center mt-0.5">{i + 1}</span>
                <span className="text-xs font-semibold text-gray-700">{p}</span>
              </li>
            ))}
          </ul>

          <h4 className="font-bold text-gray-800 mt-8 mb-4">Approved Training Organizations</h4>
          <div className="flex items-start gap-3">
            <span className="bg-blue-900 text-white text-[10px] font-bold w-5 h-5 flex-shrink-0 flex items-center justify-center">1</span>
            <span className="text-xs font-semibold text-gray-700">HRD Corp Approved Training Provider</span>
          </div>
        </div>

        {/* Column 3 */}
        <div>
          <h4 className="font-bold text-gray-800 mb-4">Training Centers Locations in Malaysia</h4>
          <ul className="space-y-4 mb-8">
            {LOCATIONS.map((loc, i) => (
              <li key={i} className="flex items-start gap-3">
                <span className="bg-blue-900 text-white text-[10px] font-bold w-5 h-5 flex-shrink-0 flex items-center justify-center mt-0.5">{i + 1}</span>
                <div className="text-xs text-gray-500">
                  <strong className="text-gray-700 block mb-1">{loc.city}</strong>
                  {loc.address}
                </div>
              </li>
            ))}
          </ul>

          <h4 className="font-bold text-gray-800 mb-4">Contact Us Information</h4>
          <ul className="space-y-3 text-xs">
            <li className="flex items-center gap-2"><div className="bg-blue-900 text-white p-1 rounded-sm"><Phone size={10} /></div> +603 7931 9658</li>
            <li className="flex items-center gap-2"><div className="bg-green-500 text-white p-1 rounded-sm"><Phone size={10} /></div> https://wa.me/+601123244187</li>
            <li className="flex items-center gap-2"><div className="bg-gray-400 text-white p-1 rounded-sm"><User size={10} /></div> AI Chatbot</li>
            <li className="flex items-center gap-2"><div className="bg-blue-600 text-white p-1 rounded-sm"><Mail size={10} /></div> sales@tertiarycourses.com.my</li>
            <li className="flex items-start gap-2">
              <div className="bg-blue-900 text-white p-1 rounded-sm mt-0.5"><MapPin size={10} /></div>
              <span className="text-gray-500">Management Office/Mailing Address: Level 29, Tower A, Vertical Business Suite, Avenue 3, Bangsar South, No.8, Jalan Kerinchi Malaysia 59200 Kuala Lumpur</span>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom Links Grid */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8 border-t border-gray-200 pt-8">
        <div>
          <h5 className="font-bold text-gray-800 mb-3">Get To Know Us</h5>
          <ul className="space-y-1 text-xs text-gray-500">
            {['About Us', 'Clientele', 'Course Cancellation & Refund Policy', 'Disclaimer and Privacy Policy', 'FAQ', 'Payment Methods', 'Contact Us', 'Sitemap'].map(link => (
              <li key={link} className="hover:text-blue-600 cursor-pointer flex items-center gap-1"><ChevronRight size={10} /> {link}</li>
            ))}
          </ul>
        </div>
        <div>
          <h5 className="font-bold text-gray-800 mb-3">Enquiries</h5>
          <ul className="space-y-1 text-xs text-gray-500">
            {['Group and Corporate Training Enquiry', 'Regional Franchising Request', 'Trainer Application', 'Affiliate Application', 'Classroom Rental', 'Course Feedback'].map(link => (
              <li key={link} className="hover:text-blue-600 cursor-pointer flex items-center gap-1"><ChevronRight size={10} /> {link}</li>
            ))}
          </ul>
        </div>
        <div>
          <h5 className="font-bold text-gray-800 mb-3">Grants and Subsidies</h5>
          <ul className="space-y-1 text-xs text-gray-500">
            {['Steps to Submit HRD Corp Grant', 'HRD Certified Trainers'].map(link => (
              <li key={link} className="hover:text-blue-600 cursor-pointer flex items-center gap-1"><ChevronRight size={10} /> {link}</li>
            ))}
          </ul>
        </div>
        <div>
          <h5 className="font-bold text-gray-800 mb-3">Our Websites</h5>
          <ul className="space-y-1 text-xs text-gray-500">
            {['Tertiary Courses', 'Tertiary Infotech', 'Tertiary Robotics'].map(link => (
              <li key={link} className="hover:text-blue-600 cursor-pointer flex items-center gap-1"><ChevronRight size={10} /> {link}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  </footer>
);