import styled from "styled-components"

export const ContainerHeader = styled.div`
    width: 100vw;
    height: 10vh;
    display: flex;
    justify-content: space-around;
    background-color: black;
    padding: 10px;
`
export const NavButton = styled.nav`
    display: flex;
    justify-content: space-around;
    width: 40vw;
`

export const ButtonNav = styled.button`
    border: none;
    width: 7em;
    background: none;
    color: white;
    font-weight: bolder;
    font-size: 20px;
    :hover{
        background-color: rgba(255,255,255,0.5);
        border-radius: 15px;
    }
`