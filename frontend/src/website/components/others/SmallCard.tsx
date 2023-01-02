import { Badge } from "flowbite-react";
import React from "react";
import { HiArrowSmRight } from "react-icons/hi";
import { Link } from "react-router-dom";
import LinkRightDirection from "./LinkDirection";
import { IArticle } from "../../../src/common/interface/Article.interface";

function SmallCard({ articleID, heading, category, description }: IArticle) {
  return (
    <Link
      to={"/post"}
      className="w-full block mb-2 p-4 max-w-sm 2xl:max-w-2xl bg-white hover:rounded-lg hover:border hover:border-gray-200 hover:shadow-md hover:bg-white dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700"
    >
      <div className="home-card ">
        <h5 className="text-lg 2xl:text-2xl mb-2 font-bold text-gray-600 dark:text-white">
          {heading}
        </h5>
        <p className="font-normal mb-2 text-sm 2xl:text-xl text-gray-400 dark:text-gray-200">
          {description}
        </p>

        <div className="w-24 mb-5">
          <Badge color={"gray"} icon={HiArrowSmRight} size="xs">
            {category}
          </Badge>
        </div>

        <LinkRightDirection
          name={"Read more"}
          iconColor={"#EB9E47"}
          Icon={HiArrowSmRight}
          iconSize={20}
          nameSize={"2xl:text-xl"}
        />
      </div>
    </Link>
  );
}

export default SmallCard;
