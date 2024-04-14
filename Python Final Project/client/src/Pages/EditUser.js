import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
function EditUser() {

    const users = useSelector(elem => elem.users)
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const [per, setPer] = useState({
        fname: " ",
        lname: " ",
        email: " ",
        time_out: 0,
        permission: []
    })

    useEffect(() => {
        const user = users.find(usr => usr.email === sessionStorage.getItem("email"))
        if (user) setPer(user)

    }, [users])
    const save = () => {

        dispatch({ type: "UPDUSR", payload: per, id: per.email })
    }
    const cancel = () => {
        navigate("/main")

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
        <div style={{ border: "3px solid black", margin: '20px' }}>
            <h3>Update User</h3>
            First Name : <input value={per.fname} onChange={(e) => setPer({ ...per, fname: e.target.value })}></input><br />
            Last Name : <input value={per.lname} onChange={(e) => setPer({ ...per, lname: e.target.value })}></input><br />
            Email : <input value={per.email} onChange={(e) => setPer({ ...per, email: e.target.value })}></input><br />
            Session time out: <input value={per.time_out} onChange={(e) => setPer({ ...per, time_out: +e.target.value })}></input><br />
            Permissions : <br />
            <input type="checkbox" onChange={() => handleCheckboxChange("View Subscriptions")} checked={per.permission && per.permission.includes("View Subscriptions")}></input>View Subscriptions <br />
            <input type="checkbox" onChange={() => handleCheckboxChange("Create Subscriptions")} checked={per.permission && per.permission.includes("Create Subscriptions")}></input>Create Subscriptions <br />
            <input type="checkbox" onChange={() => handleCheckboxChange("Update Subscriptions")} checked={per.permission && per.permission.includes("Update Subscriptions")}></input>Edit Subscriptions <br />
            <input type="checkbox" onChange={() => handleCheckboxChange("Delete Subscriptions")} checked={per.permission && per.permission.includes("Delete Subscriptions")}></input>Delete Subscriptions <br />
            <input type="checkbox" onChange={() => handleCheckboxChange("View Movies")} checked={per.permission && per.permission.includes("View Movies")}></input>View Movies <br />
            <input type="checkbox" onChange={() => handleCheckboxChange("Create Movies")} checked={per.permission && per.permission.includes("Create Movies")}></input>Create Movies <br />
            <input type="checkbox" onChange={() => handleCheckboxChange("Update Movies")} checked={per.permission && per.permission.includes("Update Movies")}></input>Edit Movies <br />
            <input type="checkbox" onChange={() => handleCheckboxChange("Delete Movies")} checked={per.permission && per.permission.includes("Delete Movies")}></input>Delete Movies <br /> <br />
            <input type="checkbox" onChange={() => handleCheckboxChange("Admin")} checked={per.permission && per.permission.includes("Admin")}></input >Is Admin ? <br /><br />
            <button onClick={save}>Save</button>
            <button onClick={cancel}>Cancel</button>

        </div>
    )
}
export default EditUser