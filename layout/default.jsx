import styled from 'styled-components'

import NextHead from 'next/head'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Port from '../components/Port'

const Layout = ({children}) => {
  return(
    <>
      <NextHead>
        <link rel="preconnect" href="https://fonts.gstatic.com"/>
        <link rel="apple-touch-icon" sizes="180x180" href="https://cdn.larepublica.pe/apple-touch-icon.png"/>
        <link rel="icon" type="image/png" sizes="32x32" href="https://cdn.larepublica.pe/favicon-32x32.png"/>
        <link rel="icon" type="image/png" sizes="16x16" href="https://cdn.larepublica.pe/favicon-16x16.png"/>
        <link rel="icon" type="image/x-icon" href="https://cdn.larepublica.pe/favicon.ico"></link>
        <link rel="canonical" href="https://especiales.larepublica.pe/encuesta-iep-peru-aprobacion-desaprobacion-presidencia-congreso-de-la-republica-ejecutivo-legislativo"/>
        <title>Encuesta IEP Perú: Aprobación y desaprobación de la presidenta Dina Boluarte y el Congreso</title>
        <meta name="title" content="Encuesta IEP Perú: Aprobación y desaprobación de la presidenta Dina Boluarte y el Congreso "/>
        <meta name="description" content="Última encuesta de IEP Perú: Revisa aquí los sondeos de opinión de la ciudadanía sobre la coyuntura política y otros temas para La República."/>
        <meta httpEquiv="content-language" content="es"/>
        <meta name="author" content="LR Especiales"/>

        <meta name="googlebot" content="index,follow"/>
        <meta name="bingbot" content="index,follow"/>
        <meta name="robots" content="max-image-preview:large"/>
        <link rel="alternate" type="application/rss+xml" href="https://cdn.mysitemapgenerator.com/shareapi/rss/2806433641"/>
      
        {/* Metadatos Twitter */}
        <meta name="twitter:title" content="Encuesta IEP Perú: Aprobación y desaprobación de la presidenta Dina Boluarte y el Congreso"/>
        <meta name="twitter:description" content="Última encuesta de IEP Perú: Revisa aquí los sondeos de opinión de la ciudadanía sobre la coyuntura política y otros temas para La República." />
        <meta name="twitter:image" content="https://origin.cronosmedia.glr.pe/large/2023/01/27/lg_63d43fffab3d5925b56458be.jpg" />
        <meta name="twitter:url" content="https://especiales.larepublica.pe/encuesta-iep-peru-aprobacion-desaprobacion-presidencia-congreso-de-la-republica-ejecutivo-legislativo" />
        <meta property="twitter:image" content="https://origin.cronosmedia.glr.pe/large/2023/01/27/lg_63d43fffab3d5925b56458be.jpg" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@larepublica_pe" />
        <meta name="twitter:creator" content="@larepublica_pe" />
        <meta name="twitter:width" content="828" />
        <meta name="twitter:height" content="450" />

        {/* Metadatos Facebook */}
        <meta property="og:title" content="Encuesta IEP Perú: Aprobación y desaprobación de la presidenta Dina Boluarte y el Congreso"/>
        <meta property="og:description" content="Última encuesta de IEP Perú: Revisa aquí los sondeos de opinión de la ciudadanía sobre la coyuntura política y otros temas para La República."/>
        <meta property="og:image" content="https://origin.cronosmedia.glr.pe/large/2023/01/27/lg_63d43fffab3d5925b56458be.jpg"/>
        <meta property="og:url" content="https://especiales.larepublica.pe/encuesta-iep-peru-aprobacion-desaprobacion-presidencia-congreso-de-la-republica-ejecutivo-legislativo" />
        <meta property="og:type" content="website" />
        <meta property="og:image:width" content="828"/>
        <meta property="og:image:height" content="450"/>
        <meta property="og:site_name" content="La República" />
        <meta property="fb:pages" content="145820412845"/>
        <meta property="fb:app_id" content="602624269799095"/>
      </NextHead>
      <Header/>
      <Port/>
      <Wrapper>
        <ContainerMain>
          {children}
        </ContainerMain>
      </Wrapper>
      <Footer/>
    </>
  )
}

export default Layout

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
`
const ContainerMain = styled.main`
  /* box-shadow: 1px 11px 10px 5px rgba(0,0,0,0.7); */
  /* max-width: 1440px; */
  width: 100%;
  margin: auto;
  padding: 0;
  min-height: calc(100vh - 450px);
  font-family: Arial, Helvetica, sans-serif;
  background-color: white;
`
