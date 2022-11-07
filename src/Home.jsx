import { useState , useEffect} from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import axios from "axios"
import ToRemove from './ToRemove'
import Update from './Update'


function Home() {
  
 let  [Email , setEmail] = useState("");
 let  [Password , setPassword] = useState("");
 let  [id , setid] = useState();



    console.log(Password)
   async function Submitdata(e){
    e.preventDefault()
    if(Email && Password){

      await axios.post("http://localhost:3000/users" , {
        Email,
        Password, 
      });
        
      
    }

    }
    //to use State lifting up to pass id
    function getData(id){
      setid(id)
    }
 
  return(
    <>
      <form action="" onSubmit={Submitdata}>
        <input type="text" onChange={(e)=>{setEmail(e.target.value)}}    value={Email}   placeholder='Email'/><br />
        <input type="text" onChange={(e)=>{setPassword(e.target.value)}} value={Password}  placeholder='Password' /><br />
        <input type="submit" value ="Signin" />
      </form>
      
      
    </>
  )
}

export default Home
