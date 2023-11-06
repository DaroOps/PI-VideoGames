import './NavBar.modules.css'

import { Link } from "react-router-dom";

const NavBar = () => {
    return (
        <div className='nav-bar'>
            <Link to={'/home'}>home</Link>
            <Link to={'/form'}>Create</Link>
           
        </div>
    );
}

export default NavBar