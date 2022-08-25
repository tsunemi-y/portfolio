import { ReservationRepository } from "../../../domain/model/reservation/reservationRepository"
import { ReservationList } from "../../../domain/model/reservation/reservationList"
import { Reservation } from "../../../domain/model/reservation/reservation"

class ReservationDatasource implements ReservationRepository {
  
  private dataMap: { [index: string]: Reservation } = {};

  constructor() {
    // database接続
//    this.dataMap
  }

  findAll(): ReservationList {
    return new ReservationList(Object.values(this.dataMap));
  }

//   findBy(identifier: UserIdentifier): User {
//     return this.dataMap[identifier.value()];
//   }

//   create(user: User): void {
//     this.dataMap[user.identifier().value()] = user;
//   }

//   update(user: User): void {
//     this.dataMap[user.identifier().value()] = user;
//   }

//   delete(identifier: UserIdentifier): void {
//     delete this.dataMap[identifier.value()];
//   }
}

export default new ReservationDatasource();