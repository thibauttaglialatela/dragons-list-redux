import {NavLink} from "react-router-dom";

const Navbar = () => {

    return (
        <nav>
            <NavLink to={"/"} className={({isActive}) => isActive ? "active": ""}>Dragons</NavLink>
            <NavLink to={"/knights"}>Chevaliers</NavLink>
            <NavLink to={"/couple"}>Knights & dragons</NavLink>
        </nav>
    )
}

export default Navbar;
