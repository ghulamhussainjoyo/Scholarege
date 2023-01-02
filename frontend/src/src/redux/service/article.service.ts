import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { IArticles } from "../../common/interface/Article.interface";
import { API_URL } from "./api.service";


interface ICreateArticle {
    success: boolean,
    message: string
}

interface IGetAllArticles {
    heading?: string;
    category?: string;
    region?: string

}

export const ArticleService = createApi({

    reducerPath: 'articleService',
    baseQuery: fetchBaseQuery({
        baseUrl: API_URL
    }),
    tagTypes: ["create-article", 'articles', 'single-article'],
    endpoints: (builder) => ({

        // Create an Article --------------------------------->
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
            invalidatesTags: ['articles'],
        }),

        // Get all Articles ------------------------------------->
        getAllArticles: builder.query<IArticles, IGetAllArticles>({
            query: (filter) => {
                return {
                    headers: {
                        "Content-Type": "application/json",
                    },

                    url: `/article?heading=${filter.heading}&category=${filter.category}&region=${filter.region}`,
                    method: "GET"
                }
            },
            providesTags: ['articles']
        }),
        // Get single Article ------------------------------------->
        getArticleById: builder.query<IArticles, string>({
            query: (id) => {
                return {
                    headers: {
                        "Content-Type": "application/json",
                    },
                    url: `/article/${id}`,
                    method: "GET"
                }
            },
            providesTags: ['single-article']
        })
    })
})


export const { useCreateArticleMutation, useGetAllArticlesQuery, useGetArticleByIdQuery } = ArticleService