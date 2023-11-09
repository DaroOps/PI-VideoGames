import { useRef, useEffect } from 'react';
import './InputSearch.modules.css'

const InputSearch = ({ onSearch, searchValue, setSearchValue }) => {
    const inputRef = useRef(null);

    const handleSearch = (event) => {
        event.preventDefault();
     
        onSearch(searchValue);
    }

    const handleChange = (event) => {
        const updatedValue = event.target.value;
        setSearchValue(updatedValue);
    }

    useEffect(() => {
        if (inputRef.current) {
            inputRef.current.focus();
        }
    }, [searchValue]);

    return (
        <div className="search">
            <input 
                ref={inputRef}
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