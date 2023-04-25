import { useEffect, useState } from "react";
import "./Timer.css";

// interface IObjectData {
//   client_ip: string;
//   datetime: string;
//   day_of_week: number;
//   day_of_year: number;
//   dst: boolean;
//   dst_from: null;
//   dst_offset: number;
//   dst_until: null;
//   raw_offset: number;
//   timezone: string;
//   unixtime: number;
//   utc_datetime: Date;
//   utc_offset: string;
//   week_number: number;
// }

// const fetchTime = async <T extends IObjectData>(url: string): Promise<T> => {
//   return await fetch(url).then((res) => {
//     if (!res.ok) {
//       console.log(res);

//       throw new Error("Could not fetch");
//     }

//     return res.json();
//   });
// };

//   useEffect(() => {
//     if (timerHours && timerMinutes && timerSeconds) {
//       setTimeout(() => {
//         if (timerSeconds > 59) {
//           setTimerSeconds(1);
//           setTimerMinutes(timerMinutes + 1);
//         } else if (timerMinutes > 59) {
//           setTimerMinutes(1);
//           setTimerHours(timerHours + 1);
//         } else if (timerHours > 23) {
//           setTimerHours(1);
//           setTimerMinutes(timerMinutes + 1);
//           setTimerSeconds(timerSeconds + 1);
//         } else {
//           setTimerSeconds(timerSeconds + 1);
//         }
//       }, 1000);
//     }
//   }, [timerSeconds]);

// const getCurrentTime = (data: IObjectData) => {
//   setTimer(data);
//   setTimerHours(23);
//   setTimerMinutes(59);
//   setTimerSeconds(55);
//   // parseInt(data.datetime.slice(11, 13));
//   // parseInt(data.datetime.slice(14, 16));
//   // parseInt(data.datetime.slice(17, 19));
// };

// useEffect(() => {
//   fetchTime<IObjectData>(
//     "http://worldtimeapi.org/api/timezone/Europe/Moscow"
//   ).then((data) => getCurrentTime(data));
// }, []);

const Timer = () => {
  const [date, setDate] = useState<Date>(new Date());
  const [dateHours, setDateHours] = useState<number>(date.getHours());
  const [dateMinutes, setDateMinutes] = useState<number>(date.getMinutes());
  const [dateSeconds, setDateSeconds] = useState<number>(date.getSeconds());

  useEffect(() => {
    const timeOut = setTimeout(() => {
      setDate(new Date());
      setDateSeconds(date.getSeconds());
      setDateMinutes(date.getMinutes());
      setDateHours(date.getHours());
    }, 1000);

    return () => {
      clearTimeout(timeOut);
    };
  }, [date, dateSeconds, dateMinutes, dateHours]);

  return (
    <>
      <div className="wrapper">
        <div className="clock">
          <div
            style={{
              transform: `rotateZ(${90 + dateSeconds * 6}deg) translateX(-50%)`,
            }}
            className="clock__sec arrow"
          ></div>
          <div
            style={{
              transform: `rotateZ(${90 + dateMinutes * 6}deg) translateX(-50%)`,
            }}
            className="clock__min arrow"
          ></div>
          <div
            style={{
              transform: `rotateZ(${90 + dateHours * 30}deg) translateX(-50%)`,
            }}
            className="clock__hour arrow"
          ></div>
        </div>
        <div className="timer">
          <p>{dateHours < 10 ? "0" + dateHours : dateHours}:</p>
          <p>{dateMinutes < 10 ? "0" + dateMinutes : dateMinutes}:</p>
          <p>{dateSeconds < 10 ? "0" + dateSeconds : dateSeconds}</p>
        </div>
      </div>
    </>
  );
};

export default Timer;
