import { useEffect, useState } from "react";
import dayjs from 'dayjs'


export const useTime = () => {
    const [time, setTime] = useState(dayjs());

    useEffect(() => {
        setInterval(() => setTime(dayjs()), 1000);
    }, []);

    return { time }

} 