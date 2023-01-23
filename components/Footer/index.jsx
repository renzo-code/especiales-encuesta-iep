import React from 'react'
import styled from 'styled-components'

const Footer = () => {
  return (
    <>
      <Content>
        <Wrapper>
          <Tip>Redacción:</Tip><Text>LR Especiales</Text>
        </Wrapper>
        <Wrapper>
          <Tip>Coordinación y gráficas:</Tip><Text>LR Especiales</Text>
        </Wrapper>
        <Wrapper>
          <Tip>Desarrollo Web:</Tip><Text>Renzo Neira</Text>
        </Wrapper>
        <Wrapper>
          <Tip>Edición:</Tip><Text>LR Especiales</Text>
        </Wrapper>
        <br></br>
        <Text>© Grupo La República</Text>
        <Text>Todos los derechos reservados.</Text>
        <br></br><br></br>
      </Content>
    </>
  )
}

export default Footer

const Content = styled.div`
  height: auto;
  width: 100%;
  margin: 0 auto;
  padding: 30px 0 0;
  background-color: #EEEEEE;
`
const Tip = styled.h2`
  text-align: center;
  font-size: 17px;
  font-weight: bold;
`
const Text = styled.h2`
  text-align: center;
  font-size: 14.5px;
  font-weight: 100;
  padding-left: 5px;
  color: #545b6a;
`
const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 2px;
`