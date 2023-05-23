import React from "react";
import styled from "styled-components";
import img from '../backgroud.png'

export const ContainerPresentation = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-image: url(${img});
    background-repeat: no-repeat;
    background-size: cover;
    width: 100vw;
    height: 70vh;
    color: white;
    padding: 15px 0px;
    line-height: 8px;

`
export const ButtonProducts = styled.button`
   margin-top: 30px;
   outline:none;
  height: 40px;
  text-align: center;
  width: 130px;
  border-radius:40px;
  background: #fff;
  border: 2px solid green;
  color:black;
  letter-spacing:1px;
  text-shadow:0;
  cursor: pointer;
  transition: all 0.25s ease;
  font-weight: bolder;
  :hover {
    color:white;
    background:#00BFFF;
    }
`
