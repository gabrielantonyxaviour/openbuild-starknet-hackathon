import React from "react";
import AssetCard from "../Assets/AssetCard";
import CreateAssetModal from "../Modals/CreateAssetModal";

export default function Assets({ fetchedGame }: { fetchedGame: any }) {
  const [showModal, setShowModal] = React.useState(false);
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
      <button
        className="bg-[#6BFFF7] text-black font-semibold text-lg px-3 py-2 rounded-md my-10 mx-4 hover:bg-black hover:text-white"
        onClick={() => setShowModal(true)}
      >
        Create Asset
      </button>
      {showModal && (
        <CreateAssetModal
          address={fetchedGame.address}
          closeModal={() => setShowModal(false)}
        />
      )}
    </div>
  );
}
