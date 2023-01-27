import React from 'react'

import styled from 'styled-components'

const Port = () => {
  return(
    <>
      <Content>
        <WrapperImage>
          <img src='./images/portada.png' alt='' />
        </WrapperImage>
        <WrapperText>
          <h1>ENCUESTA IEP: ¿QUIERES SABER QUE OPINA LA POBLACIÓN SOBRE LOS TEMAS TAN CRÍTICOS QUE PASA EL PERÚ EN ESTOS MOMENTOS?</h1>
        </WrapperText>
      </Content>
    </>
  )
}

export default Port

const Content = styled.div`
  width: 100% !important;
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
  }
`
const WrapperText = styled.div`
  position: absolute;
  bottom: 0px;
  padding: 30px 25px;
  background: linear-gradient(180deg, transparent 0%, #000 15%);

  @media (max-width: 1000px) {
    padding: 15px 25px;
  }
  @media (max-width: 670px) {
    padding: 15px 10px;
    background: linear-gradient(180deg, transparent 0%, #000 40%);
  }
  @media (max-width: 530px) {
    background: linear-gradient(180deg, transparent 0%, #000 60%);
    padding: 5px 5px;
  }

  h1 {
    font-size: 40px;
    line-height: 1.3;
    color: white;
    font-family: sans-serif;
    font-weight: bold;
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
    @media (max-width: 530px) {
      font-size: 20px;
      line-height: 20px;
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