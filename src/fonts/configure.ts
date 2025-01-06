import { Nunito, Noto_Sans_TC, Pacifico } from "next/font/google";

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

// for LOGO
export const pacifico = Pacifico({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
});
