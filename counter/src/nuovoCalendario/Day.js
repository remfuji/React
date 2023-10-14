
import Hour from "./hour";

function Day({ giorno, index}) {
    const ore = ['00:00', '01:00', '02:00', '03:00', '04:00', '05:00',
        '06:00', '07:00', '08:00', '09:00', '10:00', '11:00', '12:00', '13:00',
        '14:00', '15:00', '16:00', '17:00', '18:00', '19:00', '20:00', '21:00',
        '22:00', '23:00']

    function todaySdate(index) {
        const today = new Date()
        const day = today.getDate() + index;
        const month = today.getMonth() + 1; 
        const year = today.getFullYear()
        return day + '-' + month + '-' + year
       
    }
     

    // let newCurrentDate = new Date(currentDate)
    // newCurrentDate.setDate(newCurrentDate.getDate() + indice)
    // let newDate = newCurrentDate.toLocaleDateString()



    return (
        <>
            <div className="day-container">
                <div>{giorno}</div>
                <div>{todaySdate(index)}</div>
                {
                    ore.map((i, index) => <Hour key={index} ora={i} />)
                }
            </div>
        </>
    )
}
export default Day;