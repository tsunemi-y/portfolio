import axios from "axios"

export type AddAvailableDatetimeParams = {
    targetDate: string | undefined,
    targetTime: string
}

const addAvailableDatetime = async (data: AddAvailableDatetimeParams) => {
    await axios.post('http://localhost:8080/reservation', data, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`
        }
    })
}

export default addAvailableDatetime