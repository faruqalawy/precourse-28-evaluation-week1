'use client';

import TestimonialDescription from "@/components/Testimoni/TestimonialDescription";
import TestimonialVideos from "@/components/Testimoni/TestimonialVideos";

import { useContext } from "react";
import { SmallNavContext } from "@/context/SmallNavContext";

export default function Testimonial() {
  const { isSmallNavOpen } = useContext(SmallNavContext);

  return (
    <>
      <div
        className={`shadow-md mx-5 md:mx-12 lg:mx-24 rounded-md bg-white p-7 ${isSmallNavOpen ? "" : "relative"}`}
        style={{ marginTop: -15 }}
      >
        <h1 className="text-center font-bold text-xl mb-2 md:text-2xl lg:text-3xl my-6">
          APA KATA MEREKA TENTANG LUMAT?
        </h1>

        <TestimonialDescription />
      </div>

      <div className="bg-orange-light" style={{ marginTop: -20 }}>
        <TestimonialVideos />
      </div>
    </>
  );
}
