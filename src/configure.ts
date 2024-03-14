import { SubPathStrategy } from "./Strategies/SubPathStrategy/subPathStrategy";
import { ApiError } from "./util/ApiError";
import Logger from "./util/logger";
import EnvironmentObject from "./constants/environment";

class Config{
    readonly Logger : Logger
    readonly SubPathStrategy : SubPathStrategy
    readonly ApiError : typeof ApiError
    readonly environment = EnvironmentObject

    constructor(logger: Logger, spstr: SubPathStrategy, apiError: typeof ApiError){
        this.Logger = logger;
        this.SubPathStrategy = spstr
        this.ApiError = apiError
    }
}

class ConfigBuilder{
    static Logger ?: Logger
    static SubPathStrategy ?: SubPathStrategy
    static ApiError ?: typeof ApiError

    static setLogger(logger: Logger){
        this.Logger = logger
        return this
    }

    static setSubPathBreakingStrategy(spstr: SubPathStrategy){
        this.SubPathStrategy = spstr;
        return this
    }

    static setApiError(apiError: typeof ApiError){
        this.ApiError = apiError
        return this
    }

    static Configure(){
        if(!this.Logger){
            throw new Error('please set the logger type')
        }
        if(!this.SubPathStrategy){
            throw new Error('please set the SubPathStrategy type')
        }
        if(!this.ApiError){
            this.ApiError = ApiError;
        }

        return new Config(this.Logger!, this.SubPathStrategy!, this.ApiError!)
    }
}