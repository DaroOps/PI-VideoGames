import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import './Detail.modules.css'
import axios from "axios";


const Detail = () => {

    const [game, setGame] = useState({});
    const [infoCharged, setIsInfoCharged] = useState(false);

    const { id } = useParams();

    useEffect(() => {

        axios(`http://localhost:3001/videogames/${id}`).then(({ data }) => {
            if (data.name) {
                setGame(data);
                setIsInfoCharged(true);
            } else {
                console.log('No hay personajes con ese ID');
            }
        });
        return setGame({});
    }, []);

    return (
        <div>
           
            <div className="spacer"></div>
            <div className="flex-info">

                <div className={`aditional-info ${infoCharged ? "infoCharged" : ""}`}>
                    <h2>Game DETAIL</h2>
                    <h2>Name: {game.name}</h2>
                </div>

            </div>

        </div>
    );
}

export default Detail;