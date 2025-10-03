'use client'

import gsap from "gsap";
import Image from "next/image";
import { ScrollTrigger, ScrollSmoother } from "gsap/all";
import { useEffect } from "react";

gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

const About = () => {

  useEffect(() => {
    const smoother = ScrollSmoother.create({
      content: "#smooth-content",
      wrapper: "#smooth-wrapper",
      smooth: 1.5,
      effects: true,
    });
  }, [])

  return (
    
        <section
          id="about"
          className="flex justify-center items-center h-screen w-full gap-9"
        >
          <div className="aspect-3/4 bg-blue-500 overflow-hidden">
            <Image
              className="w-full h-full scale-125"
              src="/assets/about.jpeg"
              alt="about"
              width={300}
              height={400}
              data-speed = "0.9"
            />
          </div>
          <div className="">
            <p className="font-semibold text-xl">
              Ketika ketenangan berpadu dengan keindahan alam.
            </p>
          </div>
        </section>
  );
};

export default About;
