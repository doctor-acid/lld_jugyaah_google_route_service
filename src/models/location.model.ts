import mongoose, { Schema } from "mongoose"
import { Point, pointSchema } from "./point"

export interface ILocation {
    name: string
    lonlat: Point
}

export interface ILocationDoc extends ILocation, mongoose.Document{}

export interface ILocationModel extends mongoose.Model<ILocation>{
    build(args: ILocation): ILocationDoc
}

const locationSchema: Schema<ILocation> = new Schema({
    name: {
        type: String,
        required: true
    },
    lonlat : pointSchema
})

locationSchema.statics.build = function(args: ILocation){
    return new Locations(args)
}

const Locations = mongoose.model<ILocation, ILocationModel>('locations', locationSchema)
export default Locations