import React from "react";
import Link from "next/link";
import Image from "next/image";

function related({ blog }: any) {
  if (blog.title.length > 45) {
    blog.title = blog.title.substring(0, 45) + "...";
  }

  return (
    <Link href={`/blog/${blog.slug}`} key={blog.id} className="no-underline">
      <div key={blog.id} className="mb-[3rem] flex w-full h-[150px] text-[1rem] font-sans text-[#393939] font-light">
        <Image
          width={1920}
          height={1080}
          src={blog.feature_image}
          alt={blog.title}
          className="w-[150px] md:w-[200px] lg:w-[250px] object-cover"
        />
        <div className="flex-1 flex flex-col justify-between">
          <div>
            <p className="mt-0 px-4 text-[1.25rem] text-[#242424] font-bold">
              {blog.title}
            </p>
            <p className="mt-0 px-4 text-[0.9.rem] md:text-[1.rem] font-light text-[#6B6B6B]">
              {blog.excerpt.substring(0, 100)}...
            </p>
          </div>
          <p className="mt-0 px-4 text-[0.8rem] font-light text-[#6B6B6B]">
            {blog.created_at}
          </p>
        </div>
      </div>
    </Link>
  );
}

export default related;
