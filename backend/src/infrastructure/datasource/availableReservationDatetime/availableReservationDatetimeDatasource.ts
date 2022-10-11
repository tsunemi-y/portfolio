import db from '../../../config/db'
import { AvailableReservationDatetime } from "../../../domain/model/availableReservationDatetime/availableReservationDatetime"
import { AvailableReservationDatetimeRepository } from "../../../domain/model/availableReservationDatetime/availableReservationDatetimeRepository"
import { AvailableReservationDatetimeList } from "../../../domain/model/availableReservationDatetime/availableReservationDatetimeList"

class AvailableReservationDatetimeDatasource implements AvailableReservationDatetimeRepository {

  constructor() {
  }

  async findAll(): Promise<any> {
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
    const results = await db.query(query)

    return results.rows
  }

}

export default new AvailableReservationDatetimeDatasource();