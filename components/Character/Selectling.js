import React from 'react'
import Link from 'next/link'
import styled from 'styled-components'
import Ling from './Ling'
import Teamling from './Teamling'
import Bgling from './Bgling'

const Box = styled.div`
    background-color:transparent;
    width: 100%;
    height: 50vh;
    max-height: 100%
    
`
const Text = styled.h3`
    padding-right:20%;
    padding-top: 5%;
    padding-bottom:0px;
    text-align: right;
    @media (max-width: 576px) {
        font-size: 4rem;
    }
`
const Choose = styled.h5`
    font-family: "Niramit";
    color : #FFA644;
    padding-top:0px;
    padding-right:20%;
    padding-bottom:11%;
    text-align: right;
    @media (max-width: 576px) {
        font-size: 3rem;
    }
`

const Select =()=> (
    <div>
        <Link href="/what-l">
        <Bgling>   
            <Box>
                <Teamling/>
                <Choose>เลือก</Choose>  
                <Ling/>             
            </Box>
            </Bgling>
        </Link>
    </div>
)
export default Select;
