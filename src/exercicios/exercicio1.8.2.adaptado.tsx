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

  const adcionar = async (name) => {
    const url = "https://68jb68bukl.execute-api.sa-east-1.amazonaws.com/tasks";
    const resultado = await axios.post(url, {
      params: {
        description: name,
        user: "Daniel"
      }
    });
    buscarTodas().then((retornoTarefas) => {
      setTarefas(retornoTarefas);
    });
  };

  const buscarTodas = async () => {
    const url = "https://68jb68bukl.execute-api.sa-east-1.amazonaws.com/tasks";
    const resultado = await axios.get(url, { params: { user: "Daniel" } });
    return resultado.data.items;
  };

  const excluir = async (id) => {
    const url = `https://68jb68bukl.execute-api.sa-east-1.amazonaws.com/tasks/${id}`;
    const resultado = await axios.delete(url);
    buscarTodas().then((retornoTarefas) => {
      setTarefas(retornoTarefas);
    });
  };

  React.useEffect(() => {
    buscarTodas().then((retornoTarefas) => {
      setTarefas(retornoTarefas);
    });
  }, []);

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
                  onClick={() => adcionar(tarefa.name)}
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
                    value={tarefa.description}
                  />
                  <button
                    className="btn btn_excluir"
                    onClick={() => excluir(tarefa.id)}
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
