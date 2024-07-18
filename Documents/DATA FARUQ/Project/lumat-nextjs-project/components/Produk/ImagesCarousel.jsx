"use client";

import Image from "next/image";
import { useContext } from "react";

import { SmallNavContext } from "@/context/SmallNavContext";

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

export default function ImagesCarousel({ item }) {
  const { isSmallNavOpen } = useContext(SmallNavContext);

  const responsive = {
    allDisplay: {
      breakpoint: { max: 5000, min: 0 },
      items: 2,
    },
  };
  return (
    <>
      {isSmallNavOpen ? (
        <>
          {Object.values(item.images).map((image, index) => (
            <Image key={index} src={image} alt={image} className="z-1" width={500} height={300} />
          ))}
        </>
      ) : (
        <Carousel
          responsive={responsive}
          infinite={true}
          autoPlay={true}
          autoPlaySpeed={3000}
          itemClass="static-carousel"
        >
          {Object.values(item.images).map((image, index) => (
            <Image
              key={index}
              src={image}
              alt={image}
              className="z-1"
              width={500}
              height={300}
            />
          ))}
        </Carousel>
      )}
    </>
  );
}
