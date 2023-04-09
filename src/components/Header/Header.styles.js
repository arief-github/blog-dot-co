import styled from "styled-components";

const Wrapper = styled.header`
    display: flex;
    align-items: center;
    justify-content: space-between;
    max-width: 960px;
    height: 70px;
    margin: 20px auto;

    @media screen and (min-width: 768px) {
        height: 120px;
    }
`;

const Logo = styled.img`
    max-width: 100px;
    
    @media screen and (min-width: 768px) {
        max-width: 250px;
    }
`

export { Wrapper, Logo }