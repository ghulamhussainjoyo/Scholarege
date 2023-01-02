import express from 'express';
import * as http from 'http';

import * as winston from 'winston';
import * as expressWinston from 'express-winston';
import cors from 'cors';
import { CommonRoutesConfig } from './src/routes/common.routes.config'
import { PostRoutes } from './src/routes/article.routes.config';
import { UserRoutes } from './src/routes/user.route.config';
import debug from 'debug';
import bodyparser from 'body-parser'
import fileUpload from 'express-fileupload';
import { ImageRoutes } from './src/routes/image.routes.config';
import dotenv from 'dotenv';
import { AuthRoutes } from './src/routes/auth.routes.config';
import { CommentRoutes } from './src/routes/comment.routes.config';


const cookieParser = require('cookie-parser');


// --------------------------------------------
const app: express.Application = express();
const server: http.Server = http.createServer(app);
const port = 5001;
const routes: Array<CommonRoutesConfig> = [];
const debugLog: debug.IDebugger = debug('app');
const dotenvResult = dotenv.config();


if (dotenvResult.error) {
    throw dotenvResult.error;
}

const corsOptions = {
    origin: ['http://localhost:3001', 'http://localhost:3000',],
    credentials: true,            //access-control-allow-credentials:true
    optionSuccessStatus: 200,
}
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cookieParser());
app.use(fileUpload());
app.use(cors({
    origin: ['http://localhost:3001', 'http://localhost:3000'],
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    allowedHeaders: ['Content-Type', 'Authorization']
}));

// app.use(bodyparser.urlencoded({ extended: true }));
// app.use(bodyparser.urlencoded({ limit: '50mb', extended: true, parameterLimit: 50000 }));



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

// toutes ----->
routes.push(new PostRoutes(app));
routes.push(new UserRoutes(app));
routes.push(new ImageRoutes(app));
routes.push(new AuthRoutes(app));
routes.push(new CommentRoutes(app));


const runningMessage = `Server running at https://localhost:${port}`;

app.get('/', (req: express.Request, res: express.Response) => {
    res.status(200).send(runningMessage);
});

// backend v1
server.listen(port, () => {
    routes.forEach((route: CommonRoutesConfig) => {
        debugLog(`Routes configured for ${route.getName()}`);
    });
    console.log(runningMessage);
})