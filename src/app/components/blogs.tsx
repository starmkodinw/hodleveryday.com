import React from "react";
import { getPosts } from "../ghost/post";
import Link from "next/link";
import Image from "next/image";

async function blog() {
    const blogs = await getPosts();
    for (let i = 0; i < blogs.length; i++) {
        blogs[i].created_at = new Date(blogs[i].created_at).toLocaleDateString("en-US", {
            year: "numeric",
            month: "short",
            day: "numeric",
        });
    }
  
  return (
    <div className="flex flex-col w-full">
      {blogs?.map((blog: any) => (
        <Link href={`/blog/${blog.slug}`} key={blog.id} className="no-underline">
          <div key={blog.id} className="mb-[3rem] flex w-full h-[150px]">
            <Image
              width={1920}
              height={1080}
              src={blog.feature_image}
              alt={blog.title}
              className="w-[150px] md:w-[200px] lg:w-[250px] object-cover"
            />
            <div className="flex-1 flex flex-col justify-between">
                <div>
                    <p className="mt-0 px-4 text-[1.25rem] text-[#242424]">{blog.title}</p>
                    <p className="mt-0 px-4 text-[0.9.rem] md:text-[1.rem] font-light text-[#6B6B6B]">{blog.excerpt.substring(0, 100)}...</p>
                </div>
                <p className="mt-0 px-4 text-[0.8rem] font-light text-[#6B6B6B]">{blog.created_at}</p>
            </div> 
          </div>
        </Link>
      ))}
    </div>
  );
}

export default blog;
