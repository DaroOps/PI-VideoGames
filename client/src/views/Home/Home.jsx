import GamesContainer from "../../components/GamesContainer/GamesContainer";
import { useDispatch, useSelector} from "react-redux";
import { useEffect } from "react";
import { getGames, getGenres } from "../../redux/actions/actions";
import PageSelector from "../../components/PageSelector/PageSelector";

const Home = () => {

    const page = useSelector(state => state.page);
    const genres = useSelector(state => state.genres);

    const dispatch = useDispatch();

    useEffect(()=>{
        dispatch(getGames( page ));
    },[page])

    useEffect(()=>{
        if(page){
            dispatch(getGames( page ))
        }
        if(genres){
            dispatch(getGenres())
        }
    },[])
     
    return (
        <>
            <GamesContainer/>
            <PageSelector/>
        </>
    );
}

export default Home;