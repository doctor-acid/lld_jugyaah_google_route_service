import httpStatus from "http-status";
import constants from "./constants";
import pathRouter from "./routes/pathRoutes";
import { NextFunction, Request, Response } from "express";
// import mongoConnection from "./config/mongoConnection";

const express = require('express')
const ApiError = constants.utils.ApiError

let app = express();

app.use('/path', pathRouter)

// catch 404 and forward to error handler
app.use((req: Request, res: Response, next: NextFunction) => {
  next(new ApiError(httpStatus.NOT_FOUND, 'Page Not found'));
});

// // convert error to ApiError, if needed
// app.use(errorConverter);

// // handle error
// app.use(errorHandler);

// process.on('uncaughtException', uncaughtErrorHandler)

app.listen(constants.environment.PORT, ()=>{
    console.log(`app running on port ${constants.environment.PORT}`)
})