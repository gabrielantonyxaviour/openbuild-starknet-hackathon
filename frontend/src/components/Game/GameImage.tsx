import Image from "next/image";
import React from "react";

export default function GameImage({ image }: { image: string }) {
  return (
    <div className="w-full h-full flex flex-col justify-center items-center ">
      <Image
        src={image}
        width={400}
        height={400}
        alt="three"
        className=" rounded-2xl"
      />
    </div>
  );
}
