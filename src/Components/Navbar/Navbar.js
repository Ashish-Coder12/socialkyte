import React from 'react'
import './Navbar.css'
import {Link} from "react-router-dom";
import { BiNetworkChart } from 'react-icons/bi';
import { RiNotification2Fill } from 'react-icons/ri';
import { FcBinoculars } from 'react-icons/fc';
import { HiTemplate } from 'react-icons/hi';

function Navbar() {
    return (
        <nav>
            <ul className="navlinksUl">
                <li><Link to="/network"><BiNetworkChart className="icons"/>Network</Link></li>
                <li><Link to="/platform"><HiTemplate className="icons"/>Platform</Link></li>
                <li><Link to="/"><img src="https://socialkyte.com/static/frontend/assets/img/brand/Colour%20Logos/PNG/SocialkyteLogo_SquareVertical_WhiteText%402x.png" alt=""/></Link></li>
                <li><Link to='/discovery'><FcBinoculars className="icons"/>Discovery</Link></li>
                <li><Link to="/notification"><RiNotification2Fill className="icons"/>notification</Link></li>
            </ul>
        </nav>
    )
}

export default Navbar
