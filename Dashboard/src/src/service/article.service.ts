import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { IArticles } from "./interface/Article.interface";


interface ICreateArticle {
    success: boolean,
    message: string
}

export const ArticleService = createApi({

    reducerPath: 'articleService',
    baseQuery: fetchBaseQuery({
        baseUrl: "http://localhost:5000"
    }),
    tagTypes: ["create-article", 'articles'],
    endpoints: (builder) => ({
        createArticle: builder.mutation<ICreateArticle, FormData>({
            query: (article) => {
                // console.log("mutation article", article.get('article'))
                return {
                    headers: {
                        "Content-Type": "application/json",
                        'Access-Control-Allow-Origin': '*',
                        'Access-Control-Allow-Methods': 'POST',
                        'Access-Control-Allow-Headers': 'application/json'

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
        })
    })
})


export const { useCreateArticleMutation, useGetAllArticlesQuery } = ArticleService