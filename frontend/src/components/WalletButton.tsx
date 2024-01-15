import { useAccount } from "@starknet-react/core";
import React, { useState } from "react";

export default function WalletButton({
  address,
  onClick,
}: {
  address: string;
  onClick: () => void;
}) {
  return (
    <div className="mr-8 ">
      <button
        className="mt-3 bg-gradient-to-r from-[#6BFFF7] to-[#FAFB63] rounded-md p-3 font-bold italic text-md text-black desktop:w-[200px] desktop:text-xl"
        onClick={onClick}
      >
        {address && address.slice(0, 6) + "..." + address.slice(-4)}
      </button>
    </div>
  );
}
