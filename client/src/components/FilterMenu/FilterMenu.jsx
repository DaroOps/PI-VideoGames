import React, { useEffect, useState } from 'react';
import './FilterMenu.modules.css';
import InputSearch from '../InputSearch/InputSearch';
import DropdownMenu from '../DropdownMenu/DropdownMenu';
import { useDispatch, useSelector } from 'react-redux';
import TagCheckBox from '../TagCheckBox/TagCheckBox';
import generateUUID from '../../utils/generateUUID';
import { setFilters } from '../../redux/actions/actions';

const FilterMenu = () => {

    const dispatch = useDispatch();

    const genres = useSelector(state => state.genres);

    const tagList = [];

    const [selectedTags, setSelectedTags] = useState([]);


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


    if (genres) {
        genres.forEach(genre => {
            tagList.push(<TagCheckBox key={generateUUID()} name={genre} value={genre} onChange={manageGenres} checked={selectedTags.includes(genre)} />)
        });
    }

    useEffect(() => {
        dispatch(setFilters(selectedTags));
    }, [selectedTags])

    return (
        <div className="filter-menu">
            <div>
                <DropdownMenu elements={[<InputSearch />]} />
            </div>
            <div className="genre-filter">
                <DropdownMenu elements={tagList} />
            </div>

            {/* Opciones para filtrar por origen */}
            <div className="origin-filter">
                <h2>Filtrar por Origen</h2>

                <input type="checkbox" id="API" /> <label htmlFor="action">Api</label>
                <input type="checkbox" id="DB" /> <label htmlFor="adventure">DataBase</label>

            </div>

            {/* Otras opciones de filtrado */}
            {/* Agrega más secciones de filtrado aquí según tus necesidades */}
        </div>
    );
};

export default FilterMenu;
