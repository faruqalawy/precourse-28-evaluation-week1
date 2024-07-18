import Image from "next/image";

import testiImage1 from "@/public/images/testi-1.webp";
import testiImage2 from "@/public/images/testi-2.webp";
import testiImage3 from "@/public/images/testi-woman.webp";

import star from "@/public/icons/star-yellow.svg";

export default function TestimonialItem({ imageUrl, name, id, testimonial }) {
  const testiImage = [testiImage1, testiImage2, testiImage3];

  const renderStars = () => {
    return Array.from({ length: 5 }, (_, i) => (
      <Image
        key={i}
        src={star}
        alt="star"
        width={32}
        height={32}
        className="w-8 sm:w-10 xl:w-12"
      />
    ));
  };

  return (
    <div key={id} className="lg:flex">
      {/*code below is for Image in small and medium display*/}
      <div className="text-center flex flex-col items-center lg:hidden">
        <Image
          src={imageUrl}
          alt="testimonial"
          className="rounded-full max-w-[70vw] md:max-w-[60vw]  border-[10px] border-white"
          priority
          width={466}
          height={625}
        />
        <h1 className="text-xl sm:text-2xl font-medium pt-1 lg:hidden">
          Happy Customer
        </h1>
        <div className="flex justify-center my-3 lg:hidden">{renderStars()}</div>
      </div>

      {/*code below is for Image in large display*/}
      <div className=" hidden lg:flex">
        <div className="col-auto" style={{ marginRight: 30 }}>
          <div className="" style={{ margin: `30px 0 0 30px` }}>
            <Image
              src={testiImage[id]}
              alt={`Testimonial ${id}`}
              style={{ zIndex: 1 }}
              priority
              width={466}
              height={625}
            />
          </div>
        </div>
      </div>

      <div className="flex flex-col justify-center items-center lg:items-start lg:gap-3">
        <h1 className="hidden lg:block lg:text-4xl font-medium pt-1">
          Happy Customer
        </h1>
        <div className="hidden lg:flex">{renderStars()}</div>
        <h1 className="font-openSans text-center lg:text-left lg:text-lg font-light sm:max-w-[70vw]">
          {testimonial}
        </h1>
        <p className="text-center lg:text-left lg:hidden font-light text-2xl md:text-3xl">
          {name}
        </p>
      </div>
    </div>
  );
}
