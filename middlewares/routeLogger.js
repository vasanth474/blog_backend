const appConfig = require('../appConfig/appConfig');
let requestIpLogger = (req,res,next) =>{
    //Trace the path and the remote address that are accessed 
    let remoteIp = `${req.connection.remoteAddress} :// ${req.connection.remotePort}`;
    let realIp = req.headers['X-REAL-IP'];
    console.log(`${req.method} request made from ${remoteIp} for the route ${req.originalUrl}`);
    //End tracer

    //CORS
    if(req.method === 'OPTIONS'){
        console.log('!OPTIONS');
        var headers = {};
        headers['Access-Control-Allow-Origin'] = '*';
        headers['Access-Control-Allow-Methods'] = "POST, GET, PUT, DELETE, OPTIONS";
        headers['Access-Control-Allow-Credentials'] = false;
        headers['Access-Control-Allow-Age'] = '86400';
        headres['Access-Control-Allow-Headers'] = 'X-Requested-With, X-HTTP-Method-Override, Content-Type,Accept';
        res.writeHead(200,headers);
        res.end();
        }else{
            //Enable or disable cors here
            res.header('Access-Control-Allow-Origin',appConfig.allowedCorsOrigin);
            res.header('Access-Control-Allow-Methods','GET, POST, PUT, DELETE, OPTIONS');
            res.header('Access-Control-Allow-Headers','Origin,X-Request-With,Content-Type, Accept');
            next();
        }
}


module.exports = {
    logIp:requestIpLogger
}