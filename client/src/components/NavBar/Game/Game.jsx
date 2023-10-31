import styled from 'styled-components';

const StyledGame = styled.div`
    background: #535050;
    `;

const Image = styled.img`
max-width: 100%;
max-height: 100%;
object-fit: cover; 
`;

const Game = (props) => {

    return (
        <StyledGame>
            <p>{props.name}</p>
            <Image src={props.image} alt={props.name}/>
        </StyledGame>
    );

}

export default Game