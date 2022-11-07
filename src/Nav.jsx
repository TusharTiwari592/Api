import { DisabledByDefault } from '@mui/icons-material'
import React from 'react'
import {Link ,Outlet} from "react-router-dom"


function Nav() {
  return (
    <div>

    <div className='Nav'>
        <div className='logo'>
            <img src="fb.png" alt="" />
        </div>
        <ul>
            <li><Link to="/">SignUp</Link></li>
            <li><Link to="/login">Login</Link></li>
        </ul>
        
        </div>
        <Outlet/>
    </div> 
  )
}

export default Nav