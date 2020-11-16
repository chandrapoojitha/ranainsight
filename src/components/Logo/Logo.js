import React from "react"
import styled from "styled-components"
import ranalogo from "../../assets/images/ranalogo.svg" 

const LogoImg = styled.div`
  margin-left:6%;
  padding-top:7px;
`
const Logo = () => {
  return (
    <>
    <LogoImg><img src={ranalogo} alt="ranalogo" style={{width:`63%`,height:50}}/></LogoImg>
    </>
  )
}
export default Logo