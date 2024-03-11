import constants from "./constants";
import pathRouter from "./routes/pathRoutes";
// import mongoConnection from "./config/mongoConnection";

const express = require('express')

let app = express();

app.use('/path', pathRouter)


app.listen(constants.environment.PORT, ()=>{
    console.log(`app running on port ${constants.environment.PORT}`)
})