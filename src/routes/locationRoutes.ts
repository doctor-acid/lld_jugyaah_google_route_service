import { Router } from "express";
import LocationController from "../controller/locationController";
const locationRouter = Router();
const locationController = new LocationController()

locationRouter.get('/', locationController.getLocation)

export default locationRouter