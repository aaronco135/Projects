import React, {useState} from 'react'
import utils from '../utils'
function AddStudent() {
    
    const [student,setStudent] = useState({
        id : 0 , name : '' , faculty : '',  grade : {profession : '' ,score : 0}})


        const addStudent = async ()=>{

            if(student.id && student.name !== ''){
               
                await utils.add(student)
            }
        }
    return (
        <div>
            <h4>Add Student</h4>
            Enter new ID : <input type='number' onChange={(e)=> setStudent({...student , id : +e.target.value})}></input><br/>
           Enter new name : <input onChange={(e)=> setStudent({...student , name : e.target.value})}></input><br/>
           Enter new faculty : <input onChange={(e)=> setStudent({...student , faculty : e.target.value})}></input><br/>
           <span>Grades :</span>
           Enter new  profession : <input onChange={(e)=> setStudent({...student , grade : {...student.grade , profession :e.target.value}})}></input><br/>
           Enter new  score : <input type='number' onChange={(e)=> setStudent({...student , grade : {...student.grade , score :+e.target.value}})}></input><br/>
           <button onClick={addStudent}>Add</button>

        </div>
    )
}

export default AddStudent