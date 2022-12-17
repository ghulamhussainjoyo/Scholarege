import { configureStore } from "@reduxjs/toolkit";
import { ArticleService } from '../service/ArticleService'
// import authReducer from "../reducer/authReducer/authReducer";

const Store = configureStore({
    reducer: {
        [ArticleService.reducerPath]: ArticleService.reducer,
        // [notesService.reducerPath]: notesService.reducer,
        // [tasksService.reducerPath]: tasksService.reducer,
        // contactReducer: contactReducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat([
            ArticleService.middleware,
            // notesService.middleware,
            // tasksService.middleware,
        ]),
});

export default Store;
