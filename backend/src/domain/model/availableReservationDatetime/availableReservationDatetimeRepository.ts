import { AvailableReservationDatetime } from "./availableReservationDatetime";
import { AvailableReservationDatetimeList } from "./availableReservationDatetimeList"

export interface AvailableReservationDatetimeRepository {
  findAll(): AvailableReservationDatetimeList;

  // findBy(identifier: UserIdentifier): User;

  // update(user: User): void;

  // delete(identifier: UserIdentifier): void;
}