import GamesContainer from "../../components/NavBar/GamesContainer/GamesContainer";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { getGames } from "../../redux/actions/actions";
const Home = () => {

    const dispatch = useDispatch();

    useEffect(()=>{
        dispatch(getGames());
    },[])
     
    return (
        <div>

            <p>Home</p>
            <GamesContainer/>
        </div>
    );
}

export default Home;