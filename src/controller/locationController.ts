import { Request, Response } from "express";
import LocationService from "../services/location.service";

export default class LocationController{
    private locationService : LocationService
    constructor(){
        this.locationService = new LocationService()
    }

    getLocation(req: Request, res: Response){
        
    }
}