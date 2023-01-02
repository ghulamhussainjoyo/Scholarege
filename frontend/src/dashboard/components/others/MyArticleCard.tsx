import React, { FC } from "react";
import { Card as CardBite, Badge as BadgeBite } from "flowbite-react";
import { HiArrowSmRight } from "react-icons/hi";

const MyArticleCard: FC<{
  heading: string;
  description: string;
  category: string;
}> = ({ heading, description, category }) => {
  return (
    <CardBite href="#">
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
};

export default MyArticleCard;
