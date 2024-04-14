import React, { useState } from "react";
import {  useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

function AddMovie() {
    const [newMov, setMov] = useState({ name: '', genres: [], image: '', premired: '' });
    const [genreInput, setGenreInput] = useState('');
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const save = ()=>{
        dispatch({type : "ADDMOV",payload : newMov})
    }
    const cancel = ()=>{
        // navigate("/main")
    }

    return (
        <div style={{ border: "3px solid black" , margin: '20px' }}>
            <h4>Add Movie</h4>
            Name: <input onChange={(e) => setMov({ ...newMov, name: e.target.value })}></input><br />
            Genres : <input value={genreInput} onChange={(e) => setGenreInput(e.target.value)} ></input>
            <button onClick={() => { 
                if (genreInput.trim() !== '') {
                    const updatedGenres = [...newMov.genres, genreInput.trim()];
                    setMov({ ...newMov, genres: updatedGenres });
                    setGenreInput('');
                }
            }}>Add Genre</button><br />
            Image URL : <input onChange={(e) => setMov({ ...newMov, image: e.target.value })}></input><br />
            Premiered : <input onChange={(e) => setMov({ ...newMov, premired: e.target.value })}></input><br />

            <button onClick={save}>Save</button>
            <button onClick={cancel}>Cancel</button>
        </div>
    );
}

export default AddMovie;
