import generateUUID from '../../utils/generateUUID';
import './DropdownMenu.modules.css'
import React, { useState } from 'react';


function DropdownMenu({ elements }) {
    const [isOpen, setIsOpen] = useState(false);

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="dropdown">
            <button onClick={toggleDropdown}>
                <span>&gt;</span>
            </button>
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