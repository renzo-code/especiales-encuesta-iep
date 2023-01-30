import Document, { Html, Head, Main, NextScript } from 'next/document'
import { ServerStyleSheet } from 'styled-components'

export default class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const sheet = new ServerStyleSheet()
    const originalRenderPage = ctx.renderPage

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: (App) => (props) =>
            sheet.collectStyles(<App {...props} />)
        })

      const initialProps = await Document.getInitialProps(ctx)
      return {
        ...initialProps,
        styles: (
          <>
            {initialProps.styles}
            {sheet.getStyleElement()}
          </>
        )
      }
    } finally {
      sheet.seal()
    }
  }

  render() {
    return (
      <Html lang="es">
        <Head>
          <link href="https://fonts.googleapis.com/css2?family=Public+Sans&display=swap" rel="stylesheet" />
          
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
                  }{
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

          {/* SCHEMA NEW ARTICLE */}
          <script 
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html:`
                {
                  "@context": "https://schema.org",
                  "@type": "NewsArticle",
                  "mainEntityOfPage": {
                    "@type": "WebPage",
                    "@id": "https://especiales.larepublica.pe/encuesta-iep-peru-aprobacion-desaprobacion-presidencia-congreso-de-la-republica-ejecutivo-legislativo"
                  },
                  "headline": "TODAS LAS ENCUESTAS IEP",
                  "image": "https://origin.cronosmedia.glr.pe/large/2023/01/27/lg_63d43fffab3d5925b56458be.jpg",  
                  "author": {
                    "@type": "Organization",
                    "name": "La República",
                    "url": "https://larepublica.pe/"
                  },  
                  "publisher": {
                    "@type": "Organization",
                    "name": "La República",
                    "logo": {
                      "@type": "ImageObject",
                      "url": "https://larepublica.pe/static/lr/lr_author.png"
                    }
                  },
                  "datePublished": "2023-01-29",
                  "dateModified": "2023-01-30"
                }
              `
            }}
          ></script>
          {this.props.styles}
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}