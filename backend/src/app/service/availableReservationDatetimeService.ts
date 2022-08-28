import availableReservationDatetimeRepository from "../../infrastructure/datasource/availableReservationDatetime/availableReservationDatetimeDatasource";

class AvailableReservationDatetimeService {
  constructor() {
  }

  findAll() {
    return availableReservationDatetimeRepository.findAll();
  }

}

export default new AvailableReservationDatetimeService();