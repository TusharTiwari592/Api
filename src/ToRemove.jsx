import React  , {useState}from 'react';
import axios from "axios"

function ToRemove({data}) {

    let [id , toRemoveData]= useState("");
    Number(id);
//to use State lifting up to pass id
    data(id)
async function SubmitData(e){
    e.preventDefault();
    await axios.delete(`http://localhost:3000/users/${id}`);
    
}
 
    
  return (
    <form action="" onSubmit={SubmitData}>
        <input type="text" onChange={(e)=>{toRemoveData(e.target.value)}} placeholder = "Write an id to remove" /> <br />
        <input type="submit" value ="ToRemove" />
    </form>
  )
}

export default ToRemove