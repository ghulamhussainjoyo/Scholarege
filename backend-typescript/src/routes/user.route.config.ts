import express from 'express';
import { CommonRoutesConfig } from './common.routes.config';
import debug from 'debug';
import UserController from '../controllers/user.controller';
import UserMiddleware from '../middlewares/user.middleware';
import BodyValidationMiddleware from '../common/middleware/body.validate.middleware';
import { body } from 'express-validator';
const log: debug.IDebugger = debug("route:user.routes")

export class UserRoutes extends CommonRoutesConfig {

    constructor(app: express.Application) {
        super(app, "UserRoutes");
    }

    configRoutes(): express.Application {
        this.app
            .route(`/user`)
            .get(UserController.getUsers)
            //  UsersMiddleware.validateRequiredUserBodyFields,
            //  UsersMiddleware.validateSameEmailDoesntExist,

            .post(
                UserMiddleware.validateRequiredUserBodyFields,
                body('email').isEmail(),
                body('password')
                    .isLength({ min: 5 })
                    .withMessage('Must include password (5+ characters)'),
                BodyValidationMiddleware.verifyBodyFieldsErrors,
                UserMiddleware.validateSameEmailDoesntExist,
                UserController.addUser
            )


        return this.app;
    }

}