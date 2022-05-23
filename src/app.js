import router from "./routers/index.js";

import express, {json} from "express";
import cors from 'cors'
import chalk from 'chalk'


const port = process.env.PORT || 5000

const app = express()
app.use(cors())
app.use(json())
app.use(router)

app.listen(port, ()=>{
    console.log(chalk.green.bold('App is now running on port ', port))
})
