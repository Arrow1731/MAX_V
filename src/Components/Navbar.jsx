// // import React from "react";
// // import { NavLink } from "react-router-dom";
// // import { useState } from "react"

// // // Icons {
// // import { Moon } from 'lucide-react';
// // import { Sun } from 'lucide-react';
// // // }

// // function Navigation() {
// //   const [active, setActive] = useState("EN")
// //   return (
// //     <div className="bg-[#060606] border border-[#1B1B1B]">
// //       <nav className="container py-[20px] flex justify-between items-center ">

// //         <NavLink exact to="/" activeClassName="active" className='font-lato font-bold text-[18px] text-[#EEEEEE]'>
// //           MAX-V
// //         </NavLink>
// //         <span className="flex gap-[40px] items-center">
// //           <NavLink className='font-lato font-medium text-[#9e9e9e] text-[14px]' to="/about" activeClassName="active">
// //             About
// //           </NavLink>
// //           <NavLink className='font-lato font-medium text-[#9e9e9e] text-[14px]' to="/projects" activeClassName="active">
// //             Projects
// //           </NavLink>
// //           <NavLink className='font-lato font-medium text-[#9e9e9e] text-[14px]' to="/contact" activeClassName="active">
// //             Contact
// //           </NavLink>
// //         </span>


// //         <div className="flex items-center gap-[16px]">
// //           <div className="flex bg-[#1f1f1f] rounded-[10px] p-1 w-fit">
// //             {["UZ", "RU", "EN"].map((lang) => (
// //               <button
// //                 key={lang}
// //                 onClick={() => setActive(lang)}
// //                 className={`px-[12px] py-[4px] rounded-[4px] text-sm font-medium transition
// //             ${active === lang
// //                     ? "bg-[#0086A1] text-[#060606]"
// //                     : "text-[#9E9E9E]"
// //                   }`}
// //               >
// //                 {lang}
// //               </button>
// //             ))}
// //           </div>
// //           {/* <Moon className="text-[#EEEEEE]" /> */}
// //         </div>
// //       </nav>
// //     </div>
// //   );
// // }

// // export default Navigation;




















// import React, { useState, useContext } from "react";
// import { NavLink } from "react-router-dom";
// import { LanguageContext } from "../context/LanguageContext";

// function Navigation() {
//   const { lang, setLang, translations } = useContext(LanguageContext);

//   return (
//     <div className="bg-[#060606] border border-[#1B1B1B]">
//       <nav className="container py-[20px] flex justify-between items-center ">
//         <NavLink exact to="/" className='font-lato font-bold text-[18px] text-[#EEEEEE]'>
//           MAX-V
//         </NavLink>

//         <span className="flex gap-[40px] items-center">
//           <NavLink className='font-lato font-medium text-[#9e9e9e] text-[14px]' to="/about">
//             {translations[lang].about}
//           </NavLink>
//           <NavLink className='font-lato font-medium text-[#9e9e9e] text-[14px]' to="/projects">
//             {translations[lang].projects}
//           </NavLink>
//           <NavLink className='font-lato font-medium text-[#9e9e9e] text-[14px]' to="/contact">
//             {translations[lang].contact}
//           </NavLink>
//         </span>

//         <div className="flex items-center gap-[16px]">
//           <div className="flex bg-[#1f1f1f] rounded-[10px] p-1 w-fit">
//             {["UZ", "RU", "EN"].map((l) => (
//               <button
//                 key={l}
//                 onClick={() => setLang(l)}
//                 className={`px-[12px] py-[4px] rounded-[4px] text-sm font-medium transition
//                   ${lang === l ? "bg-[#0086A1] text-[#060606]" : "text-[#9E9E9E]"}`}
//               >
//                 {l}
//               </button>
//             ))}
//           </div>
//         </div>
//       </nav>
//     </div>
//   );
// }

// export default Navigation;





















import React, { useState, useContext } from "react";
import { NavLink } from "react-router-dom";
import { LanguageContext } from "../context/LanguageContext";

function Navigation() {
  const { lang, setLang, translations } = useContext(LanguageContext);
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="bg-[#060606] border border-[#1B1B1B]">
      <nav className="container py-[20px] flex justify-between items-center relative">
        {/* Logo */}
        <NavLink exact to="/" className="font-lato font-bold text-[18px] text-[#EEEEEE]">
          MAX - V
        </NavLink>

        {/* Links + Hamburger */}
        <div className="flex items-center gap-4">
          {/* Desktop Links */}
          <div className="hidden md:flex gap-[40px] items-center">
            <NavLink className="font-lato font-medium text-[#9E9E9E] text-[14px]" to="/about">
              {translations[lang].about}
            </NavLink>
            <NavLink className="font-lato font-medium text-[#9E9E9E] text-[14px]" to="/projects">
              {translations[lang].projects}
            </NavLink>
            <NavLink className="font-lato font-medium text-[#9E9E9E] text-[14px]" to="/contact">
              {translations[lang].contact}
            </NavLink>
          </div>


          <div>
            {/* Language Switcher - always visible */}
            <div className="flex bg-[#1f1f1f] rounded-[10px] p-1 w-fit ml-4">
              {["UZ", "RU", "EN"].map((l) => (
                <button
                  key={l}
                  onClick={() => setLang(l)}
                  className={`px-[12px] py-[4px] rounded-[4px] text-sm font-medium transition
                  ${lang === l ? "bg-[#0086A1] text-[#060606]" : "text-[#9E9E9E]"}`}
                >
                  {l}
                </button>
              ))}
            </div>
          </div>


          {/* Hamburger for mobile */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="flex flex-col justify-between w-6 h-5 ml-2"
            >
              <span className={`block h-[2px] w-full bg-[#9E9E9E] transition-transform duration-300 ${isOpen ? "rotate-45 translate-y-1.5" : ""}`}></span>
              <span className={`block h-[2px] w-full bg-[#9E9E9E] transition-opacity duration-300 ${isOpen ? "opacity-0" : "opacity-100"}`}></span>
              <span className={`block h-[2px] w-full bg-[#9E9E9E] transition-transform duration-300 ${isOpen ? "-rotate-45 -translate-y-1.5" : ""}`}></span>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="absolute top-full left-0 w-full bg-[#060606] border-t border-[#1B1B1B] md:hidden z-10">
            <div className="flex flex-col gap-4 p-4">
              <NavLink onClick={() => setIsOpen(false)} className="font-lato font-medium text-[#9E9E9E] text-[14px]" to="/about">
                {translations[lang].about}
              </NavLink>
              <NavLink onClick={() => setIsOpen(false)} className="font-lato font-medium text-[#9E9E9E] text-[14px]" to="/projects">
                {translations[lang].projects}
              </NavLink>
              <NavLink onClick={() => setIsOpen(false)} className="font-lato font-medium text-[#9E9E9E] text-[14px]" to="/contact">
                {translations[lang].contact}
              </NavLink>
            </div>
          </div>
        )}
      </nav>
    </div>
  );
}

export default Navigation;