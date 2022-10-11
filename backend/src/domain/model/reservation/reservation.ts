import { UserId } from './userId'
import { ReservationDate } from './reservationDate'
import { ReservationTime } from './reservationTime'
import { ReservationEndTime } from './reservationEndTime'

export class Reservation {
  private _userId!: UserId
  private _reservationDate!: ReservationDate
  private _reservationTime!: ReservationTime
  private _endTime!: ReservationEndTime

  // static newInstance() {
  //   return new Reservation()
  // }

  // static of(_reservationDate: ReservationDate, _reservationTime: ReservationTime, _endTime: ReservationEndTime) {
  //   const reservation = new Reservation();
  //   reservation._reservationDate = _reservationDate;
  //   reservation._reservationTime = _reservationTime;
  //   reservation._endTime = _endTime;
  //   return reservation;
  // }

  userId() {
    return this._userId
  }

  reservationDate() {
    return this._reservationDate
  }

  reservationTime() {
    return this._reservationTime
  }

  endTime() {
    return this._endTime
  }
}