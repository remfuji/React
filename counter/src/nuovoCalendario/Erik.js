//calendario di google
//un componente settimana
//   con dentro un componente giornata
//      con dentro diversi componente orario
//          con dentro al componente orario "solo" un appuntamento
//feature si puo aggiungere un evento cliccando su orario
//un evento può essere cancellato o modificato

//new Date() ci da il giorno attuale

import { useEffect, useState } from 'react';

export default function Calendario() {

    const [currentDate, setCurrentDate] = useState(new Date())
    const [holiday, setHoliday] = useState([])


    useEffect(() => {
        async function get() {
            let response = await fetch("https://api.api-ninjas.com/v1/holidays?country=CA&year=2023&type=public_holiday", {
                method: 'GET',
                headers: {
                    'X-Api-Key': 'dxIXSbvHeKk7Xuv5w2ksxA==ln27cWNNKOcsv2sL'
                }
            })
            response = await response.json()
            setHoliday(response)
        }
        get()
    }, [])

    const dateButtonpiù = () => {
        let date = new Date(currentDate);
        date.setDate(date.getDate() + 7);
        setCurrentDate(date)
    }
    const dateButtonmeno = () => {
        let date = new Date(currentDate);
        date.setDate(date.getDate() - 7);
        setCurrentDate(date)
    }


    const giorni = [
        "lunedì", "martedì", "mercoledì", "giovedì", "venerdì",
        "sabato", "domenica"]

    return (
        <>
            <div >

                <div className='piumeno'>
                    <button onClick={dateButtonmeno}>-</button>
                    <h3>Settimana</h3>
                    <button onClick={dateButtonpiù}>+</button>
                </div>

                <div className='settimana'>
                    {giorni.map((giorno, indice) => <Giorno key={indice} giorno={giorno} indice={indice} currentDate={currentDate} holiday={holiday} />
                    )}
                </div>
            </div>
        </>
    )
}

function Giorno({ giorno, currentDate, indice, holiday }) {

    const [orari, setOrari] = useState("")
    const [text, setText] = useState("")
    const [events, setEvents] = useState([])


    let newCurrentDate = new Date(currentDate)
    newCurrentDate.setDate(newCurrentDate.getDate() + indice)
    let newDate = newCurrentDate.toLocaleDateString()

    let arrayHoliday = holiday.some((h) => {
        let formatCurrentDate = formatDate(newCurrentDate)
        return h.date === formatCurrentDate
    })



    function formatDate(date) {
        let dayHoliday = date.getDate()
        let mthHoliday = date.getMonth() + 1
        let yearHoliday = date.getFullYear()
        let completeDate = yearHoliday + "-" + mthHoliday + "-" + dayHoliday
        return (completeDate)
    }

    function Add() {
        let newEvent = orari + " " + text
        setEvents([...events, newEvent])
    }
    function Delete(index) {
        let newEvent = [...events]
        newEvent.splice(index, 1)
        setEvents(newEvent)
    }

    return (
        <>
            <div className='padregiorni'>
                <div className={'giorni-' + arrayHoliday} >
                    <h3>{giorno} {newDate}</h3>

                    <div>
                        <input type="time" onChange={
                            e => setOrari(e.target.value)} />
                        <input type="text" onChange={
                            e => setText(e.target.value)} />
                        <button onClick={Add}>Add</button>
                        <div>
                            <ul>
                                {events.map((event, index) => (
                                    <li key={index}>{event} <button onClick={() => Delete(index)}>X</button> </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}