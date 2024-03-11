import { Router } from "express";
import PathController from "../controller/pathController";
import Joi from "joi";
import { getRoute_RequestDTO, getRoute_ResponseDTO } from "./dto/getRoute";
const pathRouter = Router();
const pathController = new PathController()

pathRouter.get('/' ,async (req, res)=>{
    console.time('getShortestPath')
    // request validation using JOI or any such utility
    const data: getRoute_RequestDTO  = {
        from: [Number(req.query.fromLon), Number(req.query.fromLat)]!,
        to: [Number(req.query.toLon), Number(req.query.toLat)]
    }
    const response : getRoute_ResponseDTO = await pathController.getRoute(data);
    
    res.send({data: response, metrics: {
        timing: console.timeEnd('getShortestPath')
    }})
})

export default pathRouter