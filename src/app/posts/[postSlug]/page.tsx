import type { Metadata, ResolvingMetadata } from "next";
import React from "react";
import { getPost } from "../../ghost/post";

type Props = {
  params: { postSlug: string };
};

export async function generateMetadata(
  { params }: Props,
  parent: ResolvingMetadata
): Promise<Metadata> {
  const post = await getPost(params?.postSlug);
  
  return {
    title: post.title,
    description: `${post.excerpt} hodleveryday.com`,
    keywords: `${post.excerpt},hodleveryday.com`,
  };
}

async function page({ params }: any) {
  const post = await getPost(params?.postSlug);

  return (
    <div>
      {post.slug}
      {post.title}
      <h1>Hello</h1>
    </div>
  );
}

export default page;
