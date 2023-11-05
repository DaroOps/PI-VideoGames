import GamesContainer from "../../components/GamesContainer/GamesContainer";
import { useDispatch, useSelector} from "react-redux";
import { useEffect } from "react";
import { getGames } from "../../redux/actions/actions";
import PageSelector from "../../components/PageSelector/PageSelector";

const Home = () => {

    const page = useSelector(state => state.page);

    const dispatch = useDispatch();

    useEffect(()=>{
        dispatch(getGames( page ));
    },[page])
     
    return (
        <>
            <GamesContainer/>
            <PageSelector/>
        </>
    );
}

export default Home;