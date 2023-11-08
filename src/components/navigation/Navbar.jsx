import React from 'react';
import {ReactComponent as Home }from "./assets/home.svg"
import {ReactComponent as Logo }from "./assets/Vector.svg"
import {ReactComponent as Fortnite }from "./assets/FortniteLogo 2.svg"
import {ReactComponent as Csgo }from "./assets/csgo.svg"
import {ReactComponent as Lol }from "./assets/lol.svg"
import "./index.scss"
import { useNavigate } from 'react-router-dom';

function Navbar() {

  const navigate = useNavigate()

  return (
    <div className='navbar'>
        <Logo cursor={"pointer"} onClick={() => { navigate("/") }} className='logo' width={32} height={32}/>
        <Home width={30} height={30}/>
        <Fortnite width={30} height={30}/>
        <Csgo width={30} height={30}/>
        <Lol width={30} height={30} fill='green'/>
    </div>
  )
}

export default Navbar