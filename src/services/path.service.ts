import { SubPathStrategy } from "../Strategies/SubPathStrategy/subPathStrategy";
import constants from "../constants";
import { lonLatArr } from "../constants/commonTypes";
import { GenericException, assertIsError } from "../exceptions/generalExceptions";
import { IJunction, IJunctionDoc } from "../models/junction.model";
import { ILocation } from "../models/location.model";
import Paths, { IPath, IPathDoc } from "../models/path.model";
import { ISubPath, ISubPathDoc } from "../models/sub_path.model";

export default class PathService{

    // getNearestPath(point: lonLatArr): ILocationDoc[]|ILocation[]{
    //     return [{
    //         name: "Some name",
    //         lonlat: {
    //             type: "Point",
    //             coordinates: [1,2]
    //         }
    //     }]
    // }
    createSubPaths(path: IPathDoc, breakingStrategy: SubPathStrategy): Partial<ISubPathDoc>[] | Partial<ISubPath>[]{
        try {
            let breakingAlgo = new constants.strategies.SubPathStrategy()

            return breakingAlgo.break(path)
        } catch (error) {
            assertIsError(error)
            throw new GenericException('DB_EXCEPTION', 'Problem in creating subpath', error.stack).attachOriginal(error)
        }



    }

    getClosestStartPoint(locationArr: ILocation[], subPathArr: Partial<ISubPath>[]): {lonlat: lonLatArr, type: string, id: string}{
        return {
            lonlat: [1,3],
            type: "subroute",
            id: "asaxasx"
        }
    }

    getJunctionsOnPath(path: IPath) : Partial<IJunction>[]{
        return [{
            name: "new junction",
            lonlat: {
                type: "Point",
                coordinates: [1,2]
            }
        }]
    }
}