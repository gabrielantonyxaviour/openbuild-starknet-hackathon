import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";

export default function AssetCard({
  address,
  image,
  id,
  price,
}: {
  address: string;
  image: string;
  id: string;
  price: number;
}) {
  const router = useRouter();
  return (
    <div
      className={`border-[2px] border-slate-950 hover:border-[#6BFFF7] p-2 rounded-lg font-theme bg-[#FAFB63] text-black hover:bg-black hover:text-white mx-2`}
    >
      <button
        onClick={() => {
          router.push("/asset/" + id + "-" + address);
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

      <Link href={"/asset/" + id + "-" + address} className="my-2">
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
