import React from "react"
import styled from "styled-components"


import Layout from "../layout/default"
import BlockEncuestas from "../components/BlockEncuesta"
import Port from "../components/Port"


const Home = () => {

  return(
    <>
      <Layout>
      <Port/>
        <BlockEncuestas
          title="Enero 2023"
        />
      </Layout>
    </>

  )
}

export default Home