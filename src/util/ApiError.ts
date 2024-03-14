import constants from "../constants";

export class ApiError extends Error {
    statusCode: number
    isOperational: boolean
    constructor(statusCode: number, message : string, isOperational: boolean = true, stack = '') {
        super(message);
        this.statusCode = statusCode;
        this.isOperational = isOperational;
        if (stack) {
            if(constants.environment.NODE_ENV=='development' || constants.environment.NODE_ENV=='test'){
                this.stack = stack;
            }
        } else {
            Error.captureStackTrace(this, this.constructor);
        }
    }
}

module.exports = ApiError;