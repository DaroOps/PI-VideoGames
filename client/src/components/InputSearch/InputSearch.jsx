import './InputSearch.modules.css'
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setSearchQuery } from '../../redux/actions/actions';

const InputSearch = () => {
    const query =useSelector(state => state.searchQuery);
    const dispatch = useDispatch();
    const [searchValue, setSearchValue] = useState(query);


    const handleSearch = (event) => {
        event.preventDefault();
        dispatch(setSearchQuery(searchValue));
    }

    const handleChange = (event) => {
        const updatedValue = event.target.value;
        setSearchValue(updatedValue);
    }

   

    return (
        <div className="search">
            <input 
                name='search'
                placeholder="Search Games..."
                type="text"
                value={searchValue}
                onChange={handleChange}
            />
            <button type="submit" onClick={handleSearch}>Go</button>
        </div>
    );
}

export default InputSearch;