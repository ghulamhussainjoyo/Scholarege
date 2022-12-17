import express from 'express';
import { } from '../controllers/user.controller';


export class UserMiddleware {

    async validateSameEmailDoesntExist(
        req: express.Request,
        res: express.Response,
        next: express.NextFunction
    ) {
        // const user = await UserController
        // if (user) {
        //     res.status(400).send({ errors: ['User email already exists'] });
        // } else {
        //     next();
        // }
    }
}