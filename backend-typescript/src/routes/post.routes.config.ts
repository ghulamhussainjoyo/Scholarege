import express from 'express';
import { CommonRoutesConfig } from './common.routes.config';
import { prisma } from '../service/databaseConnection'
export class PostRoutes extends CommonRoutesConfig {

    constructor(app: express.Application) {
        super(app, "PostRoutes");
    }

    configRoutes(): express.Application {
        this.app.route(`/create`)
            .get((req: express.Request, res: express.Response) => {
                prisma.user.create({
                    data: {
                        name: "Ghulam Hussain"
                    }
                }).then(result => res.status(200).json(result))
                    .catch(err => res.status(404).send(err))

            });

        this.app.route('/users')
            .get((req: express.Request, res: express.Response) => {

                prisma.user.findMany()
                    .then(result => res.status(200).json(result))
                    .catch(err => res.status(404).send(err))
            });

        return this.app;
    }

}