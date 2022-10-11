import express, {Application} from "express";
import cors from 'cors'
import bodyParser from 'body-parser'
import * as reservationController from "./controller/reservationController"
import passport from "../config/passport";

const app: Application = express()

// todo: 特定のオリジンのみを許可
app.use(cors())

// ビューからPOSTされた値を受け取るために設定
app.use(bodyParser.json())

// 認証
app.use(passport.initialize());
app.use(passport.session());

app.post('/login', 
    passport.authenticate('local', 
        {
            successRedirect: '/',
            failureRedirect: '/login',
            session: true
        }
    )
)

// ログイン機能
app.get('/login', reservationController.index)

app.get('/reservation', reservationController.index)

app.post('/reservation', reservationController.create)

export default app;