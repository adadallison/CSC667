const express = require('express');
const server = require('http');
const httpProxy = require('http-proxy');

const app = express();
const appServer = server.createServer(app);
const apiProxy = httpProxy.createProxyServer(app);

const wsProxy = httpProxy.createProxyServer({
  target: process.env.WEBSOCKET_HOST || 'http://localhost:4007',
  ws: true,
});

apiProxy.on('error', (err, req, res) => {
  console.log(err);
  res.status(500).send('Proxy down :(');
});

wsProxy.on('error', (err, req, socket) => {
  console.log(err);
  console.log('ws failed');
  socket.end();
});

// messenger host api proxy
const messangerHost = process.env.MESSANGER_HOST || 'http://localhost:5000';
console.log(`Messanger end proxies to: ${messangerHost}`);
app.all('/messanger*', (req, res) => {
  apiProxy.web(req, res, { target: messangerHost });
});

// admin api proxy 
const adminHost = process.env.ADMIN_HOST || 'http://localhost:4005';    // sets adminHost to the port 4005
console.log(`Admin end proxies to: ${adminHost}`);  
app.all('/api/admin*', (req, res) => {          // all calls to proxy with '/api/admin/' will be directed to the port set by adminHost
  "THIS IS CALLED"
  apiProxy.web(req, res, { target: adminHost });  
});

// login api proxy
const loginHost = process.env.LOGIN_HOST || 'http://localhost:4008';    // sets loginHost to the port 4008
console.log(`login end proxies to: ${loginHost}`);  
app.all('/api/login*', (req, res) => {          // all calls to proxy with '/api/admin/' will be directed to the port set by adminHost
  "THIS IS CALLED"
  apiProxy.web(req, res, { target: loginHost });  
});

// listings api proxy 
const listingHost = process.env.LISTING_HOST || 'http://localhost:4006';    // sets adminHost to the port 4005
console.log(`Listing end proxies to: ${listingHost}`);  
app.all('/api/listing*', (req, res) => {          // all calls to proxy with '/api/listings/' will be directed to the port set by adminHost
  "THIS IS CALLED"
  apiProxy.web(req, res, { target: listingHost });  
});

// websocket proxy
const websocketHost = process.env.WEBSOCKET_HOST || 'http://localhost:4007/websocket';
console.log(`WebSocket end proxies to: ${websocketHost}`);
app.all('/websocket*', (req, res) => {
  console.log('incoming ws');
  apiProxy.web(req, res, { target: websocketHost });
});

appServer.on('upgrade', (req, socket, head) => {
  console.log('upgrade ws here');
  wsProxy.ws(req, socket, head);
});

// front end proxy
const fronEndHost = process.env.FRONT_END_HOST || 'http://localhost:3000';
console.log(`Front end proxies to: ${fronEndHost}`);
app.all('/*', (req, res) => {
  // for frontend
  apiProxy.web(req, res, { target: fronEndHost });
});

appServer.listen(4000);
console.log('Gateway started');