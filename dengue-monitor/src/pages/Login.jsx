import "../styles/login.css";
import { useState } from "react";

function Login() {

  const [cadastro, setCadastro] = useState(false);

  return (
    <div className="login-container">
      <div className="login-box">

        {!cadastro ? (
          <>
            <h2>Entrar</h2>

            <input type="email" placeholder="E-mail" />
            <input type="password" placeholder="Senha" />

            <button>Entrar</button>

            <p className="cadastro-link">
              Não possui conta?{" "}
              <span 
                onClick={() => setCadastro(true)} 
                style={{cursor: "pointer", color: "#1b7f5a", fontWeight: "bold"}}
              >
                Cadastrar usuário
              </span>
            </p>
          </>
        ) : (
          <>
            <h2>Cadastrar usuário</h2>

            <input type="text" placeholder="Nome completo" />
            <input type="email" placeholder="E-mail" />
            <input type="password" placeholder="Senha" />
            <input type="password" placeholder="Confirmar senha" />

            <button>Cadastrar</button>

            <p className="cadastro-link">
              Já possui conta?{" "}
              <span 
                onClick={() => setCadastro(false)} 
                style={{cursor: "pointer", color: "#1b7f5a", fontWeight: "bold"}}
              >
                Voltar para login
              </span>
            </p>
          </>
        )}

      </div>
    </div>
  );
}

export default Login;