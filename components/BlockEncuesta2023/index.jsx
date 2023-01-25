import React, { useState, useEffect, useRef } from "react"
import styled from "styled-components"
import NoticeCard from "../NoticeCard"
// import Link from "next/link"

const BlockEncuesta2023 = () => {

  const [toggle, setToggle] = useState(false)
  const [heightEl, setHeightEl] = useState();

  const refHeight = useRef()

  useEffect(() => {
    console.log(refHeight);
    setHeightEl(`${refHeight.current.scrollHeight}px`)
  }, [])

  const toggleState = () => {
    setToggle(!toggle)
  }

  console.log(toggle);

  return (
    <>
      <Container>
        <div className="accordion">

          <button
            onClick={toggleState}
            className="accordion-visible">
            <span>Enero 2023</span>
            <img
              className={toggle && "active"}
              src='./images/chevron.svg' />
          </button>

          <div
            className={toggle ? "accordion-toggle animated" : "accordion-toggle"}
            style={{ height: toggle ? `${heightEl}` : "0px" }}
            ref={refHeight}
          >
            <NoticeCard
              title="El 68,2% de las mesas de diálogo por conflictos sociales se instaló después de algún hecho de violencia"
              image="https://larepublica.cronosmedia.glr.pe/original/2022/12/13/63861499209f4014c101d68e.jpg"
              redirect="https://data.larepublica.pe/encuesta-iep-aprobacion-desaprobacion-peru-presidente-congreso-de-la-republica/setiembre-2022/"
            />
            <NoticeCard
              title="El 68,2% de las mesas de diálogo por conflictos sociales se instaló después de algún hecho de violencia"
              image="https://larepublica.cronosmedia.glr.pe/data/2022/10/28/0h97e482h5-informe-congreso-sodalicio.png"
              redirect="https://data.larepublica.pe/encuesta-iep-aprobacion-desaprobacion-peru-presidente-congreso-de-la-republica/julio-2022/"
            />
          </div>

        </div>
      </Container>
      <style jsx="true">{`      
        .accordion {
          max-width: 90%;
          margin: 0 auto;
          border-radius: 3px;
          background: #f1f1f1;
        }

        .accordion-visible {
          background: black;
          width: 100%;
          color: #fff;
          cursor: pointer;
          border: 1px solid #474d9b;;
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 7px 15px;
          border-top-left-radius: 3px;
          border-top-right-radius: 3px;
        }
        .accordion-visible span {
          padding: 15px 0;
          font-size: 20px;
        }
        .accordion-visible img {
          width: 20px;
          transform: rotate(-90deg);
          transition: transform 0.2s ease-in-out;
        }
        .accordion-visible img.active {
          transform: rotate(0deg)
        }

        .accordion-visible h2 {
          font-size: 20px;
        }

        .accordion-toggle {
          height: 0px;
          font-size: 18px;
          opacity: 0;
          transition:  
          opacity 0.3s ease-in-out,
          height 0.3s 0.3s ease-in-out;
          color: #333;
          border-bottom-left-radius: 3px;
          border-bottom-right-radius: 3px;
        }

        .animated {
          opacity: 1;
          transition:  
          height 0.3s ease-in-out,
          opacity 0.3s 0.3s ease-in-out;
          display: flex;
          flex-wrap: wrap;
          justify-content: space-around;
          align-items: center;
        }

        .accordion-toggle p {
          margin: 0;
          padding: 22px 15px;
          pointer-events: none;
          line-height: 1.3;
        }
        .redirect{
          display: flex;
          justify-content: center;
          aling-items: center;
          width: 100%;
        }
      `}</style>
    </>
  )
}

export default BlockEncuesta2023

const Container = styled.div`
  height: 100%;
  min-height: 50px;
  width: 100%;
  /* background-color: blue; */
  margin: 20px auto;
`
const BlockNotice = styled.div`
  height: auto;
  max-width: 400px;
  width: 100%;
  /* background-color: red; */
  margin: 1px auto;

`
const WrapperImage = styled.div`
  height: 100%;
  width: 100%;
  overflow: hidden;

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
  padding: 15px;
  bottom: 0;
  
  h2{
    font-size: 20px;
    color: black;
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