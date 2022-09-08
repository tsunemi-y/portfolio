import { Request, Response, NextFunction } from "express"
import { callLog } from "../controller/concern/common"
import ReservationUseCase from '../../app/usecase/reservationUseCase'
import AvailableReservationDatetimeService from "../../app/service/availableReservationDatetimeService"

// 一覧表示
export let index = (req: Request, res: Response, next: NextFunction) => {
  const availableDatetime = ReservationUseCase.getAvailableDatetime()

  return res.status(200).send(availableDatetime)
};

// 登録
export let create = (req: Request, res: Response, next: NextFunction) => {
  console.log('create')
  console.log(req)
  AvailableReservationDatetimeService.create()
};