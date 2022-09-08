import express, {Application} from "express";
import cors from 'cors'
import * as reservationController from "./controller/reservationController";

const app: Application = express()

// todo: 特定のオリジンのみを許可
app.use(cors())

/**
 * Primary app routes.
 */
 app.get('/reservation', reservationController.index)

 app.post('/reservation', reservationController.create)

export default app;