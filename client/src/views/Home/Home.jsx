// React y Redux Imports
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

// Redux Actions Imports
import { getGames, getGenres, increaseTargetPage } from "../../redux/actions/actions";

// Component Imports
import GamesContainer from "../../components/GamesContainer/GamesContainer";
import PageSelector from "../../components/PageSelector/PageSelector";

const Home = () => {

    const targetPage = useSelector(state => state.targetPage);
    const page = useSelector(state => state.page);
    const genres = useSelector(state => state.genres);
    const games = useSelector(state => state.games);
    const filtered = useSelector(state => state.filtered);

    const dispatch = useDispatch();

    useEffect(()=>{
        if(page == targetPage){
            dispatch(increaseTargetPage());
        } 
    },[page])

    useEffect(()=>{
        dispatch(getGames( page , targetPage, games));
    },[targetPage])


   

    useEffect(()=>{
        if(page){
            dispatch(getGames( page ))
        }
        if(genres){
            dispatch(getGenres())
        }
    },[])
     
    return (
        <div>
            <GamesContainer page={page} games={filtered.length>0?filtered:games}/>
            <PageSelector totalOfElements={filtered.length>0?filtered.length:targetPage*20}/>
        </div>
    );
}

export default Home;