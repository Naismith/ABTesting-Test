import http from 'http';
import express from 'express';
import session from 'express-session';
import bodyParser from 'body-parser';
// import setupApiRoutes from './middlewares/api';
// import logger from './logger';
import apiRoutes from './api';
import {onUnhandledError} from '../lib/errorHandler';

process.env.NODE_ENV = process.env.NODE_ENV || 'development';
process.env.HTTP_PORT = process.env.HTTP_PORT || 3000;

['unhandledRejection', 'uncaughtException'].forEach((errType) => {
  process.on(errType, onUnhandledError);
});

const isDev = process.env.NODE_ENV === 'development';
const setupAppRoutes = isDev ? require('./middlewares/development') : require('./middlewares/production');

const app = express();

app.set('env', process.env.NODE_ENV);
// logger.info(`Application env: ${process.env.NODE_ENV}`);

// app.use(logger.expressMiddleware);
app.use(bodyParser.json());
app.use(
  session({
    secret: 'qnM423Ek968ByW%k&R2ZeZaN6sSJcb3N#n33Kkty*Ym^ga*dh7kk9JhH2AuKvX8Av^vEK3Rmdr35!tT',
    cookie: {}
  })
);

// application routes
app.use('/api', apiRoutes);
setupAppRoutes(app);

http.createServer(app).listen(process.env.HTTP_PORT, () => {
  console.info(`HTTP server is now running on http://localhost:${process.env.HTTP_PORT}`);
});
