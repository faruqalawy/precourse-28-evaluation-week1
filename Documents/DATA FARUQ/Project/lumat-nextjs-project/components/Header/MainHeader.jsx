"use client";

// This component is used to display either HomeHeader or DefaultHeader
// depending on the route. It is used in all pages
import HomeHeader from "./HomeHeader";
import DefaultHeader from "./DefaultHeader";

import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

export default function MainHeader() {
  const [isHome, setIsHome] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    if (pathname === "/") {
      setIsHome(true);
    } else {
      setIsHome(false);
    }
  }, [pathname]);
  return (
    <>
      {isHome ? <HomeHeader /> : <DefaultHeader />}
    </>
  );
}
