module.exports = {
  testEnvironment: 'node',
  moduleDirectories: [
    './node_modules/',
  ],
  testPathIgnorePatterns: [
    './test/',
    './dist/',
    './mocks/',
    './src/(app|index|server).js',
  ],
  collectCoverage: true,
  coverageThreshold: {
    global: {
      branches: 100,
      functions: 100,
      lines: 100,
      statements: 100,
    },
  },
  coveragePathIgnorePatterns: [
    './test/',
    './dist/',
    './mocks/',
    './src/routes/index.js',
    './src/(app|index).js',
    './src/server.js',
  ],
  collectCoverageFrom: [
    './src/**/*.js',
  ],
  coverageDirectory: 'coverage',
  testMatch: ['**/?(*.)+(spec|test).[jt]s?(x)'],
  transformIgnorePatterns: ['node_modules/(?!(react-qr-reader)/)'],
};
