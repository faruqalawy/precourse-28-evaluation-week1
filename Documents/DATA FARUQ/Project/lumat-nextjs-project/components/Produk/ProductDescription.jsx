export default function ProductDescription({ item }) {
  const numberOfPrices = item.pricing.length;
  const pricingGridStyle = numberOfPrices <= 2 ? "grid-rows-2" : "grid-rows-3";
  const pricingGridStyle2 = numberOfPrices <= 2 ? "" : "grid-cols-2";

  return (
    <div className="mt-3 md:mt-6 l:m-0">
      <h1 className="text-center l:text-left font-bold text-xl md:text-2xl">
        {item.name}
      </h1>
      <p className="text-center l:text-left font-openSans font-light md:text-lg lg:text-lg mb-4 md:mb-6">
        {item.description}
      </p>

      <div
        className={`p-4 bg-light-yellow border-2 border-salted-yellow font-openSans grid md:grid-rows-5 gap-1.5 divide-y-[1.5px] divide-grey-light ${pricingGridStyle}`}
      >
        <div
          className={`pricing grid grid-rows-2 ${pricingGridStyle2} md:grid-rows-1 md:grid-cols-3 md:row-span-1`}
        >
          {item.pricing.map((price, index) => (
            <div key={index}>
              <h2 className="font-semibold">{price.name}</h2>
              <p className="font-light">{price.desc}</p>
            </div>
          ))}
        </div>
        <div className="pt-2 md:row-span-2">
          <h2 className="font-semibold">Informasi Produk</h2>
          {Object.values(item.information).map((information, index) => (
            <p className="font-light" key={index}>
              - {information}
            </p>
          ))}
        </div>
        <div className="pt-2 md:row-span-2">
          <h2 className="font-semibold">Pilihan Cara Penyajian</h2>
          {Object.values(item.servings).map((serving, index) => (
            <p className="font-light" key={index}>
              - {serving}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
}
