import "./exercicioFlexBox.css";

export default function App() {
  return (
    <div className="MainContainer">
      <div className="loginBody">
        <div className="loginBox">
          <h2>Entrar</h2>
          <form>
            <div className="inputBox">
              <input
                type="email"
                placeholder="Email ou Número de telefone"
              ></input>
            </div>
            <div className="inputBox">
              <input type="password" placeholder="Senha"></input>
            </div>

            <div>
              <button className="submit">Entrar</button>
            </div>
          </form>
        </div>

        <div className="support">
          <div className="remember">
            <span>
              <input className="checkBox" type="checkbox"></input>
              <span>Lembre-se de mim</span>
            </span>
          </div>
          <div class="help">
            <a href="#">Precisa de ajuda?</a>
          </div>
        </div>
        <div class="sign_up">
          <p>
            Novo por aqui? <a href="#">Assine agora.</a>
          </p>
        </div>
        <div class="terms">
          <p>
            Esta página é protegida pelo Google reCAPTCHA para garantir que você
            não é um robô. <a href="#">Saiba mais</a>
          </p>
        </div>
      </div>
    </div>
  );
}
