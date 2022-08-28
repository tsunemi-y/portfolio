import reservationRepository from "../../infrastructure/datasource/reservation/reservationDatasource"
import { AvailableReservationDatetimeList } from "../../domain/model/availableReservationDatetime//availableReservationDatetimeList"
import { Reservation } from './../../domain/model/reservation/reservation';
import { AvailableReservationDatetime } from "../../domain/model/availableReservationDatetime/availableReservationDatetime";

class ReservationService {
  constructor() {
  }

  findAll() {
    return reservationRepository.findAll();
  }

  getAvailableDatetime(reservations: Reservation[], availableDatetimes: AvailableReservationDatetime[]) {
		const results = reservations.filter(reservation  => {
			console.log(reservation.reservation_date)
			availableDatetimes.filter(availableDatetime =>{
				// if (reservation.reservationDate() !== availableDatetime.availableReservationDatetimeDate()) return false;
			})
		})

		// console.log(results)
		return results
	}

}

export default new ReservationService();