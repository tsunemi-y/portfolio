import pg from 'pg'
import { AvailableReservationDatetimeRepository } from "../../../domain/model/availableReservationDatetime/availableReservationDatetimeRepository"
import { AvailableReservationDatetimeList } from "../../../domain/model/availableReservationDatetime/availableReservationDatetimeList"

class AvailableReservationDatetimeDatasource implements AvailableReservationDatetimeRepository {
  
  private dataMap: any = {};

  constructor() {
    const pool = new pg.Pool({
      host: "localhost",
      database: "root",
      user: "root",
      port: 5433,
      password: "pass"
    })    
    const query = `
      SELECT 
      ava_dt.available_date
      ,array_agg(ava_dt.available_time) available_times
      FROM available_reservation_datetimes ava_dt
      WHERE NOT EXISTS (
          SELECT 1 
          FROM reservations r_dt
          WHERE true 
          AND r_dt.reservation_date = ava_dt.available_date
          AND ava_dt.available_time BETWEEN r_dt.reservation_time AND r_dt.end_time
      )
      GROUP BY ava_dt.available_date
    `
    pool.connect()
    .then(() => pool.query(query))
    .then(results => {
      this.dataMap = results.rows
    })
  }

  findAll(): AvailableReservationDatetimeList {
    return new AvailableReservationDatetimeList(Object.values(this.dataMap));
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

export default new AvailableReservationDatetimeDatasource();