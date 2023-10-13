import { useState } from "react";

export default function Classifica(){
    const [giro1, setGiro1] = useState(['A','B'])
    const [giro2, setGiro2] = useState([])
    const [click, setClick] = useState(false)

    function Win(index){
        const current = giro1[index]
        setGiro2([current])
        setClick(!click)
    }
  

    return (
        <>
            <div>
                {giro1.map((i, index) => ( <span>{i}<Button visibile={click} Win={() => Win(index)}/></span>))}
            </div>
            <div>
            {giro2.map((i) => ( <span>{i}</span>))}
            </div>
        </>
    )
}

function Button({visibile, Win}){
    
    return (
        <>
            <button  disabled={visibile} onClick={Win}>Win</button>
        </>
    )
}

