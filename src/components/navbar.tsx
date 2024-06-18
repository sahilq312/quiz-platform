import { NavLink } from "react-router-dom";


const Navbar = () => {
  return (
      <nav className="flex justify-center items-center gap-10 ">
        <NavLink to={"/admin"}>Admin</NavLink>
        <NavLink to={"/"}>Home</NavLink>
      </nav>
  );
};

export default Navbar;
