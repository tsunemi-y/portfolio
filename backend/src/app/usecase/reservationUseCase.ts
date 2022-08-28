import ReservationService from "../service/reservationService"
import AvailableReservationDatetimeService from "../service/availableReservationDatetimeService"
import { ReservationList } from "../../domain/model/reservation/reservationList";

class ReservationUseCase {

    /**
     * 利用可能日時取得
     * @returns 
     */
    getAvailableDatetime() {
        const reservation = ReservationService.findAll()
        const reservations = reservation.values();

        const tmpAvailableDatetime = AvailableReservationDatetimeService.findAll()
        const tmpAvailableDatetimes = tmpAvailableDatetime.values();
        
        const availableDatetime = ReservationService.getAvailableDatetime(reservations, tmpAvailableDatetimes)

        return availableDatetime

        // 利用可能日時取得
    }
}

export default new ReservationUseCase();