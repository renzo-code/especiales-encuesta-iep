import React from 'react'

import styled from 'styled-components'

const ButtonBack = () => {
  return (
    <Redirect 
      // href='https://especiales.larepublica.pe/encuesta-iep-peru-aprobacion-desaprobacion-presidencia-congreso-de-la-republica-ejecutivo-legislativo/'
      href='/'
    >
      <div>
        ENCUESTAS PASADAS
      </div>
    </Redirect>
  )
}

export default ButtonBack

const Redirect = styled.a`
  height: auto;

  div{
    height: auto;
    width: 200px;
    padding: 10px;
    line-height: 20px;
    font-size: 15px;
    background-color: #FF0000;
    color: white;
    border-radius: 3px;
    border: 2px solid #FF0000;
    text-align: center;
    cursor: pointer;
    margin: 10px auto 0;
    font-weight: bold;
    
    &:hover{
      transition: 0.7s;
      background-color: #F1F1F0;
      color: #FF0000;
      border: 2px solid #FF0000;
    }
  }
`