import Image from "next/image";
import Link from "next/link";

export default function AssetCard({
  image,
  id,
  price,
}: {
  image: string;
  id: string;
  price: number;
}) {
  return (
    <div
      className={`border-[2px] border-slate-950 hover:border-[#6BFFF7] p-2 rounded-lg font-theme bg-[#FAFB63] text-black hover:bg-black hover:text-white mx-2`}
    >
      <button
        onClick={() => {
          window.open(image, "_blank");
        }}
      >
        <Image
          src={image}
          width={300}
          height={300}
          alt="asset"
          className="bg-white rounded-lg "
        />
      </button>

      <Link href={"/asset/" + id} className="my-2">
        <div className="flex justify-around mx-2">
          <div className="w-full">
            <p className="font-semibold text-center">Token Id</p>
          </div>
          <div className="w-full">
            <p className="font-semibold text-center">Price</p>
          </div>
        </div>
        <div className="flex justify-around mx-2">
          <div className="w-full">
            <p className=" text-center">#{id}</p>
          </div>
          <div className="w-full">
            <p className="text-center">{price} STARK</p>
          </div>
        </div>
      </Link>
    </div>
  );
}
