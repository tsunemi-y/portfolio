import { Reservation } from "./reservation";
import { ReservationList } from "./reservationList"

export interface ReservationRepository {

  create(data: Reservation): void;

}