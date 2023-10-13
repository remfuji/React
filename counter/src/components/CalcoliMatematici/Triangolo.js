import { useState, useEffect } from "react";
//calcolare l'area

export default function Triangolo() {
  const [base, setBase] = useState("");
  const [altezza, setAltezza] = useState("");
  const [risultato, setRisultato] = useState("");

  useEffect(() => {
    if (parseInt(base) <= 0 && parseInt(altezza) <= 0) {
      return;
    } else {
      setRisultato((parseInt(base) * parseInt(altezza)) / 2);
    }
  }, [base, altezza]);

  return (
    <>
      <input type="number" onChange={(e) => setBase(e.target.value)} />
      <input type="number" onChange={(e) => setAltezza(e.target.value)} />
      <div>{risultato}</div>
    </>
  );
}
