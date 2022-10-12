import { UserId } from './userId'
import { ReservationDate } from './reservationDate'
import { ReservationTime } from './reservationTime'
import { ReservationEndTime } from './reservationEndTime'

export class Reservation {
  private _userId!: UserId
  private _reservationDate!: ReservationDate
  private _reservationTime!: ReservationTime
  private _endTime!: ReservationEndTime

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