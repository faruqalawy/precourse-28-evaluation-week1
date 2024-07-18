import Image from "next/image";

import dataProfil from "@/data/profil.json";

import crewImage from "@/public/images/1.webp";

export default function AboutVision() {
  // Defining the content to be reused in two different places
  const content = (
    <div className="md:mt-8 lg:mt-0">
      <div>
        <h1 className="text-2xl md:text-4xl text-orange-light font-bold mt-3">
          Visi Kami
        </h1>
        <p className="md:text-xl font-openSans font-light md:mt-1">
          {dataProfil.visi}
        </p>
      </div>
      <div className="md:mt-6 mb-20">
        <h1 className="text-2xl md:text-4xl text-orange-light font-bold mt-3">
          Misi Kami
        </h1>
        <ol type="1" className="ml-5">
          {/* Mapping through the mission items and rendering each one as a list item */}
          {dataProfil.misi.map((item, index) => (
            <li
              className="md:text-xl font-openSans font-light list-disc"
              key={index}
            >
              {item.desc}
            </li>
          ))}
        </ol>
      </div>
    </div>
  );

  return (
    <>
      {/* Displaying content with an image for smaller screens (lg:hidden) */}
      <div className="mt-12 md:mt-20 lg:hidden">
        <Image src={crewImage} alt="lumat-team" width={1000} height={800} />
        {content}
      </div>

      {/* Displaying content without an image for larger screens (hidden lg:block) */}
      <div className="hidden mt-8 lg:block">{content}</div>
    </>
  );
}
