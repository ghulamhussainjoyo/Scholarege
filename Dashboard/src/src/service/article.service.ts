import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { IArticles } from "./interface/Article.interface";
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

        createArticle: builder.mutation<any, { [key: string]: any }>({
            query: (article) => {
                // console.log("mutation article", article.get('article'))
                return {
                    headers: {
                        "Content-type": "application/json",
                    },
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
                        "Access-Control-Request-Method": "GET"

                    },
                    url: '/article',
                    method: "GET"
                }
            },
            providesTags: ['articles']
        }),

    })
})


export const { useCreateArticleMutation, useGetAllArticlesQuery } = ArticleService