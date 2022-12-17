import express from 'express';


class ArticleMiddleware {

    extractArticleId(req: express.Request, res: express.Response, next: express.NextFunction) {
        req.body.articleId = req.params.articleId;
        next();
    }
}

export default new ArticleMiddleware();