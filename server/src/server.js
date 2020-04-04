import Koa from 'koa';
import logger from 'koa-logger';
import config from 'config';
import bodyParser from 'koa-bodyparser';
import cors from '@koa/cors';
import baseRouter from './routes';


const app = new Koa();
app.use(cors());
app.use(bodyParser({
  enableTypes: ['form', 'json'],
}));
app.use(logger());
app.use(baseRouter.routes());
app.use(baseRouter.allowedMethods());

app.listen(config.get('port') || 3000);

/* eslint-disable no-console */
console.log(`Server is listening on port ${config.get('port') || 3000}`);
