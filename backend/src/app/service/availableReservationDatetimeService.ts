import availableReservationDatetimeRepository from "../../infrastructure/datasource/availableReservationDatetime/availableReservationDatetimeDatasource"
import { Reservation } from "../../domain/model/reservation/reservation"

class AvailableReservationDatetimeService {
  constructor() {
  }

  findAll() {
    return availableReservationDatetimeRepository.findAll();
  }

}

export default new AvailableReservationDatetimeService();