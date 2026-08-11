import {
  Database,
  Map,
  BarChart3,
  CloudSun,
  Search,
  Users,
  ShieldCheck,
  Activity,
  Code2,
  PieChart,
  UserRound,
  GraduationCap,
  Building2,
} from "lucide-react";

import "../styles/sobre.css";

function Sobre() {
  return (
    <main className="sobre">

      <section className="sobre-intro">

        <h1>
          Sistema de Análise e Monitoramento
          <br />
          da Dengue no Brasil
        </h1>

        <p>
          Uma abordagem tecnológica para o controle epidemiológico através
          de visualização de dados, análise geoespacial e integração climática
        </p>

      </section>


      <section className="projeto-card">

        <h2>Sobre o projeto</h2>

        <p className="curso">
          Trabalho de Conclusão de Curso - Sistemas de Informação
        </p>

        <div className="dados-projeto">

          <div>
            <strong>Proponente</strong>
            <p>Gabriela Rabelo de Melo</p>
          </div>

          <div>
            <strong>Orientadora</strong>
            <p>Prof. Dra. Jéssica Bassani de Oliveira</p>
          </div>

          <div>
            <strong>Instituição</strong>
            <p>Universidade Estadual de Mato Grosso do Sul</p>
          </div>

          <div>
            <strong>Ano</strong>
            <p>2025</p>
          </div>

        </div>

        <div className="objetivo">

          <strong>Objetivo Geral</strong>

          <p>
            Desenvolver uma plataforma web informativa complementar ao painel
            de arbovirose do governo, voltada para a análise histórica e o
            monitoramento dos casos de Dengue no Brasil, a partir da utilização
            de dados provenientes dos sistemas oficiais de saúde, com o intuito
            de facilitar a visualização de informações epidemiológicas para a
            população.
          </p>

        </div>

      </section>

<section className="funcionalidades">

  <h2>Funcionalidades Principais</h2>

  <div className="funcionalidades-grid">

    <div className="funcionalidade-card">
      <Database className="icone-dados" />

      <div>
        <h3>Importação de Dados</h3>

        <p>
          Integração com dados oficiais de saúde para atualização
          das informações epidemiológicas.
        </p>
      </div>
    </div>


    <div className="funcionalidade-card">
      <Map className="icone-mapa" />

      <div>
        <h3>Georreferenciamento</h3>

        <p>
          Visualização espacial com mapas interativos para análise
          territorial dos casos.
        </p>
      </div>
    </div>


    <div className="funcionalidade-card">
      <BarChart3 className="icone-estatistica" />

      <div>
        <h3>Análise Estatística</h3>

        <p>
          Dashboards interativos com gráficos, indicadores e
          informações epidemiológicas.
        </p>
      </div>
    </div>


    <div className="funcionalidade-card">
      <CloudSun className="icone-clima" />

      <div>
        <h3>Dados Climáticos</h3>

        <p>
          Integração com informações climáticas para análise
          complementar dos casos de dengue.
        </p>
      </div>
    </div>


    <div className="funcionalidade-card">
      <Search className="icone-consulta" />

      <div>
        <h3>Consultas Avançadas</h3>

        <p>
          Filtros personalizados para facilitar a consulta e
          análise dos dados epidemiológicos.
        </p>
      </div>
    </div>


    <div className="funcionalidade-card">
      <Users className="icone-usuarios" />

      <div>
        <h3>Gestão de Usuários</h3>

        <p>
          Controle de acesso com diferentes níveis de permissões
          para os usuários.
        </p>
      </div>
    </div>


    <div className="funcionalidade-card">
      <ShieldCheck className="icone-seguranca" />

      <div>
        <h3>Segurança</h3>

        <p>
          Proteção das informações e controle de acesso
          conforme o perfil do usuário.
        </p>
      </div>
    </div>


    <div className="funcionalidade-card">
      <Activity className="icone-tempo" />

      <div>
        <h3>Tempo Real</h3>

        <p>
          Atualização das informações de acordo com os dados
          disponíveis no sistema.
        </p>
      </div>
    </div>

  </div>

</section>


      <section className="tecnologias">

        <h2>Tecnologias Utilizadas</h2>

        <div className="tecnologias-grid">

          <div className="tecnologia">

            <Code2 />

            <div>
              <strong>Frontend</strong>
              <p>React</p>
            </div>

          </div>


          <div className="tecnologia">

            <MonitorIcon />

            <div>
              <strong>Visualização</strong>
              <p>Power BI</p>
            </div>

          </div>


          <div className="tecnologia">

            <PieChart />

            <div>
              <strong>Análise de Dados</strong>
              <p>R / Python</p>
            </div>

          </div>

        </div>

      </section>

      <section className="impacto">

        <h2>Impacto Esperado</h2>

        <div className="impacto-grid">

          <div>
            <h3>
              <UserRound size={17} />
              Para Profissionais de Saúde
            </h3>

            <p>
              Ferramenta de apoio à decisão com análises detalhadas e
              visualizações para planejamento de ações de controle
              epidemiológico.
            </p>
          </div>


          <div>
            <h3>
              <Users size={17} />
              Para a população
            </h3>

            <p>
              Acesso facilitado a informações sobre dengue em sua região,
              promovendo conscientização e prevenção.
            </p>
          </div>


          <div>
            <h3>
              <GraduationCap size={17} />
              Para Pesquisadores
            </h3>

            <p>
              Plataforma para análise histórica, identificação de padrões
              e realização de estudos epidemiológicos.
            </p>
          </div>


          <div>
            <h3>
              <Building2 size={17} />
              Para Gestores Públicos
            </h3>

            <p>
              Subsídio para elaboração de políticas públicas baseadas
              em evidências e avaliação eficiente de recursos.
            </p>
          </div>

        </div>

      </section>

      <footer className="sobre-footer">

        <p>
          Este sistema foi desenvolvido como Trabalho de Conclusão de Curso
          de Bacharelado em Sistemas de Informação da UEMS.
        </p>

        <p>
          © 2025 - Todos os direitos reservados
        </p>

      </footer>

    </main>
  );
}

function MonitorIcon() {
  return (
    <svg
      width="22"
      height="22"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect x="2" y="3" width="20" height="14" rx="2" />
      <line x1="8" y1="21" x2="16" y2="21" />
      <line x1="12" y1="17" x2="12" y2="21" />
    </svg>
  );
}

export default Sobre;