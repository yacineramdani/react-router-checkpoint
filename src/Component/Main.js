import React from 'react'
import './Header.css'
import styled from 'styled-components'

const Cercle = styled.div
`
border-radius: 50%;
width:150px;
height:150px;
color:white;
text-align:center;
`
const Prg=styled.p`
text-align:center;
margin-top:65px
`
function Main() {
    return (
        <div className="container">
            <div className="photo"> <img src="/pro.jpg" alt="" /></div>
            <div className="hello"> <h1>Hello,</h1>
            <p>a bit about me:</p>
            <div className="cercle">
                <Cercle className="resume" ><Prg>MY RESUME</Prg></Cercle>
                <Cercle className="works"><Prg>MY WORKS</Prg> </Cercle>
                <Cercle className="skills"><Prg>MY SKILLS</Prg></Cercle>
            </div>
            <p>I am here to show you why react js is so powerful <br /> to build you're web applications. and why you <br /> bshould become a developer.</p>
            </div>
         
        </div>
    )
}

export default Main
