// React y Redux Imports
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

// Redux Actions Imports
import { getGames, getGenres, increaseTargetPage, searchGame, setPage, setSearchState } from "../../redux/actions/actions";

// Component Imports
import GamesContainer from "../../components/GamesContainer/GamesContainer";
import PageSelector from "../../components/PageSelector/PageSelector";
import FilterMenu from "../../components/FilterMenu/FilterMenu";

import './Home.modules.css'
import EmptyState from "../../components/EmptyState/EmptyState";

const Home = () => {

    const isSearching = useSelector(state => state.isSearching)
    const games = useSelector(state => state.games);

    const next = useSelector(state => state.next);
    const previous = useSelector(state => state.previous);
    const count = useSelector(state => state.gamesCount);

    const filtered = useSelector(state => state.filtered);
    const searchQuery = useSelector(state => state.searchQuery);
    const lastSearch = useSelector(state => state.lastSearchQuery);
    const page = useSelector(state => state.page);
    const genres = useSelector(state => state.genres);

    const dispatch = useDispatch();


    useEffect(() => {
        if (genres.length === 0) {
            dispatch(getGenres())
        }
        if (!games) {
            dispatch(setPage(1));
            dispatch(getGames(page));
        }
        if (searchQuery == '' && isSearching) {
            dispatch(setSearchState(false));
            dispatch(setPage(1));
        }
    }, []);

    useEffect(() => {
        if (!isSearching) {
            dispatch(getGames(page))
        }

    }, [page, isSearching]);

    useEffect(() => {
        if (searchQuery == '' && isSearching) {
            dispatch(setSearchState(false));
            dispatch(setPage(1));
        }

        if (searchQuery) {
            if (searchQuery !== lastSearch && lastSearch !== "" && searchQuery !== "") {
                dispatch(searchGame(searchQuery, page));
                dispatch(setPage(1));
            }
            else {
                if(!isSearching){
                    dispatch(setSearchState(true));
                    dispatch(setPage(1));
                }
                dispatch(searchGame(searchQuery, page));
            }
        }

    }, [searchQuery, page]);

    return (
        <div>
            <div className="home">
                <FilterMenu />
                {filtered.length > 0 && filtered[0] === "not-found" ? (
                    <EmptyState />
                ) : (
                    <div className="games-cc-cc-cc">
                    <GamesContainer games={filtered.length > 0 ? filtered : games} />
                    </div>
                )}
            </div>

            <PageSelector totalOfElements={count} next={next} prev={previous} />

        </div>
    );

}

export default Home;