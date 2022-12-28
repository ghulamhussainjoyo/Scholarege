import React, { FC, Fragment, useRef } from "react";
import { BsFacebook, BsLink45Deg } from "react-icons/bs";
import { RiWhatsappFill } from "react-icons/ri";
import { Link } from "react-router-dom";
import ArticleComment from "./ArticleComment";
// import { IconType } from 'react-icons'

const SocialButtons = () => {
  return (
    <div className="flex mb-7">
      {[
        {
          key: "facebook-link-button",
          Icon: BsFacebook,
          iconSize: 15,
          iconColor: "#ffff",
          name: "share",
        },
        {
          key: "whattsApp-link-button",
          Icon: RiWhatsappFill,
          iconSize: 15,
          iconColor: "#ffff",
          name: "whattsApp",
        },

        {
          key: "copy-link-button",
          Icon: BsLink45Deg,
          iconSize: 16,
          iconColor: "#ffff",
          name: "copy link",
        },
      ].map(({ key, Icon, iconSize, iconColor, name }, index) => (
        <button
          key={key}
          type="button"
          className="text-white bg-orange-theme-royal-orange-2 hover:bg-orange-theme-royal-orange focus:ring-2 focus:outline-none focus:ring-orange-theme-Beer font-medium rounded-md border-[1px] border-gray-300 text-sm px-2.5 py-2 text-center inline-flex items-center mr-2 font-owsawald-regular"
        >
          <span className="mr-2">
            <Icon size={iconSize} color={iconColor} />
          </span>
          <span>{name}</span>
        </button>
      ))}
    </div>
  );
};

const Paragraph = ({ description }: { description: string }) => {
  const paragraphRef = useRef<HTMLDivElement>(null);

  console.log(description);
  return (
    <section className="article-prargraph mb-10">
      <div
        className="article-design"
        ref={paragraphRef}
        dangerouslySetInnerHTML={{ __html: description.replace(/['"]+/g, "") }}
      ></div>
    </section>
  );
};

function Article({
  articleID,
  header,
  description,
}: {
  articleID: string;
  header: string;
  description: string;
}) {
  return (
    <article className="h-auto  w-2/3">
      <h1 className="font-extrabold tracking-wider leading-none text-gray-900 text-sm sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl dark:text-white font-owsawald-regular  mb-7">
        {header}
      </h1>
      <SocialButtons />
      <Paragraph description={description} />
      <ArticleComment />
    </article>
  );
}

export default Article;
