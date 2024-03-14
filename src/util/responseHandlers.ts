import { Response } from "express";
import httpStatus from "http-status";

export class ExpressResponse{
    private res: Response;
    statusCode: number;
    message: string;
    data?: any;
    actionCode?: string | number;
    stack?: any;
    isOperational?: boolean;

    constructor({res , message = '', data, statusCode=httpStatus.OK, stack, actionCode, isOperational= true}:
    {res: Response, message?: string, data?: any, statusCode?: number, stack?: string, actionCode?: number, isOperational?: boolean }){
        this.res = res;
        this.message = message;
        this.data = data;
        this.statusCode = statusCode;
        this.stack = stack;
        this.actionCode = actionCode;
        this.isOperational = isOperational;
    }

    status(status: number) {
        this.statusCode = status;
        return this;
    }

    msg(message: string){
        this.message = message;
        return this;
    }

    addData(data: any){
        this.data = data;
        return this;
    }
    
    addActionCode(actionCode: number){
        this.actionCode = actionCode;
        return this;
    }

    send(){
        this.res.json({
            statusCode: this.statusCode,
            message: this.message,
            data: this.data,
            actionCode: this.actionCode
        });
    }
}

export class SuccessResponse extends ExpressResponse{
    constructor({res, message = '', data = undefined, statusCode = 200, stack=undefined, actionCode=undefined}:
    {res: Response, message?: string, data?: any, statusCode?: number, stack?: string, actionCode?: number}){
        super({res, message, data, stack, actionCode});
        this.statusCode = statusCode;
        return this;
    }
}

export class ErrorResponse extends ExpressResponse{
    constructor({res, message = '', data= undefined, statusCode = 400, stack=undefined, actionCode=undefined}:
    {res: Response, message?: string, data?: any, statusCode?: number, stack?: string, actionCode?: number}){
        super({res, message, data, stack, actionCode});
        this.statusCode = statusCode;
        return this;
    }
}
