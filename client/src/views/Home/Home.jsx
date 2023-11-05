import GamesContainer from "../../components/GamesContainer/GamesContainer";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { getGames } from "../../redux/actions/actions";
import PageSelector from "../../components/PageSelector/PageSelector";

const Home = () => {

    const dispatch = useDispatch();

    useEffect(()=>{
        dispatch(getGames());
    },[])
     
    return (
        <>
            <GamesContainer/>
            <PageSelector/>
        </>
    );
}

export default Home;