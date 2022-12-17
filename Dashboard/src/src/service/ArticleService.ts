import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { Articles } from "./interface/Article.interface";

export const ArticleService = createApi({

    reducerPath: 'articleService',
    baseQuery: fetchBaseQuery({
        baseUrl: "http://localhost:5000/"
    }),
    tagTypes: ["create-article"],
    endpoints: (builder) => ({
        getAllArticles: builder.query({
            query: (data) => {
                return {
                    headers: {
                        "Content-Type": "application/json",
                    },
                    url: 'article',
                    method: 'POST',
                    body: data
                }
            },
            providesTags: ["create-article"]


        })
    })
})


export const { useGetAllArticlesQuery } = ArticleService