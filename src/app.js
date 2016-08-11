import express from 'express';
import dotenv from 'dotenv';
import errorhandler from 'errorhandler';
import bodyParser from 'body-parser';
import middleware from './middleware';
import routing from './routes';


// load environment variables from .env file
dotenv.config();



// app
var app = express();



// middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));



// router middleware
app.use(middleware());



// routing
app.use('/', routing());




// error handler, only use in development
if (process.env.NODE_ENV === 'development') {
    app.use(errorhandler());
}



export default app;