import React, {useState , useEffect} from "react";
import {  useSelector } from "react-redux";
import { Link } from 'react-router-dom';
import SubChild2 from "./SubsChild2";
function SubChild(props) {
    const [watched, setWat] = useState([])
    const subs = useSelector(elem => elem.subs)
    const movies = useSelector(elem => elem.movies)
    const [isVisible,setVis] = useState(false)
    const [id,setId] = useState(null)

    const addNewMovie = ()=>{
        setVis(true)
        setId(props.id)
    }
    useEffect(() => {
        const foundMov = () => {

            let movs = []
            for (let i = 0; i < subs.length; i++) {
              if(subs[i].memberId===props.id){
                let watchedmovs = subs[i].movies
                for(let j = 0; j < watchedmovs.length; j++){
                    let actualmov = watchedmovs[j]
                    for(let g = 0; g < movies.length; g++){
                    if(movies[g].id == actualmov.movieId){
                        movs.push(movies[g])
                    }
                    }
                }
              }
            }
            
            setWat(movs)
        }
        foundMov()

    }, [subs])
    return (
        <div style={{ border: "2px solid black", margin: '20px'  }}>
             <h3>Movie Watched :</h3>
             <button onClick={addNewMovie}>Subscribe to a new movie</button>
             {isVisible && <SubChild2 id = {id}/>}
             {
                 watched.map((elm, index) => {
                    if (elm.status !== "deleted") {
                        return (
                            <div key={index}>
                                <li>
                                <Link to={`/movie/${elm.id}`}>{elm.name}</Link>
                                </li>
                            </div>
                        )
                    }
                })
             }
        </div>
    )
}
export default SubChild