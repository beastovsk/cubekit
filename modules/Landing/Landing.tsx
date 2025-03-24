"use client";

import Card from "@/components/Landing/Card";
import DotPattern from "@/components/Landing/DotPattern";
import BlurFade from "@/components/Landing/magicui/blur-fade";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { redirect } from "next/navigation";
import { useEffect, useState } from "react";

export const Landing = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="w-full min-h-screen flex items-center justify-center p-4 bg-[url('/bg.webp')] bg-cover bg-center bg-no-repeat relative overflow-hidden">
      <div
        className="absolute inset-0 bg-[url('/bg.webp')] bg-cover bg-center bg-no-repeat"
        style={{ filter: "blur(5px)" }}
      ></div>
      <DotPattern className="z-0" />
      <div className="max-w-7xl w-full flex flex-col lg:flex-row items-center justify-between rounded-xl p-4 sm:p-8 relative z-10">
        <div className="w-full lg:w-1/2 lg:mb-0">
          <BlurFade delay={0.15}>
            <h1 className="text-black text-5xl sm:text-5xl lg:text-6xl font-bold font-['Poppins'] leading-tight mb-4">
              Make MVP in weeks
              <br />
              not years
            </h1>
          </BlurFade>

          <BlurFade delay={0.2}>
            <p className="text-black text-lg sm:text-xl opacity-60 font-normal font-['Poppins'] mb-8 max-w-[564px]">
              We're Cubekit, a web agency that helps entrepreneurs focus on
              business while we take care of the tech.
            </p>
          </BlurFade>

          <BlurFade delay={0.25}>
            <div className="flex flex-wrap gap-3 mb-12">
              <Button
                onClick={() =>
                  redirect(
                    "https://calendly.com/narshinovartyom/build-mvp-meet-cubekit"
                  )
                }
                size="lg"
                className="text-base font-bold flex items-center justify-center"
              >
                Set a Call (Calendly)
              </Button>
              {/* <Button
                variant="outline"
                size="lg"
                className="text-base font-bold"
              >
                Explore
              </Button> */}
            </div>
          </BlurFade>

          <BlurFade delay={0.35}>
            <div className="flex flex-row items-center space-x-8">
              <div className="flex flex-col items-start">
                <span className="text-black text-[44px] font-semibold">
                  ~2-6
                </span>
                <span className="text-black text-base font-normal">
                  MVP (weeks)
                </span>
              </div>
              {/* <div className="flex flex-col items-start">
                <span className="text-black text-[44px] font-semibold">
                  70+
                </span>
                <span className="text-black text-base font-normal">
                  Successful projects
                </span>
              </div> */}
            </div>
          </BlurFade>
        </div>

        <div className="w-full lg:w-1/2 md:flex justify-center lg:justify-end mt-4 lg:mt-0 hidden">
          <div className="relative w-full max-w-[400px] sm:max-w-[520px] md:max-w-[600px] lg:max-w-3xl h-[550px] sm:h-[650px] md:h-[700px] lg:h-[750px]">
            <Card
              src="/card1.webp"
              alt="Hero image"
              width={490}
              height={259}
              className="absolute top-1/2 left-1/2 -translate-x-1 -translate-y-1/4 w-[360px] sm:w-[420px] md:w-[490px] lg:w-[490px]"
              isVisible={isVisible}
              initialTransform="translate(-45%, -120%) rotate(8deg)"
            />
            <Card
              src="/card2.webp"
              alt="Hero image"
              width={294}
              height={305}
              className="absolute top-1/2 left-1/2 -translate-x-2 -translate-y-1/3 w-[220px] sm:w-[252px] md:w-[294px] lg:w-[294px]"
              isVisible={isVisible}
              initialTransform="translate(-85%, -30%) rotate(-8deg)"
            />
            <Card
              src="/card3.webp"
              alt="Hero image"
              width={274}
              height={305}
              className="absolute top-1/2 left-1/2 -translate-x-0 -translate-y-2 w-[220px] sm:w-[235px] md:w-[274px] lg:w-[274px]"
              isVisible={isVisible}
              initialTransform="translate(-10%, 10%) rotate(16deg)"
            />
          </div>
        </div>
      </div>
      <div className="flex gap-3 absolute bottom-1/12 left-1/2 transform -translate-x-1/2 z-[999]">
        <Link
          href="https://x.com/beastovsk"
          target="_blank"
          className="hover:opacity-70 transition-opacity"
        >
          <Image src="/landing/twitter.png" alt="" width={30} height={30} />
        </Link>
        <Link
          href="https://x.com/beastovsk"
          target="_blank"
          className="hover:opacity-70 transition-opacity"
        >
          <Image src="/landing/youtube.png" alt="" width={30} height={30} />
        </Link>
        <Link
          href="https://x.com/beastovsk"
          target="_blank"
          className="hover:opacity-70 transition-opacity"
        >
          <Image src="/landing/linkedin.png" alt="" width={30} height={30} />
        </Link>
      </div>
    </div>
  );
};
