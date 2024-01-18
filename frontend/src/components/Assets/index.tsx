import Image from "next/image";
import AssetCard from "./AssetCard";
import { useState } from "react";

export default function Assets() {
  const [yourAssets, setYourAssets] = useState<any[]>([
    {
      name: "Sword",
      tokenId: "1",
      desc: "Can be used to recruit new heroes in your army",
      quantityLimit: 0,
      price: 10,
      amountMinted: 231,
      address:
        "0x0473b0e570e2a5b7107ec12de7189bd385195adbeee3e9de9337132780be4e9b",
      image: "/sword.png",
    },
    {
      name: "Rage Potion",
      tokenId: "2",
      desc: "Increase attack and movement speed by 20%",
      quantityLimit: 0,
      price: 25,
      amountMinted: 99,
      address:
        "0x0473b0e570e2a5b7107ec12de7189bd385195adbeee3e9de9337132780be4e9b",
      image: "https://picsum.photos/200",
    },
  ]);

  return (
    <div className=" ml-[200px] mt-[50px]   ">
      <p className="font-logo font-semibold text-[#6BFFF7] text-2xl">
        YOUR ASSETS
      </p>
      <Image src={"/three.png"} width={100} height={100} alt="three" />

      <div className="grid grid-cols-5 desktop:grid-cols-8 mr-20">
        {yourAssets.map((asset) => (
          <AssetCard
            address={asset.address}
            image={asset.image}
            id={asset.tokenId}
            price={asset.price}
          />
        ))}
      </div>
    </div>
  );
}
