import pg from 'pg'
import { ReservationRepository } from "../../../domain/model/reservation/reservationRepository"
import { ReservationList } from "../../../domain/model/reservation/reservationList"
import { Reservation } from "../../../domain/model/reservation/reservation"

class ReservationDatasource implements ReservationRepository {
  
  private dataMap: any = {};

  constructor() {
    const pool = new pg.Pool({
      host: "localhost",
      database: "root",
      user: "root",
      port: 5433,
      password: "pass"
    })    
    const query = "SELECT * FROM reservations"
    pool.connect()
    .then(() => pool.query(query))
    .then(results => {
      this.dataMap = results.rows
    })
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