import React,{useState} from "react";
import utils from '../utils'


function ManageAccountChild(props){

    const [pswd,setNew]=useState('')

    const update = async()=>{
        const result = await utils.updatePassword(props.id,{email : props.id , password : pswd})
         console.log(result)
    }
    return (
        <div>
           Enter a new password: <input style={{ borderRadius : "10px"}} onChange={(e)=>setNew(e.target.value)}></input>
           <button style={{ borderRadius : "10px", border : 'none', backgroundColor : "green"}} onClick={update}>update</button>
           <br/> <br/> <br/>
        </div>
    )
}

export default ManageAccountChild