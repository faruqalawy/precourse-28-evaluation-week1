"use client";

import Image from "next/image";
import { useContext, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

import { SmallNavContext } from "@/context/SmallNavContext";

import { Fade } from "react-awesome-reveal";

import logo from "@/public/icons/logo-lumat.svg";

const isPageActive = (currentPage, targetPage) => {
  return currentPage === targetPage ? "text-yellow" : "";
};

export default function NavBar() {
  const pathname = usePathname();
  const { toggleSmallNav, isSmallNavOpen, setIsSmallNavOpen } =
    useContext(SmallNavContext);

  // Prevent scrolling when small nav is open
  useEffect(() => {
    if (isSmallNavOpen) {
      document.body.style.overflowY = "hidden";
    } else {
      document.body.style.overflowY = "auto";
    }
  }, [isSmallNavOpen]);

  // Close small nav when route/page changes
  useEffect(() => {
    setIsSmallNavOpen(false);
  }, [pathname, setIsSmallNavOpen]);

  const navLink = (
    <>
      <li>
        <Link
          href="/"
          className={`hover:text-yellow ${isPageActive(pathname, "/")}`}
        >
          Home
        </Link>
      </li>
      <li>
        <Link
          href="/produk"
          className={`hover:text-yellow ${isPageActive(pathname, "/produk")}`}
        >
          Produk
        </Link>
      </li>
      <li>
        <Link
          href="/testimoni"
          className={`hover:text-yellow ${isPageActive(
            pathname,
            "/testimoni"
          )}`}
        >
          Testimoni
        </Link>
      </li>
      <li>
        <Link
          href="/profil"
          className={`hover:text-yellow ${isPageActive(pathname, "/profil")}`}
        >
          Profil
        </Link>
      </li>
      <li>
        <Link
          href="/kontak"
          className={`hover:text-yellow ${isPageActive(pathname, "/kontak")}`}
        >
          Kontak
        </Link>
      </li>
    </>
  );

  const smallNav = (
    <Fade duration={350}>
      <nav className="w-full bg-black/80 sm:hidden absolute left-0 top-0 h-screen flex justify-center items-center border-b border-black">
        <ul className="text-3xl gap-12 font-semibold text-center text-white flex flex-col">
          {navLink}
        </ul>
      </nav>
    </Fade>
  );

  return (
    <div className="flex justify-between items-center pt-4 md:pt-8 lg:pt-14 pb-9 lg:pb-20">
      <Link href="/">
        <Image src={logo} alt="brand logo" className="w-32 md:w-48" />
      </Link>

      <div>{isSmallNavOpen && smallNav}</div>

      <div
        className={`sm:hidden cursor-pointer hamburger ${
          isSmallNavOpen ? "active" : ""
        }`}
        onClick={toggleSmallNav}
      >
        <span></span>
        <span></span>
        <span></span>
      </div>

      <nav className="hidden sm:flex justify-between">
        <ul className="font-semibold flex gap-5 items-center text-white text-lg lg:text-2xl">
          {navLink}
        </ul>
      </nav>
    </div>
  );
}
