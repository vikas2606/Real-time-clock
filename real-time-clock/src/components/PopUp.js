import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectTime } from "../store/userSlice";
import { togglePopup } from "../store/userSlice";
import "./PopUp.css";

function PopUp() {
  const time = useSelector(selectTime);
  const dispatch = useDispatch();
  const toggle = () => {
    dispatch(togglePopup.togglePopup());
  };
  return (
    <div className="popup-overlay">
      <div className="popup">
        <p>
          {time.hours < 10 ? "0" : ""}
          {time.hours}:{time.minutes < 10 ? "0" : ""}
          {time.minutes}:{time.seconds < 10 ? "0" : ""}
          {time.seconds}
        </p>
        <button onClick={toggle}>ok</button>
      </div>
    </div>
  );
}
export default PopUp;
