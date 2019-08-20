import styled from 'styled-components'

const Button = styled.button`
    background-color: blue;
    color: white;
    width: 100%;
    font-size: 16px;
    padding: 10px;
    border: none;
    border-radius: 3px;
    margin: 10px 0;
    box-shadow: 0 1px 1px 0 rgba(0, 0, 0, 0.4);

    :disabled{
        background-color: rgba(0, 0, 0, 0.85);
    }

    :active{
        outline: none;

    }
`

export default Button;