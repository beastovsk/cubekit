import { Button } from "@/components/ui/button";
import Link from "next/link";
import { redirect } from "next/navigation";

export const Hero = () => {
  return (
    <section
      id="hero"
      className="flex items-center justify-between h-[70vh] px-4"
    >
      {/* Left side (Text, Title, Subtitle, CTA Button) */}
      <div className="w-full lg:w-1/3 flex flex-col justify-center">
        <h1 className="text-xl sm:text-2xl lg:text-4xl font-semibold mb-4">
          Hero title
        </h1>
        <p className="text-lg sm:text-xl mb-6 text-[#4F5665]">Hero subtitle</p>
        <Button onClick={() => redirect("/log-in")}>Get Started</Button>
      </div>

      {/* Right side (Image) */}
      <div className="hidden lg:block lg:w-1/2">
        <img
          src="/landing/banner.png"
          alt="Hero Image"
          className="w-full h-full object-cover"
        />
      </div>
    </section>
  );
};
