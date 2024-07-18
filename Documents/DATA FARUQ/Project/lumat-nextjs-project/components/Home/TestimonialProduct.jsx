import Image from "next/image";

import Button from "../Other/Button";

import backgroundImage from "@/public/images/bg-testimonial.png";
import star from "@/public/icons/star.svg";
import quoteLeft from "@/public/icons/quote-left.svg";
import quoteRight from "@/public/icons/quote-right.svg";

const Testimonial = ({ imageUrl, name, status, testimonial }) => {
  const renderStars = () => {
    return Array.from({ length: 5 }, (_, i) => (
      <Image key={i} src={star} alt="star" width={32} height={32} className="w-8 sm:w-10 xl:w-12" />
    ));
  };

  const content = (
    <div className="custom-display flex flex-col justify-center items-center lg:grid lg:grid-cols-2 py-8 md:py-14  ">
      <div className="text-center flex flex-col items-center">
      <Image
          src={imageUrl}
          alt="testimonial"
          className="rounded-full max-w-[70vw] md:max-w-[60vw] border-[10px] border-white lg:max-w-[35vw]"
          width={400}
          height={400}
        />
        <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold pt-1">
          {name}
        </h1>
        <p className=" sm:text-lg  font-bold">
          {status}
        </p>
      </div>

      <div>
      <Image
          src={quoteLeft}
          alt="quote-left"
          className="opacity-20 w-10 pb-1 md:w-12 lg:w-16"
          width={40}
          height={40}
        />
        <h1 className="font-openSans lg:text-lg font-light sm:max-w-[70vw]">
          {testimonial}
        </h1>
        <Image
          src={quoteRight}
          alt="quote-right"
          className="opacity-20 w-10 ml-auto pb-1 md:w-12 lg:w-16"
          width={40}
          height={40}
        />
        <div className="flex justify-center">{renderStars()}</div>
      </div>

      <div></div>

      <div className="ml-auto pt-5 lg:pt-0">
        <Button isArrow text="Selengkapnya" path="/testimonial" className="bg-white hover:bg-grey-light text-orange" isWhite />
      </div>
    </div>
  );

  return (
    <>
      <div className="bg-orange-light text-white mt-14 font-nunito relative lg:hidden">
        {content}
      </div>
      <div
        className="hidden lg:block text-white mt-14 font-nunito relative xl:bg-cover"
        style={{
          backgroundImage: `url(${backgroundImage.src})`,
          backgroundRepeat: "no-repeat",
        }}
      >
        {content}
      </div>
    </>
  );
};

export default Testimonial;
