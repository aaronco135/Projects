import React , {useState} from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import AddUser from "./AddUser";
function ManageUsers() {

    let users =useSelector(elem=>elem.users)
    const [usrs,setUsers]=useState([])
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const [isVisible, setVis] = useState(false);
    const [isVisible2,setVis2]= useState(true)

    const add = () => {
        setVis(true)
        setVis2(false)
    }
    const showUsers = () => {
        setUsers(users)
        setVis(false)
        setVis2(true)
    }
    const deleteUser = (email)=>{
        dispatch({type : "DELUSR" , id : email})
        setUsers(users)
    }
    const editUser =(email)=>{
        sessionStorage.setItem("email" , email)
        navigate('/edit-user')
    }
    return (
        <div style={{ border: "4px solid black" }}>
            <h2>Users</h2>
            <button onClick={showUsers}>All Users</button>
            <button onClick={add}>Add User</button><br />
            {isVisible && <AddUser/>}
            {isVisible2 && usrs.map((usr, index) => {
            if (usr.status !== "deleted") {
                return (
                    <div key={index} style={{ border: "2px solid gray", margin: '20px' }} >
                        <p>Name: {usr.fname} {usr.lname}</p>
                        <p>Email: {usr.email}</p>
                        <p>Permissions:</p>
                        <ul>
                            {usr.permission.map((perm, idx) => (
                                <li key={idx}>{perm}</li>
                            ))}
                        </ul>
                        <button onClick={() => editUser(usr.email)}>Edit</button>
                        <button onClick={() => deleteUser(usr.email)}>Delete</button>
                    </div>
                );
            }
            return null;
        })}
        </div>
    )
}
export default ManageUsers