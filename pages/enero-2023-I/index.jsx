import React from "react"
import styled from "styled-components"
import NextHead from 'next/head'
import Script from "next/script"

import LayoutInterna from "../../layout/internas"
import Title from "components/Interna/Title"
import Question from "components/Interna/Question"
import FicTec from "components/Interna/FicTec"
import ButtonBack from "components/Interna/ButtonBack"

const Enero = () => {
  return (
    <LayoutInterna>
      <NextHead>
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link rel="apple-touch-icon" sizes="180x180" href="https://cdn.larepublica.pe/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="https://cdn.larepublica.pe/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="https://cdn.larepublica.pe/favicon-16x16.png" />
        <link rel="icon" type="image/x-icon" href="https://cdn.larepublica.pe/favicon.ico"></link>
        <link rel="canonical" href="https://especiales.larepublica.pe/encuesta-iep-peru-aprobacion-desaprobacion-presidencia-congreso-de-la-republica-ejecutivo-legislativo/enero-2023-I" />
        <title>Encuesta IEP de Enero I 2023: El 71% de los peruanos desaprueba la gestión de Dina Boluarte y un 88% rechaza al Congreso</title>
        <meta name="title" content="Encuesta IEP de Enero I 2023: El 71% de los peruanos desaprueba la gestión de Dina Boluarte y un 88% rechaza al Congreso" />
        <meta name="description" content="La encuesta IEP de mediados de enero evidencia que tan solo el 9% de las personas encuestadas aprueba el desempeño del Congreso de la República, mientras que solo un 19% está de acuerdo en cómo la mandataria dirige el Poder Ejecutivo." />
        <meta httpEquiv="content-language" content="es" />
        <meta name="author" content="LR Especiales" />

        <meta name="googlebot" content="index,follow" />
        <meta name="bingbot" content="index,follow" />
        <meta name="robots" content="max-image-preview:large" />
        <link rel="alternate" type="application/rss+xml" href="https://cdn.mysitemapgenerator.com/shareapi/rss/2806433641" />

        {/* Metadatos Twitter */}
        <meta name="twitter:title" content="Encuesta IEP de Enero I 2023: El 71% de los peruanos desaprueba la gestión de Dina Boluarte y un 88% rechaza al Congreso" />
        <meta name="twitter:description" content="La encuesta IEP de mediados de enero evidencia que tan solo el 9% de las personas encuestadas aprueba el desempeño del Congreso de la República, mientras que solo un 19% está de acuerdo en cómo la mandataria dirige el Poder Ejecutivo." />
        <meta name="twitter:image" content="https://origin.cronosmedia.glr.pe/large/2023/01/27/lg_63d444b7b86e87136d140610.jpg" />
        <meta name="twitter:url" content="https://especiales.larepublica.pe/encuesta-iep-peru-aprobacion-desaprobacion-presidencia-congreso-de-la-republica-ejecutivo-legislativo/enero-2023-I" />
        <meta property="twitter:image" content="https://origin.cronosmedia.glr.pe/large/2023/01/27/lg_63d444b7b86e87136d140610.jpg" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@larepublica_pe" />
        <meta name="twitter:creator" content="@larepublica_pe" />
        <meta name="twitter:width" content="828" />
        <meta name="twitter:height" content="450" />

        {/* Metadatos Facebook */}
        <meta property="og:title" content="Encuesta IEP de Enero I 2023: El 71% de los peruanos desaprueba la gestión de Dina Boluarte y un 88% rechaza al Congreso" />
        <meta property="og:description" content="La encuesta IEP de mediados de enero evidencia que tan solo el 9% de las personas encuestadas aprueba el desempeño del Congreso de la República, mientras que solo un 19% está de acuerdo en cómo la mandataria dirige el Poder Ejecutivo." />
        <meta property="og:image" content="https://origin.cronosmedia.glr.pe/large/2023/01/27/lg_63d444b7b86e87136d140610.jpg" />
        <meta property="og:url" content="https://especiales.larepublica.pe/encuesta-iep-peru-aprobacion-desaprobacion-presidencia-congreso-de-la-republica-ejecutivo-legislativo/enero-2023-I" />
        <meta property="og:type" content="website" />
        <meta property="og:image:width" content="828" />
        <meta property="og:image:height" content="450" />
        <meta property="og:site_name" content="La República" />
        <meta property="fb:pages" content="145820412845" />
        <meta property="fb:app_id" content="602624269799095" />

        {/* SCHEMAS BREADCRUMB */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: `
              {
                "@context": "https://schema.org/",
                "@type": "BreadcrumbList",
                "itemListElement": [{
                  "@type": "ListItem",
                "position": 1,
                "name": "El 73% de peruanos considera que lo más conveniente para el país es adelantar las elecciones para este 2023, según IEP",
                "item": "https://especiales.larepublica.pe/encuesta-iep-peru-aprobacion-desaprobacion-presidencia-congreso-de-la-republica-ejecutivo-legislativo/enero-2023-II/"  
                },{
                  "@type": "ListItem",
                "position": 2,
                "name": "El 71% de los peruanos desaprueba la gestión de Dina Boluarte y un 88% rechaza al Congreso, según IEP",
                "item": "https://especiales.larepublica.pe/encuesta-iep-peru-aprobacion-desaprobacion-presidencia-congreso-de-la-republica-ejecutivo-legislativo/01-23-enero-I/"  
                },{
                  "@type": "ListItem",
                "position": 3,
                "name": "Pedro Castillo: sin cambios en su aprobación, pero con retroceso en la gestión de temas centrales",
                "item": "https://data.larepublica.pe/encuesta-iep-aprobacion-desaprobacion-peru-presidente-congreso-de-la-republica/enero-2022/"  
                },{
                  "@type": "ListItem",
                "position": 4,
                "name": "Casi la mitad de la población cree que la salida a la crisis política son nuevas elecciones",
                "item": "https://data.larepublica.pe/encuesta-iep-aprobacion-desaprobacion-peru-presidente-congreso-de-la-republica/febrero-2022/"  
                },{
                  "@type": "ListItem",
                "position": 5,
                "name": "Si vacan a Pedro Castillo, el 80% de la ciudadanía cree que el camino son nuevas elecciones",
                "item": "https://data.larepublica.pe/encuesta-iep-aprobacion-desaprobacion-peru-presidente-congreso-de-la-republica/marzo-2022/"  
                },{
                  "@type": "ListItem",
                "position": 6,
                "name": "El 68% de los peruanos está de acuerdo con el adelanto de elecciones, según IEP",
                "item": "https://data.larepublica.pe/encuesta-iep-aprobacion-desaprobacion-peru-presidente-congreso-de-la-republica/abril-2022/"  
                },{
                  "@type": "ListItem",
                "position": 7,
                "name": "Lo más conveniente para el país sigue siendo el adelanto de elecciones: un 67% quiere nuevo presidente y congresistas",
                "item": "https://data.larepublica.pe/encuesta-iep-aprobacion-desaprobacion-peru-presidente-congreso-de-la-republica/mayo-2022/"  
                },{
                  "@type": "ListItem",
                "position": 8,
                "name": "Encuesta IEP: para el 88%, el Congreso es percibido como la institución con mayor corrupción generalizada",
                "item": "https://data.larepublica.pe/encuesta-iep-aprobacion-desaprobacion-peru-presidente-congreso-de-la-republica/junio-2022/"  
                },{
                  "@type": "ListItem",
                "position": 9,
                "name": "Encuesta IEP: apenas un 10% aprueba el desempeño del Congreso de la República",
                "item": "https://data.larepublica.pe/encuesta-iep-aprobacion-desaprobacion-peru-presidente-congreso-de-la-republica/julio-2022/"  
                },{
                  "@type": "ListItem",
                "position": 10,
                "name": "Un 60% está de acuerdo con investigación de la Fiscalía al presidente por indicios de corrupción",
                "item": "https://data.larepublica.pe/encuesta-iep-aprobacion-desaprobacion-peru-presidente-congreso-de-la-republica/setiembre-2022/"  
                },{
                  "@type": "ListItem",
                "position": 11,
                "name": "Un 52% cree que Castillo está involucrado en corrupción",
                "item": "https://data.larepublica.pe/encuesta-iep-aprobacion-desaprobacion-peru-presidente-congreso-de-la-republica/octubre-1-2022/"  
                },{
                  "@type": "ListItem",
                "position": 12,
                "name": "Un 59% cree que Castillo está involucrado en corrupción, según encuesta IEP",
                "item": "https://data.larepublica.pe/encuesta-iep-aprobacion-desaprobacion-peru-presidente-congreso-de-la-republica/octubre-2-2022/"  
                },{
                  "@type": "ListItem",
                "position": 13,
                "name": "Si inhabilitan al presidente Pedro Castillo, un 87% preferiría que se convoquen nuevas elecciones",
                "item": "https://data.larepublica.pe/encuesta-iep-aprobacion-desaprobacion-peru-presidente-congreso-de-la-republica/noviembre-2022/"  
                },{
                  "@type": "ListItem",
                "position": 14,
                "name": "Un 83% cree que se deben adelantar las elecciones generales",
                "item": "https://data.larepublica.pe/encuesta-iep-aprobacion-desaprobacion-peru-presidente-congreso-de-la-republica/"  
                },{
                  "@type": "ListItem",
                "position": 15,
                "name": "Pedro Castillo detiene su caída luego de primer intento de vacancia",
                "item": "https://data.larepublica.pe/encuesta-iep-aprobacion-desaprobacion-peru-presidente-congreso-de-la-republica/diciembre-2021/"  
                }]
              }
            `
          }}
        ></script>
      </NextHead>
      <Container>
        <Title
          key={0}
          title="El 71% de los peruanos desaprueba la gestión de Dina Boluarte y un 88% rechaza al 
          Congreso, según IEP"
          bajada="La encuesta IEP de mediados de enero evidencia que tan solo el 9% de las personas 
          encuestadas aprueba el desempeño del Congreso de la República, mientras que solo 
          un 19% está de acuerdo en cómo la mandataria dirige el Poder Ejecutivo."
        />

        <Question
          key={0}
          title="Aprobación de Dina"
          bajada="A poco más de un mes de haber asumido la presidencia, Dina Boluarte mantiene una mayoritaria 
          desaprobación: 7 de cada 10 personas encuestadas rechaza la forma en que la jefa de Estado 
          está conduciendo su Gobierno, mientras que 8 de cada 10 está en desacuerdo que haya asumido 
          la presidencia."
        >
          <div className="flourish-embed" data-src="story/1808696">
            <Script src="https://public.flourish.studio/resources/embed.js"></Script>
          </div>
        </Question>

        <Question
          key={1}
          title="Desaprobación de Boluarte en Lima y regiones"
          bajada="La mayor desaprobación de la presidenta se alcanza fuera de Lima. En Perú urbano logra un 75% 
          de desaprobación y en las zonas rurales un 78%. Diferenciado por macrozonas, en la zona central 
          es donde alcanza su mayor rechazo con un 87%, sigue el sur con un 80%, el norte con un 72% 
          y el oriente con un 71%."
        >
          <div className="flourish-embed" data-src="story/1811484">
            <Script src="https://public.flourish.studio/resources/embed.js"></Script>
          </div>
        </Question>

        <Question
          key={2}
          title="Aprobación del Congreso"
          bajada="La medición de la encuesta IEP de mediados de enero del 2023 registra la mayor desaprobación de 
          este Congreso, que inició sus funciones en julio de 2021, con un 88% de rechazo. Tan solo un 9% 
          de las personas encuestadas aprueba su desempeño."
        >
          <div className="flourish-embed flourish-chart" data-src="visualisation/12560314">
            <Script src="https://public.flourish.studio/resources/embed.js"></Script>
          </div>
        </Question>

        <Question
          key={3}
          title="Aprobación de José Williams, presidente del Congreso"
          bajada="En tanto, el presidente del Legislativo obtiene un respaldo del 16% sobre su desempeño, aunque un 
          72% de desaprobación, una cifra de descontento similar a la medición del mes de diciembre."
        >
          <div className="flourish-embed flourish-chart" data-src="visualisation/12560656">
            <Script src="https://public.flourish.studio/resources/embed.js"></Script>
          </div>
        </Question>

        <Question
          key={4}
          title="El rol de las FF. AA. y la PNP en el manejo de las protestas"
          bajada="Un 58% de las personas encuestadas considera que hubo excesos de parte de las fuerzas del orden 
          frente a las protestas, mientras que un 26% cree que estos actuaron apropiadamente. Un 16% no 
          sabe ni opina ante los sucesos ocurridos."
        >
          <div className="flourish-embed flourish-chart" data-src="visualisation/12560772">
            <Script src="https://public.flourish.studio/resources/embed.js"></Script>
          </div>
        </Question>

        <Question
          key={5}
          title="Actores más importantes de las protestas"
          bajada="Un 44% considera como principales actores de las protestas a los grupos espontáneos u organizados 
          de la ciudadanía, seguido de un 27% que menciona que son violentistas u organizaciones vinculadas 
          a grupos terroristas. En menor medida, un 13% señala a personas vinculadas a economías ilegales."
        >
          <div className="flourish-embed flourish-chart" data-src="visualisation/12561075">
            <Script src="https://public.flourish.studio/resources/embed.js"></Script>
          </div>
        </Question>

        <Question
          key={6}
          title="Identificación con protestas"
          bajada="La mitad de los encuestados (50%) se siente identificado con las protestas ciudadanas, aunque un 
          poco menos de la mitad (46%) indica no sentirse representado por las manifestaciones."
        >
          <div className="flourish-embed flourish-chart" data-src="visualisation/12561138">
            <Script src="https://public.flourish.studio/resources/embed.js"></Script>
          </div>
        </Question>

        <Question
          key={7}
          title="Justificación de las protestas"
          bajada="Un 60% cree que sí se justifican las protestas realizadas en diciembre de 2022. En menor medida, 
          un 35% considera que no están justificadas las manifestaciones. Aquellos que piensan que sí están 
          justificadas son del centro (73%), oriente (70%) y sur (69%) del país."
        >
          <div className="flourish-embed" data-src="story/1811436">
            <Script src="https://public.flourish.studio/resources/embed.js"></Script>
          </div>
        </Question>

        <Question
          key={8}
          title="Justificación de ciertas formas de protesta"
          bajada="Principalmente, las personas encuestadas rechazan que se ataquen los edificios (90%), seguido de
          la toma de aeropuertos (82%) y la agresión de las fuerzas del orden (81%). Por otro lado, justifican
          los bloqueos de carretera (30%) como una forma de protesta, así como que se impida que los negocios
          funcionen (23%) como formas válidas del malestar ciudadano."
        >
          <div className="flourish-embed flourish-chart" data-src="visualisation/12561192">
            <Script src="https://public.flourish.studio/resources/embed.js"></Script>
          </div>
        </Question>

        <Question
          key={9}
          title="Aprobación del intento de golpe de Estado"
          bajada="Mayoritariamente, un 66% está en desacuerdo que el expresidente Castillo haya intentado dar un golpe
          de Estado en diciembre de 2022, aunque 3 de cada 10 encuestados sí aprobó tal intento."
        >
          <div className="flourish-embed flourish-chart" data-src="visualisation/12561278">
            <Script src="https://public.flourish.studio/resources/embed.js"></Script>
          </div>
        </Question>

        <FicTec
          key={0}
          title="FICHA TÉCNICA:"
          desciption="Encuestadora: Instituto de Estudios Peruanos (IEP). Registro: 0393-REE/JNE – 281-2021-DCGI/JNE.
            Financiación del estudio: Instituto de Estudios Peruanos (IEP). Tamaño de la población objeto de
            estudio: Población de 18 años a más con DNI: 24.760.062 personas (RENIEC, Padrón Electoral de las
            Elecciones Regionales y Municipales 2022). Tamaño y distribución de la muestra: 1211 entrevistados
            distribuidos en 24 departamentos, 148 provincias y 411 distritos. Margen de error: ± 2.8 pts. para
            los resultados a nivel nacional. Nivel de confianza: 95% considerando una varianza máxima en las
            proporciones poblacionales (p=q=0.5). Representatividad provincial: 95,74%. Fuente de marco muestral:
            Relación de cabeceras de operadores de móviles, Ministerio de Transportes y Comunicaciones (2019).
            Tipo de muestreo aplicado: Muestreo probabilístico, con método de selección aleatoria de números de
            celular, encuesta telefónica. Puntos de muestreo: Lima Metropolitana, Perú urbano, Perú rural. Fecha
            de campo: del 7 al 12 de enero de 2023. Página web: www.iep.org.pe"
        />
        <ButtonBack/>
      </Container>
    </LayoutInterna>
  )
}

export default Enero

const Container = styled.div`
  width: 100%;
  height: auto;
`