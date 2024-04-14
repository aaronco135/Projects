import React, {useState} from "react";
import {  useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
function AddUser() {

    const dispatch = useDispatch()
    const [per,setPer]=useState({permission : []})
    const navigate = useNavigate()

    const save = ()=>{
        dispatch({type : "ADDUSR",payload : per})
        console.log("user added !")
    }
    const cancel = ()=>{
        // navigate("/users-managment")
        
    }
    const handleCheckboxChange = (perm) => {
        setPer(prevPer => {
            if (!prevPer.permission.includes(perm)) {
                return { ...prevPer, permission: [...prevPer.permission, perm] };
            } else {
                const updatedPermission = prevPer.permission.filter(p => p !== perm);
                return { ...prevPer, permission: updatedPermission };
            }
        });
    };
    

     
     
    return (
        <div style={{ border: "3px solid black" , margin: '20px' }}>
             <h3>Add User</h3>
             First Name : <input onChange={(e)=> setPer({...per, fname : e.target.value})}></input><br/>
             Last Name : <input onChange={(e)=> setPer({...per, lname : e.target.value})}></input><br/>
             Email : <input onChange={(e)=> setPer({...per, email : e.target.value})}></input><br/>
             Session time out: <input onChange={(e)=> setPer({...per, time_out : +e.target.value})}></input><br/>
            Permissions : <br/>
            <input type="checkbox" onChange={()=>handleCheckboxChange("View Subscriptions")}></input>View Subscriptions <br/>
            <input type="checkbox"  onChange={()=>handleCheckboxChange("Create Subscriptions")}></input>Create Subscriptions <br/>
            <input type="checkbox" onChange={()=>handleCheckboxChange("Edit Subscriptions")}></input>Edit Subscriptions <br/>
            <input type="checkbox" onChange={()=>handleCheckboxChange("Delete Subscriptions")}></input>Delete Subscriptions <br/>
            <input type="checkbox" onChange={()=>handleCheckboxChange("View Movies")}></input>View Movies <br/>
            <input type="checkbox" onChange={()=>handleCheckboxChange("Create Movies")}></input>Create Movies <br/>
            <input type="checkbox" onChange={()=>handleCheckboxChange("Edit Movies")}></input>Edit Movies <br/>
            <input type="checkbox" onChange={()=>handleCheckboxChange("Delete Movies")}></input>Delete Movies <br/> <br/>
            <input type="checkbox" onChange={()=>handleCheckboxChange("Admin")}></input>Is Admin ? <br/><br/>
            <button onClick={save}>Save</button>
            <button onClick={cancel}>Cancel</button>
            
        </div>
    )
}
export default AddUser