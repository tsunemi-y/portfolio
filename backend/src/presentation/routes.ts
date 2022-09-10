import express, {Application} from "express";
import cors from 'cors'
import bodyParser from 'body-parser'
import * as reservationController from "./controller/reservationController";

const app: Application = express()

// todo: 特定のオリジンのみを許可
app.use(cors())

app.use(bodyParser.json())

/**
 * Primary app routes.
 */
 app.get('/reservation', reservationController.index)

 app.post('/reservation', reservationController.create)
// todo:ログイン機能実装
export default app;