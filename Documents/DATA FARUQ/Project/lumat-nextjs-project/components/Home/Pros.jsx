import Image from "next/image";
import dataHome from "@/data/home.json";

import tastyIcon from "@/public/icons/ic_tasty.svg";
import instantIcon from "@/public/icons/ic_instant.svg";
import hygieneIcon from "@/public/icons/ic_hygiene.svg";

const icons = [tastyIcon, instantIcon, hygieneIcon];

export default function Pros() {
  return (
    <div className="custom-display">
      <div className="shadow-md flex-col rounded-md z-2 bg-white mt-[-15px]">
        <h1 className="font-nunito font-bold text-2xl md:text-3xl lg:text-[40px] text-center py-5 md:py-8">
          KENAPA LUMAT?
        </h1>
        <div className="md:grid flex flex-col md:grid-cols-3 gap-8 md:gap-0 pb-5 md:pb-7">
          {dataHome.pros.map((item, index) => (
            <div key={index} className="flex flex-col items-center">
              <Image
                src={item.imageUrl}
                alt={item.name}
                width={80}
                height={80}
                className="lg:w-28 lg:h-28"
              />
              <h1 className="font-nunito font-semibold text-2xl lg:text-3xl mt-2.5">
                {item.name}
              </h1>
              <p className="font-openSans text-center mx-6 xl:text-lg">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
