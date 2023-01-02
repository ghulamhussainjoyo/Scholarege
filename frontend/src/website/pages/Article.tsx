import React, { Fragment, useEffect, useMemo, useState } from "react";
import BreadCrumbC from "../components/others/MyBreadCrumb";
import Article from "../components/Article/Article";
import CategoryArticles from "../components/Article/ArticleSidebar";
import ArticleHeader from "../components/Article/ArticleHeader";
import {
  useGetAllArticlesQuery,
  useGetArticleByIdQuery,
} from "../../src/redux/service/article.service";
import { useLocation, useParams } from "react-router-dom";
import { useCommentByArticleQuery } from "../../src/redux/service/comment.service";

// -------- Component
interface IState {
  category: string;
}

function Scholarship() {
  const breadCrumbList = ["home", "scholarship"];
  const params = useParams();
  const { pathname, state } = useLocation();

  const { category } = state as IState;

  const articleId = params.articleId || "";

  // Comment by ID
  const {
    data: article,
    isFetching: isArticleFetching,
    isSuccess: isArticleSuccess,
    error: articleError,
  } = useGetArticleByIdQuery(articleId);

  // All related articles
  const {
    data: articles,
    isFetching: isArticlesFetching,
    isSuccess: isArticlesSuccess,
    error: articlesError,
  } = useGetAllArticlesQuery({ heading: "", category, region: "" });

  // comment by article
  const {
    data: comments,
    isFetching: isCommentsFetching,
    isSuccess: isCommentsSuccess,
    isError: isCommentsError,
    isLoading: isCommentsLoading,
    error: CommentError,
  } = useCommentByArticleQuery({ articleID: articleId });

  // ⬇️
  const articleMemo = useMemo(() => {
    return articles?.article.filter(
      (article) => article.articleID !== articleId
    );
  }, [articles, articleId]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return (
    <Fragment>
      {!isArticleFetching && !isArticlesFetching ? (
        <Fragment>
          {isArticleSuccess &&
          isArticleSuccess &&
          articleMemo &&
          article &&
          comments ? (
            <Fragment>
              <ArticleHeader
                header={article?.article[0].heading}
                category={article?.article[0].category}
                country={article?.article[0].region}
                date={article?.article[0].created_at}
              />

              <section className=" sm:mr-10 sm:ml-20 m-5 sm:m-0'">
                <BreadCrumbC name="" breadCrumbList={breadCrumbList} />
                <br />
                <br />
                <div className="article-container flex items-start justify-between sm:gap-10">
                  <Article
                    header={article.article[0].heading}
                    description={article.article[0].article}
                    articleID={article.article[0].articleID}
                    comments={comments}
                  />
                  <CategoryArticles article={articleMemo} />
                </div>
              </section>
            </Fragment>
          ) : (
            <Fragment>{JSON.stringify(articleError)}</Fragment>
          )}
        </Fragment>
      ) : (
        <div className="text-black h-[100vh]">fetching...</div>
      )}
    </Fragment>
  );
}

export default Scholarship;
