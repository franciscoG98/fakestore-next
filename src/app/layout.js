import { Inter } from "next/font/google";
import "./globals.css";
import { Searchbar } from "@/components/searchbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "FakeStore - Nextjs",
  description: "FakeStore - Nextjs, shadcn/ui and tailwind",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
          <Searchbar />
          <main>{children}</main>
        </body>
    </html>
  );
}
