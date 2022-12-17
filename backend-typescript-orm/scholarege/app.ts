import express from 'express';
import * as http from 'http';

import * as winston from 'winston';
import * as expressWinston from 'express-winston';
import cors from 'cors';
// import { CommonRoutesConfig } from './src/routes/common.routes.config'
// import { PostRoutes } from './src/routes/post.routes.config';
import debug from 'debug';
// import { Database } from './src/service/Database';

const app: express.Application = express();
const server: http.Server = http.createServer(app);
const port = 5001;
// const routes: Array<CommonRoutesConfig> = [];
const debugLog: debug.IDebugger = debug('app');


app.use(express.json())
app.use(cors())

// const database = new Database();

const loggerOptions: expressWinston.LoggerOptions = {
    transports: [new winston.transports.Console],
    format: winston.format.combine(
        winston.format.json(),
        winston.format.prettyPrint(),
        winston.format.colorize({ all: true })
    ),
}

if (!process.env.DEBUG) {
    loggerOptions.meta = false;
}

app.use(expressWinston.logger(loggerOptions));

// routes.push(new PostRoutes(app));


const runningMessage = `Server running at https://localhost:${port}`;

app.get('/', (req: express.Request, res: express.Response) => {
    res.status(200).send(runningMessage);
});

// backend v1
server.listen(port, () => {
    // routes.forEach((route: CommonRoutesConfig) => {
    //     debugLog(`Routes configured for ${route.getName()}`);
    // });
    console.log("runningMessage");
})