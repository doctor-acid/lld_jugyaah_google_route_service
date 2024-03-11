import { IPathDoc, IPath } from "../../models/path.model";
import { ISubPath } from "../../models/sub_path.model";
import { SubPathStrategy } from "./subPathStrategy";

export default class OneKMSubPathStrategy implements SubPathStrategy{
    break(path: IPathDoc | IPath): Partial<ISubPath>[] {
        return[{
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
    }
}