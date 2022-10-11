import { Request } from "express"
import ReservationService from "../service/reservationService"
import AvailableReservationDatetimeService from "../service/availableReservationDatetimeService"
import AuthenticationService from "../service/authenticationService"
import { ReservationList } from "../../domain/model/user/reservationList"
import { Reservation } from './../../domain/model/reservation/reservation'
import { ReservationDate } from './../../domain/model/reservation/reservationDate';

class ReservationUseCase {

    /**
     * 利用可能日時取得
     * @returns 
     */
    getAvailableDatetime(): Promise<any> {
        const availableDatetimes = AvailableReservationDatetimeService.findAll()

        return availableDatetimes
    }

    /**
     * 予約情報登録
     */
    saveReservation(req: Request) {
        // jwtトークンからユーザ情報取得
        const authHeader = req.headers.authorization
        const token = authHeader?.split(' ')[1]
        const userInfo = AuthenticationService.getUserInfoByJwt(token)

        // 予約終了時間取得 ※利用時間にユーザ情報のuse_timeを加算
        const endTime = ReservationService.getEndtime(req.body.targetTime, userInfo.use_time)

        // 登録するデータ設定
        const data = {
            userId:userInfo.id,
            date:req.body.targetDate,
            time:req.body.targetTime,
            endTime
        }

        // 登録
        ReservationService.create(data)
    }
}

export default new ReservationUseCase()