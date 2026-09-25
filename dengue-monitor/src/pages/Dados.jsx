import {
  Database,
  Download,
  Filter,
  FileText,
  BarChart3,
  Calculator,
  CalendarDays,
  Map,
  Activity,
  Users,
  Code2
} from "lucide-react";

import "../styles/dados.css";

function Dados() {

  return (

    <main className="dados-page">

      <div className="dados-container">


        {/* 
            CABEÇALHO
         */}

        <section className="dados-header">

          <div className="dados-icon">
            <Database size={34} />
          </div>

          <h1>
            Dados Epidemiológicos
          </h1>

          <p>
            Conheça as fontes, etapas de obtenção,
            tratamento e análise dos dados utilizados
            no DengueMonitor.
          </p>

        </section>


        {/* 
            VISÃO GERAL
         */}

        <section className="dados-introducao">

          <h2>
            Sobre os dados utilizados
          </h2>

          <p>
            O DengueMonitor utiliza dados epidemiológicos
            provenientes de fontes oficiais de saúde pública,
            com o objetivo de organizar, tratar e apresentar
            informações sobre a ocorrência da dengue no Brasil.
          </p>

          <p>
            A principal fonte utilizada é o Sistema de Informação
            de Agravos de Notificação (SINAN), disponibilizado
            pelo Departamento de Informação e Informática do
            Sistema Único de Saúde (DATASUS).
          </p>

          <p>
            Os dados foram processados e analisados utilizando
            a linguagem de programação R, permitindo realizar
            procedimentos de limpeza, transformação,
            organização e geração dos indicadores
            epidemiológicos.
          </p>

        </section>


        {/* 
            FONTES
         */}

        <section className="dados-section">

          <h2>
            Fontes dos dados
          </h2>

          <div className="fontes-grid">


            <div className="fonte-card">

              <div className="fonte-icon datasus">
                <Database size={25} />
              </div>

              <h3>
                DATASUS
              </h3>

              <p>
                Departamento de Informação e Informática
                do Sistema Único de Saúde, responsável pela
                disponibilização dos dados públicos utilizados
                na pesquisa.
              </p>

            </div>


            <div className="fonte-card">

              <div className="fonte-icon sinan">
                <FileText size={25} />
              </div>

              <h3>
                SINAN
              </h3>

              <p>
                Sistema de Informação de Agravos de
                Notificação, utilizado como fonte dos registros
                de casos de dengue analisados no estudo.
              </p>

            </div>


            <div className="fonte-card">

              <div className="fonte-icon ibge">
                <Users size={25} />
              </div>

              <h3>
                IBGE
              </h3>

              <p>
                Dados populacionais utilizados como
                referência para o cálculo padronizado
                das taxas epidemiológicas.
              </p>

            </div>

          </div>

        </section>


        {/* 
            PERÍODO
         */}

        <section className="periodo-card">

          <div className="periodo-icon">

            <CalendarDays size={28} />

          </div>

          <div>

            <h3>
              Período analisado
            </h3>

            <strong>
              2013 – 2024
            </strong>

            <p>
              A análise considera séries temporais diárias
              de incidência de dengue, abrangendo as cinco
              regiões brasileiras e o agregado nacional.
            </p>

          </div>

        </section>


        {/* 
            COMO OS DADOS FORAM OBTIDOS
         */}

        <section className="dados-section">

          <h2>
            Como os dados foram obtidos?
          </h2>

          <div className="etapas">


            <div className="etapa">

              <div className="etapa-numero">
                01
              </div>

              <div className="etapa-conteudo">

                <h3>
                  Consulta às fontes oficiais
                </h3>

                <p>
                  Os dados epidemiológicos foram obtidos
                  por meio das bases públicas disponibilizadas
                  pelo DATASUS, tendo o SINAN como principal
                  fonte dos registros de dengue.
                </p>

              </div>

            </div>


            <div className="etapa">

              <div className="etapa-numero">
                02
              </div>

              <div className="etapa-conteudo">

                <h3>
                  Extração dos dados
                </h3>

                <p>
                  Os dados foram extraídos e organizados
                  para possibilitar seu processamento e
                  posterior análise estatística.
                </p>

              </div>

            </div>


            <div className="etapa">

              <div className="etapa-numero">
                03
              </div>

              <div className="etapa-conteudo">

                <h3>
                  Organização
                </h3>

                <p>
                  Os registros foram organizados considerando
                  informações como período, região geográfica
                  e raça/cor.
                </p>

              </div>

            </div>


          </div>

        </section>


        {/* 
            LIMPEZA
         */}

        <section className="tratamento-card">

          <div className="tratamento-header">

            <div className="tratamento-icon">
              <Filter size={27} />
            </div>

            <div>

              <h2>
                Limpeza e tratamento dos dados
              </h2>

              <p>
                Antes da análise, os dados passaram por
                diferentes etapas de preparação.
              </p>

            </div>

          </div>


          <div className="tratamento-grid">


            <div className="tratamento-item">

              <Filter size={20} />

              <div>

                <h3>
                  Seleção dos registros
                </h3>

                <p>
                  Foram selecionados os registros necessários
                  para o período e as variáveis utilizadas
                  na pesquisa.
                </p>

              </div>

            </div>


            <div className="tratamento-item">

              <Code2 size={20} />

              <div>

                <h3>
                  Padronização
                </h3>

                <p>
                  As variáveis foram padronizadas para permitir
                  sua utilização nas análises estatísticas.
                </p>

              </div>

            </div>


            <div className="tratamento-item">

              <CalendarDays size={20} />

              <div>

                <h3>
                  Conversão de datas
                </h3>

                <p>
                  As informações temporais foram convertidas
                  e organizadas para construção das séries
                  temporais.
                </p>

              </div>

            </div>


            <div className="tratamento-item">

              <Users size={20} />

              <div>

                <h3>
                  Organização por grupos
                </h3>

                <p>
                  Os dados foram agrupados por ano, região
                  e categorias de raça/cor.
                </p>

              </div>

            </div>


            <div className="tratamento-item">

              <FileText size={20} />

              <div>

                <h3>
                  Registros inconsistentes
                </h3>

                <p>
                  Foram tratados registros com informações
                  inconsistentes ou incompletas para as
                  variáveis utilizadas na análise.
                </p>

              </div>

            </div>


            <div className="tratamento-item">

              <BarChart3 size={20} />

              <div>

                <h3>
                  Agrupamento dos casos
                </h3>

                <p>
                  Após o tratamento, os casos foram
                  consolidados para geração dos indicadores
                  e visualizações.
                </p>

              </div>

            </div>


          </div>

        </section>


        {/* 
            INDICADORES
         */}

        <section className="dados-section">

          <h2>
            Indicadores epidemiológicos
          </h2>

          <div className="indicadores-grid">


            <div className="indicador-card">

              <div className="indicador-icon incidencia">
                <Activity size={25} />
              </div>

              <h3>
                Taxa de incidência
              </h3>

              <p>
                Mede a ocorrência de novos casos em relação
                à população de referência.
              </p>

              <div className="formula">
                Casos ÷ População × 100.000
              </div>

            </div>


            <div className="indicador-card">

              <div className="indicador-icon mortalidade">
                <Activity size={25} />
              </div>

              <h3>
                Taxa de mortalidade
              </h3>

              <p>
                Representa o número de óbitos por dengue
                em relação à população de referência.
              </p>

              <div className="formula">
                Óbitos ÷ População × 100.000
              </div>

            </div>


            <div className="indicador-card">

              <div className="indicador-icon letalidade">
                <Calculator size={25} />
              </div>

              <h3>
                Taxa de letalidade
              </h3>

              <p>
                Indica a proporção de óbitos entre os
                casos de dengue notificados.
              </p>

              <div className="formula">
                Óbitos ÷ Casos × 100
              </div>

            </div>


          </div>

        </section>


        {/* 
            REGIÕES
         */}

        <section className="regioes-card">

          <div className="regioes-icon">

            <Map size={27} />

          </div>

          <div>

            <h2>
              Organização geográfica
            </h2>

            <p>
              Para possibilitar comparações territoriais,
              os dados foram organizados segundo as cinco
              regiões geográficas brasileiras:
            </p>

            <div className="regioes-list">

              <span>Norte</span>
              <span>Nordeste</span>
              <span>Centro-Oeste</span>
              <span>Sudeste</span>
              <span>Sul</span>

            </div>

          </div>

        </section>


        {/* 
            TECNOLOGIAS
         */}

        <section className="dados-section">

          <h2>
            Tecnologias utilizadas no tratamento e análise
          </h2>

          <div className="tecnologias">

            <div className="tecnologia">

              <Code2 />

              <div>

                <strong>
                  R
                </strong>

                <p>
                  Linguagem utilizada para limpeza,
                  transformação, análise estatística
                  e geração das visualizações.
                </p>

              </div>

            </div>


            <div className="tecnologia">

              <BarChart3 />

              <div>

                <strong>
                  ggplot2
                </strong>

                <p>
                  Utilizado para construção dos gráficos
                  e representações estatísticas.
                </p>

              </div>

            </div>


            <div className="tecnologia">

              <Filter />

              <div>

                <strong>
                  dplyr
                </strong>

                <p>
                  Utilizado para manipulação, filtragem,
                  agrupamento e transformação dos dados.
                </p>

              </div>

            </div>


          </div>

        </section>


        {/* 
            GRAFOS DE VISIBILIDADE
         */}

        <section className="vg-card">

          <div className="vg-icon">

            <Activity size={28} />

          </div>

          <div>

            <h2>
              Análise por Grafos de Visibilidade
            </h2>

            <p>
              Após a organização das séries temporais,
              os dados de incidência diária foram utilizados
              para a construção de Grafos de Visibilidade.
            </p>

            <p>
              Cada ponto da série temporal representa um
              vértice do grafo, enquanto as conexões representam
              relações de visibilidade entre os pontos.
              As redes foram posteriormente analisadas
              considerando suas propriedades topológicas.
            </p>

            <p>
              Os grafos foram construídos em R e exportados
              no formato Pajek (.net), sendo posteriormente
              visualizados e analisados no Gephi.
            </p>

          </div>

        </section>


        {/* 
            RESULTADO
         */}

        <section className="dados-final">

          <Download size={27} />

          <div>

            <h2>
              Do dado bruto à informação
            </h2>

            <p>
              O processo realizado transforma dados
              epidemiológicos brutos em informações
              organizadas, indicadores e visualizações
              que facilitam a compreensão da dinâmica
              da dengue no Brasil.
            </p>

          </div>

        </section>


      </div>

    </main>

  );

}

export default Dados;