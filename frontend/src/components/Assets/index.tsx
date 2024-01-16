import Image from "next/image";
import AssetCard from "./AssetCard";

export default function Assets() {
  return (
    <div className=" ml-[200px] mt-[50px]   ">
      <p className="font-logo font-semibold text-[#6BFFF7] text-2xl">
        YOUR ASSETS
      </p>
      <Image src={"/three.png"} width={100} height={100} alt="three" />

      <div className="grid grid-cols-5 desktop:grid-cols-8 mr-20">
        <AssetCard image={"/sword.png"} id={"1"} price={69} />
        <AssetCard image={"/sword.png"} id={"1"} price={69} />
        <AssetCard image={"/sword.png"} id={"1"} price={69} />
        <AssetCard image={"/sword.png"} id={"1"} price={69} />
        <AssetCard image={"/sword.png"} id={"1"} price={69} />
      </div>
    </div>
  );
}
