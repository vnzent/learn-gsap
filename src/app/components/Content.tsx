"use client";

import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect } from "react";

gsap.registerPlugin(ScrollTrigger);

const pinImages = [
  {
    src: "https://i.pinimg.com/1200x/a3/d0/1e/a3d01e82fb8b4ee397d8d37ca3814f29.jpg",
    alt: "image 1",
  },
  {
    src: "https://i.pinimg.com/736x/70/44/8a/70448ab392bb6726f21eae7063354925.jpg",
    alt: "image 2",
  },
  {
    src: "https://i.pinimg.com/1200x/05/5a/14/055a14b26806ce7c8bd9ea4ae22a3eb5.jpg",
    alt: "image 3",
  },
  {
    src: "https://i.pinimg.com/736x/db/93/df/db93df2a5da5653f768d692dab06e37a.jpg",
    alt: "image 4",
  },
  {
    src: "https://i.pinimg.com/736x/af/33/fa/af33fad1cc17488fea870628e529bdcf.jpg",
    alt: "image 5",
  },
  {
    src: "https://i.pinimg.com/1200x/9e/67/00/9e67000588ab60c207a0978b69e120d2.jpg",
    alt: "image 6",
  },
  {
    src: "https://i.pinimg.com/736x/cb/e7/3c/cbe73ca813ef77960a84e5b7344bb7ed.jpg",
    alt: "image 7",
  },
  {
    src: "https://i.pinimg.com/1200x/2b/70/b2/2b70b2cdc3554150a0d6a457133b1cd7.jpg",
    alt: "image 8",
  },
  {
    src: "https://i.pinimg.com/1200x/ce/52/27/ce522741e74a4d54952c2522c4740efa.jpg",
    alt: "image 9",
  },
];

export default function Content() {
  useEffect(() => {
    const imageWidth = 300;
    const totalWidth = pinImages.length * imageWidth;
    const scrollDistance = totalWidth - window.innerWidth * 0.5;
    console.log(scrollDistance);

    gsap.to(".image-slide", {
      x: -scrollDistance + "px",
      ease: "none",
      scrollTrigger: {
        trigger: ".content-container",
        start: "top top",
        end: `+=${scrollDistance}`,
        scrub: 1,
        pin: true,
        markers: true,
      },
    });
  }, []);
  return (
    <div id="content" className="content-container h-screen w-full overflow-hidden">
    <div className="flex h-full w-full">
      <div className="flex text-4xl font-semibold items-center w-[50vw] justify-center">
        <p>Our Projects</p>
      </div>
      <div className="image-slide flex items-center w-fit">
        {pinImages.map((img, index) => (
            <Image
            key={index}
            src={img.src}
            alt={img.alt}
            width={300}
            height={400}
            className="aspect-[1/2]"
            />
        ))}
      </div>
    </div>
    </div>
  );
  
}
