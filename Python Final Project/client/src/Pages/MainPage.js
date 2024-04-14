
import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import ManageUsers from './ManageUsers';
import MoviesPage from './ManageMovies';
import SubPage from './ManageSubs';

function MainPage() {
    const users = useSelector(elem => elem.users);
    const [isVisible, setVis] = useState(false);
    const [usersCom, setCom] = useState(false);
    const [moviesCom, setMov] = useState(false);
    const [subsCom, setSub] = useState(false);
    const name = sessionStorage.getItem("name");
    const navigate = useNavigate();

    useEffect(() => {
        checkAdmin();
    }, []);

    const checkAdmin = () => {
        let b = false;
        for (let i = 0; i < users.length; i++) {
            let usr = users[i];
            const fullName = usr.fname + " " + usr.lname;
            if (fullName === name && usr.permission) {
                for (let j = 0; j < usr.permission.length; j++) {
                    if (usr.permission[j] === "Admin") {
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
            setVis(true);
        }
    };

    const logout = () => {
        navigate("/");
    };

    const usersManagement = () => {
        setCom(true);
        setMov(false);
        setSub(false);
    };

    const moviesManagement = () => {
        setCom(false);
        setMov(true);
        setSub(false);
    };

    const subsManagement = () => {
        setCom(false);
        setMov(false);
        setSub(true);
    };

    return (
        <div>
            <h2>MainPage Page</h2>
            <h4>Hello {name} !!</h4>
            <button onClick={moviesManagement}>Movies</button>
            <button onClick={logout}>Log Out</button>
            <button onClick={subsManagement}>Subscriptions</button>
            {isVisible && <button onClick={usersManagement}>Users Management</button>}
            <br/><br/>
            {usersCom && <ManageUsers/>}
            {moviesCom && <MoviesPage/>}
            {subsCom && <SubPage/>}
        </div>
    );
}

export default MainPage;
