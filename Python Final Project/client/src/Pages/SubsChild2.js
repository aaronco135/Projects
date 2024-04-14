import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

function SubChild2(props) {

    const dispatch = useDispatch()
    const movies = useSelector(elem=>elem.movies)
    const subs = useSelector(elem=>elem.subs)
    const [selectedMovie,setMovie]=useState('')

    const addSub =()=>{
        if(selectedMovie){
            const member = subs.find(sub=>sub.memberId == props.id)
           const allPrevs = member.movies
           
           if (!allPrevs.some(movie => movie.movieId === selectedMovie)) {
           allPrevs.push({movieId : selectedMovie})
           } else console.log("this movie already in sub !")
         
       const toUpdate = {memberId : +props.id, movies : allPrevs}
       console.log(toUpdate)
        dispatch({type : "UPDSUB" , payload : toUpdate})
        } else console.log("choose a movie")
    }
    return (
        <div  style={{ border: "1px solid red", margin: '20px'  }}>
             <h5>Add a new movie</h5>
             <select value={selectedMovie} onChange={(e)=>setMovie(e.target.value)}>
             <option disabled selected value>Choose an option...</option>
             {
                movies.map((mov,index)=>(
                    <option key={index} value={mov.id}>
                        {mov.name}
                    </option>
                ))
             }
            </select><br/>
            <button onClick={addSub}>Subscribe</button>
        </div>
    )
}
export default SubChild2