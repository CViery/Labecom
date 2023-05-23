import React from "react";
import { useNavigate } from "react-router-dom";
import { ButtonNav, ContainerHeader, NavButton } from "./styledHeader";


export const Header = ()=>{
    const navigate = useNavigate()
    return(
        <ContainerHeader>
            <h3>LOGO</h3>
            <NavButton>
                <ButtonNav onClick={()=> navigate('/')}>Inicio</ButtonNav>
                <ButtonNav onClick={()=> navigate('/home/products')}>Produtos</ButtonNav>
                <ButtonNav onClick={()=> navigate('/home/cart')}>Carrinho</ButtonNav>
            </NavButton>
        </ContainerHeader>
    )
}
