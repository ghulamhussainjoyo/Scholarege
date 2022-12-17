import express from 'express';
// import { UserController } from '../controllers/user.controller';
import mysql from 'mysql';
import { dbConfig } from '../common/config';
import MysqlDatabase from '../common/database/Mysql.database';
import debug from 'debug';

const log: debug.IDebugger = debug('app:user.middleware')



class UserMiddleware {

    constructor() {
    }

    validateSameEmailDoesntExist(
        req: express.Request,
        res: express.Response,
        next: express.NextFunction
    ) {

        let stmt = `Select email from users where email="${req.body.email}"`
        MysqlDatabase.dbConnection.query(stmt, (err, result) => {
            log(result[0].email);
            if (result.length !== 0) {
                res.status(400).send({ errors: ['User email already exists'] });
            }
            else {
                next();
            }
        })



    }
}


export default new UserMiddleware();