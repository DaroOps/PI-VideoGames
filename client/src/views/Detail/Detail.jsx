import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import './Detail.modules.css'
import axios from "axios";
import Rating from "../../components/Rating/Rating";


const Detail = () => {

    const [game, setGame] = useState({});
    const [infoCharged, setIsInfoCharged] = useState(false);

    const { id } = useParams();

    useEffect(() => {

        axios(`http://localhost:3001/videogames/${id}`).then(({ data }) => {
            if (data.name) {
                setGame(data);
                setIsInfoCharged(true);

                console.log(data)
            } else {
                console.log('No hay personajes con ese ID');
            }
        });
        return setGame({});
    }, []);

    return (
        <div className="flex-info" style={{ background: `linear-gradient(rgba(30, 27, 38, 0.95), rgba(30, 27, 38, 0.95)), url(${game.background_image ? game.background_image : game.image})` }}>


            <div className="cellphone-container">
                <div className="movie">
                    <div className="menu"></div>
                    <div className="movie-img" style={{ backgroundImage: `url(${game.background_image ? game.background_image : game.image})` }}></div>
                    <div className="text-movie-cont">
                        <div className="mr-grid">
                            <div className="col1">
                                <h2>{game.name}</h2>
                                <ul className="movie-gen">
                                    {Array.isArray(game.genres) && game.genres.map((genre) => (
                                        <li key={typeof genre === 'object' ? genre.id : genre}>{typeof genre === 'object' ? genre.name : genre} /</li>
                                    ))}
                                </ul>
                            </div>
                            <div className="raing-flex">
                                <h3>Rating:</h3>
                                <div className="material-icons"><Rating value={game.rating} /></div>
                            </div>
                        </div>
                        <div className="mr-grid summary-row">
                            <div className="col2">
                                <h5>SUMMARY</h5>
                            </div>
                            <div className="col2">
                                <ul className="movie-likes">
                                    <li> id:    {game.id}</li>
                                </ul>
                            </div>
                        </div>
                        <div className="mr-grid">
                            <div className="col1">
                                <p lang="en" className="movie-description" dangerouslySetInnerHTML={{ __html: game.description?.slice(0, game.description?.indexOf('<p>Español')) }}></p>

                            </div>
                        </div>
                        <div className="mr-grid actors-row">
                            <div className="col1">
                                <div className="movie-actors">
                                    {Array.isArray(game.platforms) ? (
                                        game.platforms.map((platform) => (
                                            <li key={platform.platform.id}>{platform.platform.name} /</li>
                                        ))
                                    ) : (
                                        <li>{game.platforms} /</li>
                                    )}
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>

    );
}

export default Detail;