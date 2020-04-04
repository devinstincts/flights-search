import joi from 'joi';

const validate = require('koa-joi-validate');

const flightLivePricesApiValidationLayer = validate({
  // headers: {
  //     "Content-Type": joi.string().required(),
  //     "X-Forwarded-For": joi.string().required().ip(),
  //     "Accept": joi.string().optional().valid('application/json', 'application/xml')
  // },
  query: {
    originPlace: joi.string().required(),
    destinationPlace: joi.string().required(),
    outboundDate: joi.date().required().greater('now'),
    inboundDate: joi.date().optional().greater('now'),
    cabinClass: joi.string().optional().valid('Economy', 'PremiumEconomy', 'Business', 'First'),
  },
});

export default flightLivePricesApiValidationLayer;
