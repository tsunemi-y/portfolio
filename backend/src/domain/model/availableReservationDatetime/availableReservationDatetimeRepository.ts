import { AvailableReservationDatetimeList } from "./availableReservationDatetimeList"

export interface AvailableReservationDatetimeRepository {
  findAll(): AvailableReservationDatetimeList;

  // findBy(identifier: UserIdentifier): User;

  // create(user: User): void;

  // update(user: User): void;

  // delete(identifier: UserIdentifier): void;
}