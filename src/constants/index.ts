import OneKMSubPathStrategy from "../Strategies/SubPathStrategy/OneKMSubPathStrategy";
import Logger from "../util/logger";
import environment from "./environment";
// emulating a multi-step code to decide which strategy are we implementing
let strategies = {
    SubPathStrategy: OneKMSubPathStrategy
}
let utils = {
    Logger : Logger
}

export default {
    environment,
    strategies,
    utils

}