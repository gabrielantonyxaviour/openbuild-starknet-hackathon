import { faGamepad, faInbox } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

export default function Sidebar() {
  const router = useRouter();
  const pathname = usePathname();
  return (
    <div className="fixed top-1/2 left-5 transform -translate-y-1/2 h-[200px] ">
      <button
        className={
          pathname == "/assets" || pathname != "/games"
            ? "hover:bg-[#FAFB63] p-5 rounded-full flex hover:text-black text-white bg-black"
            : "bg-[#6BFFF7] p-5 rounded-full flex text-black "
        }
        onClick={() => {
          router.push("/games");
        }}
        disabled={pathname == "/games"}
      >
        <FontAwesomeIcon icon={faGamepad} className="text-2xl" />
      </button>
      <button
        className={
          pathname == "/assets"
            ? "bg-[#6BFFF7] p-5 rounded-full flex text-black mt-6 "
            : "hover:bg-[#FAFB63] p-5 rounded-full flex hover:text-black text-white bg-black mt-6 "
        }
        disabled={pathname == "/assets"}
        onClick={() => {
          router.push("/assets");
        }}
      >
        <FontAwesomeIcon icon={faInbox} className="text-2xl" />
      </button>
    </div>
  );
}
