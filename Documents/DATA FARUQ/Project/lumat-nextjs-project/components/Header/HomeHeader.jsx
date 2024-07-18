// This header component is used exclusively in the home page
import Image from "next/image";

import NavBar from "./NavBar";
import Button from "../Other/Button";

import backgroundImage from "@/public/images/home-header-background.webp";

export default function HomeHeader() {
  return (
    <div className="relative max-w-full font-nunito">
      <Image
        src={backgroundImage}
        alt="background for home header"
        priority
        fill
      style={{ objectFit: 'cover', objectPosition: 'center', zIndex: -1 }}
      />
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: 'linear-gradient(to bottom, rgba(0, 0, 0, 0.9) 0%, rgba(0, 0, 0, 0) 80%), linear-gradient(to right, rgba(0, 0, 0, 0.8) 0%, rgba(0, 0, 0, 0) 90%)',
          zIndex: -1
        }}
      />
      <div className="custom-display pb-9 relative z-10">
        <NavBar />
        <>
          <h2 className="font-semibold text-white text-xl lg:text-4xl lg:pb-2">
            NIKMATI MAKANAN LEZAT YANG INSTAN DAN HIGIENIS
          </h2>
          <h1
            className="font-extrabold text-yellow text-4xl lg:text-6xl lg:pb-2"
            style={{ marginBottom: -3 }}
          >
            BERSAMA LUMAT
          </h1>
          <h1 className="font-extrabold text-white text-4xl lg:text-6xl">
            MAKAN NIKMAT
          </h1>
        </>
        <Button
          text="LIHAT PRODUK"
          path="/produk"
          className="my-3 md:my-5 lg:my-6"
          isArrow
        />
      </div>
    </div>
  );
}
