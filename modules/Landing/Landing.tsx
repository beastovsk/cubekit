import { Header, Hero, Matters, Pricing, Works } from "@/components/Landing";
import { Footer } from "@/components/Landing/Footer";

export const Landing = () => {
  return (
    <div className="container mx-auto">
      <Header />
      <Hero />
      <Works />
      <Matters />
      <Pricing />
      <Footer />
    </div>
  );
};
