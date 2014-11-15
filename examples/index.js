'use strict';

var koa = require("koa");
var health = require("../index");

var app = koa();
app.use(health());

app.listen(3000);
console.log('Ready. http://localhost:3000/ping to check health');
