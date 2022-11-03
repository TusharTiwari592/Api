import React from 'react'

function Update({id}) {
    console.log(id)
    Number(id);
    async function SubmitData(e){
        e.preventDefault();
        await axios.put(`http://localhost:3000/users/${id}`);
        
    }


    
  return (
    <form action="" onSubmit={SubmitData}>
        <input type="submit" value ="to update" />
    </form>
  )
}

export default Update