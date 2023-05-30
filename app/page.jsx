'use client'
import AppMovil from "@/components/AppMovil";
import Conductor from "@/components/Conductor";
import Footer from "@/components/Footer";
import Intro from "@/components/Intro";
import Servicio from "@/components/Servicio";
import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    var Tawk_API = Tawk_API || {};
    var Tawk_LoadStart = new Date();
    (function () {
      var s1 = document.createElement('script');
      var s0 = document.getElementsByTagName('script')[0];
      s1.async = true;
      s1.src = 'https://embed.tawk.to/6456f01d6a9aad4bc5794e4a/1gvppjt20';
      s1.charset = 'UTF-8';
      s1.setAttribute('crossorigin', '*');
      s0.parentNode.insertBefore(s1, s0);
    })();
  }, []);
  return (
    <main>
      <Intro/>
      <Servicio/>
      <Conductor/>
      <AppMovil/>
      <Footer/>
    </main>
  )
}
