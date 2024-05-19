import React, {useState} from "react";
import { useNavigate,Link } from "react-router-dom";
import ManageAccountChild from "./ManageAcountChild";
function ManageAccount() {
    const nav = useNavigate();
    const user = localStorage.getItem("user");
    const [bool,setBool]=useState(false)
    const logout = () => {
        nav('/');
    };

   

    return (
        <div style={{ backgroundColor: "#000033", color: "#fff", padding: "20px" }}>
            <h2 style={{ marginBottom: "20px" }}>Manage Account</h2>
            <p style={{ marginBottom: "10px" }}>Email: {user}</p>
            <button onClick={()=>setBool(!bool)} style={{ backgroundColor: "grey", color: "#fff", padding: "7px 15px", border: "none", borderRadius: "10px", cursor: "pointer" }}>change password</button><br/><br/>
           {bool && <ManageAccountChild id = {user}/>}
            <button onClick={logout} style={{ backgroundColor: "#ff6600", color: "#fff", padding: "10px 20px", border: "none", borderRadius: "10px", cursor: "pointer" }}>Logout</button><br/><br/>
            <Link to="/home">return home</Link>
        </div>
    );
}

export default ManageAccount;
