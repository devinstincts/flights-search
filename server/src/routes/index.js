import Router from 'koa-router';

import flightLivePricesRouter from './flight-live-prices';

const baseRouter = new Router();

baseRouter.use('/api/v1', flightLivePricesRouter.routes(), flightLivePricesRouter.allowedMethods());

export default baseRouter;
