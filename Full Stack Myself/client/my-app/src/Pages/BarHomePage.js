import React, { useState , useEffect} from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios'

function BarHomePage() {
    const [menuOpen, setMenuOpen] = useState(false);
    const [bool,setBool] = useState(false)
    const user = localStorage.getItem("user")

    const token = localStorage.getItem("token");
    const toggleMenu = () => {
        setMenuOpen(true);
    };

    const closeMenu = () => {
        setMenuOpen(false);
    };

    const verifyToken = async () => {
        try {
          const { data } = await axios.post("http://localhost:3001/jwt/verify", { token: token });

          
          if (data.auth == true) {
            setBool(true)
          } 
        } 
        catch (e) {
          console.log(e);
        }
      }
    
      useEffect(() => {
        verifyToken();
      }, [])

    return (
        <div className="navbar">
            <div className="menu-left">
                {/* Menu burger ici */}
                <div className="burger-menu" onClick={toggleMenu}>
                    <span>&#9776;</span>
                </div>
                {/* Menu déroulant */}
                {menuOpen && (
                    <div className="menu-dropdown">
                        <button className="close-button" onClick={closeMenu}>
                            X
                        </button>
                        <div className="menu-dropdown-item">
                            <Link to="/home">
                                <img src="data:image/png;base64,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" style={{height : '20px' , width : '20px'}}/>
                                Home
                            </Link>
                        </div>
                        <div className="menu-dropdown-item">
                            <Link to="/topup">
                                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8d1o2c7IePe54Oy5c_ZZ7KrgZetD97mi8Mg&usqp=CAU" style={{height : '20px', width : '20px'}}/>
                                Topup
                            </Link>
                        </div>
                        <div className="menu-dropdown-item">
                            <Link to="/about">
                                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT6PYXr9wpXaLWA_mPIzaj55AHMS0Dyi14cPyxioMIMaib_LNt7GacCDnYuKh_xGIvFyYA&usqp=CAU" style={{height: '20px', width :'20px'}} />
                                About
                            </Link>
                        </div>

                    </div>
                )}
            </div>
            <div className="menu-middle">
                {/* Menu de recherche ici */}
                <input type="text" placeholder="search..." />
            </div>
            <div className="menu-right">
                
              { bool?  <Link to="/manage-your-account">
                    <div className="login-logo">
                       <span >&#x1F4BB;</span>

                    </div>
                </Link> :  <Link to="/">
                    <div className="login-logo">
                        <span>&#128100;</span>
                    </div>
                </Link>
                }
            </div>
            <style>
                {`
                    .navbar {
                        display: flex;
                        justify-content: space-between;
                        align-items: center;
                        background-color: #000033;
                        color: white;
                        padding: 10px;
                        position: relative;
                    }
                    .burger-menu, .login-logo {
                        width: 40px;
                        height: 40px;
                        cursor: pointer;
                        display: flex;
                        justify-content: center;
                        align-items: center;
                        border-radius: 5px;
                        background-color: rgba(255, 255, 255, 0.2);
                    }
                    .burger-menu:hover, .login-logo:hover {
                        background-color: rgba(255, 255, 255, 0.3);
                    }
                    .menu-dropdown {
                        position: absolute;
                        top: 0;
                        left: ${menuOpen ? '0' : '-100px'};
                        background-color: #FF7F00;
                        color: white;
                        padding: 10px;
                        width: 100px;
                        height: 100vh;
                        z-index: 9999;
                    }
                    .close-button {
                        position: absolute;
                        top: 10px;
                        right: 10px;
                        cursor: pointer;
                        background-color: #000033;
                        border: none;
                        border-radius: 3px;

                        color: white;
                    }
                    .menu-dropdown-item {
                        padding: 5px 0;
                    }
                    .menu-middle {
                        flex: 2;
                        text-align: center;
                    }
                    input[type="text"] {
                        padding: 10px;
                        border-radius: 5px;
                        border: 1px solid #ccc;
                        background-color: lightorange;
                        width: 300px;
                    }
                `}
            </style>
        </div>
    );
}

export default BarHomePage;
