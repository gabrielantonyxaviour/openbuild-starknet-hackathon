import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClose, faUmbrella } from "@fortawesome/free-solid-svg-icons";
import Image from "next/image";
export default function CreateAssetModal({
  address,
  closeModal,
}: {
  address: string;
  closeModal: () => void;
}) {
  const [name, setName] = React.useState("");
  const [desc, setDesc] = React.useState("");
  const [image, setImage] = React.useState("https://picsum.photos/200");
  const [price, setPrice] = React.useState("");
  const [quantity, setQuantity] = React.useState("");
  return (
    <>
      <div
        className="fixed top-0 left-0 w-screen h-screen bg-black opacity-50 z-40"
        onClick={closeModal}
      ></div>
      <div className="fixed top-[50%] left-[50%] -translate-y-1/2 -translate-x-1/2 bg-[#FAFB63] p-4 z-50 opacity-100 w-[60%] rounded-lg">
        <div className="flex justify-between mx-2 mt-2 mb-4">
          <p className="text-black font-bold text-2xl">Create Asset</p>
          <FontAwesomeIcon
            icon={faClose}
            className="text-xl font-bold text-black my-auto"
            onClick={closeModal}
          />
        </div>
        <div className="mx-4 flex justify-between mb-4">
          <div className="w-[50%]">
            <p className="font-semibold text-lg text-black mt-6 ml-2">Name</p>
            <input
              type="text"
              placeholder=""
              className="font-theme ml-2 font-semibold placeholder:text-[#6c6f70]  text-lg placeholder:text-base bg-[#9c9c9c] border border-2 border-white focus:bg-black text-white focus:border-[#6BFFF7] my-1 pl-6 text-white p-2 rounded-xl focus:outline-none  w-[90%] flex-shrink-0 mr-2  "
              value={name}
              onChange={(e) => {
                setName(e.target.value);
              }}
            ></input>
            <p className="font-semibold text-lg text-black mt-4 ml-2 ">
              Description
            </p>
            <textarea
              placeholder=""
              className="font-theme ml-2 font-semibold placeholder:text-[#6c6f70]  text-lg placeholder:text-base bg-[#9c9c9c] border border-2 border-white focus:bg-black text-white focus:border-[#6BFFF7] my-1 pl-6 text-white p-2 rounded-xl focus:outline-none  w-[90%] flex-shrink-0 mr-2  "
              value={desc}
              onChange={(e) => {
                setDesc(e.target.value);
              }}
            ></textarea>
          </div>
          <div className="w-[50%] flex flex-col justify-center items-center">
            <label htmlFor="imageInput" className="relative">
              <div className="w-[200px] h-[200px] border-dashed border-2 border-gray-400 flex items-center justify-center rounded-xl">
                <Image
                  src={image}
                  width={200}
                  height={200}
                  alt="asset image"
                  className="rounded-xl"
                />
              </div>
              <input
                type="file"
                id="imageInput"
                className="hidden"
                accept="image/*"
                onChange={(e) => {
                  if (e.target.files && e.target.files[0]) {
                    const reader = new FileReader();
                    reader.onload = (e) => {
                      if (e.target != null) setImage(e.target.result as string);
                    };
                    reader.readAsDataURL(e.target.files[0]);
                  }
                }}
              />
            </label>
          </div>
        </div>
        <div className="mx-6 mt-2 flex">
          <div className="w-[50%]  flex justify-between">
            <div className="w-[45%]">
              <p className="font-semibold text-lg text-black">Maximum Mint</p>
              <input
                type="text"
                placeholder=""
                className="font-theme font-semibold placeholder:text-[#6c6f70]  text-lg placeholder:text-base bg-[#9c9c9c] border border-2 border-white focus:bg-black text-white focus:border-[#6BFFF7] my-1 pl-6 text-white p-2 rounded-xl focus:outline-none  w-[90%] flex-shrink-0 mr-2  "
                value={quantity}
                onChange={(e) => {
                  if (e.target) setQuantity(e.target.value);
                }}
              ></input>
            </div>
            <div className="w-[45%]">
              <p className="font-semibold  text-lg text-black">Price</p>
              <input
                type="text"
                placeholder=""
                className="font-theme    font-semibold placeholder:text-[#6c6f70]  text-lg placeholder:text-base bg-[#9c9c9c] border border-2 border-white focus:bg-black text-white focus:border-[#6BFFF7] my-1 pl-6 text-white p-2 rounded-xl focus:outline-none  w-[90%] flex-shrink-0 mr-2  "
                value={price}
                onChange={(e) => {
                  if (e.target) setPrice(e.target.value);
                }}
              ></input>
            </div>
          </div>
          <div className="w-[50%] flex justify-end mt-auto">
            <button className="bg-black text-white hover:bg-[#6BFFF7] hover:text-black font-semibold text-md px-3 py-2 rounded-md ">
              Create Asset
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
