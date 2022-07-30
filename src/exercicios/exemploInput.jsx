import "./styles.css";
import { useState } from "react";

export default function App({ _pais = "claudinho das velocidade" }) {
  const [pais, setPais] = useState(_pais);
  return (
    <div clsassName="App">
      <div>
        <input
          type="radio"
          value="italia"
          name="pais"
          checked={pais === "italia"}
          onChange={(event) => setPais(event.target.value)}
        />
        <label htmlFor=""> Italia</label>
      </div>
      <div>
        <input
          type="radio"
          value="brasil"
          name="pais"
          checked={pais === "brasil"}
          onChange={(event) => setPais(event.target.value)}
        />
        <label htmlFor=""> Brasil</label>
      </div>
      <p>Pais Selecionado: {pais}</p>
      <h1>hello guys</h1>
    </div>
  );
}
