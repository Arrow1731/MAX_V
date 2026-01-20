import React from "react";
import { NavLink } from "react-router-dom";
import { useState } from "react"

// Icons {
import { Moon } from 'lucide-react';
import { Sun } from 'lucide-react';
// }

function Navigation() {
  const [active, setActive] = useState("EN")
  return (
    <div className="bg-[#060606]">
      <nav className="container py-[20px] flex justify-between items-center">

        <NavLink exact to="/" activeClassName="active" className='font-lato font-bold text-[18px] text-[#EEEEEE]'>
          MAX-V
        </NavLink>
        <span className="flex gap-[40px] items-center">
          <NavLink className='font-lato font-medium text-[#9e9e9e] text-[14px]' to="/about" activeClassName="active">
            About
          </NavLink>
          <NavLink className='font-lato font-medium text-[#9e9e9e] text-[14px]' to="/contact" activeClassName="active">
            Projects
          </NavLink>
          <NavLink className='font-lato font-medium text-[#9e9e9e] text-[14px]' to="/student" activeClassName="active">
            Contact
          </NavLink>
        </span>
        
        
        <div className="flex items-center gap-[16px]">
          <div className="flex bg-[#1f1f1f] rounded-[10px] p-1 w-fit">
      {["UZ", "RU", "EN"].map((lang) => (
        <button
          key={lang}
          onClick={() => setActive(lang)}
          className={`px-[12px] py-[4px] rounded-[4px] text-sm font-medium transition
            ${
              active === lang
                ? "bg-[#0086A1] text-[#060606]"
                : "text-[#9E9E9E]"
            }`}
        >
          {lang}
        </button>
      ))}
    </div>
            <Moon  className="text-[#EEEEEE]"/>
        </div>
      </nav>
    </div>
  );
}

export default Navigation;