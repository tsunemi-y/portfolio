export class ReservationTime {
  private _value: string;

  constructor(_value: string) {
    this._value = _value;
  }

  value() {
    return this._value;
  }
}