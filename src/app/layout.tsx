import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { notoSansTc } from "@/fonts/configure";
import { defaultMetadata } from "./config/metadata";
import { loadAllMDX } from "@/utils/mdxGlobalCache";
import { redirect } from "next/navigation";

export const metadata: Metadata = defaultMetadata;

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  try {
    await loadAllMDX();
  } catch {
    redirect("/not-found");
  }

  return (
    <html lang="zh">
      <body className={`${notoSansTc.className}`}>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
