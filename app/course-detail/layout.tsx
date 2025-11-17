import { Footer } from "../_components/Footer";
import { Header } from "../_components/Header";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="bg-white font-sans antialiased">
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  );
}
