import { useState } from "react";


export default function Alarm(){
    const [ora,setOra] = useState(0)
    const [minuti,setMinuti] = useState(0)
    const [alarmList,setAlarmList] = useState([])

    function onClick(){
        let temp = JSON.parse(JSON.stringify(alarmList))
        let sveglia = {ora: ora, minuti : minuti}
        temp.push(sveglia)
        setAlarmList(temp)
    }
    function mostraSveglie(sveglia){
        return(
            <div>
                <span>{sveglia.ora}:</span>
                <span>{sveglia.minuti}</span>
            </div>
        )
    }
    return(
        <>
            <input 
            type="number" placeholder="ora" 
            onChange={(e) => (setOra(e.target.value))}
            />

            <input 
            type="number" placeholder="minuti" 
            onChange={(e) => (setMinuti(e.target.value))}
            />

            <button onClick={onClick}>
                add Alarm
            </button>
            <ul>
                {alarmList.map(mostraSveglie)}
            </ul>
        </>
    )
}