import React from "react";
import Link from "next/link";

function footer() {
  const datas = [
    {
      title: "Home",
      href: "/",
    },
    // {
    //   title: "Status",
    //   href: "/",
    // },
    {
      title: "About",
      href: "/about",
    },
    // {
    //   title: "Careers",
    //   href: "/",
    // },
    // {
    //   title: "Blog",
    //   href: "/",
    // },
    {
      title: "Privacy",
      href: "/privacy",
    },
    // {
    //   title: "Terms",
    //   href: "/",
    // },
    // {
    //   title: "Teams",
    //   href: "/",
    // },
  ];
  return (
    <footer className="flex justify-center items-center text-center w-full h-[68px] bg-white border-[1px] flex-wrap">
      {datas.map((data, index) => (
        <Link
          href={data.href}
          key={index}
          className="text-gray-500 font-light mx-2 no-underline"
        >
          {data.title}
        </Link>
      ))}
    </footer>
  );
}

export default footer;
