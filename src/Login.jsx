import React ,{useEffect , useState} from 'react'
import axios from "axios"
import {Link, useParams} from "react-router-dom"


function Login() {
    let params = useParams();
    let {name} = params
    console.log(name)

    let [Data , setData] = useState();
    let [Email , CheckEmail]= useState("")
    let [Password , CheckPassword]= useState("")
    let [loginStatus , setloginStatus] = useState(false)
    let [loginid , setloginid] = useState()

    useEffect(()=>{
        async function getData (){
          let api = await axios.get("http://localhost:3000/users");
          setData(api)
          
        }
        getData()
    
      },[])

     function CheckData(e){
        e.preventDefault()

       let  finalData = Data.data
        finalData.map((oneid)=>{
            if(oneid.Email === Email && oneid.Password === Password ){            
                    setloginStatus(true) 
                    setloginid(oneid.Email)            
            }
            else{
                    setloginStatus(false)      
            }
        })  
      }
    
      function ShowLogginStatus(){
        if(loginStatus){
          return  (
            <Link to ={`/Login/${loginid}`} >{loginid}</Link>
          )
        }
        else{
          return  <h1>There is an Error</h1>
        }
      }

  return (
    <>
    <form action="" onSubmit={CheckData}>
        <input type="text"  onChange={(e)=>{CheckEmail(e.target.value)}} value={Email}  placeholder='Please Enter Your Name' /><br/>
        <input type="text"  onChange={(e)=>{CheckPassword(e.target.value)}} value={Password} placeholder='Please Enter Your Password' /><br/>
        <input type="Submit" value="Login" />
    </form>
    <ShowLogginStatus/>
    </>
  )
}

export default Login