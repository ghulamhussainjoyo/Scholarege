import express from 'express';
// import { UserController } from '../controllers/user.controller';
import mysql from 'mysql';
import { dbConfig } from '../common/config';
import MysqlDatabase from '../common/database/Mysql.database';
import debug from 'debug';

const log: debug.IDebugger = debug('app:user.middleware')



class UserMiddleware {



    validateRequiredUserBodyFields(
        req: express.Request,
        res: express.Response,
        next: express.NextFunction) {

        if (req.body && req.body.email && req.body.password) {
            next();
        } else {
            res.status(400).send({
                error: `Missing required fields email and password`,
            });
        }

    }

    validateSameEmailDoesntExist(
        req: express.Request,
        res: express.Response,
        next: express.NextFunction
    ) {

        let stmt = `Select email from users where email="${req.body.email}"`
        MysqlDatabase.dbConnection.query(stmt, (err, result) => {

            if (result.length !== 0) {
                log(result[0].email);
                res.status(400).send({ errors: ['User email already exists'] });
            }
            else {
                next();
            }
        })



    }


    async validateUserExists(
        req: express.Request,
        res: express.Response,
        next: express.NextFunction
    ) {
        let stmt = `Select email from users where userID="${req.params.id}"`
        MysqlDatabase.dbConnection.query(stmt, (err, result) => {
            log(result[0].userID);
            if (result.length !== 0) {
                res.status(400).send({ errors: [`User ${req.params.id} not found`] });
            }
            else {
                next();
            }
        })
    }
}


export default new UserMiddleware();