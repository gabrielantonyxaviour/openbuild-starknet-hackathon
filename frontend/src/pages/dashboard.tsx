import ConnectButton from "@/components/ConnectButton";
import Dashboard from "@/components/Dashboard";
import Sidebar from "@/components/Sidebar";
import { useAccount } from "@starknet-react/core";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useEffect } from "react";

export default function DashboardPage() {
  const { address } = useAccount();
  const router = useRouter();
  useEffect(() => {
    console.log("address", address);
  }, [address]);
  return address ? (
    <div>
      <Sidebar />
      <Dashboard />
    </div>
  ) : (
    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 ">
      <Link
        href={"/"}
        className="mt-20 bg-gradient-to-r from-[#6BFFF7] to-[#FAFB63] rounded-md p-3 font-bold italic text-lg text-black"
      >
        CONNECT WALLET
      </Link>
    </div>
  );
}
