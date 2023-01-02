export interface IArticles {
    article: IArticle[];
}

export interface IArticle {
    articleID: string;
    heading: string;
    description: string;
    category: string;
    region: string;
    article: string;
    created_at: string;
    userID: string;
}