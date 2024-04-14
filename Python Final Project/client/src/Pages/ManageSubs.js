import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import SubChild from "./SubsChild";
import addMember from "./AddMember"
import AddMember from "./AddMember";
function SubPage() {

    const usrs = useSelector(elem => elem.users)
    const mems = useSelector(elem => elem.members)

    const navigate = useNavigate()
    const dispatch = useDispatch()
    const name = sessionStorage.getItem("name");
    const [managePerm, setPerm] = useState({ add: false, view: false, edit: false, delete: false })
    const [comp, setComp] = useState({ add: false, getAll: false })

    const [members, setMembers] = useState([])

    const allMembers = () => {
        setComp({ add: false, getAll: true })
        setMembers(mems)
    }
    const addMember = () => {
        setComp({ add: true, getAll: false })
    }

    const editMember = (id) => {
        sessionStorage.setItem("memberId",id)
        navigate("/edit-member")
    }

    const deleteMember = (id) => {
        dispatch({ type: "DELMEM", id: id })
        setMembers(mems)
    }
    useEffect(() => {

        checkAdmin("Delete Subscriptions", "delete");
        checkAdmin("Update Subscriptions", "edit");
        checkAdmin("View Subscriptions", "view");
        checkAdmin("Create Subscriptions", "add");

    }, []);

    const checkAdmin = (perm, key) => {

        let b = false;
        for (let i = 0; i < usrs.length; i++) {
            let usr = usrs[i];
            const fullName = usr.fname + " "+usr.lname
            if (fullName === name && usr.permission) {

                for (let j = 0; j < usr.permission.length; j++) {
                    ;
                    if (usr.permission[j] === perm) {
                        b = true;
                        break;
                    }
                }
            }
            if (b) {
                break;
            }
        }
        if (b) {
            setPerm(prevState => ({ ...prevState, [key]: true }));
        }
    };
    return (
        <div style={{ border: "4px solid black" }}>
            <h2>Subscriptions</h2>
            {managePerm.view && <button onClick={allMembers}>All Members</button>}
            {managePerm.add && <button onClick={addMember}>Add Member</button>}

            {comp.add &&  <AddMember/>}

            {comp.getAll && members.map((mbr, index) => {
                if (mbr.status !== "deleted") {
                    return (
                        <div key={index} style={{ border: "2px solid grey", margin: '20px' }} >
                            <h4><strong>{mbr.name}</strong></h4>
                            <p>Email : {mbr.email}</p>
                            <p>City : {mbr.city}</p>
                            {managePerm.edit && <button onClick={()=>editMember(mbr.id)}>Edit</button>}
                            {managePerm.delete && <button onClick={() => deleteMember(mbr.id)}>Delete</button>}
                            <SubChild id = {mbr.id}/>
                        </div>
                    );
                }
                return null;
            })}
        </div>
    )
}
export default SubPage