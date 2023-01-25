/* eslint-disable @next/next/no-html-link-for-pages */
import React from 'react'
import styled from 'styled-components'

const NoticeDestacada = () => {
  return (
    <>
      <Container>
        <Blockuot>
          <Redirect href="/01-23-enero">
            <WrapperImage>
              <img src="https://larepublica.cronosmedia.glr.pe/original/2022/12/13/63861499209f4014c101d68e.jpg" />
            </WrapperImage>
            <SectionTwo>
              <div className='wrap-content'>
                <WrapperTitle>
                  <Title>ÚLTIMA ENCUESTA</Title>
                </WrapperTitle>
                  <WrapperText>
                    <h2>
                      El 68,2% de las mesas de diálogo por conflictos sociales se instaló después de algún hecho de violencia
                    </h2>
                  </WrapperText>
              </div>
            </SectionTwo>
            </Redirect>
        </Blockuot>
      </Container>
      <style jsx="true">{`
        @media (max-width: 830px){
          .wrap-content{
            justify-content: flex-start;
          }
        }
      `}</style>
    </>
  )
}

export default NoticeDestacada

const Container = styled.div`
  display: flex;
  align-items: center;
  min-height: 350px;
  height: auto;
  width: 100%;
  margin: 20px auto;
  background-image: url("/images/fondo-destacado.jpg");
  background-repeat: no-repeat;
  background-size: cover;
`
const Blockuot = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  height: auto;
  margin: 20px;
`
const Redirect = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  text-decoration: none;
`
const SectionTwo = styled.div`
  display: flex;
  align-items: center;
  height: auto;
  line-height: 50px;
  width: 300px;
  margin-left: 20px;

  @media (max-width: 830px){
    width: 100%;
    margin-left: 0;
  }
`
const WrapperTitle = styled.div`
  width: 300px;
  height: 40px;
  line-height: 0px;
  background-color: red;
  margin-bottom: 40px;

  @media (max-width: 830px){
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 10px 0;
  }
`
const Title = styled.h2`
  font-size: 22px;
  text-align: center;
  padding: 20px 0;
  color: white;
  font-weight: 900;
`
const BlockNotice = styled.div`
  height: auto;
  /* max-width: 400px; */
  width: auto;
  background-color: red;
  /* margin: 1px auto;   */
`
const WrapperImage = styled.div`
  height: auto;
  width: 450px;
  overflow: hidden;

  @media (max-width: 830px){
    width: 100%;
  }

  img {
    height: auto;
    width: 100%;
    object-fit: cover;

    &:hover{
      transition: 0.9s;
      transform: scale(1.1);
      filter: grayscale(1);
      cursor: pointer;
    }
  }
`
const WrapperText = styled.div`
  /* padding: 15px;
  bottom: 0; */
  height: auto;
  width: 100%;
  
  h2{
    font-size: 20px;
    color: white;
    letter-spacing: 0.5px;
    width: 100%;
    line-height: 22px;
    font-weight: 100;
    /* text-shadow: rgb(0 0 0) 0px 0px 0.2em, rgb(0 0 0) 0px 0px 0.2em, rgb(0 0 0) 0px 0px 0.2em; */
    /* background-color: rgba(0,0,0,0.5); */

    &:hover{
      text-decoration: underline;
      cursor: pointer;
    }

    @media (max-width: 500px) {
      font-size: 16px;
      line-height: 19px;
    }
  }
`