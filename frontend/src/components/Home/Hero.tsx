import Image from "next/image";
import React from "react";
import ConnectButton from "../ConnectButton";

export default function Hero() {
  return (
    <div>
      <div
        className="fixed w-full h-full top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex flex-col justify-center items-center"
        style={{ zIndex: 10 }}
      >
        <p className="text-center font-bold font-logo my-6 text-7xl italic text-[#FAFB63] ">
          StarkGG
        </p>
        <div className="flex">
          <p className="font-semibold text-xl italic ">
            In Game Purchases Infrastructure for &nbsp;&nbsp;
          </p>
          <Image
            src={"/starknet.webp"}
            width={140}
            height={100}
            alt="starknet"
          />
        </div>
        <ConnectButton />
      </div>

      <video width="100%" height="100%" autoPlay loop muted playsInline>
        <source src="/landing.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
}
