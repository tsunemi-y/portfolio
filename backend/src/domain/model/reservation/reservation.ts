import { ReservationDate } from './reservationDate'
import { ReservationTime } from './reservationTime'
import { ReservationEndTime } from './reservationEndTime'

export class Reservation {
  private _reservationDate: ReservationDate
  private _reservationTime: ReservationTime
  private _endTime: ReservationEndTime

  static newInstance() {
    return new Reservation()
  }

  static of(
    _reservationDate: ReservationDate,
    _reservationTime: ReservationTime,
    _endTime: ReservationEndTime,
  ) {
    const reservation = new Reservation();
    reservation._reservationDate = _reservationDate;
    reservation._reservationTime = _reservationTime;
    reservation._endTime = _endTime;
    return reservation;
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