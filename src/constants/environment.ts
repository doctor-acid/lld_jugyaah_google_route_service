import dotenv from 'dotenv'
import Joi from 'joi'
import path from 'path';

dotenv.config({path:path.join(__dirname,'../.env')});
// console.log(path.join(__dirname,'../.env'))

interface IenvSchema {
    NODE_ENV : string,// "production"|"dev"|"test",
    NODE_WORK : string //"LOCAL" | "",
    PORT : number
    MONGO_URI : string
    MONGO_DB_USERNAME : string,
    MONGO_DB_PASSWORD : string,
    OTP_EXPIRATION_MINUTES : string,
    JWT_SECRET : string,
    JWT_ACCESS_EXPIRATION_MINUTES : number,

    ALGO : string,
    ENC_SECRET : string,
    IV_LENGTH : number
}

const envSchema: Joi.ObjectSchema<IenvSchema> = Joi.object()
    .keys({
        NODE_ENV:Joi.string().valid('production','dev','test').required(),

        NODE_WORK:Joi.string().valid('LOCAL', '').optional(),

        PORT:Joi.number().default(3000),
        MONGO_URI:Joi.string().required().description('Mongo DB URL'),
        MONGO_DB_USERNAME:Joi.string().required().description('Mongo DB Username'),
        MONGO_DB_PASSWORD:Joi.string().required().description('Mongo DB Password'),

        OTP_EXPIRATION_MINUTES: Joi.number().required(),
        // SMTP_HOST: Joi.string().description('server that will send the emails'),
        // SMTP_PORT: Joi.number().description('port to connect to the email server'),
        // SMTP_SECURE: Joi.boolean().description('security method connect to the email server'),
        // SMTP_USERNAME: Joi.string().description('username for email server'),
        // SMTP_PASSWORD: Joi.string().description('password for email server'),
        // EMAIL_FROM: Joi.string().description('the from field in the emails sent by the app'),

        JWT_SECRET: Joi.string().required(),
        JWT_ACCESS_EXPIRATION_MINUTES: Joi.number().required(),

        ALGO: Joi.string().required().allow('aes-192-cbc'),
        ENC_SECRET: Joi.string().required(),
        IV_LENGTH: Joi.number().required(),
    }).unknown();


const { value: envVars, error } = envSchema.prefs({ errors: { label: 'key' } }).validate(process.env);

if (error) {
    throw new Error(`Config validation error: ${error.message}`);
}

class EnvironmentClass implements IenvSchema{
    readonly NODE_ENV = process.env.NODE_ENV!;
    readonly NODE_WORK = process.env.NODE_WORK!;
    readonly PORT = <number><unknown>process.env.PORT;
    readonly MONGO_URI = process.env.MONGO_URI!;
    readonly MONGO_DB_USERNAME = process.env.MONGO_DB_USERNAME!;
    readonly MONGO_DB_PASSWORD = process.env.MONGO_DB_PASSWORD!;
    readonly OTP_EXPIRATION_MINUTES = process.env.OTP_EXPIRATION_MINUTES!;
    readonly JWT_SECRET = process.env.JWT_SECRET!;
    readonly JWT_ACCESS_EXPIRATION_MINUTES = <number><unknown>process.env.JWT_ACCESS_EXPIRATION_MINUTES;

    readonly ALGO = process.env.ALGO!;
    readonly ENC_SECRET = process.env.ENC_SECRET!;
    readonly IV_LENGTH = <number><unknown>process.env.IV_LENGTH!
}

const EnvironmentObject = new EnvironmentClass()

export default EnvironmentObject;