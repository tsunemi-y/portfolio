import { AvailableReservationDatetime } from "./availableReservationDatetime";

export class AvailableReservationDatetimeList {
    private _values: AvailableReservationDatetime[]
  
    constructor(_values: AvailableReservationDatetime[]) {
      this._values = _values
    }
  
    values() {
      return this._values
    }
}