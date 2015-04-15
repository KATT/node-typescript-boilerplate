/// <reference path="../main.d.ts" />
import _ = require('lodash');
import path = require('path');

interface EnvInterface {
    NODE_ENV          ?: string;

    LOG_FILE_INFO     : string;
    LOG_FILE_PANIC    : string;
};

var env = <EnvInterface>_.defaults(process.env, {
    LOG_FILE_INFO   : path.resolve(__dirname, '../log/info.log.js'),
    LOG_FILE_PANIC  : path.resolve(__dirname, '../log/panic.log.js'),
});

export = env;
