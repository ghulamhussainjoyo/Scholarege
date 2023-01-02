import express from 'express';
import { CommonRoutesConfig } from './common.routes.config';
import debug from 'debug';
import { body } from 'express-validator';
import commentController from '../controllers/comment.controller';
import bodyValidateMiddleware from '../common/middleware/body.validate.middleware';
const log: debug.IDebugger = debug("route:commet.routes")

export class CommentRoutes extends CommonRoutesConfig {

    constructor(app: express.Application) {
        super(app, "Comment Routes");
    }

    configRoutes(): express.Application {
        this.app
            .route(`/comment`)
            .get(commentController.commentsByArticleID)
            .post(bodyValidateMiddleware.verifyBodyFieldsErrors, commentController.createComment)



        return this.app;
    }

}