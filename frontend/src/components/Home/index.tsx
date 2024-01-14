import React from "react";
import Sidebar from "../Sidebar";
import Image from "next/image";
import Hero from "./Hero";

export default function Home() {
  return (
    <div>
      <Sidebar />
      <Hero />
    </div>
  );
}
