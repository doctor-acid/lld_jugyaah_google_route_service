import { BaseException } from "./baseException";

type genericExceptions = "DB_EXCEPTION" | "VALIDATION_EXCEPTION" | "MALFORMED_EXCEPTION"
export class GenericException extends BaseException<genericExceptions>{}

export function assertIsError(err: unknown): asserts err is Error{
    if(!(err instanceof Error)){
        throw err
    }
}