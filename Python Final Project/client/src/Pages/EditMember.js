import React, { useState ,useEffect} from "react";
import {  useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

function EditMember() {
    const members = useSelector(elem => elem.members)
    const [newMbr, setMbr] = useState({ name: '', email : '', city : '' });
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const save = ()=>{
        dispatch({type : "UPDMEM",payload : newMbr , id : newMbr.id})
    }
    const cancel = ()=>{
        navigate("/main")
    }

    useEffect(() => {
        const member = members.find(mbr => mbr.id == sessionStorage.getItem("memberId"))
        if (member) setMbr(member)

    }, [members])
    return (
        <div style={{ border: "3px solid black" , margin: '20px' }}>
            <h4>Update Member</h4>
            Name: <input value={newMbr.name} onChange={(e) => setMbr({ ...newMbr, name: e.target.value })}></input><br />
            Email : <input value={newMbr.email} onChange={(e) => setMbr({ ...newMbr, email: e.target.value })} ></input><br/>
            City : <input value={newMbr.city} onChange={(e) => setMbr({ ...newMbr, city: e.target.value })} ></input><br/>
            <button onClick={save}>Save</button>
            <button onClick={cancel}>Cancel</button>
        </div>
    );
}

export default EditMember;
