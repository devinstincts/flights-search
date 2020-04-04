import config from 'config';

const port = config.get('port');

const flightSearchUrl = config.get('flightSearchUrl');

export default {
  port,
  flightSearchUrl,
};
