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
        <h1 className="text-secondary">Pray Time</h1>
      </div>

      <div className="home__time prose">

        {prayTimes &&
          <div>
            <h3 className="text-secondary">{prayTimes[0].label}</h3>
            <div className="text-white">{dayjs(prayTimes[0].time).format('HH:mm')}</div>
          </div>}


        <div className="home__time__current-time text-white">
          <div className="">
            {dayjs().locale('id').format('dddd')}
          </div>

          <h5>
            {dayjs().locale('id').format('DD MMMM YYYY')}
          </h5>

          <h5>
            {new Intl.DateTimeFormat('id-ID-u-ca-islamic', { day: 'numeric', month: 'long', year: 'numeric' }).format(Date.now())}
          </h5>

        </div>


        {prayTimes &&
          <div>
            <h3 className="text-secondary">{prayTimes[2].label}</h3>
            <div className="text-white">{dayjs(prayTimes[2].time).format('HH:mm')}</div>
          </div>}

      </div>

      <div className="prose">
        <h3 className=" text-white">
          {dayjs(time).format('HH:mm:ss')}
        </h3>
      </div>
      <div className="home__next-pray text-white">
        Adzan {nextPray?.label} : - {nextPray?.nextTime}
      </div>



      <div className="home__pray-times">
        {
          prayTimes &&
          prayTimes.filter(item => item.type === 'TIME_SHOLAT').map((item, index) => (
            <div key={index} className="home__pray-times__item">
              <div>{item.label}</div>
              <div>{dayjs(item.time).format('HH:mm')}</div>
            </div>
          ))
        }
      </div>
    </div >

  );
}

export default App;
