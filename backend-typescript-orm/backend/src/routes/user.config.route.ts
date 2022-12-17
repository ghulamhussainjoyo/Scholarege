import express from 'express';
import { CommonRoutesConfig } from './common.routes.config';
import debug from 'debug';
import { body } from 'express-validator';
import { createUser, getUser } from '../controllers/user.controller';

const log: debug.IDebugger = debug("route:user.routes")


export class UserRoutes extends CommonRoutesConfig {

    constructor(app: express.Application) {
        super(app, "UserRoutes");
    }

    configRoutes(): express.Application {

        this.app
            .route(`/user`)
            .get(getUser)

        this.app.route('/user/create')
            .get(createUser)

        return this.app;
    }

}