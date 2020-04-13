## Flight Search App
The objective of this App is to hit an endpoint to list flights according to a certain criteria and show the the results in a list view to the end user.

The landing page calls the GET flights API with a certian criteria on the page load and displays the results in a list view. CI has been configured using Travis and every commit to the master branch triggers a Travis build which runs the linting and test cases. In addition, Code Climate quality check has been configured for every commit on to the master branch.

## Tech/framework used

<b>Built with</b>
- React for the frontend
- Node for backend
- Jest for unit testcases
- json-server for serving the mock data

## Project Structure
Repo has both the frontend and backend code in the following directories.
- client
- server

## Installing
Run the below command to install the node_modules `npm run install:all`. This would run the required modules for the root, client, and server.

## Running the application
Once the `node_modules` installed, use the below commands to run the application.
- npm run start:client
- npm run start:server
- npm run start:json-server

## Running tests
Run the tests using:
- npm run test:client
- npm run test:server

These commands will run the test cases and collects the coverage report under the `coverage` folder for client and server.

## Travis Build

[![Build Status](https://travis-ci.com/devinstincts/flights-search.svg?branch=master)](https://travis-ci.com/devinstincts/flights-search)

## codecov Code Coverage

[![codecov](https://codecov.io/gh/devinstincts/flights-search/branch/master/graph/badge.svg)](https://codecov.io/gh/devinstincts/flights-search)


## Code Cliamte Quality report

[![Maintainability](https://api.codeclimate.com/v1/badges/dc235259abf236efb5cc/maintainability)](https://codeclimate.com/github/devinstincts/flights-search/maintainability)