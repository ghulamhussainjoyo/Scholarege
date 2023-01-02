import express from 'express';
import MysqlDatabase from '../../common/database/Mysql.database';
import argon2 from 'argon2'
import userController from '../../controllers/user.controller';




class AuthMiddleware {

    async verifyUserPassword(
        req: express.Request,
        res: express.Response,
        next: express.NextFunction
    ) {
        const user: any = await userController.getUserByEmailWithPassword(req.body.email)

        if (user) {
            const passwordHash = user.password
            const permissionFlag = user.role === "user" ? 1 : 2

            if (await argon2.verify(passwordHash, req.body.password)) {
                req.body = {
                    userId: user.userID,
                    email: user.email,
                    permissionFlags: permissionFlag,
                };
                return next();
            }
        }
        res.status(400).send({ errors: ['Invalid email and/or password'] });
    }
}

export default new AuthMiddleware();