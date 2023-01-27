import React from "react"
import styled from "styled-components"
import NextHead from 'next/head'
import Script from "next/script"

import LayoutInterna from "../../layout/internas"

const Enero = () => {
  return (
    <LayoutInterna>
      <NextHead>
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link rel="apple-touch-icon" sizes="180x180" href="https://cdn.larepublica.pe/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="https://cdn.larepublica.pe/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="https://cdn.larepublica.pe/favicon-16x16.png" />
        <link rel="icon" type="image/x-icon" href="https://cdn.larepublica.pe/favicon.ico"></link>
        <link rel="canonical" href="" />
        <title>Encuesta IEP: Enero 2023</title>
        <meta name="title" content="" />
        <meta name="description" content="" />
        <meta httpEquiv="content-language" content="es" />
        <meta name="author" content="LR Data" />

        <meta name="googlebot" content="index,follow" />
        <meta name="bingbot" content="index,follow" />
        <meta name="robots" content="max-image-preview:large" />
        <link rel="alternate" type="application/rss+xml" href="https://cdn.mysitemapgenerator.com/shareapi/rss/2806433641" />

        {/* Metadatos Twitter */}
        <meta name="twitter:title" content="LR Especiales: " />
        <meta name="twitter:description" content="" />
        <meta name="twitter:image" content="" />
        <meta name="twitter:url" content="" />
        <meta property="twitter:image" content="" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@larepublica_pe" />
        <meta name="twitter:creator" content="@larepublica_pe" />
        <meta name="twitter:width" content="828" />
        <meta name="twitter:height" content="450" />

        {/* Metadatos Facebook */}
        <meta property="og:title" content="" />
        <meta property="og:description" content="" />
        <meta property="og:image" content="" />
        <meta property="og:url" content="" />
        <meta property="og:type" content="website" />
        <meta property="og:image:width" content="828" />
        <meta property="og:image:height" content="450" />
        <meta property="og:site_name" content="La República" />
        <meta property="fb:pages" content="145820412845" />
        <meta property="fb:app_id" content="602624269799095" />
      </NextHead>
      <Container>
        <h1>
          El 71% de los peruanos desaprueba la gestión de Dina Boluarte y un 88% rechaza al 
          Congreso, según IEP
        </h1>
        <br></br>
        <Bajada>
          La encuesta IEP de mediados de enero evidencia que tan solo el 9% de las personas 
          encuestadas aprueba el desempeño del Congreso de la República, mientras que solo 
          un 19% está de acuerdo en cómo la mandataria dirige el Poder Ejecutivo. 
        </Bajada>
        <br></br><br></br><br></br>
        <SubTitle>Aprobación de Dina</SubTitle>
        <Parrf>
          A poco más de un mes de haber asumido la presidencia, Dina Boluarte mantiene una mayoritaria 
          desaprobación: 7 de cada 10 personas encuestadas rechaza la forma en que la jefa de Estado 
          está conduciendo su Gobierno, mientras que 8 de cada 10 está en desacuerdo que haya asumido 
          la presidencia.
        </Parrf>
        <WrapperGrafic>
          <div className="flourish-embed" data-src="story/1808696">
            <Script src="https://public.flourish.studio/resources/embed.js"></Script>
          </div>
        </WrapperGrafic>
        <SubTitle>Desaprobación de Boluarte en Lima y regiones</SubTitle>
        <Parrf>
          La mayor desaprobación de la presidenta se alcanza fuera de Lima. En Perú urbano logra un 75% 
          de desaprobación y en las zonas rurales un 78%. Diferenciado por macrozonas, en la zona central 
          es donde alcanza su mayor rechazo con un 87%, sigue el sur con un 80%, el norte con un 72% 
          y el oriente con un 71%.
        </Parrf>
        <WrapperGrafic>
          <div className="flourish-embed" data-src="story/1811484">
            <Script src="https://public.flourish.studio/resources/embed.js"></Script>
          </div>
        </WrapperGrafic>

        <SubTitle>Aprobación del Congreso </SubTitle>
        <Parrf>
          La medición de la encuesta IEP de mediados de enero del 2023 registra la mayor desaprobación de 
          este Congreso, que inició sus funciones en julio de 2021, con un 88% de rechazo. Tan solo un 9% 
          de las personas encuestadas aprueba su desempeño.
        </Parrf>
        <WrapperGrafic>
          <div className="flourish-embed flourish-chart" data-src="visualisation/12560314">
            <Script src="https://public.flourish.studio/resources/embed.js"></Script>
          </div>
        </WrapperGrafic>

        <SubTitle>Aprobación de José Williams, presidente del Congreso</SubTitle>
        <Parrf>
          En tanto, el presidente del Legislativo obtiene un respaldo del 16% sobre su desempeño, aunque un 
          72% de desaprobación, una cifra de descontento similar a la medición del mes de diciembre.
        </Parrf>
        <WrapperGrafic>
          <div className="flourish-embed flourish-chart" data-src="visualisation/12560656">
            <Script src="https://public.flourish.studio/resources/embed.js"></Script>
          </div>
        </WrapperGrafic>

        <SubTitle>El rol de las FF. AA. y la PNP en el manejo de las protestas</SubTitle>
        <Parrf>
          Un 58% de las personas encuestadas considera que hubo excesos de parte de las fuerzas del orden 
          frente a las protestas, mientras que un 26% cree que estos actuaron apropiadamente. Un 16% no 
          sabe ni opina ante los sucesos ocurridos.
        </Parrf>
        <WrapperGrafic>
          <div className="flourish-embed flourish-chart" data-src="visualisation/12560772">
            <Script src="https://public.flourish.studio/resources/embed.js"></Script>
          </div>
        </WrapperGrafic>

        <SubTitle>Actores más importantes de las protestas</SubTitle>
        <Parrf>
          Un 44% considera como principales actores de las protestas a los grupos espontáneos u organizados 
          de la ciudadanía, seguido de un 27% que menciona que son violentistas u organizaciones vinculadas 
          a grupos terroristas. En menor medida, un 13% señala a personas vinculadas a economías ilegales.
        </Parrf>
        <WrapperGrafic>
          <div className="flourish-embed flourish-chart" data-src="visualisation/12561075">
            <Script src="https://public.flourish.studio/resources/embed.js"></Script>
          </div>
        </WrapperGrafic>

        <SubTitle>Identificación con protestas</SubTitle>
        <Parrf>
          La mitad de los encuestados (50%) se siente identificado con las protestas ciudadanas, aunque un 
          poco menos de la mitad (46%) indica no sentirse representado por las manifestaciones.
        </Parrf>
        <WrapperGrafic>
          <div className="flourish-embed flourish-chart" data-src="visualisation/12561138">
            <Script src="https://public.flourish.studio/resources/embed.js"></Script>
          </div>
        </WrapperGrafic>

        <SubTitle>Justificación de las protestas</SubTitle>
        <Parrf>
          Un 60% cree que sí se justifican las protestas realizadas en diciembre de 2022. En menor medida, 
          un 35% considera que no están justificadas las manifestaciones. Aquellos que piensan que sí están 
          justificadas son del centro (73%), oriente (70%) y sur (69%) del país.
        </Parrf>
        <WrapperGrafic>
          <div className="flourish-embed" data-src="story/1811436">
            <Script src="https://public.flourish.studio/resources/embed.js"></Script>
          </div>
        </WrapperGrafic>

        <SubTitle>Justificación de ciertas formas de protesta</SubTitle>
        <Parrf>
          Principalmente, las personas encuestadas rechazan que se ataquen los edificios (90%), seguido de 
          la toma de aeropuertos (82%) y la agresión de las fuerzas del orden (81%). Por otro lado, justifican 
          los bloqueos de carretera (30%) como una forma de protesta, así como que se impida que los negocios 
          funcionen (23%) como formas válidas del malestar ciudadano.
        </Parrf>
        <WrapperGrafic>
          <div className="flourish-embed flourish-chart" data-src="visualisation/12561192">
            <Script src="https://public.flourish.studio/resources/embed.js"></Script>
          </div>
        </WrapperGrafic>

        <SubTitle>Aprobación del intento de golpe de Estado</SubTitle>
        <Parrf>
          Mayoritariamente, un 66% está en desacuerdo que el expresidente Castillo haya intentado dar un golpe 
          de Estado en diciembre de 2022, aunque 3 de cada 10 encuestados sí aprobó tal intento.
        </Parrf>
        <WrapperGrafic>
          <div className="flourish-embed flourish-chart" data-src="visualisation/12561278">
            <Script src="https://public.flourish.studio/resources/embed.js"></Script>
          </div>
        </WrapperGrafic>

        <FTec>
          <h2>FICHA TÉCNICA:</h2>
          <h3>
            Encuestadora: Instituto de Estudios Peruanos (IEP). Registro: 0393-REE/JNE – 281-2021-DCGI/JNE. 
            Financiación del estudio: Instituto de Estudios Peruanos (IEP). Tamaño de la población objeto de 
            estudio: Población de 18 años a más con DNI: 24.760.062 personas (RENIEC, Padrón Electoral de las 
            Elecciones Regionales y Municipales 2022). Tamaño y distribución de la muestra: 1211 entrevistados 
            distribuidos en 24 departamentos, 148 provincias y 411 distritos. Margen de error: ± 2.8 pts. para 
            los resultados a nivel nacional. Nivel de confianza: 95% considerando una varianza máxima en las 
            proporciones poblacionales (p=q=0.5). Representatividad provincial: 95,74%. Fuente de marco muestral: 
            Relación de cabeceras de operadores de móviles, Ministerio de Transportes y Comunicaciones (2019). 
            Tipo de muestreo aplicado: Muestreo probabilístico, con método de selección aleatoria de números de 
            celular, encuesta telefónica. Puntos de muestreo: Lima Metropolitana, Perú urbano, Perú rural. Fecha 
            de campo: del 7 al 12 de enero de 2023. Página web: www.iep.org.pe
          </h3>
        </FTec>
      </Container>
    </LayoutInterna>
  )
}

export default Enero

const Container = styled.div`
  width: 100%;
  height: auto;
  
  h1{
    font-size: 40px;
    font-weight: 800;
    line-height: 50px ;
    margin: 0 0 20px;
    padding-top: 20px;
    text-align: center;

    @media (max-width: 460px){
      font-size: 35px;
      line-height: 45px;
    }
  }
`
const WrapperGrafic = styled.div`
  max-width: 800px;
  width: 100%;
  height: auto;
  margin: 50px auto;
`
const Bajada = styled.h2`
  font-size: 18px;
  font-style: oblique;
  line-height: 25px;
`
const SubTitle = styled.h2`
  font-size: 30px;
  font-weight: 800;
  margin-bottom: 20px;
`
const Parrf = styled.p`
  font-size: 17px;
  line-height: 23px;
  margin-bottom: 30px;
`
const FTec = styled.div`
  height: auto;
  width: 100%;
  padding-bottom: 20px;

  h2{
    font-size: 15px;
    padding-bottom: 15px;
    color: #212529;
    font-weight: bold;
  }

  h3{
    font-size: 13px;
    line-height: 1.5;
    color: #555;
  }
`