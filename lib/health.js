'use strict';

var os = require('os');
var df = require('node-df');
var path = require('path');

var appRootDir = require('app-root-path'); 
var pjson = require(appRootDir + path.sep +'package.json');

var DEFAULT_PATH = '/ping';

function get(callback) {

  df(function (error, diskInfo) {
    if (error) {
      return callback(null, {msg: 'Error fetching disk info', error: error});
    }
    callback(null, {
      timestamp: Date.now(),
      uptime: process.uptime(),

      application: {
        name: pjson.name,
        version: pjson.version,
        pid: process.pid,
        title: process.title,
        argv: process.argv,
        versions: process.versions,
        node_env: process.env.NODE_ENV
      },

      resources: {
        memory: process.memoryUsage(),
        loadavg: os.loadavg(),
        cpu: os.cpus(),
        disk: diskInfo,
        nics: os.networkInterfaces()
      },

      system: {
        arch: process.arch,
        platform: process.platform,
        type: os.type(),
        release: os.release(),
        hostname: os.hostname(),
        uptime: os.uptime(),
        cores: os.cpus().length,
        memory: os.totalmem()
      }
    });
  });
}

module.exports = function (path) {
  path = path || DEFAULT_PATH;

  return function *responce(next) {
    if (path === this.path) {
      this.body = yield get;
    } else {
      yield next;
    }
  };
};
