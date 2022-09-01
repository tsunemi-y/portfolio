import { Request, Response, NextFunction } from "express"
import { callLog } from "../controller/concern/common"
import ReservationUseCase from '../../app/usecase/reservationUseCase'

 export let index = (req: Request, res: Response, next: NextFunction) => {
  const availableDatetime = ReservationUseCase.getAvailableDatetime()

  res.set({ 'Access-Control-Allow-Origin': '*' })
  return res.status(200).send(availableDatetime)
};