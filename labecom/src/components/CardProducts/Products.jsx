import React from "react";
import { CardProducts } from "./CardProducts";

export const Products = ()=>{
        const produtos = [
            {
                id:01,
                name:"Camiseta Nadando na Lua",
                price:20.00,
                size:["P","M","G","GG"],
                img:"https://ae01.alicdn.com/kf/Sb0c9e217412048c3883e0c3cc8330fcfu/Ver-o-nova-moda-masculina-camiseta-bonito-espa-o-exterior-3d-tridimensional-impress-o-de-manga.jpg_640x640.jpg"
            },
            {
                id:02,
                name:"Camiseta o ultimo Lunatico",
                price:25.50,
                size:["P","M","G","GG"],
                img:"https://ae01.alicdn.com/kf/S80d17cde8b77431c8d4ac5739e13d607W/Ver-o-nova-moda-masculina-camiseta-bonito-espa-o-exterior-3d-tridimensional-impress-o-de-manga.jpg_640x640.jpg"

            }
        ]
    return(
        <div>
            <CardProducts produto={produtos[0]} />
            <CardProducts produto={produtos[1]}/>

        </div>
    )
}