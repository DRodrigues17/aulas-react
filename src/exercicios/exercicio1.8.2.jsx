import "./exercicio1.8.2.css";
import { useState } from "react";

export default function App() {
  const [tarefas, setTarefas] = useState(["conteudo"]);
  const [inputTarefa, setInputTarefa] = useState("");

  const handleOnSubmit = (e) => e.preventDefault();
  const adcionarTarefa = () => {
    const novoArray = tarefas;
    novoArray.push(inputTarefa);
    setTarefas(novoArray);
    setInputTarefa([""]);
  };
  const excluirTarefa = (index) => {
    setTarefas(tarefas.filter((_, talDoIndex) => talDoIndex !== index));
  };

  return (
    <div className="container">
      <div className="conteudo">
        <h1 className="titulo">Tarefas</h1>
        <div>
          <form onSubmit={handleOnSubmit}>
            <div className="tarefa_box">
              <label htmlFor="tarefa">Tarefa</label>
              <div
                style={{
                  display: "flex",
                  gap: 10
                }}
              >
                <input
                  id="tarefa"
                  name="tarefa"
                  value={inputTarefa}
                  onChange={(e) => setInputTarefa(e.target.value)}
                  placeholder="tarefa generica"
                />
                <button className="btn botao_adcionar" onClick={adcionarTarefa}>
                  adcionar
                </button>
              </div>
            </div>
          </form>
          <section>
            <ul>
              {tarefas.map((tarefa, index) => (
                <li>
                  <input disabled className="tarefa_conteudo" value={tarefa} />
                  <button
                    className="btn botao_excluir"
                    onClick={excluirTarefa(index)}
                  >
                    excluir
                  </button>
                </li>
              ))}
            </ul>
          </section>
        </div>
      </div>
    </div>
  );
}