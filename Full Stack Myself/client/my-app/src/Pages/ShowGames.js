import React, {useState,useEffect}from "react";
import BarHomePage from './BarHomePage';
import utils from '../utils';
import { Link } from 'react-router-dom';
import DownPage from "./DownHomePage";
function Topup(){

    const [games, setGames] = useState([]);

    useEffect(() => {
      const getGames = async () => {
        const data = await utils.getAll("http://localhost:8000/games");
        setGames(data);
      };
      getGames();
    }, []);

    const renderGameCards = () => {
        return games.map((game, index) => (
          <div key={index} style={{ margin: '19.7px', padding: '10px', border: '2px solid black', borderRadius: '8px',
           textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center', backgroundColor: '#000000', border: '1px solid #ff6600' }}>
            <img src={game.image} alt={game.name} style={{ width:'150px', height: '150px', borderRadius: '8px' }} />
            <Link to={`details/${game.name}`} style={{ marginTop: '10px' }}>
              <h4 >{game.name}</h4>
            </Link>
          </div>
        ));
      };
      return (
        <div style={{backgroundColor : '#1e1e1e'}} >
        
        <BarHomePage />
          <div style={{ display: 'flex', flexWrap: 'wrap' ,  marginTop: '100px' , marginBottom : '200px'}}>
            {renderGameCards()}
          </div>
          <DownPage style={{position : "down"}}/>
        </div>
      );
}
export default Topup