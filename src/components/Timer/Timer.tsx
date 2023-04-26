import { useEffect, useState } from "react";
import "./Timer.css";

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
              transform: `rotateZ(${90 + (dateSeconds * 6)}deg) translateX(-50%)`,
            }}
            className="clock__sec arrow"></div>
          <div
            style={{
              transform: `rotateZ(${90 + ((dateMinutes + (1/60 * dateSeconds)) * 6)}deg) translateX(-50%)`,
            }}
            className="clock__min arrow"></div>
          <div
            style={{
              transform: `rotateZ(${
                90 + ((dateHours + (1/60 * dateMinutes)) * 30)
              }deg) translateX(-50%)`,
            }}
            className="clock__hour arrow"></div>
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
