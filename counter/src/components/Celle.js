import React, { useState } from "react";

export default function Celle() {
  const [inputText, setInputText] = useState("");

  const handleInputChange = (event) => {   //Questa funzione viene chiamata ogni volta che il contenuto 
    setInputText(event.target.value);      //dell'input viene modificato. Prende l'evento e imposta il valore 
  };                                       //dell'input (ottenuto da event.target.value) come nuovo valore dello stato inputText.

  return (
    <div>
      <input type="text" value={inputText} onChange={handleInputChange} />

      <h3>Contenuto : {inputText}</h3>
      <h3>Count : </h3>
    </div>
  );
}
