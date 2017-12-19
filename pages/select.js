import React from 'react'
import Link from 'next/link'
import Selectling from '../components/Selectling'
import Selectyak from '../components/Selectyak'
import styled from 'styled-components'
const Back = styled.div`
  width: 100vw;
  height: 100vh;
` 
const Index = ()=> (

<div className ="container-fluid" >      
    <Back className="row">
      <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
        <Selectyak/>
      </div>
      <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
        <Selectling/>      
      </div>
    </Back>
  
</div>
)

export default Index