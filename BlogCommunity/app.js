var express = require('express')
 var http = require ('http')
 const mongo = require ('mongoose')
const bodyParser = require("body-parser");
 const Blogrouter= require('./routes/blog')
 const mongoconnection = require('./config/DBConnection.json')
 const Eureka = require('eureka-js-client').Eureka;


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
  const Eureka = require('eureka-js-client').Eureka;
  const client = new Eureka({
    instance: {
      app: 'blogCommunity',
      hostName: 'localhost',
      ipAddr: '127.0.0.1',
      statusPageUrl: 'http://localhost:3000',
      port: {
        $: 3000,
        '@enabled': true,
      },
      vipAddress: 'blog',
      dataCenterInfo: {
        // Ajoutez la valeur dataCenterInfo correspondant à votre environnement.
        name: 'Netflix',
      },
    },
    eureka: {
      host: 'localhost',
      port: 8761,
      servicePath: '/eureka/apps/',
    },
  });
  
  client.start();
  
  
const server = http.createServer(app);
server.listen('3000',()=> console.log("server run port port 3000"));

module.exports=app