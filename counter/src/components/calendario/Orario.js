import React, { useState } from 'react';

function Orario({hour}) {
    
    const [list,setList] = useState('')
 
 function handleClick(){
    const task = prompt('add task')
    setList(task)
 }

 function handleCancellaClick(index) {
    const newList = [...list];
    newList.splice(index);
    setList(newList);
  }

  return (
    <>
        <div className='ora'>
     
          <div >
            <button onClick={() => handleClick(hour)}>{hour}</button>
          </div>
           <input value={list} type="text" readOnly/>
           <button onClick={handleCancellaClick}>X</button>
      
           
        </div>
       
    </>
  )
}

export default Orario;
