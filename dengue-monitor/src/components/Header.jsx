import { Link, useNavigate } from "react-router-dom";
import { Activity, Sun, User, LogOut } from "lucide-react";

function Header() {

  const navigate = useNavigate();

  // Verifica se existe usuário logado
  const usuarioSalvo = localStorage.getItem("usuario");

  const usuario = usuarioSalvo
    ? JSON.parse(usuarioSalvo)
    : null;


  // Função para sair
  function sair() {

    // Remove o usuário do navegador
    localStorage.removeItem("usuario");

    // Volta para a página inicial
    navigate("/");

    // Atualiza a página para atualizar o menu
    window.location.reload();
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


        
        {/* LADO DIREITO */}
        

        <div className="menu-right">

          <Sun size={18} />


         
          {/* USUÁRIO NÃO LOGADO */}
          

          {!usuario && (

            <Link
              className="btn-login"
              to="/login"
            >

              <User size={16} />

              Entrar

            </Link>

          )}


         
          {/* USUÁRIO LOGADO */}
          

          {usuario && (

            <>

              <span className="usuario-nome">

                <User size={16} />

                {usuario.nome}

              </span>


              <button
                className="btn-logout"
                onClick={sair}
              >

                <LogOut size={16} />

                Sair

              </button>

            </>

          )}

        </div>

      </div>

    </header>
  );
}

export default Header;