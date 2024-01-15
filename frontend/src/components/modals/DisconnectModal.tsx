import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClose, faUmbrella } from "@fortawesome/free-solid-svg-icons";
import Image from "next/image";
import { Connector, useDisconnect } from "@starknet-react/core";
import { useRouter } from "next/router";
export default function DisconnectModal({
  closeModal,
}: {
  closeModal: () => void;
}) {
  const { disconnect } = useDisconnect();
  const router = useRouter();
  return (
    <>
      <div
        className="fixed top-0 left-0 w-screen h-screen bg-black opacity-50 z-40"
        onClick={closeModal}
      ></div>
      <div className="fixed top-[50%] left-[50%] -translate-y-1/2 -translate-x-1/2 bg-gradient-to-r from-[#6BFFF7] to-[#FAFB63] p-4 z-50 opacity-100 w-[28%] rounded-lg">
        <div className="flex justify-end mx-2 mt-2 mb-4">
          <FontAwesomeIcon
            icon={faClose}
            className="text-xl font-bold text-black my-auto"
            onClick={closeModal}
          />
        </div>
        <button
          className="py-3 w-full hover:bg-black rounded-xl text-black hover:text-white"
          onClick={() => {
            disconnect();
            router.push("/");
          }}
        >
          <p className=" font-semibold  ">Disconnect Wallet</p>
        </button>
      </div>
    </>
  );
}
