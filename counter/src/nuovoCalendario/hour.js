import { useState } from "react";

function Hour({ ora }) {
  const [text, setText] = useState('');
  const [isBtnVisible, setIsBtnVisible] = useState(false);

  function handleOnClick() {
    const task = prompt('Add event');
    setText([...text,task]);
  }

  return (
    <div className="hour-container" onClick={() => setIsBtnVisible(!isBtnVisible)}>
      <div className="hour-and-btn">
        <div>{ora}</div>
        <div className="add-delete-event" style={{ display: isBtnVisible ? 'flex' : 'none' }}>
          <button onClick={handleOnClick}>+</button>
          <button onClick={() => setText('')}>x</button>
        </div>
      </div>
      <div className="event">{text}</div>
    </div>
  );
}

export default Hour;
