/// <reference path='../main.d.ts' />

require('source-map-support').install();

import env = require('./env');

import logger = require('./lib/logger');

class App {
    constructor() {
        logger.info('App started:', {env: env});
    }
}

var app = new App();

export = app;
