import React , {useEffect, useState}  from "react";
import { useParams , useNavigate } from "react-router-dom";
import {  useSelector } from "react-redux";

function PresentMovie(){

    let { id } = useParams();
    const movies = useSelector(elm=>elm.movies)
    const [mov,setMov]=useState({})
    const navigate = useNavigate()


useEffect(()=>{
    const movie = movies.find(mov=>mov.id == id)
    movie ?  setMov(movie) : setMov({})
},[id])
    
   
const goBack = ()=>{
    navigate('/main')
}

return (
    <div>
        <h3>Movie : {id}</h3>
        <p>Name : {mov.name}</p>
        <p>Genres :</p>
        <ul>
            {
                mov.genres && mov.genres.map((genre, index) => (
                    <li key={index}>{genre}</li>
                ))
            }
        </ul>
        <p>Image URL : {mov.image}</p>
        <p>Premiered : {mov.premiered}</p>
        <button onClick={goBack}>go back</button>
    </div>
);
}
export default PresentMovie