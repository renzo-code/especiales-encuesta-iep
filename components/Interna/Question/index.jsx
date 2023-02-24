import React from 'react'
import styled from 'styled-components'

const Question = ({ title, bajada, children }) => {
  return (
    <>
      <SubTitle>{title}</SubTitle>
      <Parrf>{bajada}</Parrf>
      <WrapperGrafic>
        {children}
      </WrapperGrafic>
    </>
  )
}

export default Question

const SubTitle = styled.h2`
  font-size: 30px;
  font-weight: 800;
  margin-bottom: 20px;
`
const Parrf = styled.p`
  font-size: 17px;
  line-height: 23px;
  margin-bottom: 30px;
`
const WrapperGrafic = styled.div`
  max-width: 800px;
  width: 100%;
  height: auto;
  margin: 50px auto;

  .flourish-credit{
    display: none;
  }
`