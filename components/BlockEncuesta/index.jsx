import React, { useState } from "react"
import styled from "styled-components"
import Link from "next/link"

const BlockEncuestas = ({ title }) => {

  return (
    <>
      <Container>
        <div className="row">
          <div className="col">
            <div className="tabs">
              <div className="tab">
                <input type="radio" id="rd1" name="rd" />
                <label className="tab-label" htmlFor="rd1">{title}</label>
                <div className="tab-content">
                <Link href="/enero-01-23" className="redirect">
                  <BlockNotice>
                    <WrapperImage>
                      <img src="https://larepublica.cronosmedia.glr.pe/original/2022/12/13/63861499209f4014c101d68e.jpg" />
                    </WrapperImage>
                    <TitleEncuesta>
                      Noticia Noticia Noticia Noticia 
                    </TitleEncuesta>
                  </BlockNotice>
                </Link>
                </div>
              </div>
              <div className="tab">
              <input type="radio" id="rd3" name="rd" />
              <label className="tab-label" htmlFor="rd3">Diciembre 2022</label>
              <div className="tab-content">
              <Link href="/diciembre-12-22">
                <BlockNotice>
                <WrapperImage>
                  <img src="https://larepublica.cronosmedia.glr.pe/data/2022/10/28/0h97e482h5-informe-congreso-sodalicio.png"/>
                </WrapperImage>
                <TitleEncuesta>
                  Noticia Noticia Noticia Noticia Noticia 
                </TitleEncuesta>
                </BlockNotice>
              </Link>
              </div>
            </div>
              <div className="tab">
                <input type="radio" id="rd4" name="rd" />
                <label htmlFor="rd4" className="tab-close">Cerrar</label>
              </div>
            </div>
          </div>
        </div>
        {/* <BlockNotice>
        </BlockNotice> */}
      </Container>
      <style jsx="true">{`      
        .top-row p {
        font-size: 115%;
        line-height: 22px;
        margin-top: 10px;
      }

      input {
        position: absolute;
        opacity: 0;
        z-index: -1;
      }

      .row {
        display: flex;
        width: 90%;
        margin: 0 auto;
        margin-top: 30px !important;
        max-width: 100%;
      }
      .row .col {
        flex: 1;
      }
      .row .col:last-child {
        margin-left: 1em;
        margin-right: 1em;
      }

      /* Accordion styles */
      .tabs {
        overflow: hidden;
        
      }

      .tab {
        width: 100%;
        color: black;
        overflow: hidden;
      }
      .tab-label {
        display: flex;
        justify-content: space-between;
        padding: 10px;
        background: black;
        font-size: 20px;
        cursor: pointer;
        border-bottom: 1px solid #EEEEEE;
        line-height: 25px;
        color: white;
        /* Icon */
      }
      .tab-label:hover {
        opacity: 0.8;
      }
      .tab-label::after {
        content: "❯";
        width: 1em;
        height: 1em;
        text-align: center;
        transition: all 0.35s;
      }
      .tab-content {
        max-height: 0;
        padding: 0 1em;
        color: #000;
        background: white;
        transition: all 0.35s;
        font-size: 115%;
        line-height: 22px;
      }
      .tab-close {
        display: flex;
        justify-content: flex-end;
        padding: 1em;
        cursor: pointer;
        font-size: 14px;
        font-weight: bold;
      }
      .tab-close:hover {
        opacity: 0.5;
      }

      input:checked + .tab-label {
        background: #EEEEEE;
        color: black;
      }
      input:checked + .tab-label::after {
        transform: rotate(90deg);
      }
      input:checked ~ .tab-content {
        max-height: 100vh;
        padding: 1em;
      }



      `}</style>
    </>
  )
}

export default BlockEncuestas

const Container = styled.div`
  height: 100%;
  min-height: 50px;
  width: 100%;
  /* background-color: blue; */
  margin: 20px auto;
`

const BlockNotice = styled.div`
  height: auto;
  width: 400px;
  /* background-color: red; */
  margin: 0 auto;
`
const WrapperImage = styled.div`
  height: 100%;
  width: 100%;
  overflow: hidden;

  img {
    height: 100%;
    width: 100%;
    object-fit: cover;

    &:hover{
      transition: 0.9s;
      /* transform: scale(1.1);
      filter: grayscale(1); */
    }
  }
  @media (max-width: 1000px) {
    margin-bottom: 20px;
  }
`
const TitleEncuesta = styled.h2`
  color: black;
  text-align: center;

  &:hover{
    text-decoration: underline;
    transition: 0.5s;
    opacity: 0.7;
  }
`