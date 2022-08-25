import { ReservationList } from "./reservationList"

export interface ReservationRepository {
  findAll(): ReservationList;

  // findBy(identifier: UserIdentifier): User;

  // create(user: User): void;

  // update(user: User): void;

  // delete(identifier: UserIdentifier): void;
}