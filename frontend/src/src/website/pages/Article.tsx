import React, { Fragment, useState } from "react";
import BreadCrumbC from "../components/others/MyBreadCrumb";
import Article from "../components/Article/Article";
import ArticleSidebar from "../components/Article/ArticleSidebar";
import ArticleHeader from "../components/Article/ArticleHeader";
import { useGetArticleByIdQuery } from "../../redux/service/article.service";
import { useParams } from "react-router-dom";

// -------- Component
function Scholarship() {
  const breadCrumbList = ["home", "scholarship"];
  const params = useParams();

  const articleId = params.articleId || "";

  const { data, isFetching, isSuccess, error } =
    useGetArticleByIdQuery(articleId);

  return (
    <Fragment>
      {!isFetching ? (
        <Fragment>
          {isSuccess ? (
            <Fragment>
              <ArticleHeader
                header={data?.article[0].heading}
                category={data?.article[0].category}
                country={data?.article[0].region}
                date={data?.article[0].created_at}
              />

              <section className=" sm:mr-10 sm:ml-20 m-5 sm:m-0'">
                <BreadCrumbC name="" breadCrumbList={breadCrumbList} />
                <br />
                <br />
                <div className="article-container flex items-start justify-between sm:gap-10">
                  <Article
                    header={data.article[0].heading}
                    description={data.article[0].article}
                    articleID={data.article[0].articleID}
                  />
                  <ArticleSidebar />
                </div>
              </section>
            </Fragment>
          ) : (
            <Fragment>{JSON.stringify(error)}</Fragment>
          )}
        </Fragment>
      ) : (
        <div className="text-black h-[100vh]">fetching...</div>
      )}
    </Fragment>
  );
}

export default Scholarship;
