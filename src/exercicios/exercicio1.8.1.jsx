import { useState } from "react";
const personagens = [
  "Jill Valentine",
  "Jack Baker",
  "Claire Redfield",
  "Ada Wong",
  "Chris Redfield",
  "Leon S. Kennedy",
  "Albert Wesker",
  "Lucas Baker"
];

const Personagens = () => {
  return (
    <div>
      <h3>Personagens de Resident Evil</h3>
      <ul>
        <Pesquisa />
      </ul>
    </div>
  );
};

function Pesquisa() {
  const [listaPersonagem, setLista] = useState(personagens);
  return (
    <div>
      <li>{listaPersonagem}</li>
      <button
        onClick={() =>
          setLista(
            personagens
              .filter((personagem) => personagem.includes("Redfield"))
              .map((personagem) => <li>{personagem}</li>)
          )
        }
      >
        campos vermelhos
      </button>
      <button
        onClick={() =>
          setLista(
            personagens
              .filter((personagem) => personagem.includes("Baker"))
              .map((personagem) => <li>{personagem}</li>)
          )
        }
      >
        bolos
      </button>
    </div>
  );
}

export default function App() {
  return (
    <div>
      <Personagens />
    </div>
  );
}