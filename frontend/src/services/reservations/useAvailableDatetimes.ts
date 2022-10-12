import useSWR from 'swr'
import type { AvailableDatetime } from 'types'

export type UseAvailableDatetime = {
  availableDatetimes: AvailableDatetime[]
  isLoading: boolean
  isError: boolean
}

const useAvailableDatetimes = () => {
  
  // ヘッダーに認証トークン付与
  const fetcher = () => fetch(`${process.env.BASE_URL}/reservation`, {
    headers: {
      Authorization: `Bearer ${localStorage.getItem('token')}`
    }
  })
  .then(res => res.json())

  const { data, error } = useSWR<AvailableDatetime[]>(`${process.env.BASE_URL}/reservation`, fetcher, { refreshInterval: 1000})

  return {
    availableDatetimesHook: data,
    isLoadingHook: !error && !data,
    isError: error,
  }
}

export default useAvailableDatetimes