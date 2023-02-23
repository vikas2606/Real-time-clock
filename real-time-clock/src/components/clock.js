import React, { useState, useEffect } from "react";
import "./clock.css";
function Clock() {
  const time = new Date();
  const [hours, setHours] = useState(time.getHours());
  const [minutes, setMinutes] = useState(time.getMinutes());
  const [seconds, setSeconds] = useState(time.getSeconds());
  /*
  useEffect(() => {
    const interval = setInterval(() => {
      const newTime = incrementTime(hours, minutes, seconds);
      setHours(newTime.hours);
      setMinutes(newTime.minutes);
      setSeconds(newTime.seconds);
    }, 1000);
    return () => clearInterval(interval);
  });
  function incrementTime(hours, minutes, seconds) {
    let newSeconds = seconds + 1;
    let newMinutes = minutes;
    let newHours = hours;
    if (newSeconds === 60) {
      newSeconds = 0;
      newMinutes++;
    }
    if (newMinutes === 60) {
      newMinutes = 0;
      newHours++;
    }
    if (newHours === 24) {
      newHours = 0;
    }
    return {
      hours: newHours,
      minutes: newMinutes,
      seconds: newSeconds,
    };
  }
  */
  useEffect(() => {
    const interval = setInterval(() => {
      setSeconds((prevSeconds) => {
        let newSeconds = prevSeconds + 1;
        let newMinutes = minutes;
        let newHours = hours;
        if (newSeconds === 60) {
          newSeconds = 0;
          newMinutes++;
        }
        if (newMinutes === 60) {
          newMinutes = 0;
          newHours++;
        }
        if (newHours === 24) {
          newHours = 0;
        }
        setMinutes(newMinutes);
        setHours(newHours);
        return newSeconds;
      });
    }, 1000);
    return () => clearInterval(interval);
  }, [hours, minutes]);
  return (
   <div className="clock">
      <h1>Real-Time Clock</h1>
      <p>
        {hours < 10 ? "0" : ""}
        {hours}:{minutes < 10 ? "0" : ""}
        {minutes}:{seconds < 10 ? "0" : ""}
        {seconds}
      </p>
    </div>
  );
}
export default Clock;
