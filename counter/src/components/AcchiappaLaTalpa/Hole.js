import { useState, useEffect } from "react";
    // useEffect(() => {
    //     setInterval(() => {
    //         setShowTalpa(!showTalpa)
    //         console.log(showTalpa)
    //     }, 1000);
    // }, [])
    // useEffect(() => {
    //     const interval = setInterval(() => {
    //         setShowMole(!showMole)
    //     }, 3000);
    //     return () => clearInterval(interval)
    // }, [showMole])

export default function Hole({setScore}){
    let numCasuale = Math.random()
    let res = true
  
    if (numCasuale < 0.5){
        res = false
    }

    const [showTalpa, setShowTalpa] = useState(res)
   
    function click(){
        if (showTalpa){
            setScore((score) => score + 10)//score e' lo stato precedente di setscore
            setShowTalpa(false)
        }
    }
  
    return(
        <>
            <div className="hole" onClick={click}>
                {showTalpa && <div className="talpa">T</div>}
            </div>
        </>
    )
}
