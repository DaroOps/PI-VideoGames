import Game from "../Game/Game";
import generateUUID from "../../utils/generateUUID";

import './GamesContainer.modules.css';

const GamesContainer = ({games}) => {
    return (
        <div className="master-card-container">
            <div className='games-container-flex'>

                {games?.map(game => {
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