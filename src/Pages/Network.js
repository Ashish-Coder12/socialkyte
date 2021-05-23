import React, { useState } from 'react'
import User from "../Components/PendingInv/User";
// import UserR from '../Components/Rosters/UserR';
import { pendingInvitation } from '../Data';
import { rosterInfo } from '../Data';
import "./Pages.css";
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';
import Header from '../Components/header/Header';

function Network() {
    const [invi,setInvi] =useState(true)
    const [rost,setRost] =useState(false)
    const [connect,setConnect] =useState(false)
    const [pending,setPending] = useState(pendingInvitation)

    const toggle = () => setInvi (!invi)
    const toggle2 = () => setRost (!rost)
    const toggle3 = () => setConnect (!connect)

    const division =  pending.map (invitation =>{
        if(invitation.request){
            // alert(invitation.request)
            return (
                <User
                 name ={ invitation.name}
                 location ={invitation.location}
                 fbName ={invitation.fbName}
                 image ={invitation.image}
                 request ={invitation.request}
                />
        )
        }


    })

    const division2 =   pending.map (invitation=>{
        if(invitation.Roster){
            return (
                <User
                 name ={ invitation.name}
                 location ={invitation.location}
                 fbName ={invitation.fbName}
                 image ={invitation.image}
                 request ={invitation.request}
                />
        )
        }
    })

    const division3 =  pending.map (invitation=>{
        if(invitation.friend){
            return (
                <User
                name ={ invitation.name}
                location ={invitation.location}
                fbName ={invitation.fbName}
                image ={invitation.image}
                request ={invitation.request}
               />
            )
        }
    })

    return (
        <div>
            <Header/>
            <div className="pendingsection">
                <h4 className="Pending" onClick={toggle}>Pending Invitation {invi ?  <AiOutlineMinus className="icon"/> : <AiOutlinePlus className="icon"/> }</h4>
                {invi ? division : "" }
            </div>
            <div className="Roster">
                <h4 className="Pending" onClick={toggle2}>Roster{rost ?  <AiOutlineMinus className="icon"/> : <AiOutlinePlus className="icon"/> }</h4>
                {rost ? division2 : "" }

            </div>
            <div className="Connection" >
                <h4 className="Pending" onClick={toggle3}>Conections{connect ?  <AiOutlineMinus className="icon"/> : <AiOutlinePlus className="icon"/> }</h4>
                {connect ? division3 : "" }
            </div>
        </div>
    )
}

export default Network
