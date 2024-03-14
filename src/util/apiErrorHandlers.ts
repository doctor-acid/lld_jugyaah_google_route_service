import { NextFunction, Request, Response } from "express";
import { ApiError } from "./ApiError";
import constants from "../constants";

const httpStatus = require('http-status');
const Logger = constants.utils.Logger;


const errorConverter = (err:Error|ApiError, req: Request, res: Response, next: NextFunction) => {
    let error = err;
    if (!(error instanceof ApiError)) {
        const statusCode = httpStatus.INTERNAL_SERVER_ERROR;
        const message = error.message || httpStatus[statusCode];
        error = new ApiError(statusCode, message, false, err.stack);
    }
    next(error);
};

// const setLogger = ()
// eslint-disable-next-line no-unused-vars
const errorHandler = (err:ApiError, req: Request, res: Response, next: NextFunction) => {
    let { statusCode, message } = err;
    if (constants.environment.NODE_ENV === 'production' && !err.isOperational) {
        statusCode = httpStatus.INTERNAL_SERVER_ERROR;
        message = httpStatus[httpStatus.INTERNAL_SERVER_ERROR];
    }

    res.locals.errorMessage = err.message;

    const response = {
        code: statusCode,
        message,
        ...(constants.environment.NODE_ENV === 'development' && { stack: err.stack }),
    };

    if (constants.environment.NODE_ENV === 'development') {
        Logger.error(err.message,err);
    }

    res.status(statusCode).send(response);
};

module.exports = {
    errorConverter,
    errorHandler,
};
