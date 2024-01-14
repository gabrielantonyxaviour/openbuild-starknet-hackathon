"use client";
import React, { useEffect } from "react";

import dynamic from "next/dynamic";

import { useAccount } from "@starknet-react/core";
import { useRouter } from "next/router";
const ConnectModal = dynamic(() => import("./modals/ConnectModal"), {
  ssr: false,
});

export default function ConnectButton() {
  const router = useRouter();
  const { address } = useAccount();
  const [openConnectModal, setOpenConnectModal] = React.useState(false);

  useEffect(() => {
    if (address) {
      console.log("address: ", address);
      router.push("/assets");
    }
  }, [address]);
  return (
    <>
      {openConnectModal && (
        <ConnectModal
          closeModal={() => {
            setOpenConnectModal(false);
          }}
        />
      )}
      <button
        className="mt-20 bg-gradient-to-r from-[#6BFFF7] to-[#FAFB63] rounded-md p-3 font-bold italic text-lg text-black"
        onClick={() => {
          console.log("open connect modal");
          setOpenConnectModal(true);
        }}
      >
        CONNECT WALLET
      </button>
    </>
  );
}
