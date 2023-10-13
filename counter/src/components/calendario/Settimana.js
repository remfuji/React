import './style.css'
import  Giornata  from './Giornata';

export default function Settimana(){
    const days = ['Lunedi', 'Martedi', 'Mercoledi', 'Giovedi', 'Venerdi', 'Sabato','Domenica']
    return(
        <>
        <h3>settimana</h3>
        <div className='sett-cont'>
            
        {days.map((day)=> <Giornata day={day}/>)}
        </div>
        </>
    )
}