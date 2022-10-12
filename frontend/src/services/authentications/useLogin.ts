import axios from "axios"
import { useRouter } from 'next/router'

export type UseLogin = {
  email: string,
  password: string,
}

const useLogin = async (data: UseLogin) => {

  const res = await axios.post(`${process.env.BASE_URL}/login`, data)
  if (res.status === 200) {
    localStorage.setItem('token', res.data.token)
    window.location.href = '/'
  }
}

export default useLogin