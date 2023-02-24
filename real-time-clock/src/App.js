import "./App.css";
import { useSelector } from "react-redux";
import Clock from "./components/clock";
import PopUp from "./components/PopUp";
import { selectPopUp } from "./store/userSlice";

function App() {
  const showPopUp = useSelector(selectPopUp);

  return (
    <div>
      <Clock></Clock>
      {showPopUp && <PopUp></PopUp>}
    </div>
  );
}

export default App;
