import { Store, configureStore } from "@reduxjs/toolkit";
import { ArticleService } from './service/article.service'
// import authReducer from "../reducer/authReducer/authReducer";

const store = configureStore({
    reducer: {
        [ArticleService.reducerPath]: ArticleService.reducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat([
            ArticleService.middleware,
        ]),
    devTools: process.env.NODE_ENV !== 'production',

});

export default store;

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch;
