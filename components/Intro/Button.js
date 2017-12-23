import styled from 'styled-components'
import '../global-style'

const Button = styled.button`
    font-family: 'My custom family';
    display: inline-block;
    font-size: 2vw;
    cursor: pointer;
    text-align: center;
    text-decoration: none;
    outline: none;
    border-radius: 15px;
    padding: 0.5em ;
    background-color: #FFA644;
    color: #002d40;
    border: none;
    transition:all 350ms ease-in-out;
    box-shadow:  0.3vw 0.9vh #999 ;
    color : white;
    &:hover {
        background-color: #E4943B; 
        transition:scale(1.1);
    }
    &:active{
        background-color: #E4943B;
        box-shadow: 0.1vw 0.5vh #666;
        transform: translateY(0.4vh);
    }

`;

export default Button;