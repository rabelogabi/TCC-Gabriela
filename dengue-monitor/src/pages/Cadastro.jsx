import "../styles/login.css";
import { Link } from "react-router-dom";

function Login() {
  return (
    <div className="login-container">
      <div className="login-box">
        <h2>Entrar</h2>

        <input type="email" placeholder="E-mail" />
        <input type="password" placeholder="Senha" />

        <button>Entrar</button>

        <p className="cadastro-link">
          Não possui conta? <Link to="/cadastro">Cadastrar usuário</Link>
        </p>

      </div>
    </div>
  );
}

export default Login;