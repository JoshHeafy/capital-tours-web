"use client";
import AppMovil from "@/components/AppMovil";
import Conductor from "@/components/Conductor";
import Footer from "@/components/Footer";
import Intro from "@/components/Intro";
import Servicio from "@/components/Servicio";

export default function Home() {
  return (
    <main>
      <Intro />
      <Servicio />
      <Conductor />
      <AppMovil />
      <Footer />
    </main>
  );
}
