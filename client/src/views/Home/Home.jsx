// React y Redux Imports
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

// Redux Actions Imports
import { getGames, getGenres, increaseTargetPage, setPage } from "../../redux/actions/actions";

// Component Imports
import GamesContainer from "../../components/GamesContainer/GamesContainer";
import PageSelector from "../../components/PageSelector/PageSelector";

const Home = () => {

    const search = useSelector(state => state.search)
    const games = useSelector(state => state.games);
    const filtered = useSelector(state => state.filtered);
    const targetPage = useSelector(state => state.targetPage);
    const page = useSelector(state => state.page);
    const genres = useSelector(state => state.genres);

    const dispatch = useDispatch();

    const [dataProvider, setDataProvider] = useState(games);


    useEffect(() => {
        if (filtered.length > 0 && search.length > 0) {
            setDataProvider(filtered);
            dispatch(setPage(1));
        }

        if (filtered.length > 0 && search.length == 0 && games.length > 0) {
            setDataProvider(filtered);
            dispatch(setPage(1));
        }


        if (search.length == 0 && filtered.length == 0 && games.length > 0) {
            setDataProvider(games);
            dispatch(setPage(1));
        }

        if (search.length > 0 && filtered.length == 0 && games.length > 0) {
            setDataProvider(search);
            dispatch(setPage(1));
        }

        if (genres.length===0) {
            dispatch(getGenres())
        }

        
        console.log('dataprovider',dataProvider);

    }, []);


    useEffect(() => {
        if (page == targetPage) {
            dispatch(increaseTargetPage());
        }
    }, [page])

    useEffect(() => {
        if(dataProvider == games){
            dispatch(getGames(page, targetPage, games));
        }
    }, [targetPage])

    useEffect(() => {
        
    }, [])




    return (
        <div>
            <GamesContainer page={page} games={games} />
            <PageSelector
                totalOfElements={filtered.length > 0 ? filtered.length : targetPage * 20}
                maximumAdmited={dataProvider.length}
            />
        </div>
    );
}

export default Home;