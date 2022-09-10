import availableReservationDatetimeRepository from "../../infrastructure/datasource/availableReservationDatetime/availableReservationDatetimeDatasource"
import { Reservation } from "../../domain/model/reservation/reservation"

class AvailableReservationDatetimeService {
  constructor() {
  }

  findAll() {
    return availableReservationDatetimeRepository.findAll();
  }

  create(data: Reservation) {
    availableReservationDatetimeRepository.create(data);
  }

}

export default new AvailableReservationDatetimeService();