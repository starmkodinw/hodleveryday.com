import React from "react";
import Link from "next/link";

function footer() {
  const datas = [
    "Help",
    "Status",
    "About",
    "Careers",
    "Blog",
    "Privacy",
    "Terms",
    "Teams",
  ];
  return (
    <footer className="flex justify-center items-center text-center w-full h-[68px] bg-white border-[1px]">
      {datas.map((data) => (
        <Link
          href="/"
          key={data}
          className="text-gray-500 font-light mx-2 no-underline"
        >
          {data}
        </Link>
      ))}
    </footer>
  );
}

export default footer;
