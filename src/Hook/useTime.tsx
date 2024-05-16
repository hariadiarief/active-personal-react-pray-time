import dayjs from 'dayjs'
import { useEffect, useState } from 'react'

export const useTime = () => {
  const [time, setTime] = useState(dayjs())

  useEffect(() => {
    setInterval(() => setTime(dayjs()), 1000)
  }, [])

  return { time }
}
