import React from "react";
import { NavLink } from "react-router-dom";

function Navigation() {
  return (
    <div className="bg-[#269eee]">
      <nav className="container py-[20px] flex justify-between items-center">

        <NavLink exact to="/" activeClassName="active">
          Home
        </NavLink>
        <span className="flex gap-[40px] items-center">
          <NavLink className='font-lato font-bold text-[#424551]' to="/about" activeClassName="active">
            About
          </NavLink>
          <NavLink className='font-lato font-bold text-[#424551]' to="/contact" activeClassName="active">
            Projects
          </NavLink>
          <NavLink className='font-lato font-bold text-[#424551]' to="/student" activeClassName="active">
            Contact
          </NavLink>
        </span>
      </nav>
    </div>
  );
}

export default Navigation;