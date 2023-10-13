import { useState, useEffect } from "react";

//2 campi input
//1 output

//output viene mostrato se entrambi gli input sono dei numeri e se tutti e
//due gli input hanno dei numeri

export default function Divisione() {
  const [input1, setInput1] = useState(null);
  const [input2, setInput2] = useState(null);
  const [sum, setSum] = useState(null);

  useEffect(() => {
    if (input1 != null && input2 != null) {
      setSum(Number(input1) / Number(input2));
    }
  }, [input1, input2]);

  function zeroNotAllowed(e) {
    console.log(e.target.value);
    if (e.target.value == 0) {
      setInput2(null);
    } else {
      setInput2(e.target.value);
    }
  }

  return (
    <div className="input-number">
      <input type="number" onChange={(e) => setInput1(e.target.value)} />
      <input type="number" onChange={zeroNotAllowed} />
      <div>{sum}</div>
    </div>
  );
}
