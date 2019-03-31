//To import the expressJS to the application
const express = require('express');
//Http  module
const http = require('http');

//NodeJS default module
const fs = require('fs');
const appConfig = require('./appConfig/appConfig.js');
//import cookie-parser
const cookieParser = require('cookie-parser');
//import body-parser
const bodyParser = require('body-parser');
//import mongoose to the application
const mongoose = require('mongoose');

//import globalError Handler
const globalErrorMiddleware = require('./middlewares/appErrorHandler');
const routeLoggerMiddleware = require('./middlewares/routeLogger');

//helemet module for securuty
const helmet = require('helmet');
const logger = require('./libs/loggerLib');






//Create the instance of the express
const app = express();

//middlewhare 
app.use(bodyParser.json());//Thirdparty body-parser
app.use(bodyParser.urlencoded({extended:false}));//Thirdparty body-parser
app.use(cookieParser());//Thirdparty middleware 

app.use(globalErrorMiddleware.globalErrorHandler); //Global error handler
app.use(routeLoggerMiddleware.logIp);//Global route tracker and cors error detector 
app.use(helmet());//call helmet module
//End middlewhare

//Bootstrap model
let modelPath = './models'; //setting up the base model path
fs.readdirSync(modelPath).forEach(function (file) {
    if(~file.indexOf('.js')){
        console.log('including the following schema file:');
        console.log(`${modelPath}/${file}`);
        require(`${modelPath}/${file}`);
    }
});//Models are required to be called first 


//Bootstrap route
let routePath = './routes'
fs.readdirSync(routePath).forEach((file)=>{
    if(~file.indexOf('.js')){
        console.log('Including the routes:');
        console.log(`${routePath}/${file}:`);
        let route = require(`${routePath}/${file}`);
        route.setRouter(app);
    }
});//end bootstrap route 

//use global notFound handler after the route so that after routes are featched the 
//it is possible to give notFound error if featched route is not found 
app.use(globalErrorMiddleware.globalNotFoundHandler);//Application level globalNotFoudHandler

const server = http.createServer(app);
//start listining to http server
console.log(appConfig);
server.listen(appConfig.port);
server.on('error',onError);
server.on('listening',onListening);

function onError(error) {
    if(error.syscall !== 'listen'){
        logger.error(error.code + 'not equal listen' + 'serverOnErrorHandler',10);
        throw error
    }
    //handle specific listen errors with  friendly messages
    switch(error.code){
        case 'EACCES':
                        logger.error(error.code+':elavated privilages required','serverOnErrorHandler',10);
                        process.exit(1);
                        break
    case 'EADDRINUSE':  logger.error(error.code+':port already in use','serverOnErrorHandler',10);
                        process.exit(1);
                        break
         default:       logger.error(error.code+':some unknown error occured','serverOnErrorHandler',10);
                        throw error
    }
}

function onListening(){
    var addr = server.address();
    var bind = typeof addr === 'string'
        ? 'pipe' + addr : 'port' + addr.port;
        ('Listening on' + bind)
        logger.info('Server listening on port'+addr.port,'serverOnListeningHandler',10);
    let db = mongoose.connect(appConfig.db.uri,{useNewUrlParser : true});
}

process.on('unhandeledRejection',(reason,p) =>{
    console.log('UnhandledRejection at: Promise',p,'reason:',reason);
    })
//Listening to th eport  3000 and createing the local server 
/* app.listen(appConfig.port, ()=>{
    console.log('Example app listening on port 3000!')
    //creating the mongoDB connection 
    let db = mongoose.connect(appConfig.db.uri, {useNewUrlParser:true});
});

 */