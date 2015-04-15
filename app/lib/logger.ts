import env = require('../env');
import winston = require('winston');

import path = require('path');

var logLevel = (env.NODE_ENV === 'development') ? 'debug' : 'info';

var logger = new (winston.Logger)({
    transports: [
        new (winston.transports.Console)(),
        new (winston.transports.File)({
            filename: env.LOG_FILE_INFO
        })
    ],
    exceptionHandlers: [
        new (winston.transports.Console)(),
        new (winston.transports.File)({
            filename: env.LOG_FILE_PANIC
        })
    ]
});

export = logger;
