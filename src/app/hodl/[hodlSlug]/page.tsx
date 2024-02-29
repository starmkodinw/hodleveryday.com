import type { Metadata, ResolvingMetadata } from "next";
import React from "react";
import { getPost } from "../../ghost/post";
import parse from 'html-react-parser';

type Props = {
  params: { hodlSlug: string };
};

export async function generateMetadata(
  { params }: Props,
  parent: ResolvingMetadata
): Promise<Metadata> {
  const post = await getPost(params?.hodlSlug);
  
  return {
    title: post.title,
    description: `${post.excerpt} ${post.html} hodleveryday.com บิทคอยน์ bitcoin BTC`,
    keywords: `${post.excerpt},hodleveryday.com,บิทคอยน์,bitcoin,BTC`,
  };
}

async function page({ params }: any) {
  const post = await getPost(params?.hodlSlug);

  return (
    <div className="flex w-full h-full justify-center items-center flex-col text-[1.2rem] font-sans text-[#393939]">
        <div className="w-[40%]">
          <h1 className="text-[2.8rem] font-bold">{post.title}</h1>
          <div className="flex justify-center items-center">
            <img src={post.feature_image} alt={post.title} />
          </div>
          {parse(post.html)}
        </div>
    </div>
  );
}

export default page;
