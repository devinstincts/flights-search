import axios from 'axios';
import Router from 'koa-router';
import env from '../../util/env';
import flightLivePricesApiValidationLayer from './index.validate';

const flightLivePricesRouter = new Router();

const flightLivePricesService = async (ctx) => {
  const {
    query,
    response,
  } = ctx;
  await axios.get(env.flightSearchUrl, { params: query }).then((res) => {
    // response.body = hotelFilterOps[query.criteria](res.data, query);
    // TODO filter data.
    response.body = res.data;
  }).catch((err) => {
    // TODO custom error handling
    throw err;
  });
};

flightLivePricesRouter.get('/flight-live-prices', flightLivePricesApiValidationLayer, flightLivePricesService);

export default flightLivePricesRouter;
