import React , {useEffect, useState}  from "react";
import { useParams , useNavigate } from "react-router-dom";
import {  useSelector } from "react-redux";

function PresentMember(){

    let { id } = useParams();
    const members = useSelector(elm=>elm.members)
    const [mbr,setMbr]=useState({})
    const navigate = useNavigate()


useEffect(()=>{
    const member = members.find(mbr=>mbr.id == id)
    member ?  setMbr(member) : setMbr({})
},[id])
    
   
const goBack = ()=>{
    navigate('/main')
}

return (
    <div>
        <h3>Member : {id}</h3>
      <p>Name : {mbr.name}</p>
      <p>Email : {mbr.email}</p>
      <p>City: {mbr.city}</p>
      <button onClick={goBack}>go back</button>
    </div>
)
}
export default PresentMember