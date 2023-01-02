import express, { query, Request, Response } from 'express';
import debug from 'debug';
import MysqlDatabase from '../common/database/Mysql.database';
import { createArticleDto } from '../dto/article.dto';
import { v4 as uuid4 } from 'uuid'
import { ReqQuery } from '../common/interface/article.interface';
import Mysql2Database from '../common/database/Mysql2.database';
import mysql2 from 'mysql2/promise'


const log: debug.IDebugger = debug('controller:article.controller')

function joinArray(array: string[]): string {
    return array.map(element => `"${element}"`).join(',')
}

class ArticleController {

    async createArticle(req: Request, res: Response) {

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

        let articleData = [
            uuid4(),
            heading,
            description,
            category,
            region,
            article,
            userID
        ];


        try {
            const connection: mysql2.Connection = await Mysql2Database.createConnection();

            const [rows, _] = await connection?.execute(stmt, articleData);
            console.log({ rows });
            connection.end();

            return res.status(201).json({
                success: true,
                message: "article added successfully"
            });

        } catch (error) {

            return res.status(404).json({
                error: [error]
            })
        }
    }


    async getAllAticles(req: Request<any, any, any, ReqQuery>, res: Response) {
        // if heading !category !region
        if (req.query.heading && !req.query.category && !req.query.region) {
            const heading = `${req.query.heading}`;
            const stmt = `select * from articles where heading like "%${heading}%"`

            try {
                const connection: mysql2.Connection = await Mysql2Database.createConnection();
                const [rows, _] = await connection?.execute(stmt);
                connection.end();
                return res.status(200).json({
                    article: rows
                });
            } catch (error) {
                return res.status(404).json({
                    error: [error]
                })
            }
        }
        // if !heading category !region
        else if (!req.query.heading && req.query.category && !req.query.region) {

            const category = `(${joinArray(req.query.category.split(','))})`;
            const stmt = `select * from articles where  category in ${category}`

            try {
                const connection: mysql2.Connection = await Mysql2Database.createConnection();
                const [rows, _] = await connection?.execute(stmt);
                connection.end();

                return res.status(200).json({
                    article: rows
                });
            } catch (error) {

                return res.status(404).json({
                    error: [error]
                })
            }
        }
        // if !heading !category region
        else if (!req.query.heading && !req.query.category && req.query.region) {
            const region = `(${joinArray(req.query.region.split(','))})`;
            const stmt = `select * from articles where region in ${region}`
            try {
                const connection: mysql2.Connection = await Mysql2Database.createConnection();
                const [rows, _] = await connection?.execute(stmt);
                connection.end();
                return res.status(200).json({
                    article: rows
                });
            } catch (error) {
                return res.status(404).json({
                    error: [error]
                })
            }
        }
        // if heading category !region
        else if (req.query.heading && req.query.category && !req.query.region) {

            const heading = `${req.query.heading}`;
            const category = `(${joinArray(req.query.category.split(','))})`;
            const stmt = `select * from articles where heading like "%${heading}%" and category in ${category}`
            try {
                const connection: mysql2.Connection = await Mysql2Database.createConnection();

                const [rows, _] = await connection?.execute(stmt);

                connection.end();

                return res.status(200).json({
                    article: rows
                });
            } catch (error) {

                return res.status(404).json({
                    error: [error]
                })
            }
        }
        // if heading !category region
        else if (req.query.heading && !req.query.category && req.query.region) {

            const heading = `${req.query.heading}`;
            const region = `(${joinArray(req.query.region.split(','))})`;
            const stmt = `select * from articles where heading like "%${heading}%" and region in ${region}`


            try {
                const connection: mysql2.Connection = await Mysql2Database.createConnection();
                const [rows, _] = await connection?.execute(stmt);
                connection.end();
                return res.status(200).json({
                    article: rows
                });
            } catch (error) {

                return res.status(404).json({
                    error: [error]
                })
            }
        }
        // if !heading category region
        else if (!req.query.heading && req.query.category && req.query.region) {


            const category = `(${joinArray(req.query.category.split(','))})`;
            const region = `(${joinArray(req.query.region.split(','))})`;

            const stmt = `select * from articles where category in ${category} and region in ${region}`


            try {
                const connection: mysql2.Connection = await Mysql2Database.createConnection();
                const [rows, _] = await connection?.execute(stmt);
                connection.end();

                return res.status(200).json({
                    article: rows
                });
            } catch (error) {

                return res.status(404).json({
                    error: [error]
                })
            }
        }
        // if heading category region
        else if (req.query.heading && req.query.category && req.query.region) {

            const heading = `${req.query.heading}`;
            const category = `(${joinArray(req.query.category.split(','))})`;
            const region = `(${joinArray(req.query.region.split(','))})`;

            const stmt = `select * from articles where heading like "%${heading}%" and category in ${category} and region in ${region}`


            try {
                const connection: mysql2.Connection = await Mysql2Database.createConnection();

                const [rows, fields] = await connection?.execute(stmt);
                console.log({ rows })
                connection.end();

                return res.status(200).json({
                    article: rows
                });
            } catch (error) {

                return res.status(404).json({
                    error: [error]
                })
            }
        }
        // if !heading !category !region
        else {
            const stmt = `select * from articles`
            try {
                const connection: mysql2.Connection = await Mysql2Database.createConnection();

                const [rows, _] = await connection?.execute(stmt);
                connection.end();

                return res.status(200).json({
                    article: rows
                });
            } catch (error) {

                return res.status(404).json({
                    error: [error]
                })
            }
        }
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