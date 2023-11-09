import generateUUID from '../../utils/generateUUID';
import './DropdownMenu.modules.css'
import React, { useState } from 'react';


function DropdownMenu({ elements, title }) {
    const [isOpen, setIsOpen] = useState(false);

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="dropdown">
            <div className='dropdown-header'>
                <p className='dropdown-title'>{title}</p>
                <a className={`arrow-icon ${!isOpen ? 'open' : ''}`} onClick={toggleDropdown}>
                    <span className="left-bar"></span>
                    <span className="right-bar"></span>
                </a>
            </div>
            {isOpen && (
                <div className='dropdown-content'>
                    {
                        elements.map((element) => (
                            <li key={generateUUID()}>
                                {element}
                            </li>
                        ))
                    }
                </div>
            )}
        </div>
    );
}

export default DropdownMenu;