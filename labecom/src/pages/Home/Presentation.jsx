import React from "react";
import { useNavigate } from "react-router-dom";
import { ButtonProducts, ContainerPresentation, Svg } from "./Styles/styledPresentation";

export const Presentation = ()=>{
    const navigate = useNavigate()
    return(
        <ContainerPresentation>
            <h2>Prepare-se para decolar em uma jornada espacial pela Via Láctea!</h2>
            <h2>Aperte o botão e descubra nossos produtos cósmicos!</h2>
            <ButtonProducts onClick={()=>navigate('/home/products')}>
                <span>CosmoDutos</span>
            </ButtonProducts>
        </ContainerPresentation>
    )
}