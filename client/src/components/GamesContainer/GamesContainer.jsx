import { useSelector } from "react-redux";
import Game from "../Game/Game";

import './GamesContainer.modules.css';



const GamesContainer = () => {
   
    const games = useSelector(state => state.games);

  
    return (
        <div className='games-container-flex'>
           
            {games.map(game => {
                return (<Game
                    key={game.id}
                    id={game.id}
                    name={game.name}
                    image={game.background_image}
                    genres={game.genres}
                    rating={game.rating}
                    ratingCount={game.ratings_count}
                />);
            })}
        </div>  
    );

}

export default GamesContainer