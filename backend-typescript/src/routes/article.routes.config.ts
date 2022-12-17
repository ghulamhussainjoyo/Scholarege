import express from 'express';
import { CommonRoutesConfig } from './common.routes.config';
import debug from 'debug';
import ArticleController from '../controllers/article.controller';
import articleMiddleware from '../middlewares/article.middleware';

const log: debug.IDebugger = debug("route:article.routes")

export class PostRoutes extends CommonRoutesConfig {

    constructor(app: express.Application) {
        super(app, "articles");
    }

    configRoutes(): express.Application {

        this.app.route(`/article`)
            .get(ArticleController.getAllAticles)
            .post(ArticleController.createArticle)

        // article get and delete and update
        this.app.param('articleId', articleMiddleware.extractArticleId);
        this.app
            .route('/article/:articleId')
            .get(ArticleController.getArticleByID)



        return this.app;
    }

}