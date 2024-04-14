import React , {useState,useEffect} from 'react'
import utils from '../utils'
function Students() {
    
    const [students,setStudents] = useState([])

    useEffect(()=>{

       const  getData = async ()=>{

        const data = await utils.getAll()
        setStudents(data)
        console.log(data)
       }
       getData()
    },[])


    return (
        <div>
            <h3>Students Data :</h3>

            <table border={1}>
                <thead>
                    <tr>
                        <td> Name :</td>
                        <td> Faculty :</td>
                        <td> Grades :</td>
                    </tr>
                </thead>
                <tbody>
            {
                students.map((stu,index)=>{
                    return (
                        <tr key={index}>
                           <td>{stu.name}</td>
                           <td>{stu.faculty}</td>
                           <td>
                           <ul> Profession :<li>{stu.grade.profession}</li></ul>
                           <ul> Score : <li>{stu.grade.score}</li></ul>
                            
                            </td>
                        </tr>
                    )
                })
            }</tbody>
            </table>
        </div>
    )
}

export default Students