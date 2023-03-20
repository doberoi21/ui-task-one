import './style/Navbar.scss';
import { NavLink } from "react-router-dom";

const Navbar = () => {
    return (
        <div className="navbar-container">
            <li>
                <NavLink to="/" className='tab-name' style={({ isActive }) => {
                    return {
                        fontWeight: isActive ? "bold" : "",
                    };
                }}>Posts</NavLink>
            </li>
            <li>
                <NavLink to="/comments" className='tab-name' style={({ isActive }) => {
                    return {
                        fontWeight: isActive ? "bold" : "",
                    };
                }}>Comments</NavLink>
            </li>
        </div>
    );
}
export default Navbar;