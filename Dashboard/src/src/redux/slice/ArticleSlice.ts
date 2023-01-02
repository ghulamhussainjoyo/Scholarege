import { createSlice, PayloadAction, createSelector } from "@reduxjs/toolkit";


interface IArticle {
    heading?: string;
    description?: string;
    category?: string;
    region?: string;
    article?: string;
}



interface ArticleState {
    article?: IArticle
}


const initialState: ArticleState = {
    // article: localStorage.getItem('article') as IArticle
    article: {
        heading: "",
        description: "",
        category: "",
        region: "",
        article: "",
    }
}

let articleLocalStorageValue: ArticleState = JSON.parse(localStorage.getItem("article") as any) || "";

export const articleSlice = createSlice({
    name: "article",
    initialState:
        Object.keys(articleLocalStorageValue).length > 0 ?
            articleLocalStorageValue : initialState,
    reducers: {
        setArticleValue: (state, action: PayloadAction<{ [key: string]: string }>) => {
            if (state.article) {
                let key = Object.keys(action.payload)[0]
                let value = Object.values(action.payload)[0]
                state.article[key as keyof typeof initialState] = value
                localStorage.setItem("article", JSON.stringify(state))
            }
        },
        getArticleValue: () => {
            return
        }
    },
});


export const { setArticleValue, getArticleValue } = articleSlice.actions;
export default articleSlice.reducer;