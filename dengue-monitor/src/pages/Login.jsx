import "../styles/login.css";
import { useState } from "react";

function Login() {

  const [cadastro, setCadastro] = useState(false);

  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [confirmarSenha, setConfirmarSenha] = useState("");

  const [mensagem, setMensagem] = useState("");
  const [erro, setErro] = useState("");


  // =========================
  // CADASTRO
  // =========================

  async function realizarCadastro(event) {

    event.preventDefault();

    setMensagem("");
    setErro("");


    // Verificar senhas

    if (senha !== confirmarSenha) {

      setErro("As senhas não coincidem.");

      return;

    }


    try {

      const resposta = await fetch(
        "http://localhost:3001/cadastro",
        {
          method: "POST",

          headers: {
            "Content-Type": "application/json"
          },

          body: JSON.stringify({
            nome,
            email,
            senha
          })
        }
      );


      const resultado = await resposta.json();


      if (!resposta.ok) {

        setErro(
          resultado.mensagem ||
          "Erro ao cadastrar usuário."
        );

        return;

      }


      setMensagem(
        "Usuário cadastrado com sucesso!"
      );


      // Limpar campos

      setNome("");
      setEmail("");
      setSenha("");
      setConfirmarSenha("");


      // Voltar para login

      setTimeout(() => {

        setCadastro(false);
        setMensagem("");

      }, 1500);


    } catch (erro) {

      console.error(erro);

      setErro(
        "Não foi possível conectar ao servidor."
      );

    }

  }


  // =========================
  // LOGIN
  // =========================

  async function realizarLogin(event) {

    event.preventDefault();

    setMensagem("");
    setErro("");


    try {

      const resposta = await fetch(
        "http://localhost:3001/login",
        {
          method: "POST",

          headers: {
            "Content-Type": "application/json"
          },

          body: JSON.stringify({
            email,
            senha
          })
        }
      );


      const resultado = await resposta.json();


      if (!resposta.ok) {

        setErro(
          resultado.mensagem ||
          "E-mail ou senha inválidos."
        );

        return;

      }


      // =========================
      // SALVAR USUÁRIO
      // =========================

      localStorage.setItem(
        "usuario",
        JSON.stringify(resultado.usuario)
      );


      // Avisar o Header que o login aconteceu

      window.dispatchEvent(
        new Event("usuarioLogado")
      );


      setMensagem(
        "Login realizado com sucesso!"
      );


      // Ir para o Dashboard

      setTimeout(() => {

        window.location.href =
          "/dashboard";

      }, 500);


    } catch (erro) {

      console.error(erro);

      setErro(
        "Não foi possível conectar ao servidor."
      );

    }

  }


  return (

    <div className="login-container">

      <div className="login-box">


        {!cadastro ? (

          /* =========================
             LOGIN
          ========================= */

          <>

            <h2>
              Entrar
            </h2>


            <form
              onSubmit={realizarLogin}
            >

              <input
                type="email"
                placeholder="E-mail"
                value={email}
                onChange={(event) =>
                  setEmail(event.target.value)
                }
                required
              />


              <input
                type="password"
                placeholder="Senha"
                value={senha}
                onChange={(event) =>
                  setSenha(event.target.value)
                }
                required
              />


              <button type="submit">
                Entrar
              </button>

            </form>


            {mensagem && (

              <p className="mensagem-sucesso">
                {mensagem}
              </p>

            )}


            {erro && (

              <p className="mensagem-erro">
                {erro}
              </p>

            )}


            <p className="cadastro-link">

              Não possui conta?{" "}

              <span
                onClick={() => {

                  setCadastro(true);
                  setMensagem("");
                  setErro("");

                }}
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

          /* =========================
             CADASTRO
          ========================= */

          <>

            <h2>
              Cadastrar usuário
            </h2>


            <form
              onSubmit={realizarCadastro}
            >

              <input
                type="text"
                placeholder="Nome completo"
                value={nome}
                onChange={(event) =>
                  setNome(event.target.value)
                }
                required
              />


              <input
                type="email"
                placeholder="E-mail"
                value={email}
                onChange={(event) =>
                  setEmail(event.target.value)
                }
                required
              />


              <input
                type="password"
                placeholder="Senha"
                value={senha}
                onChange={(event) =>
                  setSenha(event.target.value)
                }
                required
              />


              <input
                type="password"
                placeholder="Confirmar senha"
                value={confirmarSenha}
                onChange={(event) =>
                  setConfirmarSenha(event.target.value)
                }
                required
              />


              <button type="submit">
                Cadastrar
              </button>

            </form>


            {mensagem && (

              <p className="mensagem-sucesso">
                {mensagem}
              </p>

            )}


            {erro && (

              <p className="mensagem-erro">
                {erro}
              </p>

            )}


            <p className="cadastro-link">

              Já possui conta?{" "}

              <span
                onClick={() => {

                  setCadastro(false);
                  setMensagem("");
                  setErro("");

                }}
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