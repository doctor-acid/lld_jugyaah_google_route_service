import { Request, Response } from "express";
import { getRoute_RequestDTO, getRoute_ResponseDTO } from "../routes/dto/getRoute";
import PathService from "../services/path.service";
import SubPathService from "../services/subpath.service";
import LocationService from "../services/location.service";

export default class PathController{
    private readonly PathService: PathService
    private readonly SubPathService: SubPathService
    private readonly LocationService: LocationService

    constructor(){
        this.PathService = new PathService()
        this.SubPathService = new SubPathService()
        this.LocationService = new LocationService()
    }

    getRoute(data: getRoute_RequestDTO): getRoute_ResponseDTO{
        let nearestSubPaths = this.SubPathService.getNearestSubPaths(data.from);
        let nearestLocations = this.LocationService.getNearestLocations(data.from);

        let startPoint = this.PathService.getClosestStartPoint(nearestLocations, nearestSubPaths);

        return {
            msg: "Successfully found route",
            data: ["123","342"]
        }
    }
}