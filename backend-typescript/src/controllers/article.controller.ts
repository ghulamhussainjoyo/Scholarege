import express, { query } from 'express';
import debug from 'debug';
import MysqlDatabase from '../common/database/Mysql.database';
import { createArticleDto } from '../dto/article.dto';
import { v4 as uuid4 } from 'uuid'
// 
const log: debug.IDebugger = debug('controller:article.controller')


class ArticleController {
    constructor() {
    }


    createArticle(req: express.Request, res: express.Response) {
        let {
            heading,
            description,
            category,
            region,
            article,
            userID
        }: createArticleDto = req.body;

        let stmt = `INSERT INTO articles  
           (articleID,heading, description,category,region,article,userID)
            values     
            ( ?,?,?,?,?,?,?)
        `;

        let user = [
            uuid4(),
            heading,
            description,
            category,
            region,
            article,
            userID
        ];

        MysqlDatabase.dbConnection.query(stmt, user, function (err, result) {
            if (!err) {
                res.status(200).json({
                    success: true,
                    message: "article added successfully"
                });
            }
            else {
                res.status(404).json({
                    error: err
                })
            }
        });
    }


    getAllAticles(req: express.Request, res: express.Response) {
        const stmt = "select * from articles"
        MysqlDatabase.dbConnection.query(stmt, function (error, result) {
            if (!error) {
                res.status(200).json({
                    article: result
                })
            }
            else {
                res.status(404).json({
                    error: error
                })
            }
        })
    }


    getArticleByID(req: express.Request, res: express.Response) {
        const id = req.body.articleId;
        const stmt = `select * from articles where articleID = "${id}"`
        MysqlDatabase.dbConnection.query(stmt, function (error, result) {
            if (!error) {

                res.status(200).json({
                    article: result
                })
            }
            else {
                res.status(404).json({
                    error: error
                })
            }
        })
    }



}
export default new ArticleController();