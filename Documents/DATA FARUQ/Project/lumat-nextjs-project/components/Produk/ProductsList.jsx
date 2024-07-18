import dataProducts from "@/data/products.json";

import ProductDescription from "./ProductDescription";
import ImagesCarousel from "./ImagesCarousel";

export default function ProductsList() {
  return (
    <>
      <h1 className="font-bold text-center text-xl mt-6 mb-3 md:mt-12 md:mb-6 lg:mt-20 lg:mb-10 sm:text-2xl md:text-3xl xl:text-5xl">
        {dataProducts.tagline}
      </h1>
      {dataProducts.products.map((item, index) => (
        <div
          key={item.id}
          className={`pb-12 lg:pb-24 ${
            index < 5 ? "border-b-[1px] border-light-black" : ""
          } ${index > 0 ? "pt-12 lg:pt-24" : ""}`}
        >
          <div className="lg:grid lg:grid-cols-2 lg:gap-8">

            {/* Render carousel */}
            <div className={`${index % 2 == 0 ? "lg:order-0" : "lg:order-1"}`}>
              <ImagesCarousel item={item} />
            </div>

            {/* Render description */}
            <ProductDescription item={item} />
          </div>
        </div>
      ))}
    </>
  );
}
