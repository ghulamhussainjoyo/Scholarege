import { configureStore } from "@reduxjs/toolkit";
import { ArticleService } from './service/article.service'
import { CommentService } from './service/comment.service'
import { articleSlice } from './slice/ArticleSlice'
import { notificationSlice } from './slice/notification.slice'
// import authReducer from "../reducer/authReducer/authReducer";

const store = configureStore({
    reducer: {
        [ArticleService.reducerPath]: ArticleService.reducer,
        [CommentService.reducerPath]: CommentService.reducer,
        article: articleSlice.reducer,
        notification: notificationSlice.reducer
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat([
            ArticleService.middleware,
            CommentService.middleware
        ]),
    devTools: process.env.NODE_ENV !== 'production',

});

export default store;

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch;
