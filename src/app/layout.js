import "./globals.css";
import Header from "@/components/shared/Navbar";
import Footer from "@/components/shared/Footer";
import { Inter } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  title: "MV The Crown — Luxury River Cruises from Khulna to Sundarbans",
  description: "Experience luxury river cruises in Bangladesh with MV The Crown from Khulna to the Sundarbans. Book your luxury Sundarbans cruise with premium cabins and easy payment options.",
  keywords: [
    "MV The Crown",
    "Luxury river cruise Bangladesh",
     "Sundarban Ships",
    "Ships in Sundarban",
    "Best ship of Sundarban",
    "Sundarban ship booking",
    "Sundarban ship rent",
    "Sundarban ship ticket price",
    "Sundarban booking online",
    "Sundarban ship package",
    "Khulna Sundarbans cruise",
    "Sundarbans luxury tour",
    "Sundarbans cruise booking",
    "MV The Crown booking",
    "Bangladesh cruise ship",
    "Luxury cruise Sundarbans",
    "River cruise Bangladesh",
    "Book Sundarbans tour",
    "MV The Crown ticket price",
    "MV The Crown schedule",
    "Sundarbans river tour",
    "Premium cruise Bangladesh",
    "Couple cabin Sundarbans cruise",
    "Family cabin Sundarbans tour",
    "MV The Crown payment options",
    "Sundarbans travel package",
    "Khulna river cruise",
    "Luxury cruise ship from Khulna to Sundarbans",
    "Best river cruise in Bangladesh",
    "How to book MV The Crown ticket online",
    "MV The Crown package price",
    "Sundarbans cruise for couples and families",
    "MV The Crown booking via bKash or Nagad",
    "Sundarbans 3-day 2-night luxury tour",
    "River cruise Khulna to Sundarbans ticket"

  ],
  openGraph: {
    title: "MV The Crown — Luxury River Cruises",
    description: "Experience luxury river cruises from Khulna to the Sundarbans with premium cabins and easy booking.",
    url: "domain.com", //domain url hobe 
    siteName: "MV The Crown",
    images: [
      {
        url: "ekta image url hobe, jeta social media te domain share korle show korbe",
        width: 1200,
        height: 630,
        alt: "MV The Crown luxury cruise"
      }
    ],
    locale: "en_US",
    type: "website"
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      {/* Apply Inter font using className */}
      <body className={`${inter.className} antialiased`}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
