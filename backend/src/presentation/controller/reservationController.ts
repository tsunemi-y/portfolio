import { Request, Response, NextFunction } from "express"
import bodyParser from 'body-parser'
import { callLog } from "../controller/concern/common"
import ReservationUseCase from '../../app/usecase/reservationUseCase'
import AvailableReservationDatetimeService from "../../app/service/availableReservationDatetimeService"

// 一覧表示
export let index = async (req: Request, res: Response, next: NextFunction) => {
  const availableDatetime = await ReservationUseCase.getAvailableDatetime()

  return res.status(200).send(availableDatetime)
};

// 登録
export let create = (req: Request, res: Response, next: NextFunction) => {
  ReservationUseCase.saveReservation(req)
  return res.status(200).send('OK')
};