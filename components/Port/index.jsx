import React from 'react'

import styled from 'styled-components'

const Port = () => {
  return(
    <>
      <Content>
        <WrapperImage>
          <img src='https://especiales.larepublica.pe/congreso-votacion/img/portada-congreso.jpg' alt='' />
        </WrapperImage>
        <WrapperText>
          <h1>ENCUESTA IEP - LA REPUBLICA : ¿QUIERES SABER QUE OPINA LA POBLACIÓN SOBRE LOS TEMAS TAN CRÍTICOS QUE PASA EL PERÚ EN ESTOS MOMENTOS?</h1>
          {/* <h2>
            Bajada bajada bajada bajada bajada
            Bajada bajada bajada bajada bajada
            Bajada bajada bajada bajada bajada
            Bajada bajada bajada bajada bajada
            Bajada bajada bajada 
            Bajada bajada bajada bajada bajada
            Bajada bajada bajada bajada bajada
            Bajada bajada bajada bajada bajada
            Bajada bajada bajada bajada bajada
            Bajada bajada bajada 
            Bajada bajada bajada 
          </h2> */}
        </WrapperText>
      </Content>
    </>
  )
}

export default Port

const Content = styled.div`
  width: 100%;
  max-height: 100vw;
  height: 100%;
  background-color: black;
  position: relative;
`
const WrapperImage = styled.div`
  max-height: 95vh;
  height: 100%;
  width: 100%;
  margin: 0 auto;
  display: flex;
  justify-content: center;

  img {
    object-fit: cover;
    width: 100%;
    height: auto;
    /* height: calc(100vh - 70px) */
  }
`
const WrapperText = styled.div`
  position: absolute;
  bottom: 0px;
  padding: 40px 25px;
  background: linear-gradient(180deg, transparent 0%, #000 25%);

  @media (max-width: 1000px) {
    padding: 15px 25px;
  }
  @media (max-width: 670px) {
    padding: 15px 10px;
    background: linear-gradient(180deg, transparent 0%, #000 40%);
  }

  h1 {
    font-size: 40px;
    line-height: 1.3;
    color: white;
    padding-bottom: 20px;
    font-family: sans-serif;
    text-shadow: rgb(0 0 0) 0px 0px 0.2em, rgb(0 0 0) 0px 0px 0.2em, rgb(0 0 0) 0px 0px 0.2em;

    @media (max-width: 1000px) {
      font-size: 30px;
      line-height: 1.1;
      padding-bottom: 10px;
    }
    @media (max-width: 670px) {
      font-size: 25px;
      line-height: 27px;
    }
    @media (max-width: 450px) {
      font-size: 23px;
      line-height: 23px;
      padding-bottom: 0px;
    }
  }
  h2 {
    font-size: 2rem;
    line-height: 1.4;
    color: white;
    font-weight: 400;
    
    @media (max-width: 1000px) {
      font-size: 1.6rem;
      line-height: 1.2;
    }
    @media (max-width: 670px) {
      font-size: 1.4rem;
    }
    @media (max-width: 550px) {
      display: none;
    }
  }
`