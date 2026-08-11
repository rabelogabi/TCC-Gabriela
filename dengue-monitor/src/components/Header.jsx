import { Link } from "react-router-dom";
import { Activity, Sun, Moon, User } from "lucide-react";
import { useState, useEffect } from "react";

function Header() {

  const [modoNoturno, setModoNoturno] = useState(() => {
    return localStorage.getItem("modoNoturno") === "true";
  });

  useEffect(() => {
    if (modoNoturno) {
      document.body.classList.add("modo-noturno");
    } else {
      document.body.classList.remove("modo-noturno");
    }

    localStorage.setItem("modoNoturno", modoNoturno);
  }, [modoNoturno]);

  function alternarTema() {
    setModoNoturno(!modoNoturno);
  }

  return (
    <header>
      <div className="container">

        <div className="logo">
          <Activity size={30} color="#1b7f5a" />
          <span>DengueMonitor</span>
        </div>

        <nav>
          <Link to="/">Início</Link>
          <Link to="/dashboard">Dashboard</Link>
          <Link to="/mapas">Mapas</Link>
          <Link to="/dados">Dados</Link>
          <Link to="/sobre">Sobre</Link>
        </nav>

        <div className="menu-right">

          {/* BOTÃO DE TEMA */}
          <button
            className="botao-tema"
            onClick={alternarTema}
            title={modoNoturno ? "Modo claro" : "Modo noturno"}
          >
            {modoNoturno ? (
              <Moon size={20} />
            ) : (
              <Sun size={20} />
            )}
          </button>

          <Link className="btn-login" to="/login">
            <User size={16} />
            Entrar
          </Link>

        </div>

      </div>
    </header>
  );
}

export default Header;