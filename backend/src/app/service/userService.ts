import reservationRepository from "../../infrastructure/datasource/reservation/reservationDatasource"
import { AvailableReservationDatetimeList } from "../../domain/model/availableReservationDatetime//availableReservationDatetimeList"
import { Reservation } from './../../domain/model/reservation/reservation';
import { AvailableReservationDatetime } from "../../domain/model/availableReservationDatetime/availableReservationDatetime";

class ReservationService {
  constructor() {
  }

  create(data: Reservation) {
    return reservationRepository.create(data);
  }

  getEndtime() {
	//
  }

}

export default new ReservationService();