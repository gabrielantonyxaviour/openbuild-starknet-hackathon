import Image from "next/image";
import GameCard from "./GameCard";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHammer } from "@fortawesome/free-solid-svg-icons";

export default function Games() {
  return (
    <div className=" ml-[200px] mt-[50px]   ">
      <div className="flex justify-start">
        <div>
          <p className="font-logo font-semibold text-[#6BFFF7] text-2xl">
            YOUR GAMES
          </p>
          <Image src={"/three.png"} width={100} height={100} alt="three" />
        </div>
        <Link
          href={"/create"}
          className="bg-gradient-to-r from-[#6BFFF7] to-[#FAFB63] hover:from-white hover:to-white flex text-black p-2 mb-auto rounded-lg font-semibold text-lg ml-40"
        >
          <FontAwesomeIcon icon={faHammer} className="my-auto" />
          <p className="ml-3">Create</p>
        </Link>
      </div>

      <div className="grid grid-cols-5 mr-20">
        <GameCard
          image={"/fate.jpg"}
          name={"Fate of the Dragon"}
          address={
            "0x0473b0e570e2a5b7107ec12de7189bd385195adbeee3e9de9337132780be4e9b"
          }
        />
      </div>
    </div>
  );
}
