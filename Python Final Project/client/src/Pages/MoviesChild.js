import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {Link} from 'react-router-dom'
function MoviesChild(props) {

    const members = useSelector(elem => elem.members)
    const subs = useSelector(elem => elem.subs)
    const [watched, setWat] = useState([])

    useEffect(() => {
        const foundUsr = () => {

            let usrs = []
            for (let i = 0; i < subs.length; i++) {
                let sub = subs[i]
                for (let j = 0; j < sub.movies.length; j++) {
                    if (sub.movies[j].movieId == props.id) {
                        usrs.push(sub)
                    }
                }
            }

            let arr = []
            for (let i = 0; i < usrs.length; i++) {
                let obj = members.find(mbr => mbr.id === usrs[i].memberId)
                arr.push(obj)
            }
            setWat(arr)
        }
        foundUsr()

    }, [subs])
    return (
        <div style={{ border: "1px solid blue", margin: '20px' }}>
            <h5>Sub Watched</h5>
            <ul>
                {
                    watched.map((elm, index) => {
                        if (elm.status !== "deleted") {
                            return (
                                <div key={index}>
                                    <li>
                                    <Link to={`/member/${elm.id}`}>{elm.name}</Link>
                                    </li>
                                </div>
                            )
                        }
                    })
                }
            </ul>

        </div>
    )
}

export default MoviesChild