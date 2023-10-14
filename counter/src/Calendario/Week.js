import { Day } from "./Day";

export default function Week({ today }) {
  const week = ['domenica', 'lunedi', 'martedi', 'mercoledi', 'giovedi', 'venerdi', 'sabato']
  let currentWeekDay = new Date().getDay()
  return (
    <>
      <div className="week">
        {week.map((day, i) => (
          <Day day={date(today, i - currentWeekDay)} giornoSett={day} />
        ))}
      </div>
    </>
  )
}

function date(today, i) {
  let newDate = new Date()
  newDate.setFullYear(today.getFullYear(), today.getMonth(), today.getDate() + i)
  return newDate.toLocaleString('en-GB').slice(0, -10)
}
