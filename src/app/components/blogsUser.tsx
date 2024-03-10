import React from "react";
import { getPostsUser } from "../ghost/post";
import Link from "next/link";
import Image from "next/image";

async function blogUser() {
  const blogs = await getPostsUser();
  for (let i = 0; i < blogs.length; i++) {
    blogs[i].created_at = new Date(blogs[i].created_at).toLocaleDateString(
      "en-US",
      {
        year: "numeric",
        month: "short",
        day: "numeric",
      }
    );

    if (blogs[i].title.length > 45) {
      blogs[i].title = blogs[i].title.substring(0, 45) + "...";
    }
  }

  return (
    <>
      <h2 className="text-[#242424] text-[1rem] font-[500] mb-[1.5rem]">
        Trending on Hodleveryday.com
      </h2>
      <div className="grid grid-cols-2 w-full">
        {blogs?.map((blog: any) => (
          <Link
            href={`/blog/${blog.slug}`}
            key={blog.id}
            className="no-underline border border-[rgba(124,139,154,0.25)] rounded-[3px] hover:bg-slate-50"
          >
            <div
              key={blog.id}
              className="mt-[0.75rem] mb-[0.75rem] flex w-full h-[120px] "
            >
              <div className="flex-1 flex flex-col justify-between">
                <div>
                  <p className="mt-0 px-4 text-[1.25rem] text-[#242424]">
                    {blog.title}
                  </p>
                  <p className="mt-0 px-4 text-[0.9rem] md:text-[1rem] font-light text-[#6B6B6B]">
                    {blog.excerpt.substring(0, 50)}...
                  </p>
                </div>
                <p className="mt-0 px-4 text-[0.8rem] font-light text-[#6B6B6B]">
                  {blog.created_at}
                </p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </>
  );
}

export default blogUser;
