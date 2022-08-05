import "./exemplonetflix.css";

export default function App() {
  return (
    <div className="main-content">
      <img src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg" />
      <div className="loginBody">
        <div className="loginBox">
          <h2>Entrar</h2>
          <form>
            <input
              type="email"
              placeholder="Email ou Número de telefone"
            ></input>
            <input type="password" placeholder="Senha"></input>
            <button className="submit">Entrar</button>
          </form>
        </div>
      </div>
    </div>
  );
}
