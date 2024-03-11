import { lonLatArr } from "../constants/commonTypes";
import Locations, { ILocation, ILocationDoc } from "../models/location.model";
import { ISubPath } from "../models/sub_path.model";

export default class LocationService{
    getLocationSuggestions(name: String): ILocationDoc[]|ILocation[]{
        // get location by name logic
        return [{
            name: "Some name",
            lonlat: {
                type: "Point",
                coordinates: [1,2]
            }
        }]
    }

    getNearestLocations(point: lonLatArr, limit: number = 5): ILocationDoc[]|ILocation[]{
        return [{
            name: "Some name",
            lonlat: {
                type: "Point",
                coordinates: [1,2]
            }
        }]
    }
}