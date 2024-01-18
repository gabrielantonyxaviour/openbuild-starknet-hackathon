import Image from "next/image";
import React, { useState } from "react";

export default function Game({ address }: { address: string }) {
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
        quantity: 0,
        price: 10,
        image: "https://picsum.photos/200",
      },
    ],
  });
  return (
    <div className=" ml-[200px] mt-[50px]   ">
      <div>
        <p className="font-logo font-semibold text-[#6BFFF7] text-2xl">
          YOUR GAMES
        </p>
        <Image src={"/three.png"} width={100} height={100} alt="three" />
      </div>
    </div>
  );
}
