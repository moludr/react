import React from 'react'
import './nav.css'
import {AiOutlineHome,AiOutlineUser} from "react-icons/ai"
import {BiBook,BiMessageSquareDetail} from 'react-icons/bi'
import {RiServiceLine} from 'react-icons/ri'
import {useState} from 'react'
const Nav = () => { 
    const [activeNav,setActiveNev] = useState("")
    return (
        <nav>
            <a href="#" onClick={()=>setActiveNev("#")} className={activeNav==="#"?"active":""}><AiOutlineHome/></a>
            <a href="#about" onClick={()=>setActiveNev("#about")} className={activeNav==="#about"?"active":""}><AiOutlineUser/></a>
            <a href="#experience" onClick={()=>setActiveNev("#experience")} className={activeNav==="#experience"?"active":""}><BiBook/></a>
            <a href="#services" onClick={()=>setActiveNev("#services")} className={activeNav==="#services"?"active":""}><RiServiceLine/></a>
            <a href="#contacts" onClick={()=>setActiveNev("#contacts")} className={activeNav==="#contacts"?"active":""}><BiMessageSquareDetail/></a>
        </nav>
    )
}

export default Nav
