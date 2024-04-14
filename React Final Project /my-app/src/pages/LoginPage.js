import React ,{ useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
function LoginPage(){

    const nav = useNavigate()
    const [loginData,setLog] = useState({username : '' , password : ''})

    const checkLogin =  async ()=>{
        try{


            const {data} = await  axios.post("http://localhost:8000/auth/login",loginData )
           

           
            nav("/");
            localStorage.setItem("token", data);

            
        } catch(err){
            console.log(err);
        }
    }
    return(
        <div>
            Username : <input onChange={(e)=> setLog({...loginData , username : e.target.value })}></input><br/>
            Password : <input  onChange={(e)=> setLog({...loginData , password : e.target.value })}></input><br/>
            <button onClick={checkLogin}>login</button>
        </div>
    )
}
export default LoginPage