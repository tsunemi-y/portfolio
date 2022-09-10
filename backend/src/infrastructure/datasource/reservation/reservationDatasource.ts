import pg from 'pg'
import { ReservationRepository } from "../../../domain/model/reservation/reservationRepository"
import { ReservationList } from "../../../domain/model/reservation/reservationList"
import { Reservation } from "../../../domain/model/reservation/reservation"

class ReservationDatasource implements ReservationRepository {
  
  private dataMap: any = {}
  private pool: pg.Pool

  constructor() {
    this.pool = new pg.Pool({
      host: "localhost",
      database: "root",
      user: "root",
      port: 5433,
      password: "pass"
    })    
  }

  // findAll(): ReservationList {
  //   return new ReservationList(Object.values(this.dataMap));
  // }

//   findBy(identifier: UserIdentifier): User {
//     return this.dataMap[identifier.value()];
//   }

  create(data: Reservation): void {
    const query = `
      INSERT INTO reservations(user_id, reservation_date, reservation_time, end_time) VALUES(1, '2021/5/10', '11:00', '11:59')
    `
    this.pool.connect()
    .then(() => this.pool.query(query))
  }

//   update(user: User): void {
//     this.dataMap[user.identifier().value()] = user;
//   }

//   delete(identifier: UserIdentifier): void {
//     delete this.dataMap[identifier.value()];
//   }
}

export default new ReservationDatasource();