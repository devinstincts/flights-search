import '@babel/polyfill';

process.env.NODE_ENV = 'TESTING';
// jest.config.js
module.exports = {
  verbose: true,
};

process.on('unhandledRejection', (reason, p) => {
  // eslint-disable-next-line
  console.error(reason, 'unhandled rejection of promise', p);
});
process.on('uncaughtException', (err) => {
  // eslint-disable-next-line
  console.error(err, 'uncaught exception thrown');
  process.exit(1);
});
