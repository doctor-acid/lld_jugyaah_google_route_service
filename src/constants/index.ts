import OneKMSubPathStrategy from "../Strategies/SubPathStrategy/OneKMSubPathStrategy";
import { ApiError } from "../util/ApiError";
import Logger from "../util/logger";
import environment from "./environment";
// emulating a multi-step code to decide which strategy are we implementing

// class Constants{
//     Logger : Logger
//     ApiError : ApiError

//     constructor(Logger: Logger, ApiError: ApiError){
//         this.Logger = Logger;
//         this.ApiError = ApiError
//     }
// }

// export default ConstantsBuilder{
//     Logger : Logger
//     ApiError : ApiError

//     configLogger(type: logType)
// }




let strategies = {
    SubPathStrategy: OneKMSubPathStrategy
}
let utils = {
    Logger : new Logger('console'),
    ApiError : ApiError
}

export default {
    environment,
    strategies,
    utils

}