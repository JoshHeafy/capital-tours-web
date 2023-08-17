import NavBar from "@/components/NavBar";
import { Inter } from "next/font/google";
import "@/styles/css/sass/style.css";
import Head from "next/head";
import "material-icons/iconfont/material-icons.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "CapitalTours",
  description: "Capital tours",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
        <link rel="shortcut icon" href="@/public/favicon.ico" />
      </Head>
      <body className={inter.className}>
        <NavBar />
        {children}
      </body>
    </html>
  );
}
