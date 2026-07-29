import "../styles/login.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function Login() {

  const navigate = useNavigate();

  const [cadastro, setCadastro] = useState(false);

  // LOGIN
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");

  // CADASTRO
  const [nome, setNome] = useState("");
  const [emailCadastro, setEmailCadastro] = useState("");
  const [senhaCadastro, setSenhaCadastro] = useState("");
  const [confirmarSenha, setConfirmarSenha] = useState("");

  // ============================
  // LOGIN
  // ============================

  async function fazerLogin() {

    try {

      const resposta = await axios.post(
        "http://localhost:3001/login",
        {
          email,
          senha
        }
      );

      alert(resposta.data.mensagem);

      console.log(resposta.data.usuario);

      navigate("/dashboard");

    } catch (erro) {

      alert(
        erro.response?.data?.mensagem ||
        "Erro ao realizar login."
      );

    }

  }

  // ============================
  // CADASTRO
  // ============================

  async function cadastrarUsuario() {

    if (senhaCadastro !== confirmarSenha) {
      alert("As senhas não coincidem.");
      return;
    }

    try {

      const resposta = await axios.post(
        "http://localhost:3001/cadastro",
        {
          nome,
          email: emailCadastro,
          senha: senhaCadastro
        }
      );

      alert(resposta.data.mensagem);

      setCadastro(false);

      setNome("");
      setEmailCadastro("");
      setSenhaCadastro("");
      setConfirmarSenha("");

    } catch (erro) {

      alert(
        erro.response?.data?.mensagem ||
        "Erro ao cadastrar usuário."
      );

    }

  }

  return (

    <div className="login-container">

      <div className="login-box">

        {!cadastro ? (

          <>

            <h2>Entrar</h2>

            <input
              type="email"
              placeholder="E-mail"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />

            <input
              type="password"
              placeholder="Senha"
              value={senha}
              onChange={(e) => setSenha(e.target.value)}
            />

            <button onClick={fazerLogin}>
              Entrar
            </button>

            <p className="cadastro-link">

              Não possui conta?{" "}

              <span
                onClick={() => setCadastro(true)}
                style={{
                  cursor: "pointer",
                  color: "#1b7f5a",
                  fontWeight: "bold"
                }}
              >
                Cadastrar usuário
              </span>

            </p>

          </>

        ) : (

          <>

            <h2>Cadastrar usuário</h2>

            <input
              type="text"
              placeholder="Nome completo"
              value={nome}
              onChange={(e) => setNome(e.target.value)}
            />

            <input
              type="email"
              placeholder="E-mail"
              value={emailCadastro}
              onChange={(e) => setEmailCadastro(e.target.value)}
            />

            <input
              type="password"
              placeholder="Senha"
              value={senhaCadastro}
              onChange={(e) => setSenhaCadastro(e.target.value)}
            />

            <input
              type="password"
              placeholder="Confirmar senha"
              value={confirmarSenha}
              onChange={(e) => setConfirmarSenha(e.target.value)}
            />

            <button onClick={cadastrarUsuario}>
              Cadastrar
            </button>

            <p className="cadastro-link">

              Já possui conta?{" "}

              <span
                onClick={() => setCadastro(false)}
                style={{
                  cursor: "pointer",
                  color: "#1b7f5a",
                  fontWeight: "bold"
                }}
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