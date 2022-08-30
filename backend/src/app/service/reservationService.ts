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

  // getFormattedAvailableDatetime(availableDatetimes: any[]) {
	// 	let result = []
	// 	let times = []
	// 	for (let i = 0; i < availableDatetimes.length; i++) {
	// 		let date = availableDatetimes[i].available_date
	// 		times = availableDatetimes[i].available_times
	// 		let datetime = {
	// 			[date]: times
	// 		}
			
	// 		result.push(datetime)
	// 	} 
	// 	// console.log(result)
		
	// }

}

export default new ReservationService();