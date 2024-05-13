import { useTime } from "./Hook";
import { usePrayTimes } from "./Hook/";
import dayjs from "dayjs";

function App() {
  const { time } = useTime();
  const { prayTimes } = usePrayTimes();

  return (
    <div className="home">
      <div className="home__header prose">
        <h1 className="text-white">Pray Time</h1>
      </div>

      <div className="home__time prose">
        {prayTimes && (
          <>
            <div>
              <div className="text-secondary text-3xl font-bold">
                {prayTimes.additional[0].label}
              </div>
              <div className="text-white">
                {dayjs(prayTimes.additional[0].time).format("HH:mm")}
              </div>
            </div>

            <div className="home__time__current-time font-bold">
              <div className="text-2xl text-white">
                {dayjs().locale("id").format("dddd")}
              </div>

              <div className="text-xl text-white">
                {dayjs().locale("id").format("DD MMMM YYYY")}
              </div>

              <div className="text-xl text-white">
                {new Intl.DateTimeFormat("id-ID-u-ca-islamic", {
                  day: "numeric",
                  month: "long",
                  year: "numeric",
                }).format(Date.now())}
              </div>
            </div>

            <div>
              <div className="text-secondary text-xl font-bold">
                {prayTimes.additional[1].label}
              </div>
              <div className="text-white">
                {dayjs(prayTimes.additional[1].time).format("HH:mm")}
              </div>
            </div>
          </>
        )}
      </div>

      <div className="">
        <h3 className="text-white text-5xl font-bold">
          {dayjs(time).format("HH:mm:ss")}
        </h3>
      </div>

      <div className="home__pray-times">
        {prayTimes.sholat.map((item, index) => (
          <div key={index} className="home__pray-times__item">
            <div className="text-2xl text-secondary font-bold">
              {item.label}
            </div>
            <div className="text-xl">{dayjs(item.time).format("HH:mm")}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
