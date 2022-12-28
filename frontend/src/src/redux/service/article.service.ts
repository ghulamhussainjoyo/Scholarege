import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { Article, IArticles } from "./interface/Article.interface";
import { API_URL } from "./api.service";


interface ICreateArticle {
    success: boolean,
    message: string
}

export const ArticleService = createApi({

    reducerPath: 'articleService',
    baseQuery: fetchBaseQuery({
        baseUrl: API_URL
    }),
    tagTypes: ["create-article", 'articles'],
    endpoints: (builder) => ({
        createArticle: builder.mutation<ICreateArticle, FormData>({
            query: (article) => {
                // console.log("mutation article", article.get('article'))
                return {
                    headers: {
                        "Content-Type": "application/json",
                    },
                    mode: 'no-cors',
                    url: '/article',
                    method: 'POST',
                    body: article,
                }
            },
            invalidatesTags: ['create-article', 'articles'],
        }),

        getAllArticles: builder.query<IArticles, void>({
            query: () => {
                return {
                    headers: {
                        "Content-Type": "application/json",
                    },
                    url: '/article',
                    method: "GET"
                }
            }
        }),

        getArticleById: builder.query<IArticles, string>({
            query: (id) => {
                return {
                    headers: {
                        "Content-Type": "application/json",
                    },
                    url: `/article/${id}`,
                    method: "GET"
                }
            }
        })
    })
})


export const { useCreateArticleMutation, useGetAllArticlesQuery, useGetArticleByIdQuery } = ArticleService