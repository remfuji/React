import React, { useState } from 'react';

function Prenotazione() {
  const [nome, setNome] = useState('');
  const [orario, setOrario] = useState('');
  const [prenotazioni, setPrenotazioni] = useState([]);
  const [prenotazioniAccettate, setPrenotazioniAccettate] = useState([]);
  const [tavoliDisponibili, setTavoliDisponibili] = useState(['Tavolo 1', 'Tavolo 2', 'Tavolo 3']);
  
  function handleNomeChange(event) {
    setNome(event.target.value);
  }

  function handleOrarioChange(event) {
    setOrario(event.target.value);
  }

  function handlePrenotaClick() {
    if (nome && orario) {
      setPrenotazioni([...prenotazioni, { nome, orario }]);
      setNome('');
      setOrario('');
    }
  }

  function handleCancellaClick(index) {
    const newPrenotazioni = [...prenotazioni];
    newPrenotazioni.splice(index, 1);
    setPrenotazioni(newPrenotazioni);
  }

  function handleAccettaClick(index) {
    const prenotazioneAccettata = prenotazioni[index];

    
    if (tavoliDisponibili.length > 0) {
      const tavoloAssegnato = tavoliDisponibili.pop(); 
      setPrenotazioniAccettate([...prenotazioniAccettate, { ...prenotazioneAccettata, tavolo: tavoloAssegnato }]);

      const newPrenotazioni = [...prenotazioni];
      newPrenotazioni.splice(index, 1);
      setPrenotazioni(newPrenotazioni);

      setTavoliDisponibili([...tavoliDisponibili]);
    }else{
      alert('Nessun tavolo disponibile.');
    }
  }

  return (
    <>
      <div className="grid-container">
        <div className="box">
          <h4>Prenotazione</h4>
          <div className="pre-input">
            <label>Nome:</label>
            <input className="nome-input" type="text" value={nome} onChange={handleNomeChange} />
            <label>Orario:</label>
            <input className="orario-input" type="time" value={orario} onChange={handleOrarioChange} />
          </div>
          <div className="btn-pre">
            <button onClick={handlePrenotaClick}>Prenota</button>
          </div>
        </div>
        <div className="box">
        <h4>Prenotazioni Accettate</h4>
          <div>
            {prenotazioniAccettate.map((prenotazione, index) => (
              <div key={index}>
                <div className="pre-box">
                  Nome: {prenotazione.nome}
                </div>
                <div>
                  Orario: {prenotazione.orario}
                </div>
                <div>
                  Tavolo: {prenotazione.tavolo}
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="box">
          <h4>Prenotazioni:</h4>
          <div>
            {prenotazioni.map((prenotazione, index) => (
              <div className="pre-box" key={index}>
                <div className="input-pre">
                  <div value={nome}>
                    Nome: {prenotazione.nome}
                  </div>
                  <div value={orario}>
                    Orario: {prenotazione.orario}
                  </div>
                </div>
                <div className="btn-pre canc-acc">
                  <button onClick={() => handleCancellaClick(index)}>X</button>
                  <button onClick={() => handleAccettaClick(index)}>V</button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default Prenotazione;

{/* <>
    <div className="container">
      <div className="container-prenotazioni">
        <div className="prenotazione">
          <h4>Prenotazione</h4>
          <div>
            <label>Nome:</label>
            <input className="nome-input" type="text" value={nome} onChange={handleNomeChange} />
          </div>

          <div>
            <label>Orario:</label>
            <input className="orario-input" type="time" value={orario} onChange={handleOrarioChange} />
          </div>
          <div className="btn-prenotazione">
            <button onClick={handlePrenotaClick}>Prenota</button>
          </div>
        </div>
        <div className="lista-prenotazioni">
          <h3>Prenotazioni:</h3>
          <div>
            {prenotazioni.map((prenotazione, index) => (
              <div key={index}>
                Nome: {prenotazione.nome}, Orario: {prenotazione.orario}
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="prenotazioni-accettate">
        <h3>prenot</h3>
      </div>
      </div>
    </> */}