import React from 'react'

import styled from 'styled-components'

const ButtonBack = () => {
  return (
    <Redirect href='https://especiales.larepublica.pe/encuesta-iep-peru-aprobacion-desaprobacion-presidencia-congreso-de-la-republica-ejecutivo-legislativo/'>
      <div>
        REGRESAR
      </div>
    </Redirect>
  )
}

export default ButtonBack

const Redirect = styled.a`
  height: auto;

  div{
    height: auto;
    width: 150px;
    padding: 10px;
    line-height: 20px;
    font-size: 15px;
    background-color: #FA1B49;
    color: white;
    border-radius: 3px;
    border: 2px solid #FA1B49;
    text-align: center;
    cursor: pointer;
    margin: 10px auto 0;
    
    &:hover{
      transition: 0.7s;
      background-color: white;
      color: #FA1B49;
      border: 2px solid #FA1B49;
    }
  }
`