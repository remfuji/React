import { useState } from "react";
import Day from "./Day";

function Week() {
  const giorni = [
    "lunedi",
    "martedi",
    "mercoledi",
    "giovedi",
    "venerdi",
    "sabato",
    "domenica",
  ];
  const [currentDate, setCurrentDate] = useState(new Date());

  const dateButtonpiù = () => {
    let date = new Date(currentDate);
    date.setDate(date.getDate() + 7);
    setCurrentDate(date);
  };
  const dateButtonmeno = () => {
    let date = new Date(currentDate);
    date.setDate(date.getDate() - 7);
    setCurrentDate(date);
  };

  return (
    <div className="father-week-container">
      <div className="head-week">
        <button onClick={dateButtonpiù}>ciao</button>
        <h3>ottobre</h3>
        <button onClick={dateButtonmeno}>ciao</button>
      </div>
      <div className="week-container">
        {giorni.map((i, index) => (
          <Day key={index} giorno={i} index={index} currentDate={currentDate} />
        ))}
      </div>
    </div>
  );
}
export default Week;
