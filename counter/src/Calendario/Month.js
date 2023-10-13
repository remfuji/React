// un mese contiene 30 giorni


import Week from './Week'

export default function Month({ today }) {

    let months = ["Gennaio", "Febbraio", "Marzo", "Aprile", "Maggio", "Giugno", "Luglio", "Agosto", "Settembre", "Ottobre", "Novembre", "Dicembre"]

    let currentDate = today.toLocaleString('en-GB')
    currentDate = currentDate.split("/")


    return (
        <div className='month'>
            <div>{months[currentDate[1] - 1]}</div>
            <div>
                <Week today={today} />
            </div>

        </div>
    )
}