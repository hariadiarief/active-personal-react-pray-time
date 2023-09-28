import { useTime } from "./Hook";

// hook
import usePrayTimes from "./Hook/usePrayTimes";

// dayjs
import 'dayjs/locale/id'
import dayjs from 'dayjs'
import duration from 'dayjs/plugin/duration'
import customParseFormat from 'dayjs/plugin/customParseFormat';
dayjs.extend(customParseFormat);
dayjs.extend(duration)

function App() {
  const { time } = useTime()
  const { prayTimes, nextPray } = usePrayTimes()

  return (
    <div className="home">
      <div className="home__header prose">
        <h1 className="text-white">Pray Time</h1>
      </div>

      <div className="home__time prose">

        {prayTimes &&
          <>
            <div>
              <div className="text-secondary text-3xl font-bold">{prayTimes[0].label}</div>
              <div className="text-white">{dayjs(prayTimes[0].time).format('HH:mm')}</div>
            </div>

            <div className="home__time__current-time font-bold">
              <div className="text-2xl text-white">
                {dayjs().locale('id').format('dddd')}
              </div>

              <div className="text-xl text-white">
                {dayjs().locale('id').format('DD MMMM YYYY')}
              </div>

              <div className="text-xl text-white">
                {new Intl.DateTimeFormat('id-ID-u-ca-islamic', { day: 'numeric', month: 'long', year: 'numeric' }).format(Date.now())}
              </div>
            </div>

            <div>
              <div className="text-secondary text-xl font-bold">{prayTimes[2].label}</div>
              <div className="text-white">{dayjs(prayTimes[2].time).format('HH:mm')}</div>
            </div>
          </>
        }
      </div>

      <div className="">
        <h3 className="text-white text-5xl font-bold">
          {dayjs(time).format('HH:mm:ss')}
        </h3>
      </div>
      {/* <div className="text-secondary text-3xl font-bold">
        Adzan {nextPray?.label} : - {nextPray?.nextTime}
      </div> */}

      <div className="home__pray-times">
        {
          prayTimes &&
          prayTimes.filter(item => item.type === 'TIME_SHOLAT').map((item, index) => (
            <div key={index} className="home__pray-times__item">
              <div className="text-2xl text-secondary font-bold">{item.label}</div>
              <div className="text-xl">{dayjs(item.time).format('HH:mm')}</div>
            </div>
          ))
        }
      </div>
    </div >

  );
}

export default App;
