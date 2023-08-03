import { NavLink } from "react-router-dom/cjs/react-router-dom.min"

const NavBar = () => {
    return (
        <div>
            <NavLink>
                <Butto>HOME</Butto>
            </NavLink>
            <NavLink>
                <Butto>FORM</Butto>
            </NavLink>
        </div>
    )
};

export default NavBar;