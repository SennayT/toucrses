// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck

import { ExploreCategoriesSection } from "./_components/category-explore";
import { CourseList } from "./_components/CourseList";
import { Footer } from "./_components/Footer";
import { Header } from "./_components/Header";
import { HeroSection } from "./_components/HeroSection";
import { PartnersSection } from "./_components/PartnerSection";

export default function App() {
  return (
    <div>
      <HeroSection />
      <ExploreCategoriesSection />
      <CourseList />
      <PartnersSection />
    </div>
  );
}
