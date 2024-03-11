import { lonLatArr } from "../../constants/commonTypes"


export interface getRoute_RequestDTO{
    from: lonLatArr
    to: lonLatArr
}
export interface getRoute_ResponseDTO{
    msg: string
    data: Array<string>
}