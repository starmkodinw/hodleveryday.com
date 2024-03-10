import type { Metadata, ResolvingMetadata } from "next";
import React from "react";
import { getPost, getPosts, getPostsByTags } from "../../ghost/post";
import parse from "html-react-parser";
import AffiliateCard from "@/app/components/affiliateCard";
import Related from "@/app/components/related";
import { Divider } from "@/app/components/divider";
import Image from "next/image";
import SocialShare from "@/app/components/socialShare";

type Props = {
  params: { blogSlug: string };
};

export async function generateStaticParams() {
  const blogs = await getPosts();

  return blogs.map(({ slug }: any) => slug);
}

export async function generateMetadata(
  { params }: Props,
  parent: ResolvingMetadata
): Promise<Metadata> {
  const post = await getPost(params?.blogSlug);
  let keywords = [{ name: "crypto" }] as any[];
  if (post?.tags?.length > 0) {
    keywords = post.tags;
  }
  let excerpt = "";
  if (post?.excerpt === undefined) {
    excerpt = post?.excerpt?.replace(/\n/g, "").slice(0, 130);
  }

  return {
    robots: {
      index: true,
      follow: true,
    },
    title: post.title,
    description: excerpt,
    keywords: [...keywords, "hodleveryday.com"],
    applicationName: "hodleveryday",
    authors: [{ name: "hodleveryday", url: "https://hodleveryday.com" }],
    creator: "hodleveryday",
    icons: [
      { rel: "icon", url: "https://hodleveryday.com/pixel - logo.png" },
      {
        rel: "apple-touch-icon",
        url: "https://hodleveryday.com/pixel - logo.png",
      },
    ],
    openGraph: {
      type: "article",
      url: `https://hodleveryday.com/blog/${params?.blogSlug}`,
      title: post.title,
      description: excerpt,
      siteName: "hodleveryday",
      locale: "th_TH",
      images: [
        {
          url: post.feature_image,
          alt: post.title,
          width: 1920,
          height: 1080,
          type: "image/jpeg",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      site: "@hodleveryday",
      title: post.title,
      description: excerpt,
      images: [
        {
          url: post.feature_image,
          alt: post.title,
          width: 1920,
          height: 1080,
          type: "image/jpeg",
        },
      ],
    },
    abstract: post.excerpt,
    alternates: {
      canonical: `https://hodleveryday.com/blog/${params?.blogSlug}`,
    },
  };
}

async function page({ params }: any) {
  const post = await getPost(params?.blogSlug);
  let postRelated: any[] = [];

  // post related
  {
    for (let i = 0; i < post?.tags?.length; i++) {
      const posts = (await getPostsByTags(post.tags[i].name)) as any;
      postRelated.push(...posts);
    }

    postRelated = postRelated.filter(
      (thing, i, arr) => arr.findIndex((t) => t.id === thing.id) === i
    );

    for (let i = 0; i < postRelated.length; i++) {
      if (postRelated[i].id === post.id) {
        postRelated.splice(i, 1);
      }
    }

    for (let i = 0; i < postRelated.length; i++) {
      postRelated[i].created_at = new Date(
        postRelated[i].created_at
      ).toLocaleDateString("en-US", {
        year: "numeric",
        month: "short",
        day: "numeric",
      });
    }

    // Randomize the postRelated array
    for (let i = postRelated.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [postRelated[i], postRelated[j]] = [postRelated[j], postRelated[i]];
    }

    // let limit = 4;
    // if (postRelated.length > limit) {
    //   postRelated = postRelated.slice(0, limit);
    // }
  }

  return (
    <div className="flex w-full h-full justify-center items-center flex-col text-[1rem] md:text-[1.2rem] font-sans text-[#393939] font-light">
      <div className="w-full xl:w-[40%] break-words mt-[75px] p-4 2xl:p-0">
        <h1 className="text-[2.2rem] md:text-[2.8rem] font-bold">
          {post.title}
        </h1>
        <div className="flex justify-center items-center mt-[1rem]">
          <Image
            width={1920}
            height={1080}
            src={post.feature_image}
            alt={post.title}
            className="max-h-[350px] object-cover"
          />
        </div>
        {parse(post.html)}
        <div className="mb-[1.5rem]"></div>
        <SocialShare
          url={`https://hodleveryday.com/blog/${params?.blogSlug}`}
        />
        <div className="mb-8 md:mb-[5rem]"></div>
        <AffiliateCard />
        <Divider />
        <h2 className="text-[#242424] text-[1.5rem] font-[500] mb-[1.5rem]">
          Recommended from Hodleveryday.com
        </h2>
      </div>

      <div className="w-full xl:w-[40%] break-words">
        {postRelated?.map((blog: any) => (
          <Related key={blog.id} blog={blog} />
        ))}
      </div>
    </div>
  );
}

export default page;
