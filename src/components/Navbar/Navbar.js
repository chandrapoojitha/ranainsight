import React, { useState } from "react"
import styled from "styled-components"
import NavbarLinks from "./NavbarLinks"
import Logo from "../Logo/Logo"
import Heading from './heading'

const Header = styled.div`
  height:130px;
  display:grid;
`
const Navigation = styled.nav`
  height: 70px;
  width:100%;
  display: flex;
  background-color: #fff;
  position: fixed;
  margin-top:50px;
  justify-content: space-between;
  font-weight:600;
  border-bottom: 2px solid #33333320;
  margin: 0 auto;
  z-index: 2;
  align-self: center;

  @media (max-width: 900px) {
    position: fixed;
    height:62px;
    top: 9px;
    left: 0;
    right: 0;
    left: 0;
  }
`

const Toggle = styled.div`
  display: none;
  height: 100px;
  cursor: pointer;
  padding: 0 10vw;

  @media (max-width: 900px) {
    display: flex;
  }
`

const Navbox = styled.div`
  display: flex;
  font-size:14px;
  margin-right:11%;
  align-items: center;

  @media (max-width: 900px) {
    flex-direction: column;
    position: fixed;
    width: 100%;
    justify-content: flex-start;
    padding-top: 6vh;
    background-color: #fff;
    transition: all 0.3s ease-in;
    top:114px;
    overflow-y:scroll;
    left: ${props => (props.open ? "-100%" : "0")};
  }
  @media (max-width:1024px){
    margin-right:40px;
  }
`

const Hamburger = styled.div`
  background-color: #111;
  width: 30px;
  height: 3px;
  margin-top:-30px;
  transition: all .3s linear;
  align-self: center;
  position: relative;
  transform: ${props => (props.open ? "rotate(-45deg)" : "inherit")};

  ::before,
  ::after {

    width: 30px;
    height: 3px;
    background-color: #111;
    content: "";
    position: absolute;
    transition: all 0.3s linear;
  }

  ::before {
    transform: ${props =>
      props.open ? "rotate(-90deg) translate(-10px, 0px)" : "rotate(0deg)"};
    top: -10px;
  }

  ::after {
    opacity: ${props => (props.open ? "0" : "1")};
    transform: ${props => (props.open ? "rotate(90deg) " : "rotate(0deg)")};
    top: 10px;
  }
`
const Navbar = () => {
  const [navbarOpen, setNavbarOpen] = useState(false)

  return (
    <Header>
    <Heading />
    <Navigation style={{marginTop:50}}>
      <Logo />
      <Toggle
        navbarOpen={navbarOpen}
        onClick={() => setNavbarOpen(!navbarOpen)}
      >
        {navbarOpen ? <Hamburger open /> : <Hamburger />}
      </Toggle>
      {navbarOpen ? (
        <Navbox>
          <NavbarLinks />
        </Navbox>
      ) : (
        <Navbox open>
          <NavbarLinks />
        </Navbox>
      )}

    </Navigation>
    </Header>
  )
}

export default Navbar