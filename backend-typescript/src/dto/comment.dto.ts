export interface createCommetDto {

    comment?: string;
    parent_comment_id?: string
    articleID?: string;
    userID?: string;
}

export interface getCommetDto {

    comment?: string;
    username?: string
    created_at?: string;
    replies?: string;
    userID?: string;
    commentID?: string
}