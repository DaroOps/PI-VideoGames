import React, { useEffect, useState } from 'react';
import './FilterMenu.modules.css';
import InputSearch from '../InputSearch/InputSearch';
import DropdownMenu from '../DropdownMenu/DropdownMenu';
import { useDispatch, useSelector } from 'react-redux';
import TagCheckBox from '../TagCheckBox/TagCheckBox';
import generateUUID from '../../utils/generateUUID';
import { searchGame, setFilters } from '../../redux/actions/actions';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFilter } from '@fortawesome/free-solid-svg-icons'

const FilterMenu = () => {

    const dispatch = useDispatch();

    const genres = useSelector(state => state.genres);

    const tagList = [];

    const [selectedTags, setSelectedTags] = useState([]);
    const [searchValue, setSearchValue] = useState('');

    const [isActive, setIsActive] = useState(false);

    const toggleSidebar = () => {
        setIsActive(!isActive);
    };

    const manageGenres = (event) => {
        const tag = event.target.name;

        let updatedTags;

        if (event.target.checked) {
            updatedTags = [...selectedTags, tag];
        } else {
            updatedTags = selectedTags.filter((selectedTag) => selectedTag !== tag);
        }

        setSelectedTags(updatedTags);
    }

    const handleSearch = (searchValue) => {

        dispatch(searchGame(searchValue))

    }

    if (genres) {
        genres.forEach(genre => {
            tagList.push(<TagCheckBox key={generateUUID()} name={genre} value={genre} onChange={manageGenres} checked={selectedTags.includes(genre)} />)
        });
    }

    useEffect(() => {
        dispatch(setFilters(selectedTags));
    }, [selectedTags])

    console.log('selectedTags', selectedTags);

    return (
        <div className={`wrapper ${isActive ? 'active' : ''}`}>

            <div className={`spacer ${isActive ? 'active' : ''}`} />

            <div className="hamburger">
                <a href="#" onClick={toggleSidebar}>
                    <FontAwesomeIcon icon={faFilter} style={{ color: "#ffffff", }} />
                </a>
            </div>

            <aside className={`sidebar  ${isActive ? 'active' : ''}`}>
                <div className="filter-menu">
                    <div>
                        <DropdownMenu
                            title="Search Game"
                            elements={
                                [<InputSearch
                                    onSearch={handleSearch}
                                    searchValue={searchValue}
                                    setSearchValue={setSearchValue}
                                />]}
                        />
                    </div>
                    <div className="genre-filter">
                        <DropdownMenu elements={tagList} title='Filter Genres' />
                    </div>
                    <div className="origin-filter">
                        
                        <DropdownMenu elements={
                            [
                                [<input type="checkbox" id="API" />,<label htmlFor="action">Api</label>],
                                [<input type="checkbox" id="DB" />,<label htmlFor="action">Data Base</label>]
                            ]}

                            title="Select  Origin"
                        />
            

                    </div>

                </div>

            </aside>
        </div>
    );
}

export default FilterMenu;


{/* <div className="filter-menu">
            <div>
                <DropdownMenu elements={[<InputSearch 
                   onSearch={handleSearch}
                   searchValue={searchValue}
                   setSearchValue={setSearchValue}
                    />]} />
            </div>
            <div className="genre-filter">
                <DropdownMenu elements={tagList} />
            </div>
            <div className="origin-filter">
                <h2>Filtrar por Origen</h2>

                <input type="checkbox" id="API" /> <label htmlFor="action">Api</label>
                <input type="checkbox" id="DB" /> <label htmlFor="adventure">DataBase</label>

            </div>

        </div> */}