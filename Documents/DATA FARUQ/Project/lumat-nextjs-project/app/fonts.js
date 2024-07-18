import { Nunito, Barlow, Open_Sans } from "next/font/google";

const nunito = Nunito({ subsets: ["latin"], variable: "--font-nunito", weight: ["300", "400", "500", "600", "700", "800", "900"] });
const barlow = Barlow({ subsets: ["latin"], variable: "--font-barlow", weight: ["300", "400", "500", "600", "700", "800", "900"] });
const openSans = Open_Sans({ subsets: ["latin"], variable: "--font-open-sans", weight: ["300", "400", "500", "600", "700", "800"] });

export { nunito, barlow, openSans };