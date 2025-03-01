import { Nunito, Noto_Sans_TC, Pacifico, Inter } from "next/font/google";

export const notoSansTc = Noto_Sans_TC({
  variable: "--font-noto-sans-tc",
  subsets: ["latin"],
  display: "swap",
});

export const nunito = Nunito({
  variable: "--font-nunito",
  subsets: ["latin"],
  display: "swap",
});

// for english writing
export const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

// for LOGO
export const pacifico = Pacifico({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
});
