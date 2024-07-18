'use client';

import { useContext } from "react";

import { SmallNavContext } from "@/context/SmallNavContext";
import dataTestimonial from "@/data/testimonial.json";
import TestimonialItem from "./TestimonialItem";

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

export default function TestimonialDescription() {
  const responsive = {
    allDisplay: {
      breakpoint: { max: 10000, min: 0 },
      items: 1,
    },
  };

  const { isSmallNavOpen } = useContext(SmallNavContext);

  return (
    <>
      {isSmallNavOpen ? (
        <>
          {dataTestimonial.testimonials.map((testimonial, index) => (
            <TestimonialItem
              key={index}
              id={index}
              name={testimonial.name}
              imageUrl={testimonial.imageUrl}
              testimonial={testimonial.testimonial}
            />
          ))}
        </>
      ) : (
        <Carousel
          responsive={responsive}
          autoPlay={true}
          autoPlaySpeed={2500}
          infinite={true}
        >
          {dataTestimonial.testimonials.map((testimonial, index) => (
            <TestimonialItem
              key={index}
              id={index}
              name={testimonial.name}
              imageUrl={testimonial.imageUrl}
              testimonial={testimonial.testimonial}
            />
          ))}
        </Carousel>
      )}
    </>
  )
}
