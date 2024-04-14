import React , {useState,useEffect} from 'react'
import {Link} from 'react-router-dom'
import utils from '../utils'

function DeleteStudent() {
    
    const [students,setStudents] = useState([])

    useEffect(()=>{

       const  getData = async ()=>{

        const data = await utils.getAll()
        setStudents(data)
       }
       getData()
    },[])


    const Delete = async (id)=>{

        let goodStu = students.find((stu)=> stu.id == id)
        let MGid = goodStu._id
        await utils.del(MGid)
        setStudents(students.filter((stu) => stu._id !== MGid));
    
       
    }
    return (
        <div>
            <h3>Choose to delete :</h3>

            <table border={1}>
                <thead>
                    <tr>
                        <td> Name :</td>
                    </tr>
                </thead>
                <tbody>
            {
                students.map((stu,index)=>{
                    return (
                        <tr key={index}>
                           <td><Link  to="#" onClick={() => Delete(stu.id)}>{stu.name}</Link></td>
                        </tr>
                    )
                })
            }</tbody>
            </table>
        </div>
    )
}

export default DeleteStudent