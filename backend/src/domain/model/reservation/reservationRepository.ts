import { Reservation } from "./reservation";
import { ReservationList } from "./reservationList"

export interface ReservationRepository {
  // findAll(): ReservationList;

  // findBy(identifier: UserIdentifier): User;

  create(data: Reservation): void;

  // update(user: User): void;

  // delete(identifier: UserIdentifier): void;
}