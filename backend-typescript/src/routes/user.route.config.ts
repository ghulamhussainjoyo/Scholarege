import express from 'express';
import { CommonRoutesConfig } from './common.routes.config';
import debug from 'debug';
import { body } from 'express-validator';
import UserController from '../controllers/user.controller';
import UserMiddleware from '../middlewares/user.middleware';
import BodyValidationMiddleware from '../common/middleware/body.validate.middleware';

const log: debug.IDebugger = debug("route:user.routes")

export class UserRoutes extends CommonRoutesConfig {

    constructor(app: express.Application) {
        super(app, "UserRoutes");
    }

    configRoutes(): express.Application {
        this.app
            .route(`/user`)
            .get(UserController.allUsers)
            .post(
                BodyValidationMiddleware.verifyBodyFieldsErrors,
                UserMiddleware.validateSameEmailDoesntExist,
                UserController.addUser
            )

        return this.app;
    }

}