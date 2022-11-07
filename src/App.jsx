import React from 'react'
import Nav from './Nav'
import Home from './Home'
import Login from './Login'
import Profilepage from './Profilepage'
import {BrowserRouter ,Routes ,Route} from "react-router-dom"

function App() {
  return (
    <>
    <BrowserRouter>
        <Routes>
            <Route path='/' element = {<Nav/>}>
                <Route path='/' element ={<Home/>}   />   
                <Route path='/login' element ={<Login/>}>
                    <Route path=":id" element ={<Profilepage/>} />
                </Route>   
            </Route>   
        </Routes>
    </BrowserRouter>
    </>
  )
}

export default App