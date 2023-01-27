import styled from 'styled-components'

import NextHead from 'next/head'
import Header from '../components/Header'
import Footer from '../components/Footer'

const LayoutInterna = ({children}) => {
  return(
    <>
      <NextHead>
        <link rel="preconnect" href="https://fonts.gstatic.com"/>
        <link href="https://fonts.googleapis.com/css2?family=Public+Sans&display=swap" rel="stylesheet" />
        <link rel="apple-touch-icon" sizes="180x180" href="https://cdn.larepublica.pe/apple-touch-icon.png"/>
        <link rel="icon" type="image/png" sizes="32x32" href="https://cdn.larepublica.pe/favicon-32x32.png"/>
        <link rel="icon" type="image/png" sizes="16x16" href="https://cdn.larepublica.pe/favicon-16x16.png"/>
        <link rel="icon" type="image/x-icon" href="https://cdn.larepublica.pe/favicon.ico"></link>
      </NextHead>
      <Header/>
      <Wrapper>
        <ContainerMain>
          {children}
        </ContainerMain>
      </Wrapper>
      <Footer/>
    </>
  )
}

export default LayoutInterna

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  background-color: #F1F1F0;

  @media (max-width: 1180px )
  {
    padding: 0 20px;
  }
`
const ContainerMain = styled.main`
  /* box-shadow: 1px 11px 10px 5px rgba(0,0,0,0.7); */
  max-width: 1140px;
  background-color: #F1F1F0;
  width: 100%;
  margin: auto;
  padding: 0;
  min-height: calc(100vh - 450px);
  font-family: Arial, Helvetica, sans-serif;
  padding: 20px 0;
`
