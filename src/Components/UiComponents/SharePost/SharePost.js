"use client";
import {
  FacebookIcon,
  FacebookShareButton,
  LinkedinIcon,
  RedditIcon,
  RedditShareButton,
  TelegramIcon,
  WhatsappIcon,
  WhatsappShareButton,
} from "next-share";
import React from "react";
import "./SharePost.css";

export default function SharePost({ shareUrl, title }) {
  return (
    <div className="socialshare">
      <span>اشتراک گذاری:</span>
      <FacebookShareButton url={shareUrl} quote={title} hashtag={shareUrl}>
        <FacebookIcon size={32} round />
      </FacebookShareButton>
      <a
        title={title}
        href={`https://t.me/share/url?url=${shareUrl}&text=${title}`}
      >
        <TelegramIcon size={32} round />
      </a>

      <WhatsappShareButton url={shareUrl} quote={title} separator=":: ">
        <WhatsappIcon size={32} round />
      </WhatsappShareButton>

      <a
        href={`https://www.linkedin.com/sharing/share-offsite/?url=${shareUrl}`}
        target="_blank"
        title={title}
      >
        <LinkedinIcon size={32} round />
      </a>

      <RedditShareButton url={shareUrl} quote={title}>
        <RedditIcon size={32} round />
      </RedditShareButton>
    </div>
  );
}
