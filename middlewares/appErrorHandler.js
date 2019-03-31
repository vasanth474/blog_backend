const response = require('../libs/responsLib');
//Global level error handlers 
let errorHandler = (err,req,res,next)=>{
    console.log('Some unknown eroor occured at global level');
    let apiResponse = response.generate(true,'Global level error occured',500,err);
    res.send(apiResponse);
}//End errorHandler

//Start notFoundHandler
let notFoundHandler = (req,res,next)=>{
 console.log('Global not found handler called');
 let apiResponse = response.generate(true,'Route You are trying to acces does not exist',404,null);
 res.send(apiResponse);
}//End notFoundHandler

module.exports = {
    globalErrorHandler : errorHandler,
    globalNotFoundHandler : notFoundHandler
}


