import { Reservation } from "./reservation";

export class ReservationList {
    private _values: Reservation[]
  
    constructor(_values: Reservation[]) {
      this._values = _values
    }
  
    values() {
      return this._values
    }
}