import Game from "../Game/Game";
import FilterMenu from '../FilterMenu/FilterMenu';

import './GamesContainer.modules.css';
import generateUUID from "../../utils/generateUUID";

const GamesContainer = ({ page , games}) => {

    const gamesPerPage = 20;
 
    const startIndex = (page-1) * gamesPerPage;
    const endIndex = startIndex + gamesPerPage;

    const displayedGames = games.slice(startIndex, endIndex);

    return (
        <div className="master-card-container">
            <FilterMenu />
            <div className='games-container-flex'>

                {displayedGames.map(game => {
                    return (<Game
                        key={generateUUID()}
                        id={game.id}
                        name={game.name}
                        image={game.background_image}
                        genres={game.genres}
                        rating={game.rating}
                        ratingCount={game.ratings_count}
                        esbr={game.esrb_rating?.name}
                        released={game.tba?'tba':game.released}
                    />);
                })}
            </div>

        </div>
    );

}

export default GamesContainer