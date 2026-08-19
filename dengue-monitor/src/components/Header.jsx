import { Link, useNavigate } from "react-router-dom";
import {
  Activity,
  Sun,
  Moon,
  User,
  LogOut
} from "lucide-react";
import { useState, useEffect } from "react";

function Header() {

  const navigate = useNavigate();

  // Verifica se existe usuário salvo
  const [usuario, setUsuario] = useState(() => {

    const usuarioSalvo = localStorage.getItem("usuario");

    if (usuarioSalvo) {
      return JSON.parse(usuarioSalvo);
    }

    return null;
  });


  // Verifica se o modo noturno estava ativado
  const [modoNoturno, setModoNoturno] = useState(() => {

    return localStorage.getItem("modoNoturno") === "true";

  });


  // =========================
  // MODO NOTURNO
  // =========================

  useEffect(() => {

    if (modoNoturno) {

      document.body.classList.add("modo-noturno");

    } else {

      document.body.classList.remove("modo-noturno");

    }

    localStorage.setItem(
      "modoNoturno",
      modoNoturno
    );

  }, [modoNoturno]);


  // =========================
  // ATUALIZAR USUÁRIO
  // =========================

  useEffect(() => {

    function atualizarUsuario() {

      const usuarioSalvo =
        localStorage.getItem("usuario");

      if (usuarioSalvo) {

        setUsuario(
          JSON.parse(usuarioSalvo)
        );

      } else {

        setUsuario(null);

      }

    }

    window.addEventListener(
      "usuarioLogado",
      atualizarUsuario
    );

    return () => {

      window.removeEventListener(
        "usuarioLogado",
        atualizarUsuario
      );

    };

  }, []);


  // =========================
  // SAIR
  // =========================

  function sair() {

    localStorage.removeItem("usuario");

    setUsuario(null);

    navigate("/");

  }


  // =========================
  // ALTERAR TEMA
  // =========================

  function alternarTema() {

    setModoNoturno(
      !modoNoturno
    );

  }


  return (

    <header>

      <div className="container">


        {/* LOGO */}

        <div className="logo">

          <Activity
            size={30}
            color="#1b7f5a"
          />

          <span>
            DengueMonitor
          </span>

        </div>


        {/* MENU */}

        <nav>

          <Link to="/">
            Início
          </Link>

          <Link to="/dashboard">
            Dashboard
          </Link>

          <Link to="/mapas">
            Mapas
          </Link>

          <Link to="/dados">
            Dados
          </Link>

          <Link to="/sobre">
            Sobre
          </Link>

        </nav>


        {/* MENU DIREITO */}

        <div className="menu-right">


          {/* BOTÃO MODO NOTURNO */}

          <button
            className="botao-tema"
            onClick={alternarTema}
            title={
              modoNoturno
                ? "Ativar modo claro"
                : "Ativar modo noturno"
            }
          >

            {modoNoturno ? (

              <Moon size={20} />

            ) : (

              <Sun size={20} />

            )}

          </button>


          {/* USUÁRIO LOGADO */}

          {usuario ? (

            <>

              <Link
                className="btn-login"
                to="/perfil"
              >

                <User size={16} />

                {usuario.nome}

              </Link>


              <button
                className="btn-sair"
                onClick={sair}
              >

                <LogOut size={16} />

                Sair

              </button>

            </>

          ) : (

            /* USUÁRIO NÃO LOGADO */

            <Link
              className="btn-login"
              to="/login"
            >

              <User size={16} />

              Entrar

            </Link>

          )}

        </div>

      </div>

    </header>

  );

}

export default Header;