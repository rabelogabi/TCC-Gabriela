import { Link } from "react-router-dom";
import { Activity, Sun, User } from "lucide-react";

function Header() {
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
          <Sun size={18} />

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