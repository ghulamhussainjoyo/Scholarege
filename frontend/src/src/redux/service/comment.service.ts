import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { API_URL } from "./api.service";
import { IComments } from "../../common/interface/comment.interface";


export const CommentService = createApi({

    reducerPath: 'commentService',
    baseQuery: fetchBaseQuery({
        baseUrl: API_URL
    }),
    tagTypes: ['comments'],
    endpoints: (builder) => ({

        // Create an Article --------------------------------->
        createComment: builder.mutation<any, { [key: string]: any }>({
            query: (article) => {
                // console.log("mutation article", article.get('article'))
                return {
                    headers: {
                        "Content-type": "application/json",
                    },
                    url: '/comment',
                    method: 'POST',
                    body: article,
                }
            },
            invalidatesTags: ['comments'],
        }),

        // Get all comments ------------------------------------->
        commentByArticle: builder.query<IComments, { articleID: string }>({
            query: (comment) => {
                console.log(comment);
                return {
                    headers: {
                        "Content-Type": "application/json",
                    },
                    params: {
                        articleID: comment.articleID
                    },
                    url: "/comment",
                    method: "GET",

                }
            },
            providesTags: ['comments']
        }),

    })
})


export const { useCommentByArticleQuery, useCreateCommentMutation } = CommentService