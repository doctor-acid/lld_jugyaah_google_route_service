import mongoose from "mongoose";
import { lonLatArr } from "../constants/commonTypes";
import { ISubPath, ISubPathDoc } from "../models/sub_path.model";
import { GenericException, assertIsError } from "../exceptions/generalExceptions";

export default class SubPathService{


    getNearestSubPaths(point: lonLatArr, limit: number=5): Partial<ISubPathDoc>[]|Partial<ISubPath>[]{

        try {
            return [{
                lonlatFrom: {
                    type: "Point",
                    coordinates: [1,2]
                },
                lonlatTo: {
                    type: "Point",
                    coordinates: [1,2]
                },
                // from: new mongoose.Types.ObjectId(),
                // to: Schema.Types.ObjectId,
                // parentPath: Schema.Types.ObjectId
                
                endNode: false,
                firstNode: true
            }]
        } catch (error) {
            assertIsError(error)
            throw new GenericException('DB_EXCEPTION', 'Problem in get nearest subpath', error.stack).attachOriginal(error)
        }
    }
}