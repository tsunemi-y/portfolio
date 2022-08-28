import { AvailableReservationDatetimeDate } from './availableReservationDatetimeDate'
import { AvailableReservationDatetimeTime } from './availableReservationDatetimeTime'
import { AvailableReservationDatetimeFeeId } from './availableReservationDatetimeFeeId'

export class AvailableReservationDatetime {
  private _availableReservationDatetimeDate: AvailableReservationDatetimeDate
  private _availableReservationDatetimeTime: AvailableReservationDatetimeTime
  private _availableReservationDatetimeFeeId: AvailableReservationDatetimeFeeId

  static newInstance() {
    return new AvailableReservationDatetime()
  }

  static of(_availableReservationDatetimeDate: AvailableReservationDatetimeDate, 
            _availableReservationDatetimeTime: AvailableReservationDatetimeTime, 
            _availableReservationDatetimeFeeId: AvailableReservationDatetimeFeeId
          ) {
    const availableReservationDatetime = new AvailableReservationDatetime();
    availableReservationDatetime._availableReservationDatetimeDate = _availableReservationDatetimeDate;
    availableReservationDatetime._availableReservationDatetimeTime = _availableReservationDatetimeTime;
    availableReservationDatetime._availableReservationDatetimeFeeId = _availableReservationDatetimeFeeId;
    return availableReservationDatetime;
  }

  availableReservationDatetimeDate() {
    return this._availableReservationDatetimeDate
  }

  availableReservationDatetimeTime() {
    return this._availableReservationDatetimeTime
  }

  availableReservationDatetimeFeeId() {
    return this._availableReservationDatetimeFeeId
  }

}