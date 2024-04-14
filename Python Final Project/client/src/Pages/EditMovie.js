import React, { useState , useEffect} from "react";
import {  useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

function EditMovie() {
    const movies = useSelector(elem => elem.movies)
    const [newMov, setMov] = useState({id : 0, name: '', genres: [], image: '', premiered: '' });
    const [genreInput, setGenreInput] = useState('');
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const save = ()=>{
        dispatch({type : "UPDMOV",payload : newMov , id : newMov.id})
    }
    const cancel = ()=>{
        navigate("/main")
    }

    useEffect(() => {
        const movie = movies.find(mov => mov.id == sessionStorage.getItem("movieId"))
        if (movie) setMov({id : movie.id , name : movie.name , image : movie.image , premiered : movie.premiered, genres : []})

    }, [movies])

    return (
        <div style={{ border: "3px solid black" , margin: '20px' }}>
            <h4>Update Movie</h4>
            Name: <input value={newMov.name} onChange={(e) => setMov({ ...newMov, name: e.target.value })}></input><br />
            Genres : <input value={genreInput} onChange={(e) => setGenreInput(e.target.value)} ></input>
            <button onClick={() => { 
                if (genreInput.trim() !== '') {
                    const updatedGenres = [...newMov.genres, genreInput.trim()];
                    setMov({ ...newMov, genres: updatedGenres });
                    setGenreInput('');
                }
            }}>Add Genre</button><br />
            Image URL : <input  value={newMov.image} onChange={(e) => setMov({ ...newMov, image: e.target.value })}></input><br />
            Premiered : <input value={newMov.premiered} onChange={(e) => setMov({ ...newMov, premiered: e.target.value })}></input><br />

            <button onClick={save}>Save</button>
            <button onClick={cancel}>Cancel</button>
        </div>
    );
}

export default EditMovie;
