import React from 'react'
import './User.css'
import { FaTimes, FaFacebook } from 'react-icons/fa';
import { MdDone } from 'react-icons/md';

function User(
   { name,
    image,
    fbName,
    location,
    request
}
) {
    return (
        <div className="user">
            <div className="image"><img src={image} alt="image" /></div>
            <div className="Name"><h5>{name}</h5><h6>{location}</h6></div>
            <div className="extra"><FaFacebook className="icon"/><h5> {fbName}</h5></div>
            {request ? <div className="approval"><button className="accept"><MdDone/></button> <button className="reject"><FaTimes/></button></div> : <button className="pricesheet">Pricesheet</button>}
            {/* // <div className="approval"><button className="accept"><MdDone/></button> <button className="reject"><FaTimes/></button></div> */}

        </div>
    )
}

export default User
