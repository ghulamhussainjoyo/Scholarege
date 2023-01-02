import express, { query, Request, Response } from 'express';
import debug from 'debug';
import { v4 as uuid4 } from 'uuid'
import Mysql2Database from '../common/database/Mysql2.database';
import mysql2 from 'mysql2/promise'
import { createCommetDto, getCommetDto } from '../dto/comment.dto';


const log: debug.IDebugger = debug('controller:article.controller')


class CommentController {


    // User ID
    // aabf914e-054b-413c-ab3c-a56db96cc8a9
    async createComment(req: Request, res: Response) {

        let { comment, articleID, parent_comment_id, userID }: createCommetDto = req.body

        console.log(req.body)

        if (parent_comment_id) {

            let stmt = `INSERT INTO comments  
            (commentID,comment, parent_comment_id,userID,articleID)
            values     
            ( ?,?,?,?,?)`;

            let commentData = [
                uuid4(),
                comment,
                parent_comment_id,
                userID,
                articleID
            ];

            try {
                const connection: mysql2.Connection = await Mysql2Database.createConnection();
                const [rows, _] = await connection?.execute(stmt, commentData);
                connection.end();

                return res.status(200).json({
                    succes: true,
                    message: "comment reply done"
                });
            } catch (error) {
                return res.status(404).json({
                    error: [error]
                })
            }
        }
        // Comment itself
        else {

            console.log("else")
            let stmt = `INSERT INTO comments (commentID,comment,userID,articleID) values (?,?,?,?)`;
            let commentData = [
                uuid4(),
                comment,
                userID,
                articleID
            ];

            try {
                const connection: mysql2.Connection = await Mysql2Database.createConnection();
                const [rows, _] = await connection?.execute(stmt, commentData);
                connection.end();

                return res.status(200).json({
                    succes: true,
                    message: "comment added"
                });
            } catch (error) {
                return res.status(404).json({
                    error: [error]
                })
            }
        }


    }

    // User ID
    // aabf914e-054b-413c-ab3c-a56db96cc8a9

    async commentsByArticleID(req: Request, res: Response) {

        const articleID = req.query.articleID;


        const stmt =
            `SELECT c.commentID AS comment_id, c.comment AS comment_text,c.created_at, u.firstName AS username,
            (SELECT GROUP_CONCAT("{", '"comment_id"',":", '"',r.commentID,'"',',', '"comment_text"',":",'"',r.comment,'"', ',','"user_id"',":", '"',u.userID,'"',',','"username"',":",
            '"',u.firstName,'"',',','"created_at"',":",'"',r.created_at,'"', "}" SEPARATOR '\n') FROM comments r LEFT JOIN users u ON r.userID = u.userID 
            WHERE r.parent_comment_id = c.commentID) AS replies FROM comments c left join users u on c.userID = u.userID
            where c.parent_comment_id is null and c.articleID = "${articleID}" ORDER BY created_at DESC`


        try {
            const connection: mysql2.Connection = await Mysql2Database.createConnection();
            let [rows, _] = await connection?.execute(stmt);
            let result = Object.values(JSON.parse(JSON.stringify(rows)));

            result.forEach((row: any) => {
                if (row.replies) {
                    row.replies = row.replies.split('\n').map((data: any) => JSON.parse(data))
                }
            })

            connection.end();

            return res.status(200).json({
                commet: result
            });
        } catch (error) {
            return res.status(404).json({
                error: [error]
            })
        }
    }

}

export default new CommentController()