'use strict';

var koa = require("koa");
var health = require("../index");

var app = koa();

// using the default (/ping)
// app.use(health());

// OR using custom URL
var customUrl = ''
customUrl = '/nonpublic/ping';
app.use(health(customUrl));

app.listen(3000);

var message = customUrl.length > 0 ? customUrl : '/ping';
console.log('Ready. http://localhost:3000' + message + ' to check health');