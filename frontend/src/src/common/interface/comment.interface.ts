export interface IComments {
    commet: IComment[];
}

export interface IComment {
    comment_id: string;
    comment_text: string;
    username: string;
    created_at: string;
    replies?: IComment[] | null;
    user_id?: string;
}
