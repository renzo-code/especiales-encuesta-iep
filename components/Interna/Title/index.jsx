import React from 'react'
import styled from 'styled-components'

const Title = ({ title, bajada }) => {
  return (
    <>
      <PrincipalTitle>{title}</PrincipalTitle>
      <br></br>
      <Bajada>{bajada}</Bajada>
      <br></br><br></br><br></br>
    </>
  )
}

export default Title

const PrincipalTitle = styled.h1`
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
`
const Bajada = styled.h2`
  font-size: 18px;
  font-style: oblique;
  line-height: 25px;
`