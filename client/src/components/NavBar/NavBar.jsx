import './NavBar.modules.css'

import { Link } from "react-router-dom";

const NavBar = () => {
    return (
        <div className='nav-bar'>
            <Link className='link-buttons' style={{textDecoration:'none'}} to={'/home'}>Home</Link>
            <Link className='link-buttons' style={{textDecoration:'none'}}to={'/form'}>Create</Link>
        </div>
    );
}

export default NavBar