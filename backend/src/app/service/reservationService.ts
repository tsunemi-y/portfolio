import dayjs from '../../config/dayjs'
import reservationRepository from "../../infrastructure/datasource/reservation/reservationDatasource"
import { AvailableReservationDatetimeList } from "../../domain/model/availableReservationDatetime//availableReservationDatetimeList"
import { Reservation } from '../../domain/model/reservation/reservation'
import { ReservationEndTime } from './../../domain/model/reservation/reservationEndTime'
import { AvailableReservationDatetime } from "../../domain/model/availableReservationDatetime/availableReservationDatetime";
class ReservationService {
  constructor() {
  }

  create(data: any) {
    return reservationRepository.create(data);
  }

  // 終了時間取得
  getEndtime(startTime: string, useTime: number) {
    const startHour = parseInt(startTime.split(':')[0]) // hour部分取得
    const startMinute = parseInt(startTime.split(':')[1]) - 1 // time部分取得
    return dayjs().hour(startHour).minute(startMinute).second(0).add(useTime, 'm').format('HH:mm:ss')
  }

}

export default new ReservationService();