import express, {Application} from "express";
import * as reservationController from "./controller/reservationController";
import { callLog } from "./controller/concern/common";

const app: Application = express()

/**
 * Primary app routes.
 */
 app.get('/reservation', reservationController.index)

export default app;