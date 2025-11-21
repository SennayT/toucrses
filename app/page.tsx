
import { Header } from './_components/Header';
import { TopBar } from './_components/TopBar';
import { NavBar } from './_components/NavBar';
import { HeroSection } from './_components/HeroSection';
import { CourseSection } from './_components/CourseList';
import { Footer } from './_components/Footer';

const POPULAR_COURSES = [
  {
    id: 1,
    title: "ChatGPT and Generative AI (GenAI) for Creating Engaging Content",
    rating: 4.5,
    reviews: 4,
    price: "MYR1,000.00",
    image: "https://placehold.co/100x100/e2e8f0/1e3a8a?text=AI",
    icons: ["ChatGPT", "Python", "Gemini"]
  },
  {
    id: 2,
    title: "Python 3 Essential Training",
    rating: 4.5,
    reviews: 85,
    price: "MYR2,000.00",
    image: "https://placehold.co/100x100/e2e8f0/1e3a8a?text=Python",
    icons: ["Python"]
  },
  {
    id: 3,
    title: "Finance for Non-Finance Managers",
    rating: 5,
    reviews: 110,
    price: "MYR1,000.00",
    image: "https://placehold.co/100x100/e2e8f0/1e3a8a?text=Finance",
    icons: ["Graph"]
  },
  {
    id: 4,
    title: "Effective Communication Training",
    rating: 5,
    reviews: 16,
    price: "MYR2,000.00",
    image: "https://placehold.co/100x100/e2e8f0/1e3a8a?text=Comm",
    icons: ["Chat"]
  }
];

const MICROSOFT_COURSES = [
  {
    id: 1,
    title: "MB-240 Microsoft Certified Dynamics 365 Field Service Functional Consultant Associate",
    image: "https://placehold.co/150x150/ffffff/0078d4?text=MB-240",
    stars: 2,
  },
  {
    id: 2,
    title: "SC-400 Microsoft Certified Information Protection and Compliance Administrator Associate Exam Prep",
    image: "https://placehold.co/150x150/ffffff/0078d4?text=SC-400",
    stars: 3,
  },
  {
    id: 3,
    title: "PL-600 Microsoft Power Platform Solution Architect Exam Prep",
    image: "https://placehold.co/150x150/ffffff/0078d4?text=PL-600",
    stars: 3,
  },
  {
    id: 4,
    title: "PL-300 Microsoft Power BI Data Analyst Exam Prep",
    image: "https://placehold.co/150x150/ffffff/0078d4?text=PL-300",
    stars: 3,
  }
];

export default function App() {
  return (
    <div className="font-sans min-h-screen bg-white">
      <TopBar />
      <Header />
      <NavBar />
      <HeroSection />
      <CourseSection />
      <CourseSection />
      <Footer />
    </div>
  );
}