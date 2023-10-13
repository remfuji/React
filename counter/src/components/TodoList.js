import { useState } from "react";

function TodoList() {
  const [input, setInput] = useState("");
  const [list, setList] = useState([]);
  const [listChecked, setListChecked] = useState([])
  const tempFlagged = list.filter((toDo) => toDo.checked)
  const tempNonFlagged = list.filter((toDo => !toDo.checked))
  setList(tempFlagged)
  setListChecked(tempNonFlagged)
 console.log(list)
  return (
    <>
      <Controls
        input={input}
        list={list}
        setInput={setInput}
        setList={setList}
      />
      <ToDoElements list={list} listChecked={listChecked} />
    </>
  );
}
function Controls({ input, list, setInput, setList }) {
  function handleClick() {
    let temp = JSON.parse(JSON.stringify(list));
    temp.push({ text: input, checked: false });
    setList(temp);
    setInput('')
  }

  return (
    <>
      <input
        type="text"
        onChange={(e) => {
          setInput(e.target.value);
        }}
        value={input}
      />
      <button onClick={handleClick}> add</button>
    </>
  );
}

function ToDoElements({ list, listChecked}) {
  return (
    <>
     {
      list.map((e,i) => <ToDoElement key = {i} element={e} />)
     }
     {
      listChecked.map(e => <ToDoElement element={e} />)
     }
    </>
  );
}
function ToDoElement({element}) {
  const [color, setColor] = useState('black')
  
  return (
    <li>
      <input type="checkbox" onChange={(e) => {
        setColor(e.target.checked ? 'grey' : 'black' )
        element.checked = e.target.checked
        
       }
      } 
        />
      <span style={{color: color}}>{element.text}</span>
    </li>
  );
}

{/* spostare l'ultimo elemento flaggato in basso alla lista */}
export default TodoList;
