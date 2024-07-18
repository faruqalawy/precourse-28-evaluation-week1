'use client';

import Image from "next/image";

import dataHome from "@/data/home.json";
import TestimonialProduct from "./TestimonialProduct";

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

export default function TestimonialCarousel() {
    const responsive = {
        allDisplay: {
          breakpoint: { max: 10000, min: 0 },
          items: 1,
        }
      };

      return (
        <Carousel
    responsive={responsive}
      autoPlay={true}
      autoPlaySpeed={2500}
      infinite={true}
    >
      {dataHome.testimonials.map((item, index) => (
        <TestimonialProduct key={index} name={item.name} imageUrl={item.imageUrl} status={item.status} testimonial={item.testimonial} />
      ))}
    </Carousel>
      )
}