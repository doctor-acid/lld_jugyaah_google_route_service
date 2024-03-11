import mongoose, { Schema } from "mongoose"
import { Point, pointSchema } from "./point"
import { IPath, IPathDoc } from "./path.model"
import { ISubPath, ISubPathDoc } from "./sub_path.model"

export interface IJunction {
    name: string
    lonlat: Point
    paths: Array<IPathDoc|IPath>
    subPaths: Array<ISubPathDoc|ISubPath>
}

export interface IJunctionDoc extends IJunction, mongoose.Document{}

export interface IJunctionModel extends mongoose.Model<IJunction>{
    build(args: IJunction): IJunctionDoc
}

const JunctionSchema: Schema<IJunction> = new Schema({
    name: {
        type: String,
        required: true
    },
    lonlat : pointSchema,
    paths: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "paths"
    }],
    subPaths: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "paths"
    }],

})

JunctionSchema.statics.build = function(args: IJunction){
    return new Junctions(args)
}

const Junctions = mongoose.model<IJunction, IJunctionModel>('junctions', JunctionSchema)
export default Junctions