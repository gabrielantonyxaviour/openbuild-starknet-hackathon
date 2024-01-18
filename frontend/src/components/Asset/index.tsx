import Image from "next/image";
import React, { useEffect, useState } from "react";
import GameImage from "../Game/GameImage";

export default function Asset({
  address,
  tokenId,
}: {
  address: string;
  tokenId: string;
}) {
  const [fetchedAsset, setFetchedAsset] = useState<any>({
    name: "Sword",
    image: "/sword.png",
    gameName: "Fate of the Dragon",
    maxMintQuantity: "0",
    currentMint: "10",
    yourBalance: "0",
    desc: "Can be used to recruit new heroes in your army",
    price: "10",
    createdAt: "2021-10-03T15:00:00.000Z",
  });
  useEffect(() => {
    console.log("HIIII");
  }, []);

  return (
    <div className=" ml-[200px] mt-[50px]">
      <div className="flex justify-between w-full">
        <div className="w-[55%]">
          <p className="font-logo font-semibold text-[#6BFFF7] text-2xl">
            {fetchedAsset.name}
          </p>
          <Image src={"/three.png"} width={100} height={100} alt="three" />
          <p className="font-bold text-xl text-[#FAFB63] mt-10 ml-2 mb-1">
            Game Starknet Address
          </p>
          <input
            type="text"
            placeholder=""
            className="font-theme ml-2 font-semibold placeholder:text-[#6c6f70] text-sm placeholder:text-base bg-[#25272b] border border-[#25272b] focus:border-[#6BFFF7] my-1 pl-6 text-white p-2 rounded-xl focus:outline-none w-full  flex-shrink-0 mr-2 "
            value={address}
            disabled={true}
          ></input>
          <div className="flex justify-between">
            <div className="w-[45%]">
              <p className="font-bold text-xl text-[#FAFB63] mt-10 ml-2 mb-1">
                Token Id
              </p>
              <input
                type="text"
                placeholder=""
                className="font-theme ml-2 font-semibold placeholder:text-[#6c6f70] text-sm placeholder:text-base bg-[#25272b] border border-[#25272b] focus:border-[#6BFFF7] my-1 pl-6 text-white p-2 rounded-xl focus:outline-none  w-full flex-shrink-0 mr-2 "
                value={tokenId}
                disabled={true}
              ></input>
            </div>
            <div className="w-[45%]">
              <p className="font-bold text-xl text-[#FAFB63] mt-10 ml-2 mb-1">
                Created At
              </p>
              <input
                type="text"
                placeholder=""
                className="font-theme  font-semibold placeholder:text-[#6c6f70] text-sm placeholder:text-base bg-[#25272b] border border-[#25272b] focus:border-[#6BFFF7] my-1 pl-6 text-white p-2 rounded-xl focus:outline-none  w-full flex-shrink-0 mr-2"
                value={new Date(fetchedAsset.createdAt).toLocaleDateString(
                  undefined,
                  {
                    day: "numeric",
                    month: "long",
                    year: "numeric",
                  }
                )}
                disabled={true}
              ></input>
            </div>
          </div>
          <p className="font-bold text-xl text-[#FAFB63] mt-10 ml-2 mb-1">
            Description
          </p>
          <textarea
            placeholder=""
            disabled={true}
            className="font-theme ml-2 font-semibold placeholder:text-[#6c6f70] text-sm placeholder:text-base bg-[#25272b] border border-[#25272b] focus:border-[#6BFFF7] my-1 pl-6 text-white p-2 rounded-xl focus:outline-none  w-full flex-shrink-0 mr-2 "
            value={fetchedAsset.desc}
          ></textarea>
          <div className="flex justify-between">
            <div className="w-[45%]">
              <p className="font-bold text-xl text-[#FAFB63] mt-10 ml-2 mb-1">
                Current Mint Amount
              </p>
              <input
                type="text"
                placeholder=""
                className="font-theme ml-2 font-semibold placeholder:text-[#6c6f70] text-sm placeholder:text-base bg-[#25272b] border border-[#25272b] focus:border-[#6BFFF7] my-1 pl-6 text-white p-2 rounded-xl focus:outline-none  w-full flex-shrink-0 mr-2 "
                value={fetchedAsset.currentMint}
                disabled={true}
              ></input>
            </div>
            <div className="w-[45%]">
              <p className="font-bold text-xl text-[#FAFB63] mt-10 ml-2 mb-1">
                Maximum Mint Amount
              </p>
              <input
                type="text"
                placeholder=""
                className="font-theme  font-semibold placeholder:text-[#6c6f70] text-sm placeholder:text-base bg-[#25272b] border border-[#25272b] focus:border-[#6BFFF7] my-1 pl-6 text-white p-2 rounded-xl focus:outline-none  w-full flex-shrink-0 mr-2"
                value={
                  fetchedAsset.maxMintQuantity == "0"
                    ? "Unlimited"
                    : fetchedAsset.maxMintQuantity
                }
                disabled={true}
              ></input>
            </div>
          </div>
          <div className="flex justify-between mb-10">
            <div className="w-[45%]">
              <p className="font-bold text-xl text-[#FAFB63] mt-10 ml-2 mb-1">
                Your Balance
              </p>
              <input
                type="text"
                placeholder=""
                className="font-theme ml-2 font-semibold placeholder:text-[#6c6f70] text-sm placeholder:text-base bg-[#25272b] border border-[#25272b] focus:border-[#6BFFF7] my-1 pl-6 text-white p-2 rounded-xl focus:outline-none  w-full flex-shrink-0 mr-2 "
                value={fetchedAsset.yourBalance}
                disabled={true}
              ></input>
            </div>
            <div className="w-[45%] h-full mt-auto flex justify-center">
              <button
                className="bg-[#6BFFF7] text-black font-semibold text-md px-3 py-2  rounded-md "
                onClick={() => {
                  // Open purchase asset modal
                }}
              >
                Purhase Asset
              </button>
            </div>
          </div>
        </div>
        <div className="w-[45%]">
          <GameImage image={fetchedAsset.image} />
        </div>
      </div>
    </div>
  );
}
