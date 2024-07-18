// This header component is used in all pages but the home page
import Image from "next/image";
import NavBar from "./NavBar";
import backgroundImage from "@/public/images/header-background.webp";

export default function DefaultHeader() {
  return (
    <div className="relative max-w-full">
      <Image
        src={backgroundImage}
        alt="Background"
        priority
        fill
        style={{ objectFit: "cover", objectPosition: "center", zIndex: -1 }}
      />
      <div
        className="absolute inset-0"
        style={{
          backgroundImage:
            "linear-gradient(to bottom, rgba(0, 0, 0, 1) 0%, rgba(0, 0, 0, 0) 100%), linear-gradient(to bottom, rgba(0, 0, 0, 1) 0%, rgba(0, 0, 0, 0) 100%)",
          zIndex: -1,
        }}
      />
      <div className="custom-display pb-9 md:pb-20 lg:pb-28">
        <NavBar />
        <h1 className="text-center text-white font-extrabold text-3xl sm:text-5xl md:text-6xl xl:text-7xl">
          Title
        </h1>
      </div>
    </div>
  );
}
