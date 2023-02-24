import React from "react"
import styled from "styled-components"

import NextHead from "next/head"
import Script from "next/script"

import LayoutInterna from "layout/internas"
import FicTec from "components/Interna/FicTec"
import Title from "components/Interna/Title"
import Question from "components/Interna/Question"
import ButtonBack from "components/Interna/ButtonBack"

const Enero2 = () => {
  return (
    <>
      <LayoutInterna>
        <NextHead>
          <link rel="preconnect" href="https://fonts.gstatic.com" />
          <link href="https://fonts.googleapis.com/css2?family=Public+Sans&display=swap" rel="stylesheet" />
          <link rel="apple-touch-icon" sizes="180x180" href="https://cdn.larepublica.pe/apple-touch-icon.png" />
          <link rel="icon" type="image/png" sizes="32x32" href="https://cdn.larepublica.pe/favicon-32x32.png" />
          <link rel="icon" type="image/png" sizes="16x16" href="https://cdn.larepublica.pe/favicon-16x16.png" />
          <link rel="icon" type="image/x-icon" href="https://cdn.larepublica.pe/favicon.ico"></link>
          <link rel="canonical" href="https://especiales.larepublica.pe/encuesta-iep-peru-aprobacion-desaprobacion-presidencia-congreso-de-la-republica-ejecutivo-legislativo/enero-2023-II" />
          <title>Encuesta IEP 2023 de enero II: el 73% de los peruanos prefiere el adelanto de elecciones para este año</title>
          <meta name="title" content="Encuesta IEP 2023 de enero II: el 73% de los peruanos prefiere el adelanto de elecciones para este año" />
          <meta name="description" content="Casi 9 personas, de cada 10 encuestados, consideran que se deben adelantar las elecciones generales para renovar a la presidenta Dina Boluarte y al Congreso de la República. Del total, un 73% cree que las votaciones deberían ser este 2023, de acuerdo a la medición de finales de enero realizada por el Instituto de Estudios Peruanos (IEP)." />
          <meta httpEquiv="content-language" content="es" />
          <meta name="author" content="LR Especiales" />

          <meta name="googlebot" content="index,follow" />
          <meta name="bingbot" content="index,follow" />
          <meta name="robots" content="max-image-preview:large" />
          <link rel="alternate" type="application/rss+xml" href="https://cdn.mysitemapgenerator.com/shareapi/rss/2806433641" />

          {/* Metadatos Twitter */}
          <meta name="twitter:title" content="Encuesta IEP 2023 de enero II: el 73% de los peruanos prefiere el adelanto de elecciones para este año" />
          <meta name="twitter:description" content="Casi 9 personas, de cada 10 encuestados, consideran que se deben adelantar las elecciones generales para renovar a la presidenta Dina Boluarte y al Congreso de la República. Del total, un 73% cree que las votaciones deberían ser este 2023, de acuerdo a la medición de finales de enero realizada por el Instituto de Estudios Peruanos (IEP).  " />
          <meta name="twitter:image" content="https://origin.cronosmedia.glr.pe/large/2023/01/28/lg_63d5b78afbf2ae006c55ba7a.jpg" />
          <meta name="twitter:url" content="https://especiales.larepublica.pe/encuesta-iep-peru-aprobacion-desaprobacion-presidencia-congreso-de-la-republica-ejecutivo-legislativo/enero-2023-II" />
          <meta property="twitter:image" content="https://origin.cronosmedia.glr.pe/large/2023/01/28/lg_63d5b78afbf2ae006c55ba7a.jpg" />
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:site" content="@larepublica_pe" />
          <meta name="twitter:creator" content="@larepublica_pe" />
          <meta name="twitter:width" content="828" />
          <meta name="twitter:height" content="450" />

          {/* Metadatos Facebook */}
          <meta property="og:title" content="Encuesta IEP 2023 de enero II: el 73% de los peruanos prefiere el adelanto de elecciones para este año" />
          <meta property="og:description" content="Casi 9 personas, de cada 10 encuestados, consideran que se deben adelantar las elecciones generales para renovar a la presidenta Dina Boluarte y al Congreso de la República. Del total, un 73% cree que las votaciones deberían ser este 2023, de acuerdo a la medición de finales de enero realizada por el Instituto de Estudios Peruanos (IEP).  " />
          <meta property="og:image" content="https://origin.cronosmedia.glr.pe/large/2023/01/28/lg_63d5b78afbf2ae006c55ba7a.jpg" />
          <meta property="og:url" content="https://especiales.larepublica.pe/encuesta-iep-peru-aprobacion-desaprobacion-presidencia-congreso-de-la-republica-ejecutivo-legislativo/enero-2023-II" />
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
            title="El 73% de peruanos considera que lo más conveniente para el país es adelantar las elecciones para este 2023, según IEP"
            bajada="Casi 9 personas, de cada 10 encuestados, consideran que se deben adelantar las elecciones generales 
            para renovar a la presidenta Dina Boluarte y al Congreso de la República. Del total, un 73% cree que 
            las votaciones deberían ser este 2023, de acuerdo a la medición de finales de enero realizada por el 
            Instituto de Estudios Peruanos (IEP)."
            key={1}
          />

          <Question
            key={0}
            title="Lo más conveniente para el país"
            bajada="El adelanto de elecciones generales es la opción más conveniente para las personas encuestadas, con 
            un 93% de favoritismo. De ese grupo, un 73% considera que tal evento debe ocurrir en el 2023, 
            mientras que un 20% opina que debería ser en el 2024. Solo un 5% señala que se deben dar en el 2026."
          >
            <div className="flourish-embed flourish-chart" data-src="visualisation/12578215">
              <Script src="https://public.flourish.studio/resources/embed.js"></Script>
            </div>
          </Question>

          <Question
            key={1}
            title="Adelanto de elecciones para este 2023 por segmentos"
            bajada="Específicamente, sobre la opción de adelantar las elecciones generales para el 2023, esta toma más 
            fuerza en el Perú rural con un 83%, en la macrozona sur con un 84%, en el nivel socioeconómico D/E 
            con un 81% y en el rango de edad entre 18 a 24 (77%) y 25 a 39 años (78%)."
          >
            <div className="flourish-embed" data-src="story/1812981">
              <Script src="https://public.flourish.studio/resources/embed.js"></Script>
            </div>
          </Question>

          <Question
            key={2}
            title="Aprobación de Dina Boluarte"
            bajada="En tanto, un 17% de las personas encuestas respalda la gestión de la presidenta Dina Boluarte, un 2%
            menos que en la medición de mediados de enero. Sin embargo, su desaprobación aumenta en cinco puntos
            porcentuales. Así, pasa de un 71% a un 76% para finales del mes."
          >
            <div className="flourish-embed flourish-chart" data-src="visualisation/12578575">
              <Script src="https://public.flourish.studio/resources/embed.js"></Script>
            </div>
          </Question>

          <Question
            key={3}
            title="Aprobación de Dina Boluarte por segmentos"
            bajada="La desaprobación de Dina Boluarte se acentúa en el Perú rural, en el cual alcanza un 82%, mientras
            que en el Perú urbano obtiene un 78% y en Lima Metropolitana un 68%. Dividido por zonas, el sur (88%)
            es donde más rechazo logra. En tanto, por nivel socioeconómico, el sector D/E es el grupo que más
            desaprueba su gestión con un 82%."
          >
            <div className="flourish-embed" data-src="story/1812998">
              <Script src="https://public.flourish.studio/resources/embed.js"></Script>
            </div>
          </Question>

          <Question
            key={4}
            title="Aprobación del presidente del Consejo de Ministros"
            bajada="El rechazo al Ejecutivo también se manifiesta en la desaprobación al presidente del Consejo de
            Ministros, Alberto Otárola. Un 71% de las personas encuestadas no aprueba su desempeño y tan solo
            un 20% está de acuerdo con sus decisiones en el cargo."
          >
            <div className="flourish-embed flourish-chart" data-src="visualisation/12578688">
              <Script src="https://public.flourish.studio/resources/embed.js"></Script>
            </div>
          </Question>

          <Question
            key={5}
            title="Aprobación del Congreso de la República"
            bajada="Por su parte, el Congreso sigue con una tendencia alta en su desaprobación. En la medición de la
            encuesta del IEP de finales de enero, el Legislativo obtiene un 89% de rechazo, mientras que solo
            un 7% respalda su desempeño. Esta última cifra es la más baja aceptación desde su instalación a
            mediados de julio de 2021."
          >
            <div className="flourish-embed" data-src="story/1813002">
              <Script src="https://public.flourish.studio/resources/embed.js"></Script>
            </div>
          </Question>

          <Question
            key={6}
            title="Aprobación del presidente del Congreso"
            bajada="De igual manera, José Williams, presidente del Parlamento, continúa con la tendencia de desaprobación
            sobre el Legislativo. Así, para finales de enero obtiene un 76% de disconformidad en su desempeño."
          >
            <div className="flourish-embed flourish-chart" data-src="visualisation/12578744">
              <Script src="https://public.flourish.studio/resources/embed.js"></Script>
            </div>
          </Question>

          <Question
            key={7}
            title="El futuro de la presidenta Dina Boluarte"
            bajada="Un mayoritario 74% considera que Dina Boluarte debe renunciar a la presidencia del país, aunque un
            24% aún piensa que debe mantenerse como jefa de Estado."
          >
            <div className="flourish-embed flourish-chart" data-src="visualisation/12578752">
              <Script src="https://public.flourish.studio/resources/embed.js"></Script>
            </div>
          </Question>

          <Question
            key={8}
            title="El futuro de Dina Boluarte por segmento"
            bajada="La opción de renuncia a la presidencia por parte de Dina Boluarte tiene una mayor acogida en el
            Perú rural (85%), en la macrozona sur (85%), en el nivel socioeconómico D/E (83%) y entre las
            personas de 18 a 24 años (78%) y de 25 a 39 (82%)."
          >
            <div className="flourish-embed" data-src="story/1813012">
              <Script src="https://public.flourish.studio/resources/embed.js"></Script>
            </div>
          </Question>

          <Question
            key={9}
            title="Posibles candidato/as para presidente"
            bajada="Ante la pregunta de posibles candidatos o candidatas para las próximas elecciones generales,
            un 59% de las personas encuestadas no sabe o no precisa su respuesta, un 24% menciona algún
            nombre y un 17% indica “ninguno, nadie”. Entre aquellos que señalan a alguien, 3,6% indican
            a Hernando de Soto, un 3,3% a Rafael López Aliaga y un 2,2% a Keiko Fujimori."
          >
            <div className="flourish-embed" data-src="story/1813022">
              <Script src="https://public.flourish.studio/resources/embed.js"></Script>
            </div>
          </Question>

          <FicTec
            title="FICHA TÉCNICA"
            desciption="Encuestadora: Instituto de Estudios Peruanos (IEP). Registro: 0393-REE/JNE – 281-2021-DCGI/JNE. 
              Financiación del estudio: Diario La República e Instituto de Estudios Peruanos (IEP). Tamaño de 
              la población objeto de estudio: Población de 18 años a más con DNI: 24.760.062 personas (RENIEC, 
              Padrón Electoral de las Elecciones Regionales y Municipales 2022). Tamaño y distribución de la 
              muestra: 1214 entrevistados distribuidos en 24 departamentos, 153 provincias y 432 distritos. 
              Margen de error: ± 2.8 pts. para los resultados a nivel nacional. Nivel de confianza: 95% 
              considerando una varianza máxima en las proporciones poblacionales (p=q=0.5). Representatividad 
              provincial: 95,63%. Fuente de marco muestral: Relación de cabeceras de operadores de móviles, 
              Ministerio de Transportes y Comunicaciones (2019). Tipo de muestreo aplicado: Muestreo 
              probabilístico, con método de selección aleatoria de números de celular, encuesta telefónica. 
              Puntos de muestreo: Lima Metropolitana, Perú urbano, Perú rural. Fecha de campo: del 21 al 25 
              de enero de 2023. Página web: www.iep.org.pe"
          />
        </Container>
        <ButtonBack/>
      </LayoutInterna>
    </>
  )
}

export default Enero2

const Container = styled.div`
  width: 100%;
  height: auto;
`