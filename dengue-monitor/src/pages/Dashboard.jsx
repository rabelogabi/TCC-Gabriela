import { useEffect, useState } from "react";

import {
  Activity,
  HeartPulse,
  Map,
  TrendingUp,
  ChevronLeft,
  ChevronRight,
  Lock,
} from "lucide-react";

import "../styles/dashboard.css";

function Dashboard() {

  // USUÁRIO LOGADO
  

  const [usuario, setUsuario] = useState(() => {
    const usuarioSalvo = localStorage.getItem("usuario");

    if (usuarioSalvo) {
      try {
        return JSON.parse(usuarioSalvo);
      } catch (erro) {
        console.error("Erro ao recuperar usuário:", erro);
        return null;
      }
    }

    return null;
  });

  // ATUALIZAR LOGIN 

  useEffect(() => {
    function atualizarUsuario() {
      const usuarioSalvo = localStorage.getItem("usuario");

      if (usuarioSalvo) {
        try {
          setUsuario(JSON.parse(usuarioSalvo));
        } catch (erro) {
          console.error("Erro ao recuperar usuário:", erro);
          setUsuario(null);
        }
      } else {
        setUsuario(null);
      }
    }

    window.addEventListener("usuarioLogado", atualizarUsuario);
    window.addEventListener("storage", atualizarUsuario);

    return () => {
      window.removeEventListener("usuarioLogado", atualizarUsuario);
      window.removeEventListener("storage", atualizarUsuario);
    };
  }, []);

  
  // CARROSSEL DAS IMAGENS

  const imagens = [
    {
      src: "/dashboard/regioesIncidencia.png",
      titulo: "Taxa de incidência por região",
      descricao:
        "Evolução da taxa de incidência dos casos de dengue nas regiões brasileiras.",
    },

    {
      src: "/dashboard/mortalidadeRegiao.png",
      titulo: "Mortalidade por região",
      descricao:
        "Distribuição da mortalidade por dengue entre as regiões brasileiras.",
    },

    {
      src: "/dashboard/SerieBrasil.png",
      titulo: "Evolução dos casos no Brasil",
      descricao:
        "Série temporal dos casos de dengue registrados no Brasil.",
    },

    {
      src: "/dashboard/FaixaEtaria.png",
      titulo: "Casos por faixa etária",
      descricao:
        "Distribuição dos casos de dengue segundo a faixa etária.",
    },

    {
      src: "/dashboard/MascFem.png",
      titulo: "Distribuição por sexo",
      descricao:
        "Distribuição dos casos de dengue entre os sexos.",
    },

    {
      src: "/dashboard/idade 100 mil.png",
      titulo: "Incidência por idade",
      descricao:
        "Taxa de incidência de dengue segundo a faixa etária.",
    },

    {
      src: "/dashboard/mortalidadeFaixa.png",
      titulo: "Mortalidade por faixa etária",
      descricao:
        "Distribuição dos óbitos por dengue segundo a faixa etária.",
    },

    {
      src: "/dashboard/letalidadeRegioes.png",
      titulo: "Letalidade por região",
      descricao:
        "Análise da letalidade dos casos de dengue nas regiões brasileiras.",
    },

    {
      src: "/dashboard/top10municipios.png",
      titulo: "Municípios com maior incidência",
      descricao:
        "Municípios brasileiros com destaque nos registros de dengue.",
    },

    {
      src: "/dashboard/top10CentroOeste.png",
      titulo: "Centro-Oeste",
      descricao:
        "Principais municípios da região Centro-Oeste.",
    },

    {
      src: "/dashboard/SerieRaca.png",
      titulo: "Distribuição por raça",
      descricao:
        "Distribuição dos casos de dengue segundo raça/cor.",
    },

    {
      src: "/dashboard/SerieRaca - Copia.png",
      titulo: "Análise por raça",
      descricao:
        "Visualização complementar dos registros segundo raça/cor.",
    },
  ];

  const [imagemAtual, setImagemAtual] = useState(0);

  
  // PRÓXIMA IMAGEM SETA
  

  function proximaImagem() {
    setImagemAtual(
      (atual) => (atual + 1) % imagens.length
    );
  }

  // IMAGEM ANTERIOR SETA

  function imagemAnterior() {
    setImagemAtual(
      (atual) =>
        (atual - 1 + imagens.length) % imagens.length
    );
  }

  // SELECIONAR IMAGEM


  function selecionarImagem(indice) {
    setImagemAtual(indice);
  }

  // PÁGINA

  return (
    <main className="dashboard-page">
      <div className="dashboard-container">

        {/* 
            CABEÇALHO
         */}

        <section className="dashboard-header">
          <h1>Dashboard Epidemiológico</h1>
        </section>

        {/* 
            CARDS
         */}

        <section className="dashboard-resumo">
          <div className="indicadores-dashboard">

            {/* CASOS */}
            <div className="indicador-dashboard">
              <div className="indicador-dashboard-icon casos">
                <Activity size={26} />
              </div>

              <div>
                <h3>Casos de Dengue</h3>

                <strong>1.234.567</strong>

                <p>Casos registrados</p>
              </div>
            </div>

            {/* ÓBITOS */}
            <div className="indicador-dashboard">
              <div className="indicador-dashboard-icon obitos">
                <HeartPulse size={26} />
              </div>

              <div>
                <h3>Óbitos</h3>

                <strong>1.234</strong>

                <p>Óbitos registrados</p>
              </div>
            </div>

            {/* MUNICÍPIOS */}
            <div className="indicador-dashboard">
              <div className="indicador-dashboard-icon municipios">
                <Map size={26} />
              </div>

              <div>
                <h3>Municípios Afetados</h3>

                <strong>3.456</strong>

                <p>Municípios com registros</p>
              </div>
            </div>

            {/* INCIDÊNCIA */}
            <div className="indicador-dashboard">
              <div className="indicador-dashboard-icon incidencia">
                <TrendingUp size={26} />
              </div>

              <div>
                <h3>Incidência</h3>

                <strong>587,2</strong>

                <p>Casos por 100 mil habitantes</p>
              </div>
            </div>

          </div>
        </section>

        {/* 
            USUÁRIO NÃO LOGADO
         */}

        {!usuario && (
          <section className="dashboard-publico">

            {/* 
                CARROSSEL
             */}

            <div className="dashboard-carrossel">

              {/* CABEÇALHO DA IMAGEM */}

              <div className="dashboard-carrossel-header">
                <div>
                  <h3>
                    {imagens[imagemAtual].titulo}
                  </h3>

                  <p>
                    {imagens[imagemAtual].descricao}
                  </p>
                </div>
              </div>

              {/* IMAGEM */}

              <div className="dashboard-carrossel-imagem">

                <button
                  className="carrossel-botao anterior"
                  onClick={imagemAnterior}
                  aria-label="Imagem anterior"
                >
                  <ChevronLeft size={28} />
                </button>

                <img
                  src={imagens[imagemAtual].src}
                  alt={imagens[imagemAtual].titulo}
                />

                <button
                  className="carrossel-botao proximo"
                  onClick={proximaImagem}
                  aria-label="Próxima imagem"
                >
                  <ChevronRight size={28} />
                </button>

              </div>

              {/* INDICADORES */}

              <div className="carrossel-indicadores">
                {imagens.map((imagem, indice) => (
                  <button
                    key={indice}
                    className={
                      indice === imagemAtual
                        ? "ativo"
                        : ""
                    }
                    onClick={() =>
                      selecionarImagem(indice)
                    }
                    aria-label={`Visualizar ${imagem.titulo}`}
                  />
                ))}
              </div>

              {/* CONTADOR */}

              <div className="carrossel-contador">
                {imagemAtual + 1} / {imagens.length}
              </div>

            </div>

            {/* 
                AVISO DE LOGIN
             */}

            <div className="dashboard-login-aviso">

              <div className="dashboard-login-icone">
                <Lock size={22} />
              </div>

              <div>
                <strong>
                  Deseja realizar uma análise mais detalhada?
                </strong>

                <p>
                  Faça login para acessar o dashboard
                  interativo, filtros e análises
                  epidemiológicas do sistema.
                </p>
              </div>

            </div>

          </section>
        )}

        {/* 
            USUÁRIO LOGADO
         */}

        {usuario && (
          <section className="dashboard-interativo">

            {/* 
                CABEÇALHO DO POWER BI
             */}

            <div className="dashboard-interativo-header">

              <div>
                <h2>
                  Dashboard Epidemiológico Interativo
                </h2>

                <p>
                  Utilize os filtros disponíveis no
                  painel para analisar os dados.
                </p>

                <p>
                  Bem-vinda,{" "}
                  <strong>
                    {usuario.nome}
                  </strong>.
                </p>
              </div>

              <div className="dashboard-status-login">
                <span className="dashboard-status-bolinha"></span>

                Usuário conectado
              </div>

            </div>

            {/* 
                POWER BI
             */}

            <div className="dashboard-powerbi-wrapper">

              <iframe
                title="TCC_Dados (1)"
                src="https://app.powerbi.com/view?r=eyJrIjoiZjA0ZTZiODUtZDg3Ny00ZDg0LThhN2QtNjVjMTZjNDYzYmE0IiwidCI6IjY1MGZkYzAxLTI1NGUtNDE0Yy1hNzY4LTBlMmFjYmFhMGFlNCJ9"
                frameBorder="0"
                allowFullScreen
              />

            </div>

            {/* 
                INFORMAÇÃO ABAIXO DO POWER BI
             */}

            <div className="dashboard-powerbi-info">

              <h3>
                Análise dos dados
              </h3>

              <p>
                Utilize os filtros disponíveis no
                painel para consultar diferentes
                períodos, regiões e informações
                relacionadas aos casos de dengue.
              </p>

            </div>

          </section>
        )}

      </div>
    </main>
  );
}

export default Dashboard;