export class BaseException<T extends string> extends Error{
    name: string;
    message: string;
    reason: any;
    code: any;
    error: unknown

    constructor(name:T, message: string, reason?: any, code?:number){
        super()
        this.name = name
        this.message = message
        this.reason = reason
        this.code = code
    }

    attachOriginal( err: unknown){
        this.error = err
    }
}