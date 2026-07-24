
function Home() {
  return (
    <main className="home">
      <div className="container">
        <h1>Sistema de Monitoramento da Dengue no Brasil</h1>

        <p>
          Uma plataforma tecnológica para análise epidemiológica e controle
          da dengue, integrando dados oficiais com visualizações interativas
          e georreferenciamento.
        </p>

        <div className="buttons">
          <button className="btn-primary">Acessar dashboard</button>
          <button className="btn-secondary">Ver dados</button>
        </div>

        <section className="cards">
          <div className="card">
            <h3>Análise de Dados</h3>
            <p>
              Visualizações interativas e análises estatísticas dos casos de dengue.
            </p>
          </div>

          <div className="card">
            <h3>Georreferenciamento</h3>
            <p>
              Mapas interativos com distribuição espacial dos casos por região.
            </p>
          </div>

          <div className="card">
            <h3>Dados Oficiais</h3>
            <p>
              Integração com DATASUS e outras fontes governamentais confiáveis.
            </p>
          </div>
        </section>
      </div>
    </main>
  );
}

export default Home;
