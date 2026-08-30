import { Plus_Jakarta_Sans, Inter } from "next/font/google";
import "./globals.css";

const jakarta = Plus_Jakarta_Sans({
  variable: "--font-jakarta",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata = {
  title: "10X International | Premium Commodities Import & Export",
  description:
    "10X International is a leading import-export company. We import quality products from China to India and export agricultural, industrial & construction products to UAE, Africa & South Asia.",
  keywords: "import export, international trade, agricultural export, industrial products, China import, UAE export, Africa trade, South Asia",
};

import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import PageLoader from "@/components/PageLoader";

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${jakarta.variable} ${inter.variable}`}>
      <body>
        <PageLoader />
        {children}
        <FloatingWhatsApp />
      </body>
    </html>
  );
}
