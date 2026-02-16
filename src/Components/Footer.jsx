// // // Components/Footer.js
// // import React from "react";
// // import { NavLink } from "react-router-dom";
// // // Icons{
// // import { Phone } from 'lucide-react';
// // import { Mail } from 'lucide-react';
// // import { MapPin } from 'lucide-react';
// // import { Github } from 'lucide-react';
// // import { Linkedin } from 'lucide-react';
// // // }


// // function Footer() {
// //   return (
// //     <footer>

// //       <footer className="bg-[#0B0B0B] py-[48px]">
// //         <div className="container">
// //           <div className="flex justify-between mb-[32px] ">
// //             <div>
// //               <h2 className="text-[18px] font-bold text-[#EEEEEE] mb-[17px]">MAX-V</h2>
// //               <p className="text-[14px] font-normal w-[275px] text-[#9E9E9E]">Premium web development and design
// //                 services for modern businesses worldwide.</p>
// //             </div>

// //             <div>
// //               <h2 className="text-[18px] font-bold text-[#EEEEEE] mb-[17px]">Quick Links</h2>
// //               <span className="flex gap-[14px] flex-col">
// //                 <NavLink exact to="/" activeClassName="active" className='font-lato font-medium text-[14px] text-[#9e9e9e]'>
// //                   Home
// //                 </NavLink>
// //                 <NavLink className='font-lato font-medium text-[#9e9e9e] text-[14px]' to="/about" activeClassName="active">
// //                   About
// //                 </NavLink>
// //                 <NavLink className='font-lato font-medium text-[#9e9e9e] text-[14px]' to="/projects" activeClassName="active">
// //                   Projects
// //                 </NavLink>
// //                 <NavLink className='font-lato font-medium text-[#9e9e9e] text-[14px]' to="/contact" activeClassName="active">
// //                   Contact
// //                 </NavLink>
// //               </span>
// //             </div>

// //             <div>
// //               <h2 className="text-[18px] font-bold text-[#EEEEEE] mb-[17px]">Contact Us</h2>

// //               <span className="flex gap-2 mb-[15px] text-[#9E9E9E]"> <Phone />+998 (71) 200 12 34</span>
// //               <span className="flex gap-2 mb-[15px] text-[#9E9E9E]"> <Mail />hello@max-v.uz</span>
// //               <span className="flex gap-2 mb-[15px] text-[#9E9E9E]"> <MapPin />KHorezm, Uzbekistan</span>
// //             </div>


// //             <div>
// //               <h2 className="text-[18px] font-bold text-[#EEEEEE] mb-[17px]">Follow Us</h2>
// //               <div className="flex gap-[12px]">
// //                 <a href="#!" className='bg-[#222222] px-[12px] py-[12px] rounded-[10px]'>
// //                   <Github className='text-[#EEEEEE]' /></a>
// //                 <a href="#!" className='bg-[#222222] px-[12px] py-[12px] rounded-[10px]'>
// //                   <Linkedin className='text-[#EEEEEE]' /></a>
// //                 <a href="#!" className='bg-[#222222] px-[12px] py-[12px] rounded-[10px]'>
// //                   <Mail className='text-[#EEEEEE]' /></a>
// //               </div>
// //             </div>
// //           </div>
// //           <div className="flex justify-between border-t-2 border-[#1B1B1B] pt-[34px]">
// //             <p className="text-[14px] font-normal text-[#9E9E9E]">© 2026 MAX-V. All rights reserved.</p>
// //             <span className="flex gap-[23px]">
// //               <p className="text-[14px] font-normal text-[#9E9E9E]">Privacy Policy</p>
// //               <p className="text-[14px] font-normal text-[#9E9E9E]">Terms of Service</p>
// //             </span>
// //           </div>
// //         </div>
// //       </footer>
// //     </footer>
// //   );
// // }

// // export default Footer;






import React from "react";
import { NavLink } from "react-router-dom";
import { Phone, Mail, MapPin, Github, Linkedin, Clock } from 'lucide-react';

function Footer() {
  return (
    <footer className="bg-[#0B0B0B] py-[48px]">
      <div className="container px-4">
        {/* Top Section */}
        <div className="flex flex-col md:flex-row justify-between gap-[32px] mb-[32px]">

          {/* MAX-V Info */}
          <div className="max-w-[275px]">
            <h2 className="text-[18px] font-bold text-[#EEEEEE] mb-[17px]">MAX-V</h2>
            <p className="text-[14px] font-normal text-[#9E9E9E]">
              Premium web development and design services for modern businesses worldwide.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h2 className="text-[18px] font-bold text-[#EEEEEE] mb-[17px]">Quick Links</h2>
            <span className="flex flex-col gap-[8px]">
              <NavLink exact to="/" className='font-lato font-medium text-[14px] text-[#9E9E9E]'>Home</NavLink>
              <NavLink to="/about" className='font-lato font-medium text-[14px] text-[#9E9E9E]'>About</NavLink>
              <NavLink to="/projects" className='font-lato font-medium text-[14px] text-[#9E9E9E]'>Projects</NavLink>
              <NavLink to="/contact" className='font-lato font-medium text-[14px] text-[#9E9E9E]'>Contact</NavLink>
            </span>
          </div>

          {/* Contact Info */}
          <div>
            <h2 className="text-[18px] font-bold text-[#EEEEEE] mb-[17px]">Contact Us</h2>
            <span className="flex gap-2 mb-[12px] text-[#9E9E9E]">
              <Phone />
              <a href="tel:+998973830117">+998 (97) 383 01 17</a>
            </span>
            <span className="flex gap-2 mb-[12px] text-[#9E9E9E]">
              <Mail />
              hello@max-v.uz
            </span>
            <span className="flex gap-2 mb-[12px] text-[#9E9E9E]">
              <MapPin />
              <a href="https://maps.app.goo.gl/yVKTPw98oiW5xWmr8">Khorezm, Uzbekistan</a>
            </span>
          </div>

          {/* Working Hours - NEW COLUMN */}
          <div>
            <h2 className="text-[18px] font-bold text-[#EEEEEE] mb-[17px]">Working Hours</h2>
            <span className="flex gap-2 mb-[12px] text-[#9E9E9E]">
              <Clock />
              Monday - Friday: 09:00 - 17:00
            </span>
            <span className="flex gap-2 mb-[12px] text-[#9E9E9E]">
              <Clock />
              Saturday: 10:00 - 14:00
            </span>
            <span className="flex gap-2 mb-[12px] text-[#9E9E9E]">
              <Clock />
              Sunday: Holiday
            </span>
          </div>

          {/* Social Links */}
          <div>
            <h2 className="text-[18px] font-bold text-[#EEEEEE] mb-[17px]">Follow Us</h2>
            <div className="flex gap-[12px]">
              <a href="#!" className='bg-[#222222] px-[12px] py-[12px] rounded-[10px]'>
                <Github className='text-[#EEEEEE]' />
              </a>
              <a href="#!" className='bg-[#222222] px-[12px] py-[12px] rounded-[10px]'>
                <Linkedin className='text-[#EEEEEE]' />
              </a>
              <a href="#!" className='bg-[#222222] px-[12px] py-[12px] rounded-[10px]'>
                <Mail className='text-[#EEEEEE]' />
              </a>
            </div>
          </div>

        </div>

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center border-t-2 border-[#1B1B1B] pt-[34px] gap-[16px]">
          <p className="text-[14px] font-normal text-[#9E9E9E]">© 2026 MAX-V. All rights reserved.</p>
          <span className="flex flex-col md:flex-row gap-[16px]">
            <p className="text-[14px] font-normal text-[#9E9E9E]">Privacy Policy</p>
            <p className="text-[14px] font-normal text-[#9E9E9E]">Terms of Service</p>
          </span>
        </div>
      </div>
    </footer>
  );
}

export default Footer;