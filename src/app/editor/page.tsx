"use client";
import React, { useState, useEffect } from "react";
import dynamic from "next/dynamic";
const ReactQuill = dynamic(() => import("react-quill"), { ssr: false });
import "react-quill/dist/quill.snow.css";
import Image from "next/image";
import parse from "html-react-parser";
import SocialShare from "@/app/components/socialShare";
import { DividerBottom } from "@/app/components/divider";
import AffiliateCard from "@/app/components/affiliateCard";

function Page() {
  const [value, setValue] = useState("");
  const [excert, setExcert] = useState("");
  const [title, setTitle] = useState("");
  const [feature_image, setFeatureImage] = useState("");
  const toolbarOptions = [
    ["bold", "italic", "underline"],
    // ["link", "image"],
    ["link"],
    [{ list: "bullet" }],
    [
      {
        color: [
          "#FFFFFF",
          "#393939",
          "#f87171",
          "#fb923c",
          "#fb923c",
          "#facc15",
          "#a3e635",
          "#4ade80",
          "#34d399",
          "#2dd4bf",
          "#22d3ee",
          "#38bdf8",
          "#60a5fa",
          "#5585ff",
          "#818cf8",
          "#a78bfa",
          "#c084fc",
          "#e879f9",
          "#f472b6",
          "#fb7185",
        ],
      },
    ],
  ];
  const quillModule = {
    toolbar: toolbarOptions,
  };

  const setHtml = (content: any, delta: any, source: any, editor: any) => {
    if(source === "user") {
      setValue(editor.getHTML());
      setExcert(editor.getText());
    }
  };

  const handlePublish = () => {
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ title: title, html: value, status: "published", excert: excert, tags : [{ name: "KUB"}]}),
    };
    console.log(requestOptions.body);
    return
  };

  return (
    <div className="flex w-full h-full justify-center items-center flex-col text-[1rem] md:text-[1.2rem] font-sans text-[#393939] font-light">
      <div className="w-full xl:w-[40%] break-words mt-[75px] p-4 2xl:p-0">
        {/* Editor */}
        <div className="flex justify-center items-center text-center">
          <h2 className="font-bold">Title </h2>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full h-[30px] px-2 ml-4 border-[#aaaaaa] border-[1px] rounded-md text-sm"
          />
        </div>
        <ReactQuill
          modules={quillModule}
          theme="snow"
          value={value}
          onChange={setHtml}
          className="mt-4 mb-4"
        />

        {/* Preview */}
        <h2 className="mb-4 font-bold">Preview</h2>
        <DividerBottom />
        <h1 className="text-[2.2rem] md:text-[2.8rem] font-bold">{title}</h1>
        <div className="flex justify-center items-center mt-[1rem]">
          {feature_image == "" ? null : (
            <Image
              width={1920}
              height={1080}
              src={feature_image}
              alt={title}
              className="max-h-[350px] object-cover"
            />
          )}
        </div>
        {parse(value)}
        <div className="mb-[1.5rem]"></div>
        <SocialShare url={`https://hodleveryday.com/`} />
        <div className="mb-8 md:mb-[5rem]"></div>
        <AffiliateCard />

        <div className="flex justify-end mb-4">
          <button className="bg-[#5585ff] text-white px-4 py-2 rounded-md text-sm font-bold" onClick={() => {
            handlePublish();
          }}>
            Publish
          </button>
        </div>
      </div>
    </div>
  );
}

export default Page;
