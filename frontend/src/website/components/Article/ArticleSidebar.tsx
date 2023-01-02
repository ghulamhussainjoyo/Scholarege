import React from "react";
import StickyBox from "react-sticky-box";
import SmallCard from "../others/SmallCard";
import { IArticles } from "../../../src/common/interface/Article.interface";

function ArticleSidebar({ article }: IArticles) {
  return (
    <StickyBox className="-mt-5 w-4/12">
      {article.length > 0 ? (
        article.map((article) => (
          <SmallCard key={article.articleID} {...article} />
        ))
      ) : (
        <div className="flex justify-center center h-screen"></div>
      )}
    </StickyBox>
  );
}

export default ArticleSidebar;
