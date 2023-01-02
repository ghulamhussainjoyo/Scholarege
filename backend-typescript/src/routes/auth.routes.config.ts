import { CommonRoutesConfig } from './common.routes.config';
import authController from '../auth/controller/Auth.controller';
import authMiddleware from '../auth/middleware/auth.middleware';
import express from 'express';
import BodyValidationMiddleware from '../common/middleware/body.validate.middleware';

import { body } from 'express-validator';
import jwtMiddleware from '../auth/middleware/jwt.middleware';

export class AuthRoutes extends CommonRoutesConfig {

    constructor(app: express.Application) {
        super(app, 'AuthRoutes');
    }

    configRoutes(): express.Application {
        this.app.post(`/auth`, [
            body('email').isEmail(),
            body('password').isString(),
            BodyValidationMiddleware.verifyBodyFieldsErrors,
            authMiddleware.verifyUserPassword,
            authController.createJWT,
        ]);

        this.app.post(`/auth/refresh-token`, [
            jwtMiddleware.validJWTNeeded,
            jwtMiddleware.verifyRefreshBodyField,
            jwtMiddleware.validRefreshNeeded,
            authController.createJWT,
        ]);
        return this.app;
    }

}