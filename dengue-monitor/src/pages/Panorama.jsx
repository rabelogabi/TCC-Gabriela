import "../styles/panorama.css";

function Panorama() {
  return (
    <div className="panorama">

      <h1>Panorama Nacional da Dengue</h1>

      <div className="cards">

        <div className="card">
          <h3>Casos Confirmados</h3>
          <span>1.234.567</span>
        </div>

        <div className="card">
          <h3>Municípios Afetados</h3>
          <span>3.456</span>
        </div>

        <div className="card">
          <h3>Óbitos Registrados</h3>
          <span>1.234</span>
        </div>

      </div>
    </div>
  );
}

export default Panorama;