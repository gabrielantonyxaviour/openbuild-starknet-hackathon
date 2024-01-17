import React, { useState } from "react";
import Layout from "../Layout";

export default function Create() {
  const [name, setName] = useState("");
  const [desc, setDesc] = useState("");
  const [image, setImage] = useState("");
  return (
    <Layout>
      <div className="flex flex-col items-center mt-8">
        <p className="text-[#FAFB63] text-4xl font-bold">Create New Game</p>
        <p className="text-[#9c9e9e] font-bold text-lg mt-2">
          Enter the details and launch your on-chain assets now! 🔥
        </p>
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
        <div className="flex justify-end w-full mr-[400px]">
          <button className="bg-[#6BFFF7] text-black font-semibold text-xl p-3 rounded-md">
            Create Game
          </button>
        </div>
      </div>
    </Layout>
  );
}
