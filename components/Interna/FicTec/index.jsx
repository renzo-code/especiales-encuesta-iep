import React from 'react'
import styled from 'styled-components'

const FicTec = ({ title, desciption }) => {
  return (
    <>
      <FTec>
        <h2>{title}</h2>
        <h3>{desciption}</h3>
      </FTec>
    </>
  )
}

export default FicTec

const FTec = styled.div`
  height: auto;
  width: 100%;
  padding-bottom: 20px;

  h2{
    font-size: 15px;
    padding-bottom: 15px;
    color: #212529;
    font-weight: bold;
  }

  h3{
    font-size: 13px;
    line-height: 1.5;
    color: #555;
  }
`