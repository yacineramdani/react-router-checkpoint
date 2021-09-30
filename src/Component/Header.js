import React from 'react'
import styled from 'styled-components'
import './Header.css'
import { NavLink } from 'react-router-dom'


const Headr = styled.div
`
margin:100px;
display:flex;
justify-content: space-around;
background-color: white;
`
const Lien=styled.li`
text-decoration: none;
color:#2e2a2a
`
const Lien2=styled.a`
text-decoration: none;
color:#2e2a2a
`

const Logo=styled.div
`
margin-top:-63px;
text-align:left;
font-family:'Times New Roman', Times, serif
`
function Header() {
    return (
       
              <div>
         <Headr>
         <Logo>
        <Lien2 href="#">
            <h1>MOBASTI Samah</h1>
            <span>Full stack js Developer</span>
        </Lien2>
        </Logo>
    
        <nav class="menu-bar">
         <ul>
              <Lien class="HOME"><NavLink to="/home">Home</NavLink></Lien>
              <Lien><NavLink to="/resume">RESUME</NavLink></Lien>
              <Lien><NavLink to="/projects">PROJECTS</NavLink></Lien>
            <Lien><NavLink to="/contact">CONTACT</NavLink></Lien>

    
        </ul>
    
        </nav>
        </Headr>
        </div>
    )
}

export default Header
