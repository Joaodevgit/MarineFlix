import styled from "styled-components";

const Button = styled.button`
    color: var(--white);
    border: 1 px solid var (--white);
    box-sizing: border-box;
    cursor: pointer;
    padding: 16 px 24 px;
    font-style: normal;
    font-weight: bold;
    font-size: 16 px;
    outline: none;
    border-radius: 5 px;
    text-decoration: none;
    display: inline-block;
    transition: opacity .3s;
    &:hover,
    &:focus {
      opacity: .5;
    }
`;

export default Button;