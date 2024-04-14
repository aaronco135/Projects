import React,{useState} from 'react'
import {Link , useNavigate} from 'react-router-dom';
import {useSelector} from 'react-redux'

function Login() {

    const users = useSelector(elem=> elem.users)
   const  navigate = useNavigate()
    const [per,setPer]= useState({"email":'',"password": ''})

    const checkData =  ()=>{
      const foundedUser = users.find(usr=> usr.email === per.email && usr.password === per.password)
     
      if (foundedUser) {
        const fullName = foundedUser.fname + " " + foundedUser.lname
        sessionStorage.setItem("name", fullName );
        navigate('/main')
      } else console.log("wrong log !")
    }
    return (
        <div>
            <h2>Login Page</h2><br/>
           Username : <input onChange={(e)=> setPer({...per, email : e.target.value})}></input><br/>
           Password : <input onChange={(e)=> setPer({...per, password : e.target.value})}></input><br/>
           <button onClick={checkData}>login</button><br/>
           New User ? <Link to="/create-account">Create an account</Link>

        </div>
    )
}
export default Login