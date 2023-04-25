import { useCallback, useEffect, useState } from "react";

interface IObjectData {
  datetime: string;
}

const Timer = () => {
  const [timer, setTimer] = useState<string>();

  const fetchTime = async <T,>(url: string): Promise<T> => {
    return await fetch(url).then((res) => {
      if (!res.ok) {
        throw new Error("Could not fetch");
      }

      return res.json();
    });
  };

  useEffect(() => {
    fetchTime<IObjectData>(
      "http://worldtimeapi.org/api/timezone/Europe/London"
    ).then(({ datetime }) => setTimer(datetime));
  }, []);

  return (
    <>
      <h1>{timer}</h1>
      <h2>test</h2>
    </>
  );
};

export default Timer;
