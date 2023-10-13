import { useState } from "react";

function Chat() {
 
  const [user, setUser] = useState('')
  const [text, setText] = useState('')
  const [arr, setArr] = useState([])
  let temp = arr.slice(0)

  function onClick(){
    temp.push({user : user, text : text})
    setArr(temp)
    }
  return (
    <>
      
        <div className="div-btn">
          <div>
        <input onChange={(e) => {setUser(e.target.value)}} value={user}/>
        <input onChange={(e) => {setText(e.target.value)}} value={text}/>
        </div>
       
        <button  onClick={onClick}>send</button>
        </div>
        <Messages messages={temp} />
      
    </>
  );
}

function Messages({ messages }) {
  return (
    <>
      {messages.map(message => {
       
        return(
          <div>
            <bold>{message.user} dice: </bold>
            <span>'{message.text}'</span>
          </div>
        )
      })}
    </>
  );
}
export default Chat;
