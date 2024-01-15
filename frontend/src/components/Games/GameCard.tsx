import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import Link from "next/link";

export default function GameCard({
  image,
  address,
  name,
}: {
  image: string;
  address: string;
  name: string;
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
          alt="game"
          className="bg-white rounded-lg "
        />
      </button>

      <Link href={"/game/" + address} className="my-2">
        <div className="flex justify-center mx-2">
          <div className="w-full">
            <p className="font-semibold text-center">Name</p>
          </div>
        </div>
        <div className="flex justify-center mx-2">
          <div className="w-full">
            <p className="text-center">{name}</p>
          </div>
        </div>
      </Link>
      <div className="rounded-lg  bg-[#25272b] text-center  mt-1">
        <div
          className="flex justify-center cursor-pointer"
          onClick={() => {
            // go to stark explorer
          }}
        >
          <p className="text-sm font-semibold text-[#9c9e9e] my-2 mr-2">
            Address
          </p>
          <p className="text-sm  text-[#9c9e9e] my-2 mr-2">
            {address.slice(0, 6) + "..." + address.slice(-4)}
          </p>
          <FontAwesomeIcon
            icon={faArrowUpRightFromSquare}
            className="text-[#9c9e9e] text-sm font-normal my-auto"
          />
        </div>
      </div>
    </div>
  );
}
