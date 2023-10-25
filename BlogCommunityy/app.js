 var express = require('express')
//  var logger = require('morgan')
 var http = require ('http')
 const mongo = require ('mongoose')
const bodyParser = require("body-parser");
 const Blogrouter= require('./routes/blog')
 const mongoconnection = require('./config/DBConnection.json')


var app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use('/blog', Blogrouter)


 mongo.connect(mongoconnection.url, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("DataBase Connected");
  })
  .catch((err) => {
    console.log(err);
  });
 /* const Eureka = require('eureka-js-client').Eureka;
  const eurekaHost = 'localhost';
  const eurekaPort = 8761;
  //const hostName = (process.env.HOSTNAME || 'complaint-service');
  const ipAddr = '172.0.0.1'
  exports.registerWithEureka = function(appName,PORT)
 {
  const client = new Eureka({
    instance: {
      app: appName,
      hostName:'localhost',
      ipAddr:ipAddr,
      port:{
        '$':'3000',
        '@enabled':true,
      },
      vipAddress: appName,
      dataCenterInfo:{
        '@class':'com.netflix.appinfo.InstanceInfo$DefaultDataCenterInfo',
        name:'MyOwn',
      },
    },
    eureka:{
      host:eurekaHost,
      port:eurekaPort,
      servicePath:'eureka/apps',
      maxRetries:10,
      requestRetryDelay:2000,
    },
  });
  client.start();
 }*/
 const Eureka = require('eureka-js-client').Eureka;

const client = new Eureka({
  instance: {
    app: 'my-node-service',
    hostName: 'localhost',
    ipAddr: '127.0.0.1',
    statusPageUrl: 'http://localhost:3000',
    port: {
      $: 3000,
      '@enabled': true,
    },
    vipAddress: 'my-node-service',
    dataCenterInfo: {
      '@class':'com.netflix.appinfo.InstanceInfo$DefaultDataCenterInfo',
        name:'MyOwn',
    },
  },
  eureka: {
    host: 'localhost',
    port: 8761,
    servicePath: '/eureka/apps/',
    maxRetries:10,
      requestRetryDelay:2000,
  },
});

client.start();


  
const server = http.createServer(app);
server.listen('3000',()=> console.log("server run port port 3000"));

module.exports=app