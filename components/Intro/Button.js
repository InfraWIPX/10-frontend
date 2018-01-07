
import styled from 'styled-components'
import '../global-style'

const Button = styled.button`
    font-family: 'Niramit';
    border: 0.2vw solid currentColor;
    border-radius: 2rem;
    color: #FFA644;
    font-size: 1.7em;
    position: relative;
    overflow: hidden;
    padding: 0.5em 1.5em;
    text-decoration: none;
    transition: .2s transform ease-in-out;
    background-color: transparent;
    cursor: pointer;
    width: 15%;
    margin-top: 1%;
    &:hover{
        border: 0.2vw solid transparent;
        color: #002d40;
        transform: scale(1.05);
        background-color:#FFA644;
        ;
        
    }
    @media(max-width: 720px){
        font-size: 1.5em;
        padding: 0.2em 0.1em;
        margin-top: 3%;
        width: 40%;
    }
    
`
export default Button