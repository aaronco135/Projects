import React, { useState } from "react";
import utils from "../utils";
function Register() {
    const [user, setUser] = useState({});

    const create = async () => {
       const  result = await utils.createAccount(user)
       console.log(result)
    };

    return (
        <div 
            style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                backgroundColor: "#f2f2f2", 
                padding: "20px",
                borderRadius: "10px",
                width: "300px",
                margin: "auto", 
                fontFamily: "Arial, sans-serif" 
            }}
        >
            <h3>Register your account:</h3>

            <label>Email:</label>
            <input 
                type="email" 
                onChange={(e) => setUser({...user, email: e.target.value})} 
                style={{ marginBottom: "10px" }} 
            /><br/>

            <label>Password:</label>
            <input 
                type="password" 
                onChange={(e) => setUser({...user, password: e.target.value})} 
                style={{ marginBottom: "10px" }}
            /><br/>

            <button onClick={create}>Register</button>
        </div>
    );
}

export default Register;
