import { AvailableReservationDatetime } from "./availableReservationDatetime";
import { AvailableReservationDatetimeList } from "./availableReservationDatetimeList"

export interface AvailableReservationDatetimeRepository {
  findAll(): Promise<any>;
}