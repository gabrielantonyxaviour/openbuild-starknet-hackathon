import timeAgo from "@/utils/timeAgo";
import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";

export default function Activities({ address }: { address: string }) {
  const [activities, setActivities] = useState<any[]>([
    {
      type: "BUY",
      name: "Sword",

      txId: "0x061f760120d622ac17263437f74600dc8763136228a2d743ceaa8537959b5910",
      buyer:
        "0x06bfa30df9566a30287133376a5be594f1b12460dfaa2e312f25258b37165055",
      price: "15",
      tokenId: "1",
      amount: "12",
      timestamp: "2021-10-03T15:00:00.000Z",
    },
    {
      type: "CREATE",
      txId: "0x04c2cda9b0de20bb04385fb6f6e58f358a10535567d2b4ec56b2fae71d1a03d7",
      name: "Rage Potion",
      price: "23",
      tokenId: "2",
      quantityLimit: "0",
      timestamp: "2021-10-03T15:00:00.000Z",
    },
    {
      type: "TRANSFER",
      name: "SWORD",
      txId: "0x026cc46f7d249706ea40704688e3b99f519f74506427919ad8d0898fe652d336",
      from: "0x06bfa30df9566a30287133376a5be594f1b12460dfaa2e312f25258b37165055",
      to: "0x03d4900698f9b1c741dd8177fa7e8a75f9c6cfb1fa9a0292b530feb74acc8cd7",
      tokenId: "1",
      totalPrice: "45",
      amount: "3",
      timestamp: "2021-10-03T15:00:00.000Z",
    },
  ]);
  return (
    <div className="flex flex-col mr-20 mt-6 w-full">
      {activities.map((activity) => (
        <div className="flex bg-[#FAFB63] text-black hover:bg-black  hover:text-[#6BFFF7] w-[80%] rounded-xl my-1 border border-2 border-black hover:border-[#6BFFF7] py-2 ">
          <div
            className={`rounded-full w-[80px] h-[80px] my-auto flex flex-col justify-center items-center ml-2 ${
              activity.type === "BUY"
                ? "bg-[#00AA0F]"
                : activity.type === "CREATE"
                ? "bg-[#D40003]"
                : "bg-[#DF8E00]"
            } `}
          >
            <p className="text-white font-bold text-md my-auto text-center">
              {activity.type == "CREATE"
                ? "Create"
                : activity.type == "BUY"
                ? "Buy"
                : "Transfer"}
            </p>
          </div>
          {activity.type == "CREATE" ? (
            <div className="my-2 mx-4 flex-1">
              <p className="font-bold text-lg">{activity.name.toUpperCase()}</p>
              <p className="font-semibold text-md">
                Tx id:&nbsp;
                <span className="text-sm text-[#9c9e9e]">{activity.txId}</span>
              </p>
              <div className="flex">
                <p className="font-semibold text-md mr-8">
                  Token id:&nbsp;
                  <span className="text-sm text-[#9c9e9e]">
                    {activity.tokenId}
                  </span>
                </p>
                <p className="font-semibold text-md">
                  Price:&nbsp;
                  <span className="text-sm text-[#9c9e9e]">
                    {activity.price} STARK
                  </span>
                </p>
              </div>
              <p className="font-semibold text-md">
                Maximum Quantity:&nbsp;
                <span className="text-sm text-[#9c9e9e]">
                  {activity.quantityLimit == "0"
                    ? "Unlimited"
                    : activity.quantityLimit}
                </span>
              </p>
            </div>
          ) : activity.type == "BUY" ? (
            <div className="my-2 mx-4 flex-1">
              <p className="font-bold text-lg">{activity.name.toUpperCase()}</p>
              <p className="font-semibold text-md">
                Tx id:&nbsp;
                <span className="text-sm text-[#9c9e9e]">{activity.txId}</span>
              </p>
              <p className="font-semibold text-md">
                Buyer:&nbsp;
                <span className="text-sm text-[#9c9e9e]">{activity.buyer}</span>
              </p>
              <div className="flex">
                <p className="font-semibold text-md mr-8">
                  Token id:&nbsp;
                  <span className="text-sm text-[#9c9e9e]">
                    {activity.tokenId}
                  </span>
                </p>
                <p className="font-semibold text-md mr-8">
                  Price:&nbsp;
                  <span className="text-sm text-[#9c9e9e]">
                    {activity.price} STARK
                  </span>
                </p>
                <p className="font-semibold text-md">
                  Amount:&nbsp;
                  <span className="text-sm text-[#9c9e9e]">
                    {activity.amount}
                  </span>
                </p>
              </div>
            </div>
          ) : (
            <div className="my-2 mx-4 flex-1">
              <p className="font-bold text-lg">{activity.name.toUpperCase()}</p>
              <p className="font-semibold text-md">
                Tx id:&nbsp;
                <span className="text-sm text-[#9c9e9e]">{activity.txId}</span>
              </p>

              <p className="font-semibold text-md">
                From:&nbsp;
                <span className="text-sm text-[#9c9e9e]">{activity.from}</span>
              </p>
              <p className="font-semibold text-md">
                To:&nbsp;
                <span className="text-sm text-[#9c9e9e]">{activity.to}</span>
              </p>
              <div className="flex">
                <p className="font-semibold text-md mr-8">
                  Token id:&nbsp;
                  <span className="text-sm text-[#9c9e9e]">
                    {activity.tokenId}
                  </span>
                </p>
                <p className="font-semibold text-md mr-8">
                  Total Price:&nbsp;
                  <span className="text-sm text-[#9c9e9e]">
                    {activity.totalPrice} STARK
                  </span>
                </p>
                <p className="font-semibold text-md">
                  Amount:&nbsp;
                  <span className="text-sm text-[#9c9e9e]">
                    {activity.amount}
                  </span>
                </p>
              </div>
            </div>
          )}
          <div className="flex flex-col justify-between">
            <div className="h-[25px]"></div>
            <div className="rounded-md  bg-[#25272b] text-center  my-auto px-4 py-2 mr-6">
              <div
                className="flex justify-center cursor-pointer"
                onClick={() => {
                  // go to stark explorer
                }}
              >
                <p className="text-sm font-semibold text-[#9c9e9e] my-2 mr-2">
                  View In Explorer
                </p>
                <FontAwesomeIcon
                  icon={faArrowUpRightFromSquare}
                  className="text-[#9c9e9e] text-sm font-normal my-auto"
                />
              </div>
            </div>
            <p className=" h-[25px] text-sm text-[#9c9e9e] text-end mr-6 mt-2">
              {timeAgo(activity.timestamp)}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}
