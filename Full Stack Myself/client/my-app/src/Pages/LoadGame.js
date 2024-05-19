import React, { useEffect, useState } from "react";
import BarHomePage from "./BarHomePage";
import DownPage from "./DownHomePage";
import { useParams } from "react-router-dom";
import utils from "../utils";
import { AddToDB } from "../FireBase/utilsFB";

function LoadGame() {
    let { gameName } = useParams();
    const [game, setGame] = useState('');
    const [bool, setBool] = useState(null);
    const [loginInfo, setLog] = useState({ email: '', password: '', nameOfGame: gameName , pack :''});
    const [usergame, setUser] = useState({ usergame: '', nameOfGame: gameName , pack : ''});
    const [selectedCoinPack, setSelectedCoinPack] = useState(null);
    const [errorMessage, setErrorMessage] = useState('');


    useEffect(() => {
        const getGame = async () => {
            const games = await utils.getAll("http://localhost:8000/games");
            const specificGame = games.find(gm => gm.name === gameName);
            setGame(specificGame);

            if (specificGame.loginType === "Username") {
                setBool(true);
            } else {
                setBool(false);
            }
        };
        getGame();
    }, [gameName]);

    const handleCheckboxChange = (index,coin) => {
        bool ? setUser({...usergame, pack : coin}) : setLog({...loginInfo, pack : coin})
        setSelectedCoinPack(index);
    };

    const keepToDB = async () => {
        const dataToSend = bool ? usergame : loginInfo
        if (selectedCoinPack !== null){
            if(dataToSend.email =='' || dataToSend.password=='' || dataToSend.usergame==''){
                setErrorMessage("please enter your player detail !");
            } else await AddToDB(dataToSend, gameName);

        } else  setErrorMessage('choose a pack to load !');
    };

    return (
        <div>
            <BarHomePage />
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column', backgroundColor: '#1e1e1e', color: '#ffffff', padding: '20px' }}>
                <div style={{ display: 'flex', margin: "110px" }}>
                    <img style={{ width: '250px', height: '250px', marginRight: '50px', borderRadius: '15px', border: '5px solid #ff6600' }} src={game.image} alt={game.name} />
                    <div>
                        <p><strong style={{color : 'yellowgreen'}}>{game.name}</strong></p>
                        <div style={{ textAlign: 'center', marginTop: '20px' }}>
                            Coins Prices:<br/><br/>
                            {game && game.prices.map((coin, index) => (
                                <div key={index}>
                                    {coin.coins}: {coin.price}$
                                    <input type="checkbox" checked={selectedCoinPack === index} onChange={() => handleCheckboxChange(index,coin.coins)} />
                                </div>
                            ))}
                        </div><br/>
                        {errorMessage && <div style={{ color: 'red'}}>{errorMessage}</div>}
                        
                        <div style={{ textAlign: 'center', marginTop: '20px' }}>
                            {bool ? (
                                <div>
                                    Insert Player ID to load:<br /> <input style={{ padding: '5px', marginTop: '10px', borderRadius: '10px' }} onInput={(e) => setUser({ ...usergame, usergame: e.target.value })}></input>
                                </div>
                            ) : (
                                <div>
                                    Insert email and password to load: <br />
                                    Email <input style={{ padding: '5px', marginTop: '10px', borderRadius: '10px' }} onInput={(e) => setLog({ ...loginInfo, email: e.target.value })}></input><br />
                                    Password <input style={{ padding: '5px', marginTop: '10px', borderRadius: '10px' }} onInput={(e) => setLog({ ...loginInfo, password: e.target.value })}></input>
                                </div>
                            )}
                            <button style={{ padding: '8px', margin: '10px', backgroundColor: 'blue', border: 'none', borderRadius: '10px' }} onClick={keepToDB}>Load Game</button>
                            <button style={{ padding: '8px', margin: '10px', backgroundColor: 'green', border: 'none', borderRadius: '10px' }}>Continue to payment</button>
                        </div>
                    </div>
                </div>
            </div>
            <DownPage />
        </div>
    );
}

export default LoadGame;
