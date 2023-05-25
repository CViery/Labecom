import React from "react";
import { ContainerCard } from "./styled";


export const CardProducts = ({produto}) =>{
    
    return(
        <ContainerCard>
            <div>
                <img src={produto.img}/>
            </div>
            <div>
                <h4>{produto.name}</h4>
                <p>{produto.price}</p>
            </div>
            <div>
                <p>Tamanhos</p>
                <p>{produto.size[0]}</p>
                <p>{produto.size[1]}</p>
                <p>{produto.size[2]}</p>
                <p>{produto.size[3]}</p>
            </div>
            
        </ContainerCard>
    )
}