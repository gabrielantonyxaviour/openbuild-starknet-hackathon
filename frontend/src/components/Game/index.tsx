import Image from "next/image";
import React, { useState } from "react";
import GameImage from "./GameImage";
import Assets from "./Assets";
import Activities from "./Activities";

export default function Game({ address }: { address: string }) {
  const [selected, setSelected] = useState(true);
  const [fetchedGame, setFetchedGame] = useState<any>({
    name: "Fate of the Dragon",
    image: "/fate.jpg",
    address:
      "0x0473b0e570e2a5b7107ec12de7189bd385195adbeee3e9de9337132780be4e9b",
    desc: "Fate of the Dragon is a real-time strategy game set in ancient China. Released in 2001, it features three factions vying for supremacy, incorporating historical elements and mythical aspects. Players build armies, manage resources, and engage in epic battles. The game's success lies in its strategic depth and captivating representation of Chinese history.",
    createdAt: "2021-10-03T15:00:00.000Z",
    assets: [
      {
        name: "Sword",
        tokenId: "1",
        desc: "Can be used to recruit new heroes in your army",
        quantityLimit: 0,
        price: 10,
        amountMinted: 231,
        image: "/sword.png",
      },
      {
        name: "Rage Potion",
        tokenId: "2",
        desc: "Increase attack and movement speed by 20%",
        quantityLimit: 0,
        price: 25,
        amountMinted: 99,
        image: "https://picsum.photos/200",
      },
    ],
  });
  return (
    <div className=" ml-[200px] mt-[50px]">
      <div className="flex justify-between w-full">
        <div className="w-[55%]">
          <p className="font-logo font-semibold text-[#6BFFF7] text-2xl">
            {fetchedGame.name}
          </p>
          <Image src={"/three.png"} width={100} height={100} alt="three" />
          <p className="font-bold text-xl text-[#FAFB63] mt-10 ml-2 mb-1">
            Starknet Address
          </p>
          <input
            type="text"
            placeholder=""
            className="font-theme ml-2 font-semibold placeholder:text-[#6c6f70] text-sm placeholder:text-base bg-[#25272b] border border-[#25272b] focus:border-[#6BFFF7] my-1 pl-6 text-white p-2 rounded-xl focus:outline-none w-full  flex-shrink-0 mr-2 "
            value={fetchedGame.address}
            disabled={true}
          ></input>

          <p className="font-bold text-xl text-[#FAFB63] mt-10 ml-2 mb-1">
            Description
          </p>
          <textarea
            placeholder=""
            disabled={true}
            className="font-theme ml-2 font-semibold placeholder:text-[#6c6f70] text-sm placeholder:text-base bg-[#25272b] border border-[#25272b] focus:border-[#6BFFF7] my-1 pl-6 text-white p-2 rounded-xl focus:outline-none  w-full flex-shrink-0 mr-2 "
            value={fetchedGame.desc}
          ></textarea>
          <div className="flex justify-between">
            <div className="w-[45%]">
              <p className="font-bold text-xl text-[#FAFB63] mt-10 ml-2 mb-1">
                Created At
              </p>
              <input
                type="text"
                placeholder=""
                className="font-theme ml-2 font-semibold placeholder:text-[#6c6f70] text-sm placeholder:text-base bg-[#25272b] border border-[#25272b] focus:border-[#6BFFF7] my-1 pl-6 text-white p-2 rounded-xl focus:outline-none  w-full flex-shrink-0 mr-2 "
                value={new Date(fetchedGame.createdAt).toLocaleDateString(
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
            <div className="w-[45%]">
              <p className="font-bold text-xl text-[#FAFB63] mt-10 ml-2 mb-1">
                Assets Count
              </p>
              <input
                type="text"
                placeholder=""
                className="font-theme  font-semibold placeholder:text-[#6c6f70] text-sm placeholder:text-base bg-[#25272b] border border-[#25272b] focus:border-[#6BFFF7] my-1 pl-6 text-white p-2 rounded-xl focus:outline-none  w-full flex-shrink-0 mr-2"
                value={fetchedGame.assets.length}
                disabled={true}
              ></input>
            </div>
          </div>
        </div>
        <div className="w-[45%]">
          <GameImage image={fetchedGame.image} />
        </div>
      </div>
      <div className="flex justify-start mt-12">
        <button
          className={`rounded-lg py-2 px-4 mx-3  font-semibold  ${
            selected ? "bg-[#6BFFF7] text-black " : "bg-black text-[#FAFB63]"
          }`}
          onClick={() => {
            setSelected(true);
          }}
        >
          Assets
        </button>
        <button
          className={`rounded-lg py-2 px-4 mx-3 font-semibold ${
            selected ? "bg-black text-[#FAFB63]" : "bg-[#6BFFF7] text-black"
          }`}
          onClick={() => {
            setSelected(false);
          }}
        >
          Activity
        </button>
      </div>
      {selected ? (
        <Assets fetchedGame={fetchedGame} />
      ) : (
        <Activities address={fetchedGame.address} />
      )}
    </div>
  );
}
