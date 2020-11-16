import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"

const NavItem = styled(Link)`
  text-decoration: none;
  color: #111;
  display: inline-block;
  white-space: nowrap;
  margin: 0 1vw;
  transition: all 200ms ease-in;
  position: relative;
  font: normal normal 500 16px/18px 'Avenir LT Std 55 Roman';

  :after {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    width: 0%;
    content: "";
    font-weight:500;
    height: 1px;
    transition: all 0.4s ease-in;
  }


  @media (max-width: 900px) {
    padding: 10px 0;
    font-size: 14px;
    z-index: 6;
  }
  @media (max-width:1200px){
    font: normal normal normal 14px/18px 'Avenir LT Std 55 Roman';
    margin:0 7px;
  }
`
const NavbarLinks = () => {
  return (
    <>
      <NavItem activeStyle={{ color: "red" }} to="/">Home</NavItem>
      <NavItem activeStyle={{ color: "red" }} to="/forstudents">For Students</NavItem>
      <NavItem activeStyle={{ color: "red" }} to="/forjobseekers">For Job Seekers</NavItem>
      <NavItem activeStyle={{ color: "red" }} to="/aboutus">About Us</NavItem>
      <NavItem activeStyle={{ color: "red" }} to="/scheduleacall">Schedule A Call</NavItem>
      <NavItem activeStyle={{ color: "red" }} to="/blog">Blog</NavItem>
      <NavItem activeStyle={{ color: "red" }} to="/contactus">Contact Us</NavItem>
      <NavItem activeStyle={{ color: "red" }} to="/faq">FAQ</NavItem>
    </>
  )
}

export default NavbarLinks