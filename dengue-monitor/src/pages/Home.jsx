import { Link } from "react-router-dom";
import { Database, Map, ShieldCheck, ArrowRight } from "lucide-react";

function Home() {
  return (
    <main className="home">
      <div className="container">

        <section className="hero">

          <h1>
            Sistema de Monitoramento
            <br />
            da <span>Dengue</span> no Brasil
          </h1>

          <p>
            Uma plataforma tecnológica para análise epidemiológica e controle
            da dengue, integrando dados oficiais com visualizações interativas
            e georreferenciamento.
          </p>

          <div className="buttons">

            <Link to="/login">
              <button className="btn-primary">
                Acessar dashboard
                <ArrowRight size={18} />
              </button>
            </Link>

            <button className="btn-secondary">
              Ver dados
              <ArrowRight size={18} />
            </button>

          </div>

        </section>

        <section className="cards">

          <div className="card">

            <div className="icon-circle">
              <Database size={34} />
            </div>

            <h3>Análise de Dados</h3>

            <p>
              Visualizações interativas e análises estatísticas
              dos casos de dengue.
            </p>

          </div>

          <div className="card">

            <div className="icon-circle">
              <Map size={34} />
            </div>

            <h3>Georreferenciamento</h3>

            <p>
              Mapas interativos com distribuição espacial
              dos casos por região.
            </p>

          </div>

          <div className="card">

            <div className="icon-circle">
              <ShieldCheck size={34} />
            </div>

            <h3>Dados Oficiais</h3>

            <p>
              Integração com DATASUS e outras fontes
              governamentais confiáveis.
            </p>

          </div>

        </section>

      </div>
    </main>
  );
}

export default Home;