
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
    transition:all 350ms ease-in-out;
    box-shadow:  0.3vw 0.9vh #999 ;
    color : white;
    transition: .2s transform ease-in-out;
    background-color: transparent;
    cursor: pointer;
    &:hover{
        border: 0.2vw solid transparent;
        color: #002d40;
        transform: scale(1.05);
        background-color:#FFA644;
        ;
        
    }
    margin-top: 3%;
`
export default Button