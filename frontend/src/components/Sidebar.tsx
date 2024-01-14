import { faGamepad, faInbox } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useRouter } from "next/router";
import React, { useEffect } from "react";

export default function Sidebar({ selected }: { selected: boolean }) {
  const router = useRouter();

  return selected ? (
    <div className="fixed top-1/2 left-5 transform -translate-y-1/2 h-[200px] ">
      <button
        className="hover:bg-[#FAFB63] p-5 rounded-full flex hover:text-black text-white bg-black"
        onClick={() => {
          router.push("/games");
        }}
      >
        <FontAwesomeIcon icon={faGamepad} className="text-2xl" />
      </button>
      <button
        className="bg-[#6BFFF7] p-5 rounded-full flex text-black mt-6 "
        disabled={true}
      >
        <FontAwesomeIcon icon={faInbox} className="text-2xl" />
      </button>
    </div>
  ) : (
    <div className="fixed top-1/2 left-5 transform -translate-y-1/2 h-[200px] ">
      <button
        className="bg-[#6BFFF7] p-5 rounded-full flex text-black "
        disabled={true}
      >
        <FontAwesomeIcon icon={faGamepad} className="text-2xl" />
      </button>

      <button
        className="hover:bg-[#FAFB63] p-5 rounded-full flex hover:text-black text-white bg-black mt-6 "
        onClick={() => {
          router.push("/assets");
        }}
      >
        <FontAwesomeIcon icon={faInbox} className="text-2xl" />
      </button>
    </div>
  );
}
