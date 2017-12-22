import styled from 'styled-components'
import '../global-style'

const Button = styled.button`
    font-family: 'My custom family';
    border-radius: 3px;
    padding: 0.5em ;
    background-color: transparent;
    color: #FFA644;
    border: 2px solid  #FFA644;
    font-size: 2vw;
    transition:all 350ms ease-in-out;
    &:hover {
        background-color: #FFA644; 
        color: #002D40;
        transition:scale(1.6);
        cursor:pointer;	
        border:0px;
    }

`;

export default Button;