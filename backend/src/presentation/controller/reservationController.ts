import pg from 'pg'
import { Request, Response, NextFunction } from "express";
import { callLog } from "../controller/concern/common";
import ReservationDatasource from '../../infrastructure/datasource/reservation/reservationDatasource'

 export let index = (req: Request, res: Response, next: NextFunction) => {
  const reservations = ReservationDatasource.findAll()
  // 上記で取得した予約一覧に加えて、予約可能一覧も取得し、sericeにて、予約可能日時のみを絞って返す

  return res.status(200).send(reservations)
};