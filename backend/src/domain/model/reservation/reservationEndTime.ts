export class ReservationEndTime {
  private _value: number;
  
  constructor(_value: number) {
    this._value = _value;
  }
  
  value() {
    return this._value;
  }
}