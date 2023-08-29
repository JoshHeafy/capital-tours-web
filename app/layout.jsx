import NavBar from "@/components/NavBar";
import "@/styles/css/sass/style.css";
import Head from "next/head";
import "material-icons/iconfont/material-icons.css";
import "@/public/icons/boxicons-2.1.4/css/boxicons.min.css";

export const metadata = {
  title: "CapitalTours",
  description: "Capital tours",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
        <link rel="shortcut icon" href="@/public/favicon.ico" />
        <link
          href="https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@100;200;300;400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
      </Head>
      <body>
        <NavBar />
        {children}
      </body>
    </html>
  );
}
