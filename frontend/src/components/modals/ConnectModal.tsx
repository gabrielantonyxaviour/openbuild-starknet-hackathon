import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClose, faUmbrella } from "@fortawesome/free-solid-svg-icons";
import Image from "next/image";
import { Connector, useConnect } from "@starknet-react/core";
export default function ConnectModal({
  closeModal,
}: {
  closeModal: () => void;
}) {
  const { connect, connectors } = useConnect();
  return (
    <>
      <div
        className="fixed top-0 left-0 w-screen h-screen bg-black opacity-50 z-40"
        onClick={closeModal}
      ></div>
      <div className="fixed top-[50%] left-[50%] -translate-y-1/2 -translate-x-1/2 bg-gradient-to-r from-[#6BFFF7] to-[#FAFB63] p-4 z-50 opacity-100 w-[28%] rounded-lg">
        <div className="flex justify-between mx-2 mt-2 mb-4">
          <p className="text-black font-semibold text-xl">Connect Wallet</p>
          <FontAwesomeIcon
            icon={faClose}
            className="text-xl font-bold text-black my-auto"
            onClick={closeModal}
          />
        </div>
        {connectors.map((connector: Connector) => (
          <button
            className="flex justify-center space-x-4 my-3 w-full hover:bg-black rounded-xl text-black hover:text-white"
            key={connector.id}
            onClick={() => connect({ connector })}
            disabled={!connector.available()}
          >
            <Image
              src={connector.name == "Braavos" ? "/bravoos.png" : "/argent.png"}
              width={50}
              height={50}
              alt="bravoos"
            />
            <p className=" font-semibold  my-auto">{connector.name} Wallet</p>
          </button>
        ))}
      </div>
    </>
  );
}
