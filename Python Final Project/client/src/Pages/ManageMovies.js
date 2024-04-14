import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import MoviesChild from "./MoviesChild";
import { useNavigate } from "react-router-dom";
import AddMovie from "./AddMovie";
function MoviesPage() {

    
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const [isVisible, setVis] = useState(false)
    const [isVisible2, setVis2] = useState(true)
    const movies = useSelector(elem => elem.movies)
    const users = useSelector(elem => elem.users);
    const [movs, setMovs] = useState([])
    const name = sessionStorage.getItem("name");
    const [movieToFind, setMov] = useState('')

    const [managePerm, setPerm] = useState({ add: false, view: false, edit: false, delete: false })


    const allMovies = () => {
        setVis(false)
        setVis2(true)
        setMovs(movies)
    }
    const addMovie = () => {
        setVis2(false)
        setVis(true)

    }
    const editMovie = (id) => {
        sessionStorage.setItem("movieId",id)
        navigate('/edit-movie')
    }
    const deleteMovie = (id) => {
        dispatch({ type: "DELMOV", id: id })
        setMovs(movies)
    }
    const findMovie = () => {

        const toSet = movies.find(mov => mov.name === movieToFind)
        if (toSet) {

            setMovs([toSet])
        } else {
            setMovs(movies)
            console.log("no movie founded !!")

        }
    }
        useEffect(() => {

            checkAdmin("Delete Movies", "delete");
            checkAdmin("Update Movies", "edit");
            checkAdmin("View Movies", "view");
            checkAdmin("Create Movies", "add");

        }, []);
    

        const checkAdmin = (perm, key) => {
            let b = false;
            for (let i = 0; i < users.length; i++) {
                let usr = users[i];
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
                <h2>Movies</h2>
                {managePerm.view && <button onClick={allMovies}>All Movies</button>}
                {managePerm.add && <button onClick={addMovie}>Add Movie</button>}
                {isVisible2 && managePerm.view && <strong>Find Movie: <input type="text" onChange={(e) => setMov(e.target.value)} /></strong>}
                {isVisible2 && managePerm.view && <button onClick={findMovie}>Find</button>}
                {isVisible && <AddMovie />}
                {isVisible2 && movs.map((mov, index) => {
                    if (mov.status !== "deleted") {
                        return (
                            <div key={index} style={{ border: "2px solid gray", margin: '20px' }} >
                                <p><strong>{mov.name}</strong></p>
                                Genres :<p>{mov.genres}</p>
                                <img src={mov.image} alt={mov.name}  />
                                <MoviesChild id={mov.id} />



                                {managePerm.edit && <button onClick={()=>editMovie(mov.id)}>Edit</button>}
                                {managePerm.delete && <button onClick={() => deleteMovie(mov.id)}>Delete</button>}
                            </div>
                        );
                    }
                    return null;
                })}
            </div>
        )
    }

    export default MoviesPage