import "../styles/login.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function Login() {
  const navigate = useNavigate();

  // Controla se está mostrando Login ou Cadastro
  const [cadastro, setCadastro] = useState(false);

  // Dados do Login
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");

  // Dados do Cadastro
  const [nome, setNome] = useState("");
  const [emailCadastro, setEmailCadastro] = useState("");
  const [senhaCadastro, setSenhaCadastro] = useState("");
  const [confirmarSenha, setConfirmarSenha] = useState("");

  // ============================
  // FUNÇÃO DE LOGIN
  // ============================

  async function fazerLogin() {
    try {
      const resposta = await axios.post(
        "http://localhost:3001/login",
        {
          email: email,
          senha: senha
        }
      );

      // Guarda os dados do usuário no navegador
      localStorage.setItem(
        "usuario",
        JSON.stringify(resposta.data.usuario)
      );

      alert(
        "Bem-vindo, " + resposta.data.usuario.nome + "!"
      );

      // Vai para o Dashboard
      navigate("/dashboard");

    } catch (erro) {
      console.error(erro);

      alert(
        erro.response?.data?.mensagem ||
        "Erro ao realizar login."
      );
    }
  }

  // ============================
  // FUNÇÃO DE CADASTRO
  // ============================

  async function cadastrarUsuario() {
    // Verifica se as senhas são iguais
    if (senhaCadastro !== confirmarSenha) {
      alert("As senhas não coincidem.");
      return;
    }

    // Verifica campos vazios
    if (!nome || !emailCadastro || !senhaCadastro) {
      alert("Preencha todos os campos.");
      return;
    }

    try {
      const resposta = await axios.post(
        "http://localhost:3001/cadastro",
        {
          nome: nome,
          email: emailCadastro,
          senha: senhaCadastro
        }
      );

      alert(resposta.data.mensagem);

      // Volta para a tela de login
      setCadastro(false);

      // Limpa os campos
      setNome("");
      setEmailCadastro("");
      setSenhaCadastro("");
      setConfirmarSenha("");

    } catch (erro) {
      console.error(erro);

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

          // =================================
          // TELA DE LOGIN
          // =================================

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

          // =================================
          // TELA DE CADASTRO
          // =================================

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
              onChange={(e) =>
                setEmailCadastro(e.target.value)
              }
            />

            <input
              type="password"
              placeholder="Senha"
              value={senhaCadastro}
              onChange={(e) =>
                setSenhaCadastro(e.target.value)
              }
            />

            <input
              type="password"
              placeholder="Confirmar senha"
              value={confirmarSenha}
              onChange={(e) =>
                setConfirmarSenha(e.target.value)
              }
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