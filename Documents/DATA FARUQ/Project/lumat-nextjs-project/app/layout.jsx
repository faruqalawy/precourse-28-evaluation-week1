import "./globals.css";
import { nunito, barlow, openSans } from "./fonts.js";

import { SmallNavProvider } from "@/context/SmallNavContext";
import MainHeader from "@/components/Header/MainHeader";
import MainFooter from "@/components/Footer/MainFooter";
import WhatsappButton from "@/components/Other/WhatsappButton";

export const metadata = {
  title: "Lumat website",
  description:
    "Lumat bergerak dalam bidang food and beverages, menyediakan berbagai jenis produk makanan rumahan yang bisa disajikan dengan cepat, memiliki rasa yang lezat, dan packaging yang aman dan bersih. Kami berkomitmen untuk kepuasan pelanggan dengan produk bermutu, harga bersaing, dan pelayanan terbaik. Lumat, 'Lumbung Makanan Nikmat' untuk kelezatan yang tak terlupakan.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${nunito.variable} ${barlow.variable} ${openSans.variable}`}>
      <body>
        <SmallNavProvider>
          <header>
            <MainHeader />
          </header>
          <main>
            {children}
            <WhatsappButton />
          </main>
          <footer>
            <MainFooter />
          </footer>
        </SmallNavProvider>
      </body>
    </html>
  );
}

