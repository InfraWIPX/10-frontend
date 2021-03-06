import React from 'react'
import styled from 'styled-components'

const Wip = styled.img`
  width: 50%;
  position: relative;
  left: 25vw;
  top:-20vh;
  @media(max-width: 720px){
    width: 90%;
	  left: 5vw;
  }
`
const Logo = () => (
	<Wip src="../../static/image/LOGO-TH.svg" />
)

export default Logo;