import type { Metadata, ResolvingMetadata } from "next";
import React from "react";
import { getPost } from "../../ghost/post";
import parse from 'html-react-parser';
import AffiliateCard from "@/app/components/affiliateCard";

type Props = {
  params: { hodlSlug: string };
};

export async function generateMetadata(
  { params }: Props,
  parent: ResolvingMetadata
): Promise<Metadata> {
  const post = await getPost(params?.hodlSlug);
  
  return {
    robots: "index, follow",
    title: post.title,
    description: post.excerpt,
    keywords: [post.excerpt, "hodleveryday.com", "bitcoin", "BTC"],
    applicationName: "hodleveryday",
    authors: [{ name: "hodleveryday", url: "https://hodleveryday.com" }],
    creator: "hodleveryday",
    icons: [{ rel: "icon", url: "https://hodleveryday.com/pixel - logo.png" }, { rel: "apple-touch-icon", url: "https://hodleveryday.com/pixel - logo.png" }],
    openGraph: {
      type: "article",
      url: `https://hodleveryday.com/hodl/${params?.hodlSlug}`,
      title: post.title,
      description: post.excerpt,
      siteName: "hodleveryday",
      locale: "th_TH",
      images: post.feature_image,
    },
    twitter: {
      card: "summary_large_image",
      site: "@hodleveryday",
      title: post.title,
      description: post.excerpt,
      images: post.feature_image,
    },
    abstract: post.excerpt,
  };
}

async function page({ params }: any) {
  const post = await getPost(params?.hodlSlug);

  return (
    <div className="flex w-full h-full justify-center items-center flex-col text-[1rem] md:text-[1.2rem] font-sans text-[#393939] p-4 md:p-0 font-light">
        <div className="w-full md:w-[50%] lg:w-[40%] break-words mt-[75px]">
          <h1 className="text-[2.2rem] md:text-[2.8rem] font-bold">{post.title}</h1>
          <div className="flex justify-center items-center">
            <img src={post.feature_image} alt={post.title}/>
          </div>
          {parse(post.html)}
          <AffiliateCard />
        </div>
    </div>
  );
}

export default page;
