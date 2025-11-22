import { Footer } from "../_components/Footer";
import { Header } from "../_components/Header";
import { NavBar } from "../_components/NavBar";
import { TopBar } from "../_components/TopBar";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="bg-white font-sans antialiased">
      <TopBar />
      <Header />
      <NavBar />
      <main>{children}</main>
      <Footer />
    </div>
  );
}
