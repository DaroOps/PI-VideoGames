import { useSelector } from "react-redux";
import Game from "../Game/Game";
import styled from 'styled-components';

const StyledGamesContainer = styled.div`
    background: #f0f0f0; 
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-evenly;
    align-items: stretch;
    align-content: center;
`;

const GamesContainer = () => {

    const games = useSelector(state => state.games);

    return (
        <StyledGamesContainer>
            {
                games.map(game => {
                    return (<Game
                        key={game.id}
                        id={game.id}
                        name={game.name}
                        image={game.background_image}
                        genres={game.genres}
                    />);
                })
            }
        </StyledGamesContainer>
    );

}

export default GamesContainer