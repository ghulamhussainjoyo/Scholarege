import express, { Request, Response } from 'express';
import { v4 as uuid4 } from 'uuid';
import debug from 'debug';
import { createUserDto } from '../dto/user.dto';
import argon2 from 'argon2';
import mysql from 'mysql';
import { dbConfig } from '../common/config';
import MysqlDatabase from '../common/database/Mysql.database';
import Mysql2Database from '../common/database/Mysql2.database';
import { FieldPacket, RowDataPacket } from 'mysql2';
import mysql2 from 'mysql2/promise'



const log: debug.IDebugger = debug('app:users-dao');


class UserController {


    constructor() {
        // console.log("user controller")

    }

    async addUser(req: express.Request, res: express.Response) {

        let {
            firstName, lastName, email, password, education, role, filedOfInterest }: createUserDto = req.body;


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

        const hashPassword = await argon2.hash(req.body.password);

        let user = [uuid4(), firstName, lastName, email, hashPassword,
            education, role, filedOfInterest];


        MysqlDatabase.dbConnection.query(stmt, user, (err, result) => {

            if (!err) {

                res.status(200).json({
                    success: true
                });
            }
            else {
                res.status(404).json({ error: [`Can not Create User`] })
            }
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

    async getUsers(req: Request, res: express.Response) {

        const connection: mysql2.Connection = await Mysql2Database.createConnection();

        const [rows, _] = await connection?.execute(`SELECT * FROM users where email = "ghulamhussain.software@gmail.com"`);
        // console.log(rows)
        res.json(rows)
        connection.end();
        // console.log(fields)
    }



    async getUserByEmailWithPassword(email: string) {
        const connection: mysql2.Connection = await Mysql2Database.createConnection();

        const [rows, _] = await connection.execute(`SELECT * FROM users where email = "${email}"`)
        type rowsType = typeof rows;
        return rows[0 as keyof typeof rows];
    }


}

export default new UserController();