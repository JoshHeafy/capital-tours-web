"use client";
import Loader from "@/components/Loader";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function page() {
  const router = useRouter();

  useEffect(() => {
    router.push("https://capital-tours-admin.vercel.app");
  }, []);
  return <Loader />;
}
