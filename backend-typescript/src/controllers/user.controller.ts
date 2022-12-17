import { v4 as uuid4 } from 'uuid';
import debug from 'debug';
import express from 'express';
import { createUserDto } from '../dto/user.dto';

import mysql from 'mysql';
import { dbConfig } from '../common/config';
import MysqlDatabase from '../common/database/Mysql.database';
const log: debug.IDebugger = debug('app:users-dao');


class UserController {


    constructor() {
        console.log("user controller")

    }

    addUser(req: express.Request, res: express.Response) {


        let connection = mysql.createConnection(dbConfig)
        connection.connect(err => {
            if (err) {
                log(err)
            } else {
                console.log('connected Successfully')
                log("connected Successfully");
            }
        })

        let {
            firstName,
            lastName,
            email,
            password,
            education,
            role,
            filedOfInterest
        }: createUserDto = req.body;


        let stmt = `INSERT INTO users  
            (userID,
            firstName,
            lastName,
            email,
            password,
            education,
            role,
            filedOfInterest) 
            values       
            ( ?,?,?,?,?,?,?,?);
        `;

        let user = [uuid4(), firstName, lastName, email, password,
            education, role, filedOfInterest];




        connection.query(stmt, user, (err, result, filds) => {

            if (err) {
                return res.status(404).json(err);
            }
            return res.status(200).json({
                result
            });
        });

    }

    allUsers(req: express.Request, res: express.Response) {
        const stmt = `select * from users`
        MysqlDatabase.dbConnection.query(stmt, (err, result) => {

            if (!err) {

                res.status(200).json({
                    success: true,
                    users: result
                });
            }
            else {
                res.status(404).json({ error: [`User email already exists`] })
            }
        });
    }


}

export default new UserController();