import { Link } from "react-router-dom";

function Header() {
  return (
    <header>
      <div className="container">

        <h2>DengueMonitor</h2>

        <nav>
          <Link to="/panorama">Dashboard</Link>
          <Link to="/mapas">Mapas</Link>
          <Link to="/dados">Dados</Link>
          <Link to="/sobre">Sobre</Link>
          <Link to="/login">Entrar</Link>
        </nav>

      </div>
    </header>
  );
}

export default Header;