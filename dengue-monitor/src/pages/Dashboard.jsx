import { useState } from "react";

function Dashboard() {

  // Verifica se existe usuário logado
  const usuarioSalvo = localStorage.getItem("usuario");

  const usuario = usuarioSalvo
    ? JSON.parse(usuarioSalvo)
    : null;

  // Verifica o perfil
  const perfil = usuario?.perfil || "VISITANTE";

  const [regiao, setRegiao] = useState("Todas");
  const [ano, setAno] = useState("Todos");

  return (
    <main className="dashboard">

      <div className="container">

       
        {/* TÍTULO */}
        

        <h1>Dashboard Epidemiológico</h1>

        {usuario ? (
          <p>
            Olá, <strong>{usuario.nome}</strong>!
          </p>
        ) : (
          <p>
            Visualização pública dos dados epidemiológicos da dengue.
          </p>
        )}


        
        {/* INDICADORES PÚBLICOS */}
        

        <section className="cards">

          <div className="card">
            <h3>Casos de Dengue</h3>
            <strong>1.234.567</strong>
            <p>Casos registrados</p>
          </div>

          <div className="card">
            <h3>Óbitos</h3>
            <strong>1.234</strong>
            <p>Óbitos registrados</p>
          </div>

          <div className="card">
            <h3>Municípios Afetados</h3>
            <strong>3.456</strong>
            <p>Municípios com registros</p>
          </div>

          <div className="card">
            <h3>Incidência</h3>
            <strong>587,2</strong>
            <p>Casos por 100 mil habitantes</p>
          </div>

        </section>


        
        {/* VISITANTE */}
       

        {perfil === "VISITANTE" && (

          <section className="dashboard-publico">

            <h2>Informações epidemiológicas</h2>

            <p>
              Os dados apresentados nesta área são informações
              estatísticas públicas sobre a dengue no Brasil.
            </p>

            <div className="info-box">

              <h3>Acesso público</h3>

              <p>
                Para utilizar filtros avançados, mapas interativos
                e análises detalhadas, faça seu cadastro e acesse
                como usuário VIP.
              </p>

            </div>

          </section>

        )}


        
        {/* VIP */}
        

        {(perfil === "VIP" || perfil === "ADMIN") && (

          <section className="dashboard-completo">

            <h2>Análise detalhada</h2>

            <p>
              Utilize os filtros abaixo para consultar os dados
              epidemiológicos.
            </p>


            {/* FILTROS */}

            <div className="filtros">

              <div>
                <label>Região</label>

                <select
                  value={regiao}
                  onChange={(e) => setRegiao(e.target.value)}
                >

                  <option value="Todas">
                    Todas
                  </option>

                  <option value="Norte">
                    Norte
                  </option>

                  <option value="Nordeste">
                    Nordeste
                  </option>

                  <option value="Centro-Oeste">
                    Centro-Oeste
                  </option>

                  <option value="Sudeste">
                    Sudeste
                  </option>

                  <option value="Sul">
                    Sul
                  </option>

                </select>

              </div>


              <div>

                <label>Ano</label>

                <select
                  value={ano}
                  onChange={(e) => setAno(e.target.value)}
                >

                  <option value="Todos">
                    Todos
                  </option>

                  <option value="2023">
                    2023
                  </option>

                  <option value="2022">
                    2022
                  </option>

                  <option value="2021">
                    2021
                  </option>

                  <option value="2020">
                    2020
                  </option>

                </select>

              </div>

            </div>


            {/* RESULTADO DOS FILTROS */}

            <div className="resultado-filtro">

              <p>
                Região selecionada: <strong>{regiao}</strong>
              </p>

              <p>
                Ano selecionado: <strong>{ano}</strong>
              </p>

            </div>


            {/* ÁREA DOS GRÁFICOS */}

            <div className="graficos">

              <div className="grafico-placeholder">

                <h3>Evolução dos casos de dengue</h3>

                <p>
                  Gráfico interativo será inserido aqui.
                </p>

              </div>


              <div className="grafico-placeholder">

                <h3>Distribuição dos casos por região</h3>

                <p>
                  Gráfico interativo será inserido aqui.
                </p>

              </div>

            </div>

          </section>

        )}


        
        {/* ADMINISTRADOR */}
       

        {perfil === "ADMIN" && (

          <section className="area-admin">

            <h2>Área administrativa</h2>

            <p>
              Recursos exclusivos do administrador do sistema.
            </p>


            <div className="admin-cards">

              <div className="card">

                <h3>Gerenciamento de usuários</h3>

                <p>
                  Gerenciar usuários cadastrados e seus níveis
                  de acesso.
                </p>

                <button>
                  Gerenciar usuários
                </button>

              </div>


              <div className="card">

                <h3>Importação de dados</h3>

                <p>
                  Importar e atualizar dados epidemiológicos
                  provenientes do DATASUS.
                </p>

                <button>
                  Importar dados
                </button>

              </div>


              <div className="card">

                <h3>Dados climáticos</h3>

                <p>
                  Gerenciar a integração dos dados climáticos
                  utilizados pelo sistema.
                </p>

                <button>
                  Gerenciar dados
                </button>

              </div>

            </div>

          </section>

        )}

      </div>

    </main>
  );
}

export default Dashboard;