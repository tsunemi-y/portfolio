import express, {Application} from "express";
import * as reservationController from "./controller/reservationController";

const app: Application = express()

/**
 * Primary app routes.
 */
 app.get('/reservation', reservationController.index)

export default app;