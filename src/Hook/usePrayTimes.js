import { useEffect, useState } from "react";
import { PrayTimes } from "Utils";
import dayjs from 'dayjs'
import { useTime } from "./useTime";

import duration from 'dayjs/plugin/duration'
import customParseFormat from 'dayjs/plugin/customParseFormat';
dayjs.extend(customParseFormat);
dayjs.extend(duration)


const customLabel = ["Imsak", "Subuh", "Suruq", "Zuhur", "Ashar", "sunset", "Maghrib", "Isya", "midnight"]

export default function usePrayTimes() {
    const { time } = useTime()
    const [geolocation, setGeolocation] = useState(null)
    const [prayTimes, setPrayTimes] = useState(null)
    const [nextPray, setNextPray] = useState(null)
    const [activePray, setActivePray] = useState(null)

    useEffect(() => {
        if (prayTimes) {
            let searchNextPray = prayTimes.find((item) => dayjs(item.time).isAfter(time, 'minute') === true && item.type === 'TIME_SHOLAT')
            searchNextPray.nextTime = dayjs.duration(searchNextPray.time.diff(dayjs())).format('HH:mm:ss')
            setNextPray(searchNextPray)

            let searchActive = prayTimes.filter((item) => dayjs(item.time).isBefore(time, 'minute') === true && item.type === 'TIME_SHOLAT')
            searchNextPray.nextTime = dayjs.duration(searchNextPray.time.diff(dayjs())).format('HH:mm:ss')
            setActivePray(searchActive)

        }
    }, [time, prayTimes])

    useEffect(() => {
        if (!geolocation) return
        if (geolocation.lat && geolocation.long) {
            const timeZone = dayjs().format('Z').split(':')[0]
            const generatePrayTimes = PrayTimes('Egypt');
            /* ==== FUTURE FEATURE ======
            use code below for tune pray time
            */
            // generatePrayTimes.tune({
            //     imsak: 0,
            //     fajr: 0,
            //     sunrise: 0,
            //     dhuhr: 0,
            //     asr: 0,
            //     sunset: 0,
            //     maghrib: 0,
            //     isha: 0,
            //     midnight: 0
            // }) 

            const generatedPrayTimes = generatePrayTimes.getTimes(new Date(), [geolocation.lat, geolocation.long], timeZone)
            const prayTimesFormated = Object.entries(generatedPrayTimes).map((item, index) => ({
                label: customLabel[index],
                time: dayjs().hour(item[1].split(':')[0]).minute(item[1].split(':')[1]).second('00'),
                type: ['imsak', 'sunrise', 'sunset', 'midnight'].includes(item[0]) ? 'TIME_DESCRIPTION' : 'TIME_SHOLAT'
            }))

            setPrayTimes(prayTimesFormated)
        }
    }, [geolocation])

    useEffect(() => {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(
                (position) => setGeolocation({
                    lat: position.coords.latitude,
                    long: position.coords.longitude
                }),
                () => {
                    blockedGeolocation()
                });
        } else {
            blockedGeolocation()
        }
    }, [])

    const blockedGeolocation = () => {
        alert('It seems like Geolocation, which is required for this page, is not enabled in your browser. Please use a browser which supports it.');
    }

    return {
        prayTimes,
        nextPray
    };
} 