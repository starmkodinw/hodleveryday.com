"use client";
import React from "react";
import {
  EmailShareButton,
  FacebookShareButton,
  GabShareButton,
  HatenaShareButton,
  InstapaperShareButton,
  LineShareButton,
  LinkedinShareButton,
  LivejournalShareButton,
  MailruShareButton,
  OKShareButton,
  PinterestShareButton,
  PocketShareButton,
  RedditShareButton,
  TelegramShareButton,
  TumblrShareButton,
  TwitterShareButton,
  ViberShareButton,
  VKShareButton,
  WhatsappShareButton,
  WorkplaceShareButton,
} from "react-share";
import fb from "../assets/fb.png";
import x from "../assets/x.png";
import linkedin from "../assets/linkedin.png";
import telegram from "../assets/telegram.png";
import line from "../assets/line.png";
import Image from "next/image";

function socialShare({ url }) {
  return (
    <div className="flex w-full justify-end items-center gap-4">
      <FacebookShareButton url={url}>
        <Image
          src={fb}
          width={1920}
          height={1080}
          alt="fb share"
          className="cursor-pointer rounded-xl w-[32px] h-[32px] md:w-[48px] md:h-[48px] object-cover"
        />
      </FacebookShareButton>
      <TwitterShareButton url={url}>
        <Image
          src={x}
          width={1920}
          height={1080}
          alt="X share"
          className="cursor-pointer rounded-xl w-[32px] h-[32px] md:w-[48px] md:h-[48px] object-cover"
        />
      </TwitterShareButton>
      <LinkedinShareButton url={url}>
        <Image
          src={linkedin}
          width={1920}
          height={1080}
          alt="linkedin share"
          className="cursor-pointer rounded-xl w-[32px] h-[32px] md:w-[48px] md:h-[48px] object-cover"
        />
      </LinkedinShareButton>
      <TelegramShareButton url={url}>
        <Image
          src={telegram}
          width={1920}
          height={1080}
          alt="telegram share"
          className="cursor-pointer rounded-xl w-[32px] h-[32px] md:w-[48px] md:h-[48px] object-cover"
        />
      </TelegramShareButton>
      <LineShareButton url={url}>
        <Image
          src={line}
          width={1920}
          height={1080}
          alt="line share"
          className="cursor-pointer rounded-xl w-[32px] h-[32px] md:w-[48px] md:h-[48px] object-cover"
        />
      </LineShareButton>
    </div>
  );
}

export default socialShare;
