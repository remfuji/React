import { useState,useEffect } from "react";

function Hello() {
    const [hellos, setHellos] = useState([])
    function addHello() {
        let temp = hellos.slice(0)
        temp.push("hello")
        setHellos((temp) => {

        })
        
       
    }
    return (
        <>
        <ul>
            {hellos.map((h) => (<li>{h}</li>))}
        </ul>
        <button onClick={addHello}>click</button>
        </>
    )
}
export default Hello;