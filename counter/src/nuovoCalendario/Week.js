
import Day from "./Day";

function Week() {
    const giorni = ['lunedi', 'martedi', 'mercoledi', 'giovedi', 'venerdi', 'sabato', 'domenica']
    
 

    return (
        <div className="week-container">
            {
                giorni.map((i,index) => <Day key={index} giorno={i} index={index}/>)
            }
        </div>
    )
}
export default Week;