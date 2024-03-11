import { BaseException } from "./baseException";

type locationErrorTypes = 'LOCATION_OUT_OF_BOUNDS' | 'LOCATION_UNSERVICEABLE'

export default class LocationErrors extends BaseException<locationErrorTypes> {}