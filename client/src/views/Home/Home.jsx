import GamesContainer from "../../components/GamesContainer/GamesContainer";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { getGames } from "../../redux/actions/actions";

const Home = () => {

    const dispatch = useDispatch();

    useEffect(()=>{
        dispatch(getGames());
    },[])
     
    return (
            <GamesContainer/>
    );
}

export default Home;