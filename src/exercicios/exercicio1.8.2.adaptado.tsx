import "./exercicio1.8.2.css";
import { useState } from "react";
import axios from "axios";
import React = require("react");

export default function App() {
  const [tarefas, setTarefas] = useState([]);
  const [inputTarefa, setInputTarefa] = useState("");

  const handleOnSubmit = (e) => e.preventDefault();

  const getEstilos = () => ({
    display: "flex",
    gap: 10
  });

  const handleOnClickAdicionar = () => {
    const novoArray = tarefas;
    novoArray.push(inputTarefa);
    setTarefas([...novoArray]);
    setInputTarefa("");
  };

  const buscarTodas = async () => {
    const url = "https://68jb68bukl.execute-api.sa-east-1.amazonaws.com/tasks";
    const resultado = await axios.get(url, { params: { user: "Melissa" } });
    return resultado.data.items;
  };

  React.useEffect(() => {
    buscarTodas().then((retornoTarefas) => {
      setTarefas(retornoTarefas);
    });
  }, []);

  const handleOnClick = (index) => {
    console.log(index);
  };

  return (
    <div className="container">
      <div className="conteudo">
        <h1 className="titulo">Tarefas</h1>
        <div>
          <form onSubmit={handleOnSubmit}>
            <div className="tarefa_box">
              <label htmlFor="tarefa">Tarefa</label>
              <div style={getEstilos()}>
                <input
                  id="tarefa"
                  name="tarefa"
                  value={inputTarefa}
                  onChange={(e) => setInputTarefa(e.target.value)}
                  placeholder="minha tarefa"
                />
                <button
                  className="btn btn_adicionar"
                  onClick={handleOnClickAdicionar}
                >
                  Adicionar
                </button>
              </div>
            </div>
          </form>
          <section>
            <ul>
              {tarefas.map((tarefa, index) => (
                <li>
                  <input
                    className="tarefa_conteudo"
                    disabled
                    value={tarefa.deion}
                  />
                  <button
                    className="btn btn_excluir"
                    onClick={() => handleOnClick(index)}
                  >
                    Excluir
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
