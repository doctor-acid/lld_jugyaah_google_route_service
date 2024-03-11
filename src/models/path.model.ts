import mongoose, { Schema } from "mongoose"
import { Point, pointSchema } from "./point"

export interface IPath {
    name: string
    lonlatFrom: Point
    lonlatTo: Point
    from: Schema.Types.ObjectId
    to: Schema.Types.ObjectId
    fromName: string
    toName: string

    length: number
    estTime?: number

// weights related to the route cache and realtime data
    trafficMultiplier?: number
    weatherMultiplier?: number
    trafficLightMultiplier?: number
    pathAvailable?: boolean
}

export interface IPathDoc extends IPath, mongoose.Document{}

export interface IPathModel extends mongoose.Model<IPath>{
    build(args: IPath): IPathDoc
}

const pathSchema: Schema<IPath> = new Schema({
    name: {
        type: String,
        required: true
    },
    lonlatFrom : pointSchema,
    lonlatTo : pointSchema,
    from: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "locations"
    },
    to: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "locations"
    },
    fromName: {
        type: String
    },  // data duplication for easier access on Mongo
    toName: {
        type: String
    },  // data duplication for easier access on Mongo
    length: {
        type: Number,
        required: true
    },
    estTime: {
        type: Number
    }
})

pathSchema.statics.build = function(args: IPath){
    return new Paths(args)
}

const Paths = mongoose.model<IPath, IPathModel>('paths', pathSchema)
export default Paths