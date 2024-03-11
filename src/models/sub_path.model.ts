import mongoose, { Schema } from "mongoose"
import { Point, pointSchema } from "./point"

export interface ISubPath {

    lonlatFrom: Point
    lonlatTo: Point
    from: Schema.Types.ObjectId
    to: Schema.Types.ObjectId
    parentPath: Schema.Types.ObjectId

    // isAJunctionPoint: boolean 
    /** Not required because a new Location object could 
    be used to save a junction and name it something based on path.
    Now two new path have same names */
    
    endNode: boolean
    firstNode: boolean

    length: number
    estTime?: number

// weights related to the route cache and realtime data
    trafficMultiplier?: number
    weatherMultiplier?: number
    trafficLightMultiplier?: number
    pathAvailable?: boolean

}

export interface ISubPathDoc extends ISubPath, mongoose.Document{}

export interface ISubPathModel extends mongoose.Model<ISubPath>{
    build(args: ISubPath): ISubPathDoc
}

const subPathSchema: Schema<ISubPath> = new Schema({
    lonlatFrom : pointSchema,
    lonlatTo : pointSchema,
    from: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "subpaths"
    },
    to: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "subpaths"
    },
    parentPath: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "paths"
    },
    endNode: {
        type: Boolean,
        default: false
    },
    firstNode: {
        type: Boolean,
        default: false
    },
    length: {
        type: Number,
        required: true
    },
    estTime: {
        type: Number
    }

})

subPathSchema.statics.build = function(args: ISubPath){
    return new SubPaths(args)
}

const SubPaths = mongoose.model<ISubPath, ISubPathModel>('subpaths', subPathSchema)
export default SubPaths