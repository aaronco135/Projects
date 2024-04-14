import React , {useState , useEffect} from 'react'
import utils from '../utils'

function UpdateStudent() {
    const [student,setStudent] = useState({
        id : 0 , name : '' , faculty : '',  grade : {profession : '' ,score : 0}})

        const [isVisible,setVis] = useState(false)
        const [students,setStudents] = useState([])

        useEffect(()=>{

            const  getData = async ()=>{
     
             const data = await utils.getAll()
             setStudents(data)
            }
            getData()
         },[])

         
        const updtStudent = async ()=>{


            const goodStu = students.find((stu)=> stu.id == student.id)
            const id = goodStu._id
            if(student.id !== 0) await utils.update(id,student)
        }
    return (
        <div>
            <h4>Update Student</h4>
            
            <select onChange={()=> setVis(true)}>
                <option disabled >choose a student to update...</option>
                {
                    students.map((stu,index)=>{
                        return (
                            <option key={index} value={stu._id}>{stu.name}</option>
                        )
                    })
                }
            </select>
            {isVisible && (
        <div>
            Enter new ID : <input type='number' onChange={(e)=> setStudent({...student , id : +e.target.value})}></input><br/>
           Enter new name : <input onChange={(e)=> setStudent({...student , name : e.target.value})}></input><br/>
           Enter new faculty : <input onChange={(e)=> setStudent({...student , faculty : e.target.value})}></input><br/>
           <span>Grades :</span>
           Enter new  profession : <input onChange={(e)=> setStudent({...student , grade : {...student.grade , profession :e.target.value}})}></input><br/>
           Enter new  score : <input type='number' onChange={(e)=> setStudent({...student , grade : {...student.grade , score :+e.target.value}})}></input><br/>
           <button onClick={updtStudent}>Update</button>
           </div>
      )}
        </div>
            
    )
}

export default UpdateStudent