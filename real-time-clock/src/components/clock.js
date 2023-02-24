import React, { useState, useEffect } from "react";
import "./clock.css";
import { useDispatch } from "react-redux";
import { togglePopup, userActions } from "../store/userSlice";
function Clock() {
  const dispatch = useDispatch();
  const time = new Date();
  const [hours, setHours] = useState(time.getHours());
  const [minutes, setMinutes] = useState(time.getMinutes());
  const [seconds, setSeconds] = useState(time.getSeconds());

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

      if (minutes%5===0 && seconds===0){
        
        dispatch(userActions.settime({
          hours:hours,
          minutes:minutes,
          seconds:seconds,

        }))
        
        dispatch(togglePopup.togglePopup())
      }
      
     }, 1000);

    return () => clearInterval(interval);
  });

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
