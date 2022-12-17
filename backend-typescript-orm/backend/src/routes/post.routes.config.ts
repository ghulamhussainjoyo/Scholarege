import express from 'express';
import { CommonRoutesConfig } from './common.routes.config';

export class PostRoutes extends CommonRoutesConfig {

    constructor(app: express.Application) {
        super(app, "PostRoutes");
    }

    configRoutes(): express.Application {
        console.log("config")
        this.app.route(`/user`)
            .get((req: express.Request, res: express.Response) => {
                res.status(200).json({
                    success: true,
                    message: 'user'
                })
            })

        return this.app;
    }

}