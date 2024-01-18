import React from "react";
import AssetCard from "../Assets/AssetCard";

export default function Assets({ fetchedGame }: { fetchedGame: any }) {
  return (
    <div>
      <div className="grid grid-cols-5 desktop:grid-cols-8 mr-20 mt-6">
        {fetchedGame.assets.map((asset: any) => {
          return (
            <AssetCard
              address={fetchedGame.adress}
              image={asset.image}
              id={asset.tokenId}
              price={asset.price}
            />
          );
        })}
      </div>
      <button className="bg-[#6BFFF7] text-black font-semibold text-lg px-3 py-2 rounded-md my-10 mx-4 hover:bg-black hover:text-white">
        Create Asset
      </button>
    </div>
  );
}
