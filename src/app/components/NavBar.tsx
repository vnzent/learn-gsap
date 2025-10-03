"use client";

import Link from "next/link";
import gsap from "gsap";
import { useEffect } from "react";

const NavBar = () => {
  const tl = gsap.timeline({ reversed: true, paused: true });

  useEffect(() => {
    // const lineOne = document.querySelector(".line-one");
    // const lineTwo = document.querySelector(".line-two");
    // const menuWrap = document.querySelector(".menu-wrap")!.getClientRects();
    // const widthOne = lineOne!.getClientRects()[0];
    // const widthTwo = lineTwo!.getClientRects()[0];

    // console.log(widthOne);

    // const gap = menuWrap[0].height - widthOne.height - widthTwo.height;
    // console.log({ gap });
    // console.log(menuWrap);
    tl.to(".sidebar", { clipPath: "circle(150% at 0% 0%" }, "<")
      .to(
        ".line-one",
        {
          transformOrigin: "left top",
          rotation: "15%",
        },
        "<"
      )
      .to(
        ".line-two",
        {
          transformOrigin: "left bottom",
          rotation: "-15%",
        },
        "<"
      )
      .to(".nav-link", { y: 0, duration: 0.5, stagger: 0.05 }, "<")
      .to("#img-home", { clipPath: "inset(0 0% 0 0)", scale: 1 }, "<");
    tl.addLabel("menuIn");
  }, []);

  const menus = [
    {
      label: "Home",
      url: "#home",
      id: "home",
    },
    {
      label: "About",
      url: "#about",
      id: "about",
    },
    {
      label: "Content",
      url: "#content",
      id: "content",
    },
    {
      label: "Sub Content",
      url: "#sub-content",
      id: "sub-content",
    },
    {
      label: "Contact",
      url: "#contact",
      id: "contact",
    },
  ];

  const navImages = [
    {
      src: "./assets/nav-1.jpeg",
      label: "home",
    },
    {
      src: "./assets/nav-2.jpeg",
      label: "about",
    },
    {
      src: "./assets/nav-3.jpeg",
      label: "content",
    },
    {
      src: "./assets/nav-4.jpeg",
      label: "sub-content",
    },
    {
      src: "./assets/nav-5.jpeg",
      label: "contact",
    },
  ];

  const menuTl = gsap.timeline({ reversed: true, paused: true });

  const handleImageChange = (id: string) => {
    menuTl.to(`#img-${id}`, { clipPath: "inset(0 0% 0 0)", scale: 1 });

    // if(tl.reversed()){
    //   tl.play();
    //   console.log("play")
    // } else {
    //   tl.reverse()
    //   console.log("reverse")
    // }
    menuTl.play();
    console.log("play");
  };

  const handleImageReverse = (id: string) => {
    menuTl.reverse();
    console.log("reverse");
  };

  const handleSideBar = () => {
    if (tl.reversed()) {
      tl.play("menuIn");
    } else {
      tl.reverse();
    }
  };

  return (
    <div className="relative h-screen">
      <div
        onClick={handleSideBar}
        className="absolute menu-wrap flex flex-col gap-2 top-10 left-10 cursor-pointer z-999"
      >
        <span className="line-one inline-block bg-red-500 w-10 h-0.5" />
        <span className="line-two inline-block bg-red-500 w-10 h-0.5" />
      </div>
      <nav
        className="sidebar bg-amber-800 w-full h-full flex items-center"
        style={{ clipPath: "circle(0% at 0 0)" }}
      >
        <div className="flex w-1/2 p-10">
          <ul className="flex flex-col gap-7 text-3xl font-semibold text-white">
            {menus.map((menu, index) => (
              <li
                onMouseEnter={() => handleImageChange(menu.id)}
                onMouseLeave={() => handleImageReverse(menu.id)}
                key={index}
                className="overflow-hidden relative h-10 w-100 flex"
              >
                <Link
                  href={menu.url}
                  className="nav-link absolute h-10 translate-y-[100%]"
                >
                  {menu.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="w-1/2 h-full relative">
          {navImages.map((image, index) => (
            <img
              id={"img-" + image.label}
              key={index}
              className="nav-img1 absolute w-full h-full object-cover scale-150"
              src={image.src}
              alt={`resort ${index + 1}`}
              style={{ clipPath: "inset(0 100% 0 0)" }}
            />
          ))}
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
