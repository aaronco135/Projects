import React, { useState } from "react";
import {  useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

function AddMember() {
    const [newMbr, setMbr] = useState({ name: '', email : '', city : '' });
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const save = ()=>{
        dispatch({type : "ADDMEM",payload : newMbr})
    }
    const cancel = ()=>{
        // navigate("/main")
    }

    return (
        <div style={{ border: "3px solid black" , margin: '20px' }}>
            <h4>Add new  Member</h4>
            Name: <input onChange={(e) => setMbr({ ...newMbr, name: e.target.value })}></input><br />
            Email : <input  onChange={(e) => setMbr({ ...newMbr, email: e.target.value })} ></input><br/>
            City : <input  onChange={(e) => setMbr({ ...newMbr, city: e.target.value })} ></input><br/>
            <button onClick={save}>Save</button>
            <button onClick={cancel}>Cancel</button>
        </div>
    );
}

export default AddMember;
