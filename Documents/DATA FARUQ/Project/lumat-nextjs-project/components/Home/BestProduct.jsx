"use client";

import Link from "next/link";
import Image from "next/image";

import dataHome from "@/data/home.json";
import Button from "../Other/Button";

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

export default function BestProduct() {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 530 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 530, min: 0 },
      items: 1,
    },
  };

  return (
    <div className="md:mb-8 custom-display">
      <h1 className="font-bold text-2xl md:text-3xl lg:text-[40px] text-center mt-12 mb-4 md:mt-16 md:mb-6 lg:mt-24 lg:mb-12">
        PRODUK TERLARIS
      </h1>

      {/* Carousel best product map */}
      <Carousel
        responsive={responsive}
        ssr
        infinite
        autoPlay
        autoPlaySpeed={2500}
        rewind
        rewindWithAnimation
        arrows={false}
        removeArrowOnDeviceType={["mobile"]}
        containerClass="relative flex"
        itemClass="px-2"
      >
        {dataHome.bestProduct.map((item, index) => (
          <div key={index}>
            <div className="group overflow-hidden cursor-pointer relative">
              <Image
                src={item.imageUrl}
                className="relative object-cover"
                alt={item.name}
                width={700}
                height={475}
                priority
              />
              <div className="absolute inset-0 flex justify-center items-center bg-black opacity-60 translate-x-full group-hover:translate-x-0 transition-transform duration-500 ease-in-out">
                <Link href="/produk">
                  <p className="cursor-pointer text-white hover:text-yellow">
                    Detail
                  </p>
                </Link>
              </div>
            </div>
            <h1 className="font-nunito text-center mt-2.5 md:mt-5 lg:mt-7 font-medium sm:text-2xl lg:text-3xl xl:text-4xl hover:text-orange cursor-pointer duration-200">
              {item.name}
            </h1>
          </div>
        ))}
      </Carousel>

      <div className="flex flex-col items-center mt-4 md:mt-7">
        <Button
          isArrow
          text="PRODUK LAINNYA"
          path="/produk"
          className="mx-auto py-5"
        />
      </div>
    </div>
  );
}
