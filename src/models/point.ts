import { Schema } from "mongoose"
import { lonLatArr } from "../constants/commonTypes"

export interface Point{
    type: "Point"
    coordinates : lonLatArr
}

export const pointSchema = new Schema({
    type: {
      type: String,
      enum: ['Point'],
      required: true
    },
    coordinates: {
      type: [Number],
      required: true
    }
})