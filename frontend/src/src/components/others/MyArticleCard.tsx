import React from "react";
import { Card as CardBite, Badge as BadgeBite } from "flowbite-react";
import { HiArrowSmRight } from "react-icons/hi";

interface IArticleCard {
  articleID: string;
  heading: string;
  description: string;
  category: string;
}
function Card({ articleID, heading, description, category }: IArticleCard) {
  return (
    <CardBite href={`article/${articleID}`}>
      <h5 className="text-2xl font-bold tracking-tight text-gray-600 dark:text-white">
        {heading}
      </h5>
      <p className="font-normal text-gray-700 dark:text-gray-300">
        {description}
      </p>

      <BadgeBite color={"gray"} icon={HiArrowSmRight} size="sm">
        {category}
      </BadgeBite>
    </CardBite>
  );
}

export default Card;