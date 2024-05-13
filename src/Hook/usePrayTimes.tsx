import { useEffect, useState } from "react";

import {
  Coordinates,
  CalculationMethod,
  PrayerTimes,
  type PrayerTimes as IPrayerTimes,
  type CalculationParameters as ICalculationParameters,
} from "adhan";
import { useGeoLocation, IGeolocation } from "./useGeoLocation";

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
        calculationParameters: CalculationMethod.MoonsightingCommittee(),
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
          label: "fajr",
          time: prayTimes?.fajr,
        },
        {
          label: "dhuhr",
          time: prayTimes?.dhuhr,
        },
        {
          label: "asr",
          time: prayTimes?.asr,
        },
        {
          label: "maghrib",
          time: prayTimes?.maghrib,
        },
        {
          label: "isha",
          time: prayTimes?.isha,
        },
      ],
      additional: [
        {
          label: "sunset",
          time: prayTimes?.sunset,
        },
        {
          label: "sunrise",
          time: prayTimes?.sunrise,
        },
      ],
    },
  };
};
