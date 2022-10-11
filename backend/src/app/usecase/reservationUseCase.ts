import ReservationService from "../service/reservationService"
import AvailableReservationDatetimeService from "../service/availableReservationDatetimeService"
import { ReservationList } from "../../domain/model/reservation/reservationList";
import { Reservation } from "../../domain/model/reservation/reservation";

class ReservationUseCase {

    /**
     * 利用可能日時取得
     * @returns 
     */
    getAvailableDatetime() {
        const tmpAvailableDatetime = AvailableReservationDatetimeService.findAll()
        const availableDatetimes = tmpAvailableDatetime.values();

        return availableDatetimes
    }

    /**
     * 予約情報登録
     */
    saveReservation(data: Reservation) {
        // 予約終了時間取得
        const endTime = ReservationService.getEndtime()

        // 登録
        ReservationService.create(data)
    }
}

export default new ReservationUseCase();