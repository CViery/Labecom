import React from "react";
import { useNavigate } from "react-router-dom";
import { ButtonLogo, ButtonNav, CartImg, ContainerHeader, Logo, NavButton } from "./styledHeader";
import logo from './img/logo.png'
import cart from './img/cart.png'
 

export const Header = ()=>{
    const navigate = useNavigate()
    return(
        <ContainerHeader>
            <ButtonLogo onClick={()=> navigate('/')}>CosmoShop<Logo src={logo}></Logo></ButtonLogo>
            
            <NavButton>
                <ButtonNav onClick={()=> navigate('/')}>Inicio</ButtonNav>
                <ButtonNav onClick={()=> navigate('/home/products')}>Produtos</ButtonNav>
                <ButtonNav onClick={()=> navigate('/home/cart')}><CartImg src={cart}/></ButtonNav>
            </NavButton>
        </ContainerHeader>
    )
}
