
import  Orario  from './Orario';

export default function Giornata({day}){
    const hours = ['00:00', '01:00', '02:00', '03:00', '04:00', '05:00','06:00', '07:00', '08:00', '09:00', '10:00', '11:00', '12:00']
    return(
        <div>
        
        <div className='day'>
            <h3>{day}</h3>
            {hours.map((hours) => <Orario  hour={hours} />)}
        </div>
        </div>
    )
}

