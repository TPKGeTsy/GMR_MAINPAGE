"use client";

import Link from "next/link";
import { useState } from "react";

// Ported from the old groupmaker.co.th navbar (rendered HTML). The mobile menu
// was not in the rendered DOM, so it is rebuilt here with the same links.
const links = [
  { href: "/", label: "HOME", icon: "/legacy/media/WHome_Icon.26f5880c.png", w: 30 },
  { href: "/product", label: "PRODUCTS", icon: "/legacy/media/WProducts_Icon.89deffed.png", w: 30 },
  { href: "/aboutus", label: "ABOUT US", icon: "/legacy/media/WAbout_Icon.93b59868.png", w: 38 },
  { href: "/events", label: "EVENTS", icon: "/legacy/media/WEvent_Icon.14e1ad70.png", w: 30 },
  { href: "/blogs", label: "BLOGS", icon: "/legacy/media/WBlogs_Icon.89987627.png", w: 30 },
  { href: "/career", label: "CAREER", icon: "/legacy/media/WCareer-Icon.e87e4308.png", w: 36 },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <div className="bg-transparent w-full fixed top-0 z-50  lg:fixed lg:top-10 ">
      <nav className="transition-colors w-full bg-transparent text-white top-0">
        <div className="flex w-full justify-center">
          <div className="flex  justify-between lg:justify-center lg:gap-2 xl:gap-0 xl:justify-between items-center  w-[80%]  sm:w-[450px] md:w-[650px] lg:w-[1024px] xl:w-[1280px] 2xl:w-[1540px] ">
            <div className="flex  ">
              <Link href="/">
                <img alt="GroupMaker Logo" width="263" height="51" className="w-[10rem] lg:w-[8rem] xl:w-[10rem] " src="/legacy/media/WhiteGmrLogo.0c29c19a.png" />
              </Link>
            </div>
            <div className="py-5 lg:hidden text-base">
              <button type="button" aria-label="Menu" aria-expanded={open} onClick={() => setOpen((v) => !v)}>
                <img alt="Menu Icon" width="45" height="33" className="w-7" src="/legacy/media/MenuBar.ba484fcd.png" />
              </button>
            </div>
            <div className="hidden lg:flex">
              <ul className="flex items-center md:gap-0  2xl:gap-10 text-xl rounded-full border border-white px-4">
                {links.map((l) => (
                  <li key={l.href} className="flex gap-1 xl:space-x-2 items-center font-bold lg:px-3 xl:px-4 py-2 rounded-md text-white">
                    <img alt={`${l.label} icon`} width={l.w} height={l.w} className="lg:w-5 lg:h-5 xl:w-6 xl:h-6" src={l.icon} />
                    <Link className="text-sm xl:text-base " href={l.href}>
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div className="gap-2 xl:gap-5 items-center justify-center hidden lg:flex">
              <a href="#contact" className=" text-white rounded-full py-2 px-2 xl:px-7 text-sm xl:text-base bg-[#FF540A]">
                Contact Us
              </a>
            </div>
          </div>
        </div>
        {open && (
          <div className="lg:hidden flex justify-center">
            <ul className="w-[80%] sm:w-[450px] md:w-[650px] flex flex-col gap-1 rounded-2xl bg-black/90 border border-white/30 p-4">
              {links.map((l) => (
                <li key={l.href}>
                  <Link href={l.href} onClick={() => setOpen(false)} className="flex items-center gap-3 py-2 font-bold text-sm">
                    <img alt="" width={l.w} height={l.w} className="w-5 h-5" src={l.icon} />
                    {l.label}
                  </Link>
                </li>
              ))}
              <li className="pt-2">
                <a href="#contact" onClick={() => setOpen(false)} className="inline-block text-white rounded-full py-2 px-6 text-sm bg-[#FF540A]">
                  Contact Us
                </a>
              </li>
            </ul>
          </div>
        )}
      </nav>
    </div>
  );
}
