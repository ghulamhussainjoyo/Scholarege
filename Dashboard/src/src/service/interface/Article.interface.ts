export interface IArticles {
    article: Article[];
}

export interface Article {
    articleID: string;
    heading: string;
    description: string;
    category: string;
    region: string;
    article: string;
    userID: string;
}