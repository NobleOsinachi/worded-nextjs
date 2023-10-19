import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Header from "@/app/components/Header";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Worded: Elevate Your Vocabulary with an Engaging Word Learning App",
  description:
    "Boost your word prowess with an immersive game of synonyms and antonyms. Explore Worded, your gateway to expanding your lexicon effortlessly.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body data-class={inter.className}>
        <header>
          <Header />
        </header>

        <main>{children}</main>
      </body>
    </html>
  );
}
