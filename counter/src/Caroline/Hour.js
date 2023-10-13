import { useState } from 'react'


export const Hour = ({ ora }) => {
    const [list, setList] = useState('')

    function handleCancellaClick(index) {
        const newList = [...list];
        newList.splice(index);
        setList(newList);
    }

    function handleOnClick() {
        const task = prompt(`Add task`)
        //const newTask = [...list, task]
        setList(task)
    }

    return (
       
        <div className="ora">
            {ora}
            <div className='btn-event'>
            <button onClick={handleOnClick}>nuovo evento</button>
            
            </div>
            <p>{list}</p>
            <button onClick={(e) => handleCancellaClick(e)}>cancella</button>
           
        </div>
        
       
    )
}
