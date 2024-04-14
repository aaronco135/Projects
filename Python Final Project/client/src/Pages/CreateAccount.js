import React , {useState} from 'react'
import {useNavigate} from 'react-router-dom'
import {useSelector, useDispatch} from 'react-redux'

function CreateAccount() {
    const users = useSelector(elem=> elem.users)
    const dispatch = useDispatch()

    const  navigate = useNavigate()
    const [per,setNew]=useState({email : '',password : ''})

    const createAcc =  ()=>{
        const foundedUser = users.find(usr=> usr.email === per.email)
        if (foundedUser) {
            let updatedUser = foundedUser
            updatedUser.password = per.password
           
            dispatch({type : "UPDUSR" , payload : updatedUser})
          navigate('/')
        } else console.log("user doesnt exist !!")
    }
    return (
        <div>
           <h2>Create an account</h2>
           username : <input onChange={(e)=> setNew({...per,email : e.target.value})}></input><br/>
           password : <input onChange={(e)=> setNew({...per,password : e.target.value})}></input>
           <button onClick={createAcc}>Create</button>
        </div>
    )
}
export default CreateAccount