import express, {Application} from "express";
import cors from 'cors'
import bodyParser from 'body-parser'
import session from 'express-session'
import jwt from 'jsonwebtoken'
import jweConfig from '../config/jwt'
import * as reservationController from "./controller/reservationController"
import passport from "../config/passport";
import authenticationService from "../app/service/authenticationService"

const app: Application = express()

// todo: 特定のオリジンのみを許可
app.use(cors())

// ビューからPOSTされた値を受け取るために設定
app.use(bodyParser.json())

app.use(session({
    secret: 'secret_key',
    resave: false,
    saveUninitialized: false
}))

app.post('/login', 
    passport.authenticate('local', 
        {
            failureRedirect: '/'
        }
    ),
    function(req, res) {
        const user: any = req.user
        const token = jwt.sign(user, jweConfig.SECRET_KEY)
        res.json({ token })
    }
)

app.get('/reservation', authenticationService.verifyToken, reservationController.index)

app.post('/reservation', reservationController.create)

export default app;