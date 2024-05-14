import { useEffect, useState } from "react";

import {
  Coordinates,
  CalculationMethod,
  PrayerTimes,
  type PrayerTimes as IPrayerTimes,
  type CalculationParameters as ICalculationParameters,
} from "adhan";

import { useGeoLocation, IGeolocation } from "./useGeoLocation";
import dayjs from "dayjs";

type IGetPrayTime = {
  geolocation: IGeolocation;
  date: Date;
  calculationParameters: ICalculationParameters;
};

export const usePrayTimes = () => {
  const { geolocation } = useGeoLocation();
  const [prayTimes, setPrayTimes] = useState<IPrayerTimes>();

  useEffect(() => {
    if (geolocation?.latitude && geolocation?.longitude) {
      getPrayTime({
        geolocation,
        date: new Date(),
        calculationParameters: CalculationMethod.MuslimWorldLeague(),
      });
    }
  }, [geolocation]);

  const getPrayTime = ({
    geolocation,
    date,
    calculationParameters,
  }: IGetPrayTime) => {
    const prayTimes = new PrayerTimes(
      new Coordinates(geolocation.latitude, geolocation.longitude),
      date,
      calculationParameters
    );

    setPrayTimes(prayTimes);
  };

  return {
    prayTimes: {
      sholat: [
        {
          label: "Fajr",
          time: prayTimes?.fajr,
        },
        {
          label: "Dhuhr",
          time: prayTimes?.dhuhr,
        },
        {
          label: "Asr",
          time: prayTimes?.asr,
        },
        {
          label: "Maghrib",
          time: prayTimes?.maghrib,
        },
        {
          label: "Isha",
          time: prayTimes?.isha,
        },
      ],
      additional: [
        {
          label: "Imsak",
          time: dayjs(prayTimes?.fajr).subtract(10, 'minute'),
        },
        {
          label: "Thulu'",
          time: prayTimes?.sunrise,
        },
        {
          label: "Sunset",
          time: prayTimes?.sunset,
        },
      ],
    },
  };
};
