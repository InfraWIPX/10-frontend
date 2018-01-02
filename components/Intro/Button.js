
import styled from 'styled-components'
import '../global-style'

const Button = styled.button`
    font-family: 'Niramit';
    border: 0.2vw solid currentColor;
    border-radius: 3rem;
    color: #FFA644;
    font-size: 2em;
    overflow: hidden;
    padding: 0.2em 1.5em;
    position: relative;
    text-decoration: none;
    transition: .2s transform ease-in-out;
    z-index: 0;
    background-color: transparent;
    cursor: pointer;
    width: 10%;
    margin-top: 1%;

    &:hover{
        border: 0.2vw solid transparent;
        color: #002d40;
        transform: scale(1.05);
        background-color:#FFA644;
        ;
        
    }
`
