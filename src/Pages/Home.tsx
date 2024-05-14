import { usePrayTimes, useTime } from '@/Hook'
import dayjs from 'dayjs'

export default function Home() {
  const { time } = useTime()
  const { prayTimes } = usePrayTimes()

  return (
    <div className='home'>
      <div className='home__header prose'>
        <h1 className='text-4xl font-bold tracking-tight text-white sm:text-6xl'>
          Pray Time
        </h1>
      </div>

      <div className='home__time prose'>
        {prayTimes && (
          <>
            <div>
              <div className='text-3xl font-bold text-secondary'>
                {prayTimes.additional[0].label}
              </div>
              <div className='text-white'>
                {dayjs(prayTimes.additional[0].time).format('HH:mm')}
              </div>
            </div>

            <div className='home__time__current-time font-bold'>
              <div className='text-2xl text-white'>
                {dayjs().locale('id').format('dddd')}
              </div>

              <div className='text-xl text-white'>
                {dayjs().locale('id').format('DD MMMM YYYY')}
              </div>

              <div className='text-xl text-white'>
                {new Intl.DateTimeFormat('id-ID-u-ca-islamic', {
                  day: 'numeric',
                  month: 'long',
                  year: 'numeric'
                }).format(Date.now())}
              </div>
            </div>

            <div>
              <div className='text-3xl font-bold text-secondary'>
                {prayTimes.additional[1].label}
              </div>
              <div className='text-white'>
                {dayjs(prayTimes.additional[1].time).format('HH:mm')}
              </div>
            </div>
          </>
        )}
      </div>

      <div className=''>
        <h3 className='text-5xl font-bold text-white'>
          {dayjs(time).format('HH:mm:ss')}
        </h3>
      </div>

      <div className='home__pray-times'>
        {prayTimes.sholat.map((item, index) => (
          <div key={index} className='home__pray-times__item'>
            <div className='text-2xl font-bold text-secondary'>
              {item.label}
            </div>
            <div className='text-xl'>{dayjs(item.time).format('HH:mm')}</div>
          </div>
        ))}
      </div>
    </div>
  )
}
