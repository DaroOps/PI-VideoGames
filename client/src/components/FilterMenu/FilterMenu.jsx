import React, { useEffect, useState } from 'react';
import './FilterMenu.modules.css';
import InputSearch from '../InputSearch/InputSearch';
import DropdownMenu from '../DropdownMenu/DropdownMenu';
import { useDispatch, useSelector } from 'react-redux';
import TagCheckBox from '../TagCheckBox/TagCheckBox';
import generateUUID from '../../utils/generateUUID';
import { order, orderRating, setFilters } from '../../redux/actions/actions';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFilter } from '@fortawesome/free-solid-svg-icons'
import RadioButton from '../RadioButton/RadioButton';
import InputRating from '../InputRating/InputRating';

const FilterMenu = () => {
    
    const dispatch = useDispatch();

    const genres = useSelector(state => state.genres);

    const tagList = [];

    const [selectedTags, setSelectedTags] = useState([]);
    
    const [isActive, setIsActive] = useState(false);
    
    const [selectedOption, setSelectedOption] = useState(null);

    const [selectedRate, setSelectedRate] = useState(null);
    
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


    const handleChange = (id) => {
        setSelectedOption(id);
        dispatch(order(id));
    };

    const handleRating=(id) =>{
        setSelectedRate(id);
        dispatch(orderRating(id));
    }


    if (genres) {
        genres.forEach(genre => {
            tagList.push(<TagCheckBox key={generateUUID()} name={genre} value={genre} onChange={manageGenres} checked={selectedTags.includes(genre)} />)
        });
    }

    useEffect(() => {
        if (selectedTags.length === 0) {
            dispatch(setFilters([]));
        }
        else {
            dispatch(setFilters(selectedTags));
        }
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
                                [<InputSearch />]}
                        />
                    </div>
                    <div className="genre-filter">
                        <DropdownMenu elements={tagList} title='Filter Genres' />
                    </div>
                    <div className="origin-filter">

                        <DropdownMenu elements={
                            [
                                <RadioButton id="DEF" label="Default" handleChange={handleChange} selectedOption={selectedOption} />,
                                <RadioButton id="API" label="API" handleChange={handleChange} selectedOption={selectedOption} />,
                                <RadioButton id="DB" label="DB" handleChange={handleChange} selectedOption={selectedOption}/>,
                            ]}

                            title="Select  Origin"
                        />


                    </div>
                    <div>
                        <DropdownMenu elements={[
                            <RadioButton id="B" label="Base" handleChange={handleChange} selectedOption={selectedOption} />,
                            <RadioButton id="A" label="Ascending" handleChange={handleChange} selectedOption={selectedOption} />,
                            <RadioButton id="D" label="Descending" handleChange={handleChange} selectedOption={selectedOption}/>,
                        ]} title="Order Filter" />
                    </div>
                    <div>
                        <DropdownMenu  elements={[
                            <RadioButton id="BR" label="Base" handleChange={handleRating} selectedOption={selectedRate} />,
                            <RadioButton id="AR" label="Ascending" handleChange={handleRating} selectedOption={selectedRate} />,
                            <RadioButton id="DR" label="Descending" handleChange={handleRating} selectedOption={selectedRate}/>,
                        ]} title="Order Rating" />
                    </div>
                </div>

            </aside>
        </div>
    );
}

export default FilterMenu;


// [<input type="radio" id="A" />, <label htmlFor="action" style={{ whiteSpace: "pre" }}>Ascending   </label>],
// [<input type="radio" id="D" />, <label htmlFor="action">Descending</label>]