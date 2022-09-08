import pg from 'pg'
import { AvailableReservationDatetime } from "../../../domain/model/availableReservationDatetime/availableReservationDatetime"
import { AvailableReservationDatetimeRepository } from "../../../domain/model/availableReservationDatetime/availableReservationDatetimeRepository"
import { AvailableReservationDatetimeList } from "../../../domain/model/availableReservationDatetime/availableReservationDatetimeList"

class AvailableReservationDatetimeDatasource implements AvailableReservationDatetimeRepository {
  
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

  findAll(): AvailableReservationDatetimeList {
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
    this.pool.connect()
    .then(() => this.pool.query(query))
    .then(results => {
      this.dataMap = results.rows
    })

    return new AvailableReservationDatetimeList(Object.values(this.dataMap));
  }

  // availableReservationDatetime: AvailableReservationDatetime
  create(): void {
    const query = `
      INSERT INTO reservations(user_id, reservation_date, reservation_time, end_time) VALUES(1, '2021/5/10', '11:00', '11:59')
    `
    this.pool.connect()
    .then(() => this.pool.query(query))
  }

//   delete(identifier: UserIdentifier): void {
//     delete this.dataMap[identifier.value()];
//   }
}

export default new AvailableReservationDatetimeDatasource();