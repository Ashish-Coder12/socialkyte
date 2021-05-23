import React from 'react'
import './Header.css'
import { FiSend } from 'react-icons/fi';
import { FaBars } from 'react-icons/fa';
import { Link } from 'react-router-dom';

function Header() {
    return (
        <header>
                <div className="profile">
                    <FaBars/>
                    <div className="profile"><img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1234&q=80" alt="" /></div>
                    <button className="message"><FiSend/></button>
                </div>
                <Link to="/search" className="search" >
                    <input type="text" placeholder="search"  />
                </Link>
        </header>
    )
}

export default Header
