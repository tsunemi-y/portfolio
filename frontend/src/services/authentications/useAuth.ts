import { useRouter } from 'next/router'
import { useEffect } from 'react'

const useAuth = (setIsLoading: any) => {
  const router = useRouter()

  useEffect(() => {
    const token = localStorage.getItem('token')
    if (!token) {
      router.replace('/login')
    } else {
      setIsLoading(false)
    }
  }, [])
  return true
}

export default useAuth