import React, { useState } from "react";
import Layout from "../Layout";
import Image from "next/image";

export default function Create() {
  const [name, setName] = useState("");
  const [desc, setDesc] = useState("");
  const [image, setImage] = useState("https://picsum.photos/200");
  return (
    <Layout>
      <div className="flex flex-col items-center mt-8 mx-[200px]  ">
        <div className="flex justify-between w-full ">
          <div className="translate-y-[25px]">
            <Image src={"/left.png"} width={100} height={100} alt="left" />
          </div>
          <div className="text-center">
            <p className="text-[#FAFB63] text-4xl font-bold">Create New Game</p>
            <p className="text-[#9c9e9e] font-bold text-lg mt-2">
              Enter the details and launch your on-chain assets now! 🔥
            </p>
          </div>
          <div className="w-[100px] "></div>
        </div>

        <p className="font-bold text-2xl text-[#FAFB63] mt-10 ">Name</p>
        <input
          type="text"
          placeholder=""
          className="font-theme ml-2 font-semibold placeholder:text-[#6c6f70] text-xl placeholder:text-base bg-[#25272b] border border-[#25272b] focus:border-[#6BFFF7] my-1 pl-6 text-white p-2 rounded-xl focus:outline-none  w-[40%] flex-shrink-0 mr-2 text-center"
          value={name}
          onChange={(e) => {
            setName(e.target.value);
          }}
        ></input>
        <p className="font-bold text-2xl text-[#FAFB63] mt-10 ">Description</p>
        <textarea
          placeholder=""
          className="font-theme ml-2 font-semibold placeholder:text-[#6c6f70] text-xl placeholder:text-base bg-[#25272b] border border-[#25272b] focus:border-[#6BFFF7] my-1 pl-6 text-white p-2 rounded-xl focus:outline-none  w-[40%] flex-shrink-0 mr-2 text-center"
          value={desc}
          onChange={(e) => {
            setDesc(e.target.value);
          }}
        ></textarea>
        <p className="font-bold text-2xl text-[#FAFB63] mt-10 ">Image</p>
        <div className="flex justify-between w-full ">
          <div className="w-[100px]"></div>
          <div className="flex items-center justify-center mt-4">
            <label htmlFor="imageInput" className="relative">
              <div className="w-[400px] h-[400px] border-dashed border-2 border-gray-400 flex items-center justify-center rounded-xl">
                {/* You can display a default image or leave it empty */}
                <img
                  src={image}
                  alt="Preview"
                  className="w-full h-full object-cover rounded-xl"
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
          <div className="w-[100px] flex flex-col justify-end">
            <Image
              src={"/right.png"}
              width={100}
              height={100}
              alt="right"
              className="mb-8"
            />
          </div>
        </div>

        <button className="bg-[#6BFFF7] text-black font-semibold text-xl p-3 rounded-md my-10">
          Create Game
        </button>
      </div>
    </Layout>
  );
}
