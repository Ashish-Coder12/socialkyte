import React, { useState } from 'react'
import Header from '../Components/header/Header'
import { GiSettingsKnobs } from 'react-icons/gi';
import { pendingInvitation } from '../Data';
import { FiSend } from 'react-icons/fi';
import { FaBars, FaTimes } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import User from '../Components/PendingInv/User';
import { AiOutlineCaretDown } from 'react-icons/ai';

function Search() {
    const [filter , setFilter]= useState(false)
    const [user,setUser] = useState(pendingInvitation)
    const [search ,setSearch] = useState("")
    const [dblclick ,setDblclick] = useState(false)

    const showFilter = () => setFilter(!filter)
    const handlechange = e => {
        setSearch (e.target.value)
    }
    const filteredUser = user.filter(user=>
        user.name.toLowerCase().includes(search.toLowerCase()))


    const onDoubleClick=() => {
        setDblclick(!dblclick)
    }
     return (

        <div>
            <header>
                <div className="profile">
                    <FaBars/>
                    <div className="profile"><img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1234&q=80" alt="" /></div>
                    <button onClick={onDoubleClick} className="message"><FiSend/></button>
                </div>
                <Link to="/search" className="search" >
                    <input type="text" placeholder="search" onChange={handlechange} />
                </Link>
            </header>
            <h3 onClick={showFilter} className = "Pending">Search By filter <GiSettingsKnobs className="icon"/></h3>
            {filter ?<div className="filter-selection">
                <button className="filterbutton searchbutton">Categories</button>
                <button className="filterbutton searchbutton">Locations</button>
                <button className="filterbutton searchbutton">platform</button>
                <div className="semiFilter">
                    <button className="searchbutton">No. of Followers</button>
                    <button className="searchbutton">Contant Type</button>
                </div>
                <form className="checkbox">
                    <input type="radio" name="From the roster only" id="checked" />
                    <lable>From the roster only</lable>
                    <input type="radio" name="independent" id="checked" />
                    <lable>Independent</lable>
                </form>
            </div> : ""}
            {filteredUser.map(user => {
                if (search !== "") {
                    return(
                        <User
                     name ={ user.name}
                     location ={user.location}
                     fbName ={user.fbName}
                     image ={user.image}
                     request ={user.request}
                    />
                    )
                }

            })}
            {dblclick?
             <div className="Campaign">
             <div className="top" ><FaTimes onClick={onDoubleClick} className="first"/></div>
             <h2>Select Compaign</h2>
             <button className="selectbutton">dropdown <AiOutlineCaretDown/> </button>
             <p>Create new Campaign + </p>
             <button className="letsGo">Let's Go</button>
             <div className="invite">Invite to campaign</div>
         </div> : "" }

        </div>
    )
}

export default Search
