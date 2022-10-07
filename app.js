import express from 'express'
import 'express-async-errors'
import cors from 'cors'

import { errorHandlerMiddle } from './middlewares/error-handler.js'
// import the router from the routes folder
import { LoginRouter } from './routes/login.js'
import { SignupRouter } from './routes/signup.js'
//
// run the router
const app = express()
app.use(cors())
app.use(express.json());
app.use(LoginRouter);
app.use(SignupRouter);
app.use(errorHandlerMiddle)

//For deployment only


export {app}
