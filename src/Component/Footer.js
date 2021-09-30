import React from 'react'
import './Header.css'
import styled from 'styled-components'
import { FaPhoneAlt } from "react-icons/fa";
import {FaEnvelope} from "react-icons/fa";
import {FaGoogle} from "react-icons/fa";
import {FaPlus} from "react-icons/fa";
import {FaSkype} from "react-icons/fa";
import {FaLinkedin} from "react-icons/fa";
import {FaGithub} from "react-icons/fa";
import {FaCubes} from "react-icons/fa";

const Foot = styled.div
`
background-color: rgb(236, 47, 79);
height:80px;
color:white;
display:flex;
gap:100px;
padding-top:15px

`
const Cercle = styled.div
`
border-radius: 50%;
width:30px;
height:30px;
color:white;
text-align:center;
background-color: rgb(0, 247, 255);
text-items:center;
`

const Social =styled.div`
display:flex
gap:2px;

;`



function Footer() {
    return (
        <div>
      <Foot>
          <div className="phone"><Cercle><FaPhoneAlt className="fa" /></Cercle> <p>Call <br /> 0550828049</p></div>
       <div className="mail"><Cercle><FaEnvelope className="fa" /></Cercle> <p>Email <br /> mobastisamah@gmail.com </p></div>
       <div className="plus"> <Cercle><FaPlus className="fa" /></Cercle> <p>Follow me on <br /> <Social>
       <FaLinkedin/> <FaSkype/> <FaCubes/> <FaGithub/>
       </Social>
           </p></div>
       <div className="gmc"> <Cercle><FaGoogle className="fa" /> </Cercle> <p>Go My Code feb-21 <br /> Recreated by me </p></div>
        
       
       
          
           
        </Foot>
       
        </div>
    )
}

export default Footer
