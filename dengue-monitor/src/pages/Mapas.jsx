import { useEffect, useState } from "react";
import "../styles/mapas.css";

function Mapas() {

  // =====================================================
  // VERIFICAR SE EXISTE USUÁRIO LOGADO
  // =====================================================

  const [usuario, setUsuario] = useState(() => {

    const usuarioSalvo = localStorage.getItem("usuario");

    if (usuarioSalvo) {

      try {

        return JSON.parse(usuarioSalvo);

      } catch (erro) {

        console.error(
          "Erro ao recuperar usuário:",
          erro
        );

        return null;

      }

    }

    return null;

  });


  // =====================================================
  // ATUALIZAR QUANDO O USUÁRIO FIZER LOGIN OU LOGOUT
  // =====================================================

  useEffect(() => {

    function atualizarUsuario() {

      const usuarioSalvo =
        localStorage.getItem("usuario");


      if (usuarioSalvo) {

        try {

          setUsuario(
            JSON.parse(usuarioSalvo)
          );

        } catch (erro) {

          console.error(
            "Erro ao recuperar usuário:",
            erro
          );

          setUsuario(null);

        }

      } else {

        setUsuario(null);

      }

    }


    window.addEventListener(
      "usuarioLogado",
      atualizarUsuario
    );


    return () => {

      window.removeEventListener(
        "usuarioLogado",
        atualizarUsuario
      );

    };

  }, []);


  // =====================================================
  // VERSÃO PÚBLICA
  // =====================================================

  function MapaPublico() {

    return (

      <section className="mapas-publicos">


        <div className="mapas-publicos-titulo">

          <h2>
            Panorama dos casos de Dengue
          </h2>

          <p>
            Visualização estatística dos casos de dengue
            registrados no Brasil.
          </p>

        </div>


        {/* ============================================
            GRÁFICO PÚBLICO
        ============================================= */}

        <div className="grafico-publico">

          <div className="grafico-publico-titulo">

            <h3>
              Taxa de incidência por região
            </h3>

            <p>
              Evolução da taxa de incidência de dengue
              por região brasileira.
            </p>

          </div>


          <div className="imagem-grafico">

            <img
              src="/mapas/regioesIncidencia.png"
              alt="Gráfico da taxa de incidência de dengue por região"
            />

          </div>

        </div>


        {/* ============================================
            AVISO PARA USUÁRIO
        ============================================= */}

        <div className="aviso-login-mapas">

          <div className="aviso-login-icone">
            🔒
          </div>


          <div>

            <strong>
              Deseja realizar uma análise mais detalhada?
            </strong>

            <p>
              Faça login para acessar os mapas interativos,
              gráficos e filtros epidemiológicos do sistema.
            </p>

          </div>

        </div>

      </section>

    );

  }


  // =====================================================
  // VERSÃO LOGADA
  // =====================================================

  function MapaInterativo() {

    return (

      <section className="mapa-interativo">


        {/* ============================================
            CABEÇALHO
        ============================================= */}

        <div className="mapa-interativo-header">

          <div>

            <h2>
              Análise Epidemiológica Interativa
            </h2>

            <p>
              Bem-vinda,{" "}
              <strong>
                {usuario?.nome}
              </strong>
              .
            </p>

          </div>


          <div className="status-login">

            <span className="status-bolinha"></span>

            Usuário conectado

          </div>

        </div>


        {/* ============================================
            POWER BI
        ============================================= */}

        <div className="powerbi-wrapper">

          <iframe
            title="DengueMonitor - Análise Epidemiológica"
            src="https://app.powerbi.com/view?r=eyJrIjoiNDI2ODdhZGMtMmFjMS00NTRmLWI0OGItNDNlYmIwNTYyYzAxIiwidCI6IjY1MGZkYzAxLTI1NGUtNDE0Yy1hNzY4LTBlMmFjYmFhMGFlNCJ9"
            frameBorder="0"
            allowFullScreen={true}
          />

        </div>


        {/* ============================================
            INFORMAÇÃO
        ============================================= */}

        <div className="powerbi-info">

          <h3>
            Análise dos dados
          </h3>

          <p>
            Utilize os filtros disponíveis no painel para
            consultar diferentes períodos, regiões e
            informações relacionadas aos casos de dengue.
          </p>

        </div>

      </section>

    );

  }


  // =====================================================
  // PÁGINA PRINCIPAL
  // =====================================================

  return (

    <main className="mapas-page">

      <div className="mapas-container">


        {/* ============================================
            CABEÇALHO DA PÁGINA
        ============================================= */}

        <section className="mapas-header">

          <h1>
            Mapas Epidemiológicos
          </h1>

          <p>
            Visualização e análise espacial dos casos
            de dengue no Brasil.
          </p>

        </section>


        {/* ============================================
            SEM LOGIN
        ============================================= */}

        {!usuario && (

          <MapaPublico />

        )}


        {/* ============================================
            COM LOGIN
        ============================================= */}

        {usuario && (

          <MapaInterativo />

        )}

      </div>

    </main>

  );

}

export default Mapas;