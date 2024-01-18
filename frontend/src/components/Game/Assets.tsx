import React from "react";
import AssetCard from "../Assets/AssetCard";

export default function Assets({ fetchedGame }: { fetchedGame: any }) {
  return (
    <div className="grid grid-cols-5 desktop:grid-cols-8 mr-20 mt-6">
      {fetchedGame.assets.map((asset: any) => {
        return (
          <AssetCard
            image={asset.image}
            id={asset.tokenId}
            price={asset.price}
          />
        );
      })}
    </div>
  );
}
