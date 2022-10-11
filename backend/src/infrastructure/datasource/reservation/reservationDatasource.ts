import db from '../../../config/db'
import dayjs from '../../../config/dayjs'
import { ReservationRepository } from "../../../domain/model/reservation/reservationRepository"

class ReservationDatasource implements ReservationRepository {

  constructor() {
  }

  async create(data: any): Promise<void> {
    const { userId, date, time, endTime } = data
    const now = dayjs().tz().format()
    const query = `
      INSERT INTO reservations(user_id, reservation_date, reservation_time, end_time, created_at, updated_at) VALUES($1, $2, $3, $4, $5, $6)
    `
    try {
      await db.query(query, [userId, date, time, endTime, now, now])
    } catch {
      console.log('error')
    }
  }
}

export default new ReservationDatasource();