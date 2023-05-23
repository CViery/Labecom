import styled from "styled-components"

export const ContainerHeader = styled.div`
    width: 100vw;
    height: 10vh;
    display: flex;
    justify-content: space-around;
    background-color: black;
    padding: 10px 0px;
    align-items: center;
`
export const CartImg = styled.img`
    width: 70px;
`
export const ButtonLogo = styled.button`
    border: none;
    width: 7em;
    background: none;
    color: white;
    font-weight: bolder;
    font-size: 20px;
    display: flex;
    align-items: center;
    :hover{
        cursor: pointer;
    }
`
export const NavButton = styled.nav`
    display: flex;
    justify-content: space-around;
    width: 40vw;
`
export const Logo = styled.img`
    width: 100px;
    height: 90px;
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
        cursor: pointer;
    }
`