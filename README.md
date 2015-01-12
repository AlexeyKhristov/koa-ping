koa-ping
========

Make koa apps check internal status and health. This project is inspired by **[express-ping](https://github.com/palmerabollo/express-ping)**

Usage
-----

* Save "koa-ping" to your package.json dependencies ```npm install koa-ping --save```
* Include the middleware in your koa application:

```javascript
var health = require('koa-ping');
var koa = require('koa');

var app = koa();

app.use(health());
// Or use a custom url
// app.use(health('/nonpublic/ping'));

app.listen(3000);
```

Once you launch your koa application, it will add a new **/ping** endpoint to check the app status. If you **GET http://localhost:3000/ping** you will receive the following information:

```json
{
    "timestamp": 1416079378823,
    "uptime": 550.219,
    "application": {
        "name": "koa-ping",
        "version": "1.0.0",
        "pid": 21149,
        "title": "node",
        "argv": [
            "node",
            "/projects/koa-ping/index.js"
        ],
        "versions": {
            "http_parser": "2.3",
            "node": "0.11.14",
            "v8": "3.26.33",
            "uv": "1.0.0",
            "zlib": "1.2.3",
            "modules": "14",
            "openssl": "1.0.1i"
        }
    },
    "resources": {
        "memory": {
            "rss": 26243072,
            "heapTotal": 17930752,
            "heapUsed": 10810544
        },
        "loadavg": [
            4.431640625,
            4.572265625,
            4.451171875
        ],
        "cpu": [
            {
                "model": "Intel(R) Core(TM) i5-4250U CPU @ 1.30GHz",
                "speed": 1300,
                "times": {
                    "user": 43839420,
                    "nice": 0,
                    "sys": 24282010,
                    "idle": 164757040,
                    "irq": 0
                }
            },
            {
                "model": "Intel(R) Core(TM) i5-4250U CPU @ 1.30GHz",
                "speed": 1300,
                "times": {
                    "user": 23479990,
                    "nice": 0,
                    "sys": 10831830,
                    "idle": 198556920,
                    "irq": 0
                }
            },
            {
                "model": "Intel(R) Core(TM) i5-4250U CPU @ 1.30GHz",
                "speed": 1300,
                "times": {
                    "user": 42303960,
                    "nice": 0,
                    "sys": 18350510,
                    "idle": 172214370,
                    "irq": 0
                }
            },
            {
                "model": "Intel(R) Core(TM) i5-4250U CPU @ 1.30GHz",
                "speed": 1300,
                "times": {
                    "user": 23728510,
                    "nice": 0,
                    "sys": 9963050,
                    "idle": 199177080,
                    "irq": 0
                }
            }
        ],
        "disk": [
            {
                "filesystem": "/dev/disk1",
                "size": 117286912,
                "used": 92423484,
                "available": 24607428,
                "capacity": 0.79,
                "mount": "/"
            },
            {
                "filesystem": "devfs",
                "size": 180,
                "used": 180,
                "available": 0,
                "capacity": 1,
                "mount": "/dev"
            },
            {
                "filesystem": "map -hosts",
                "size": 0,
                "used": 0,
                "available": 0,
                "capacity": 1,
                "mount": "/net"
            },
            {
                "filesystem": "map auto_home",
                "size": 0,
                "used": 0,
                "available": 0,
                "capacity": 1,
                "mount": "/home"
            }
        ],
        "nics": {
            "lo0": [
                {
                    "address": "::1",
                    "netmask": "ffff:ffff:ffff:ffff:ffff:ffff:ffff:ffff",
                    "family": "IPv6",
                    "mac": "00:00:00:00:00:00",
                    "scopeid": 0,
                    "internal": true
                },
                {
                    "address": "127.0.0.1",
                    "netmask": "255.0.0.0",
                    "family": "IPv4",
                    "mac": "00:00:00:00:00:00",
                    "internal": true
                },
                {
                    "address": "fe80::1",
                    "netmask": "ffff:ffff:ffff:ffff::",
                    "family": "IPv6",
                    "mac": "00:00:00:00:00:00",
                    "scopeid": 1,
                    "internal": true
                }
            ],
            "en0": [
                {
                    "address": "fe80::8638:35ff:fe41:a48c",
                    "netmask": "ffff:ffff:ffff:ffff::",
                    "family": "IPv6",
                    "mac": "84:38:35:41:a4:8c",
                    "scopeid": 4,
                    "internal": false
                },
                {
                    "address": "192.168.1.100",
                    "netmask": "255.255.255.0",
                    "family": "IPv4",
                    "mac": "84:38:35:41:a4:8c",
                    "internal": false
                }
            ],
            "awdl0": [
                {
                    "address": "fe80::8df:54ff:fe9e:d53b",
                    "netmask": "ffff:ffff:ffff:ffff::",
                    "family": "IPv6",
                    "mac": "0a:df:54:9e:d5:3b",
                    "scopeid": 7,
                    "internal": false
                }
            ]
        }
    },
    "system": {
        "arch": "x64",
        "platform": "darwin",
        "type": "Darwin",
        "release": "14.0.0",
        "hostname": "MyPC",
        "uptime": 1802594,
        "cores": 4,
        "memory": 8589934592
    }
}
```

Configuration
-------------

You don't need to configure anything. By default, a `/ping` endpoint will be added to your routes, but you can pass the _ping_ endpoint to the middeware simply doing:

```js
app.use(health.ping('/custompath'));
```

Notes
-----
* Thanks to Guido García [@palmerabollo](https://github.com/palmerabollo)
* [Debate around the JSON organization see on express-ping wiki](https://github.com/palmerabollo/express-ping/wiki/Response-Format-Debate) (contributions are welcome).
