import availableReservationDatetimeRepository from "../../infrastructure/datasource/availableReservationDatetime/availableReservationDatetimeDatasource";

class AvailableReservationDatetimeService {
  constructor() {
  }

  findAll() {
    return availableReservationDatetimeRepository.findAll();
  }

  create() {
    availableReservationDatetimeRepository.create();
  }

}

export default new AvailableReservationDatetimeService();