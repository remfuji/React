import { useEffect, useState } from "react";
import Month from "./Month";

export default function Year() {
  const [startingDay, setStartingDay] = useState(new Date());

  function next() {
    let newDate = new Date();
    newDate.setFullYear(
      startingDay.getFullYear(),
      startingDay.getMonth(),
      startingDay.getDate() + 7
    );
    setStartingDay(newDate);
  }

  function previous() {
    let newDate = new Date();
    newDate.setFullYear(
      startingDay.getFullYear(),
      startingDay.getMonth(),
      startingDay.getDate() - 7
    );
    setStartingDay(newDate);
  }

  function reset() {
    let newDate = new Date();
    setStartingDay(newDate);
  }

  return (
    <div className="year">
      
        <button className="months-btn" onClick={previous}>
          {" "}
          ⇦{" "}
        </button>

        <Month today={startingDay} />

        <button className="months-btn" onClick={next}>
          {" "}
          ⇨{" "}
        </button>

      

      <button className="reset-btn" onClick={reset}>
        {" "}
        Return to Today <span>⮢</span>
      </button>
    </div>
  );
}
