import Image from "next/image";

export default function Assets() {
  return (
    <div className=" ml-[200px] mt-[50px]   ">
      <p className="font-logo font-semibold text-[#6BFFF7] text-2xl">
        YOUR ASSETS
      </p>
      <Image src={"/three.png"} width={100} height={100} alt="three" />
    </div>
  );
}
