import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClose, faUmbrella } from "@fortawesome/free-solid-svg-icons";
import Image from "next/image";

export default function PurchaseAssetModal({
  token,
  address,
  tokenId,
  closeModal,
}: {
  token: any;
  address: string;
  tokenId: string;
  closeModal: () => void;
}) {
  const [quantity, setQuantity] = useState(0);
  return (
    <>
      <div
        className="fixed top-0 left-0 w-screen h-screen bg-black opacity-50 z-40"
        onClick={closeModal}
      ></div>
      <div className="fixed top-[50%] left-[50%] -translate-y-1/2 -translate-x-1/2 bg-[#FAFB63] p-4 z-50 opacity-100 w-[60%] rounded-lg">
        <div className="flex justify-between mx-2 mt-2 mb-4">
          <p className="text-black font-bold text-2xl">Purchase Asset</p>
          <FontAwesomeIcon
            icon={faClose}
            className="text-xl font-bold text-black my-auto"
            onClick={closeModal}
          />
        </div>
        <div className="mx-4 flex justify-between mb-4">
          <div className="w-[50%]">
            <p className="font-semibold  text-md text-black mt-6 ml-2">
              Game Name
            </p>
            <input
              type="text"
              placeholder=""
              className="font-theme ml-2 font-semibold placeholder:text-[#6c6f70]   text-md placeholder:text-base bg-[#9c9c9c] border border-2 border-white focus:bg-black text-white focus:border-[#6BFFF7] my-1 pl-6 text-white p-2 rounded-xl focus:outline-none  w-[90%] flex-shrink-0 mr-2  "
              value={token.gameName}
              disabled={true}
            ></input>
            <p className="font-semibold  text-md text-black mt-2 ml-2">
              Asset Name
            </p>
            <input
              type="text"
              placeholder=""
              className="font-theme ml-2 font-semibold placeholder:text-[#6c6f70]   text-md placeholder:text-base bg-[#9c9c9c] border border-2 border-white focus:bg-black text-white focus:border-[#6BFFF7] my-1 pl-6 text-white p-2 rounded-xl focus:outline-none  w-[90%] flex-shrink-0 mr-2  "
              value={token.name}
              disabled={true}
            ></input>
            <p className="font-semibold  text-md text-black mt-2 ml-2 ">
              Description
            </p>
            <textarea
              placeholder=""
              className="font-theme ml-2 font-semibold placeholder:text-[#6c6f70]   text-md placeholder:text-base bg-[#9c9c9c] border border-2 border-white focus:bg-black text-white focus:border-[#6BFFF7] my-1 pl-6 text-white p-2 rounded-xl focus:outline-none  w-[90%] flex-shrink-0 mr-2  "
              value={token.desc}
              disabled={true}
            ></textarea>
            <div className="mx-2 flex justify-between">
              <div className="w-[48%]">
                <p className="font-semibold  text-md text-black">
                  Current Mint
                </p>
                <input
                  type="text"
                  placeholder=""
                  className="font-theme font-semibold placeholder:text-[#6c6f70]   text-md placeholder:text-base bg-[#9c9c9c] border border-2 border-white focus:bg-black text-white focus:border-[#6BFFF7] my-1 pl-6 text-white p-2 rounded-xl focus:outline-none  w-[90%] flex-shrink-0   "
                  value={token.currentMint}
                  disabled={true}
                ></input>
              </div>
              <div className="w-[48%]">
                <p className="font-semibold   text-md text-black">
                  Maximum Mint
                </p>
                <input
                  type="text"
                  placeholder=""
                  className="font-theme font-semibold placeholder:text-[#6c6f70]   text-md placeholder:text-base bg-[#9c9c9c] border border-2 border-white focus:bg-black text-white focus:border-[#6BFFF7] my-1 pl-6 text-white p-2 rounded-xl focus:outline-none  w-[90%] flex-shrink-0   "
                  value={
                    token.maxMintQuantity == "0"
                      ? "Unlimited"
                      : token.maxMintQuantity
                  }
                  disabled={true}
                ></input>
              </div>
            </div>
          </div>
          <div className="w-[50%] flex flex-col justify-center items-center">
            <Image
              src={token.image}
              width={200}
              height={200}
              alt="asset image"
              className="rounded-xl"
            />
            <p className="text-md font-semibold text-black mt-6">
              Starknet Token Address
            </p>
            <p className="text-sm font-semibold text-[#9c9c9c]">
              {" "}
              {address && address.slice(0, 8) + "..." + address.slice(-6)}
            </p>
            <p className="text-md font-semibold text-black mt-3">Asset Id</p>
            <p className="text-sm font-semibold text-[#9c9c9c]">{tokenId}</p>
          </div>
        </div>

        <div className="flex justify-between w-[95%] mx-6">
          <div className="w-[50%]">
            <p className="text-center font-semibold text-black text-md">
              Quantity
            </p>
            <div className="flex justify-center">
              <button
                className="text-white hover:text-black bg-[#E41100] hover:bg-[#6BFFF7] px-4 py-2 h-full mr-4 my-auto rounded-lg"
                onClick={() => {
                  if (quantity! - 0) setQuantity(quantity - 1);
                }}
              >
                -
              </button>
              <input
                type="text"
                placeholder=""
                className="font-theme font-semibold placeholder:text-[#6c6f70]   text-md placeholder:text-base bg-[#9c9c9c] border border-2 border-white focus:bg-black text-white focus:border-[#6BFFF7] my-1  text-white p-2 rounded-xl focus:outline-none  text-center w-[20%] flex-shrink-0   "
                value={quantity}
                disabled={true}
              ></input>
              <button
                className="text-white hover:text-black bg-[#1ABD00] hover:bg-[#6BFFF7] px-4 py-2 h-full ml-4 my-auto rounded-lg"
                onClick={() => {
                  if (
                    token.maxMintQuantity == 0 ||
                    token.currentMint + quantity <= token.maxMintQuantity
                  ) {
                    setQuantity(quantity + 1);
                  }
                }}
              >
                +
              </button>
            </div>
          </div>
          <div className="w-[50%] flex justify-end mt-auto">
            <div className="mr-4">
              <p className="text-black font-semibold text-md">Total Price</p>
              <p className="text-[#9c9c9c] font-semibold ml-1  text-sm">
                {token.price * quantity} STARK
              </p>
            </div>
            <button className="bg-black text-white hover:bg-[#6BFFF7] hover:text-black font-semibold text-md px-3 py-2 rounded-md ">
              Purchase Asset
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
