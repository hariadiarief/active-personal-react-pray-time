import { useEffect, useState } from 'react'

export type IGeolocation = {
  latitude: number
  longitude: number
}

export const useGeoLocation = () => {
  const [geolocation, setGeolocation] = useState<IGeolocation>()

  useEffect(() => {
    const getGeolocation = () => {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
          position => {
            setGeolocation({
              latitude: position.coords.latitude,
              longitude: position.coords.longitude
            })
          },
          () => {
            geolocationBlocked()
          }
        )
      } else {
        geolocationBlocked()
      }
    }

    if (!geolocation) {
      getGeolocation()
    }
  }, [geolocation])

  const geolocationBlocked = () => {
    alert(
      'It seems like Geolocation, which is required for this page, is not enabled in your browser. Please use a browser which supports it.'
    )
  }

  return {
    geolocation
  }
}
