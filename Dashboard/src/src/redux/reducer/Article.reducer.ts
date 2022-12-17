import { createSlice } from "@reduxjs/toolkit";

const access_token = localStorage.getItem("access_token");

const articleReducer = createSlice({
    name: "authReducer",
    initialState: {
        accessToken: access_token ? access_token : null,
    },
    reducers: {
        setArticleValue: (state, action) => {
            state = action.payload;
        },
        ArticleVlaue: () => {

        }
    },
});

export const { setArticleValue, logout } = articleReducer.actions;
export default articleReducer.reducer;