import dataHome from "@/data/home.json";

export default function HomePortfolio() {
    return (
        <div className="mx-5 md:mx-12 lg:mx-24 my-6 lg:my-16 custom-display">
            <h1 className="font-nunito font-bold text-2xl md:text-3xl lg:text-[40px] text-center mb-4  md:mb-6  lg:mb-8">PORTFOLIO KAMI</h1>
            <video src={dataHome.portfolio.videos[0].videoUrl} autoPlay loop muted className=" w-full lg:w-4/6 mx-auto" ></video>
        </div>
      )
}