'use strict'

let OS  = require('os');
let DF  = require('node-df');

const DEFAULT_PATH = '/ping';

module.exports = function health(appinfo, route) {

    let application = appinfo || {};
    let path        = route   || DEFAULT_PATH;

    return function *response(next) {
        if (this.path !== path) {
            yield next;
        } else {
            const diskInfo = yield DF;
            this.body = {
                timestamp   : Date.now()
                , uptime    : process.uptime()

                , application : {
                    name : application.name
                    , version   : application.version
                    , pid       : process.pid
                    , title     : process.title
                    , argv      : process.argv
                    , versions  : process.versions
                    , node_env  : process.env.NODE_ENV
                }

                , resources : {
                    memory      : process.memoryUsage()
                    , loadavg   : OS.loadavg()
                    , cpu       : OS.cpus()
                    , disk      : diskInfo
                    , nics      : OS.networkInterfaces()
                }

                , system : {
                    arch : process.arch
                    , platform  : process.platform
                    , type      : OS.type()
                    , release   : OS.release()
                    , hostname  : OS.hostname()
                    , uptime    : OS.uptime()
                    , cores     : OS.cpus().length
                    , memory    : OS.totalmem()
                }
            }
        }
    }

};