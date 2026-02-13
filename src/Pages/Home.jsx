// // import React, { Component } from 'react'

// // // Icons{
// // import { ArrowRight } from 'lucide-react';
// // import { ChevronDown } from 'lucide-react';
// // import { Code } from 'lucide-react';
// // // }

// // // Images{
// // import sobirjon from "../assets/sobirjon.png"
// // // }

// // export default class Home extends Component {
// //   render() {
// //     return (
// //       <div>
// //         <header className='bg-gradient-to-t from-[#01080f] to-[#001c22] pt-[52px] pb-[137px]'>
// //           <div className='container flex flex-col justify-center items-center'>
// //             <h1 className='text-[72px] font-bold text-[#EEEEEE] w-[703px]'>Digital Solutions for <br />
// //               <span className="bg-gradient-to-r from-[#008BA4] to-[#001D35] bg-clip-text text-transparent">
// //                 Modern Businesses
// //               </span></h1>

// //             <p className='text-[20px] font-normal text-[#9E9E9E] w-[572px] text-center'>MAX-V specializes in web development, design, and innovative
// //               solutions that transform your business ideas into reality.</p>
// //             <div className='flex gap-[16px] mt-[41px]'>
// //               <button className='bg-[#0086A1] py-[15px] px-[32px] rounded-[10px] text-[16px] font-semibold flex gap-[8px]'><a href="/projects">View Projects</a> <ArrowRight /></button>
// //               <button className='bg-none border border-[#0086A1] px-[34px] py-[15px] rounded-[10px] text-[16px] font-semibold text-[#0086A1]'><a href="/contact">Contact Us</a></button>
// //             </div>
// //             <ChevronDown className='text-[#008396] mt-[73px]' />
// //           </div>
// //         </header>

// //         <main>
// //           <section className='bg-[#0B0B0B] border border-[#1B1B1B]'>
// //             <div className='flex justify-between py-[65px] container'>
// //               <div className='text-center'>
// //                 <h1 className='text-[#0086A1] text-[36px] font-bold'>5+</h1>
// //                 <p className='text-[#9E9E9E] text-[14px] font-normal'>Years of Experience</p>
// //               </div>
// //               <div className='text-center'>
// //                 <h1 className='text-[#0086A1] text-[36px] font-bold'>150+</h1>
// //                 <p className='text-[#9E9E9E] text-[14px] font-normal'>Completed Projects</p>
// //               </div>
// //               <div className='text-center'>
// //                 <h1 className='text-[#0086A1] text-[36px] font-bold'>100+</h1>
// //                 <p className='text-[#9E9E9E] text-[14px] font-normal'>Happy Clients</p>
// //               </div>
// //               <div className='text-center'>
// //                 <h1 className='text-[#0086A1] text-[36px] font-bold'>4</h1>
// //                 <p className='text-[#9E9E9E] text-[14px] font-normal'>Team Members</p>
// //               </div>
// //             </div>
// //           </section>

// //           <section className='bg-[#060606] '>
// //             <div className='container py-[128px]'>
// //               <div className='text-center flex flex-col items-center'>
// //                 <h1 className='text-[48px] font-bold text-[#EEEEEE] mb-[18px]'>Our Services</h1>
// //                 <p className='text-[18px] font-normal text-[#9E9E9E] w-[620px] mb-[67px]'>We offer a comprehensive range of digital services tailored to your business
// //                   needs.</p>
// //               </div>

// //               <div className='flex gap-[24px] justify-between'>
// //                 <div className='bg-[#0B0B0B] px-[25px] py-[25px] w-[286px] rounded-[14px] border border-[#1B1B1B]'>
// //                   <button className='bg-gradient-to-tl from-[#03172C33] to-[#0086A133] px-[12px] py-[12px] rounded-[10px] mb-[16px]'>
// //                     <Code className='text-[#008396]' />
// //                   </button>
// //                   <h3 className='text-[18px] font-semibold text-[#EEEEEE] mb-[9px'>Website Building</h3>
// //                   <p className='text-[#9E9E9E] text-[14px] font-normal w-[221px]'>Custom website development with
// //                     modern technologies</p>
// //                 </div>
// //                 <div className='bg-[#0B0B0B] px-[25px] py-[25px] w-[286px] rounded-[14px] border border-[#1B1B1B]'>
// //                   <button className='bg-gradient-to-tl from-[#03172C33] to-[#0086A133] px-[12px] py-[12px] rounded-[10px] mb-[16px]'>
// //                     <Code className='text-[#008396]' />
// //                   </button>
// //                   <h3 className='text-[18px] font-semibold text-[#EEEEEE] mb-[9px'>Website Building</h3>
// //                   <p className='text-[#9E9E9E] text-[14px] font-normal w-[221px]'>Custom website development with
// //                     modern technologies</p>
// //                 </div>
// //                 <div className='bg-[#0B0B0B] px-[25px] py-[25px] w-[286px] rounded-[14px] border border-[#1B1B1B]'>
// //                   <button className='bg-gradient-to-tl from-[#03172C33] to-[#0086A133] px-[12px] py-[12px] rounded-[10px] mb-[16px]'>
// //                     <Code className='text-[#008396]' />
// //                   </button>
// //                   <h3 className='text-[18px] font-semibold text-[#EEEEEE] mb-[9px'>Website Building</h3>
// //                   <p className='text-[#9E9E9E] text-[14px] font-normal w-[221px]'>Custom website development with
// //                     modern technologies</p>
// //                 </div>
// //                 <div className='bg-[#0B0B0B] px-[25px] py-[25px] w-[286px] rounded-[14px] border border-[#1B1B1B]'>
// //                   <button className='bg-gradient-to-tl from-[#03172C33] to-[#0086A133] px-[12px] py-[12px] rounded-[10px] mb-[16px]'>
// //                     <Code className='text-[#008396]' />
// //                   </button>
// //                   <h3 className='text-[18px] font-semibold text-[#EEEEEE] mb-[9px'>Website Building</h3>
// //                   <p className='text-[#9E9E9E] text-[14px] font-normal w-[221px]'>Custom website development with
// //                     modern technologies</p>
// //                 </div>

// //               </div>
// //             </div>
// //           </section>

// //           <section className='bg-[#0B0B0B] '>
// //             <div className='container py-[128px]'>
// //               <div className='text-center flex flex-col items-center'>
// //                 <h1 className='text-[48px] font-bold text-[#EEEEEE] mb-[18px]'>Team</h1>
// //                 <p className='text-[18px] font-normal text-[#9E9E9E] w-[620px] mb-[67px]'>Meet the talented professionals behind MAX-V</p>
// //               </div>

// //               <div className='flex gap-[24px] justify-between'>
// //                 <div className='bg-[#0B0B0B] w-[280px] rounded-[14px] border border-[#1B1B1B]'>
// //                   <img className='rounded-[14px] mb-[24px]' src={sobirjon} alt="" />
// //                   <div className='ml-[25px] mb-[25px]'>
// //                     <h3 className='text-[18px] font-semibold text-[#EEEEEE] mb-[9px'>Sobirjon Otajanov</h3>
// //                     <p className='text-[#0086A1] text-[14px] font-normal w-[221px]'>Front-End Developer</p>
// //                   </div>
// //                 </div>
// //                 <div className='bg-[#0B0B0B] w-[280px] rounded-[14px] border border-[#1B1B1B]'>
// //                   <img className='rounded-[14px] mb-[24px]' src={sobirjon} alt="" />
// //                   <div className='ml-[25px] mb-[25px]'>
// //                     <h3 className='text-[18px] font-semibold text-[#EEEEEE] mb-[9px'>Sobirjon Otajanov</h3>
// //                     <p className='text-[#0086A1] text-[14px] font-normal w-[221px]'>Front-End Developer</p>
// //                   </div>
// //                 </div>
// //                 <div className='bg-[#0B0B0B] w-[280px] rounded-[14px] border border-[#1B1B1B]'>
// //                   <img className='rounded-[14px] mb-[24px]' src={sobirjon} alt="" />
// //                   <div className='ml-[25px] mb-[25px]'>
// //                     <h3 className='text-[18px] font-semibold text-[#EEEEEE] mb-[9px'>Sobirjon Otajanov</h3>
// //                     <p className='text-[#0086A1] text-[14px] font-normal w-[221px]'>Front-End Developer</p>
// //                   </div>
// //                 </div>
// //                 <div className='bg-[#0B0B0B] w-[280px] rounded-[14px] border border-[#1B1B1B]'>
// //                   <img className='rounded-[14px] mb-[24px]' src={sobirjon} alt="" />
// //                   <div className='ml-[25px] mb-[25px]'>
// //                     <h3 className='text-[18px] font-semibold text-[#EEEEEE] mb-[9px'>Sobirjon Otajanov</h3>
// //                     <p className='text-[#0086A1] text-[14px] font-normal w-[221px]'>Front-End Developer</p>
// //                   </div>
// //                 </div>

// //               </div>
// //             </div>
// //           </section>

// //           <section className='bg-[#060606]'>
// //             <div className='py-[128px]'>
// //               <div className='text-center flex flex-col items-center'>
// //                 <h1 className='text-[48px] font-bold text-[#EEEEEE] mb-[24px]'>Ready to Start Your Project?</h1>
// //                 <p className='text-[18px] font-normal text-[#9E9E9E] w-[654px] mb-[32px]'>Let's work together to bring your vision to life. Get in touch with our team today.</p>
// //                 <button className='bg-[#0086A1] py-[15px] px-[32px] rounded-[10px] text-[16px] font-semibold flex gap-[8px]'><a href="/contact">Contact Us</a></button>
// //               </div>
// //             </div>
// //           </section>
// //         </main>
// //       </div>
// //     )
// //   }
// // }



























// import React, { Component } from 'react';

// // Icons
// import { ArrowRight, ChevronDown, Code } from 'lucide-react';

// // Images
// import sobirjon from "../assets/sobirjon.png";

// export default class Home extends Component {
//   render() {
//     return (
//       <div>
//         {/* Header */}
//         <header className='bg-gradient-to-t from-[#01080f] to-[#001c22] pt-[52px] pb-[137px]'>
//           <div className='container flex flex-col justify-center items-center px-4 md:px-0'>
//             <h1 className='text-[48px] sm:text-[56px] md:text-[72px] font-bold text-center text-[#EEEEEE] mb-6 sm:mb-8'>
//               Digital Solutions for <br />
//               <span className="bg-gradient-to-r from-[#008BA4] to-[#001D35] bg-clip-text text-transparent">
//                 Modern Businesses
//               </span>
//             </h1>

//             <p className='text-[16px] sm:text-[18px] md:text-[20px] font-normal text-center text-[#9E9E9E] max-w-[90%] md:max-w-[572px] mb-6 sm:mb-8'>
//               MAX-V specializes in web development, design, and innovative solutions that transform your business ideas into reality.
//             </p>

//             <div className='flex flex-col sm:flex-row gap-4 sm:gap-[16px] mt-4 sm:mt-[41px]'>
//               <button className='bg-[#0086A1] py-[12px] sm:py-[15px] px-[24px] sm:px-[32px] rounded-[10px] text-[16px] font-semibold flex items-center gap-[8px]'>
//                 <a href="/projects">View Projects</a>
//                 <ArrowRight />
//               </button>
//               <button className='border border-[#0086A1] px-[24px] sm:px-[34px] py-[12px] sm:py-[15px] rounded-[10px] text-[16px] font-semibold text-[#0086A1]'>
//                 <a href="/contact">Contact Us</a>
//               </button>
//             </div>

//             <ChevronDown className='text-[#008396] mt-[32px] sm:mt-[73px]' />
//           </div>
//         </header>

//         <main>
//           {/* Stats Section */}
//           <section className='bg-[#0B0B0B] border border-[#1B1B1B]'>
//             <div className='container flex flex-wrap justify-center md:justify-between py-[65px] px-4 gap-6'>
//               {[
//                 { number: "5+", label: "Years of Experience" },
//                 { number: "150+", label: "Completed Projects" },
//                 { number: "100+", label: "Happy Clients" },
//                 { number: "4", label: "Team Members" },
//               ].map((stat, index) => (
//                 <div key={index} className='text-center w-[140px] sm:w-[160px] md:w-auto'>
//                   <h1 className='text-[#0086A1] text-[36px] font-bold'>{stat.number}</h1>
//                   <p className='text-[#9E9E9E] text-[14px] font-normal'>{stat.label}</p>
//                 </div>
//               ))}
//             </div>
//           </section>

//           {/* Services Section */}
//           <section className='bg-[#060606]'>
//             <div className='container py-[128px] px-4'>
//               <div className='text-center flex flex-col items-center mb-[67px]'>
//                 <h1 className='text-[36px] sm:text-[48px] font-bold text-[#EEEEEE] mb-[18px]'>Our Services</h1>
//                 <p className='text-[16px] sm:text-[18px] font-normal text-[#9E9E9E] max-w-[90%] md:max-w-[620px]'>
//                   We offer a comprehensive range of digital services tailored to your business needs.
//                 </p>
//               </div>

//               <div className='flex flex-wrap justify-center md:justify-between gap-6'>
//                 {[1, 2, 3, 4].map((_, index) => (
//                   <div key={index} className='bg-[#0B0B0B] px-[25px] py-[25px] w-full sm:w-[260px] md:w-[286px] rounded-[14px] border border-[#1B1B1B]'>
//                     <button className='bg-gradient-to-tl from-[#03172C33] to-[#0086A133] px-[12px] py-[12px] rounded-[10px] mb-[16px]'>
//                       <Code className='text-[#008396]' />
//                     </button>
//                     <h3 className='text-[18px] font-semibold text-[#EEEEEE] mb-[9px]'>Website Building</h3>
//                     <p className='text-[#9E9E9E] text-[14px] font-normal'>Custom website development with modern technologies</p>
//                   </div>
//                 ))}
//               </div>
//             </div>
//           </section>

//           {/* Team Section */}
//           <section className='bg-[#0B0B0B]'>
//             <div className='container py-[128px] px-4'>
//               <div className='text-center flex flex-col items-center mb-[67px]'>
//                 <h1 className='text-[36px] sm:text-[48px] font-bold text-[#EEEEEE] mb-[18px]'>Team</h1>
//                 <p className='text-[16px] sm:text-[18px] font-normal text-[#9E9E9E] max-w-[90%] md:max-w-[620px]'>Meet the talented professionals behind MAX-V</p>
//               </div>

//               <div className='flex flex-wrap justify-center md:justify-between gap-6'>
//                 {[1, 2, 3, 4].map((_, index) => (
//                   <div key={index} className='bg-[#0B0B0B] w-full sm:w-[260px] md:w-[280px] rounded-[14px] border border-[#1B1B1B]'>
//                     <img className='rounded-[14px] mb-[24px] w-full h-auto' src={sobirjon} alt="Team Member" />
//                     <div className='px-[25px] mb-[25px]'>
//                       <h3 className='text-[18px] font-semibold text-[#EEEEEE] mb-[9px]'>Sobirjon Otajanov</h3>
//                       <p className='text-[#0086A1] text-[14px] font-normal'>Front-End Developer</p>
//                     </div>
//                   </div>
//                 ))}
//               </div>
//             </div>
//           </section>

//           {/* Call to Action */}
//           <section className='bg-[#060606]'>
//             <div className='py-[128px] px-4 text-center'>
//               <h1 className='text-[36px] sm:text-[48px] font-bold text-[#EEEEEE] mb-[24px]'>Ready to Start Your Project?</h1>
//               <p className='text-[16px] sm:text-[18px] font-normal text-[#9E9E9E] max-w-[90%] md:max-w-[654px] mx-auto mb-[32px]'>
//                 Let's work together to bring your vision to life. Get in touch with our team today.
//               </p>
//               <button className='bg-[#0086A1] py-[12px] sm:py-[15px] px-[24px] sm:px-[32px] rounded-[10px] text-[16px] font-semibold'>
//                 <a href="/contact">Contact Us</a>
//               </button>
//             </div>
//           </section>
//         </main>
//       </div>
//     )
//   }
// }














import React, { Component } from 'react';

// Icons
import { ArrowRight, ChevronDown, Code } from 'lucide-react';

// Images
import sobirjon from "../assets/sobirjon.png";

export default class Home extends Component {
  render() {
    return (
      <div>
        {/* Header */}
        <header className='bg-gradient-to-t from-[#01080f] to-[#001c22] pt-[52px] pb-[137px]'>
          <div className='container flex flex-col justify-center items-center px-4 md:px-0'>
            <h1 className='text-[48px] sm:text-[56px] md:text-[72px] font-bold text-center text-[#EEEEEE] mb-6 sm:mb-8'>
              Digital Solutions for <br />
              <span className="bg-gradient-to-r from-[#008BA4] to-[#001D35] bg-clip-text text-transparent">
                Modern Businesses
              </span>
            </h1>

            <p className='text-[16px] sm:text-[18px] md:text-[20px] font-normal text-center text-[#9E9E9E] max-w-[90%] md:max-w-[572px] mb-6 sm:mb-8'>
              MAX-V specializes in web development, design, and innovative solutions that transform your business ideas into reality.
            </p>

            <div className='flex flex-col sm:flex-row gap-4 sm:gap-[16px] mt-4 sm:mt-[41px]'>
              <button className='bg-[#0086A1] py-[12px] sm:py-[15px] px-[24px] sm:px-[32px] rounded-[10px] text-[16px] font-semibold flex items-center gap-[8px]'>
                <a href="/projects">View Projects</a>
                <ArrowRight />
              </button>
              <button className='border border-[#0086A1] px-[24px] sm:px-[34px] py-[12px] sm:py-[15px] rounded-[10px] text-[16px] font-semibold text-[#0086A1]'>
                <a href="/contact">Contact Us</a>
              </button>
            </div>

            <ChevronDown className='text-[#008396] mt-[32px] sm:mt-[73px]' />
          </div>
        </header>

        <main>
          {/* Stats Section */}
          <section className='bg-[#0B0B0B] border border-[#1B1B1B]'>
            <div className='container flex flex-wrap justify-center md:justify-between py-[65px] px-4 gap-6'>
              {[
                { number: "5+", label: "Years of Experience" },
                { number: "150+", label: "Completed Projects" },
                { number: "100+", label: "Happy Clients" },
                { number: "4", label: "Team Members" },
              ].map((stat, index) => (
                <div key={index} className='text-center w-[140px] sm:w-[160px] md:w-auto'>
                  <h1 className='text-[#0086A1] text-[36px] font-bold'>{stat.number}</h1>
                  <p className='text-[#9E9E9E] text-[14px] font-normal'>{stat.label}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Services Section */}
          <section className='bg-[#060606]'>
            <div className='container py-[128px] px-4'>
              <div className='text-center flex flex-col items-center mb-[67px]'>
                <h1 className='text-[36px] sm:text-[48px] font-bold text-[#EEEEEE] mb-[18px]'>Our Services</h1>
                <p className='text-[16px] sm:text-[18px] font-normal text-[#9E9E9E] max-w-[90%] md:max-w-[620px]'>
                  We offer a comprehensive range of digital services tailored to your business needs.
                </p>
              </div>

              <div className='flex flex-wrap justify-center md:justify-between gap-6'>
                {[1, 2, 3, 4].map((_, index) => (
                  <div key={index} className='bg-[#0B0B0B] px-[25px] py-[25px] w-full sm:w-[260px] md:w-[286px] rounded-[14px] border border-[#1B1B1B]'>
                    <button className='bg-gradient-to-tl from-[#03172C33] to-[#0086A133] px-[12px] py-[12px] rounded-[10px] mb-[16px]'>
                      <Code className='text-[#008396]' />
                    </button>
                    <h3 className='text-[18px] font-semibold text-[#EEEEEE] mb-[9px]'>Website Building</h3>
                    <p className='text-[#9E9E9E] text-[14px] font-normal'>Custom website development with modern technologies</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Team Section */}
          <section className='bg-[#0B0B0B]'>
            <div className='container py-[128px] px-4'>
              <div className='text-center flex flex-col items-center mb-[67px]'>
                <h1 className='text-[36px] sm:text-[48px] font-bold text-[#EEEEEE] mb-[18px]'>Team</h1>
                <p className='text-[16px] sm:text-[18px] font-normal text-[#9E9E9E] max-w-[90%] md:max-w-[620px]'>Meet the talented professionals behind MAX-V</p>
              </div>

              <div className='flex flex-wrap justify-center md:justify-between gap-6'>
                {[1, 2, 3, 4].map((_, index) => (
                  <div key={index} className='bg-[#0B0B0B] w-full sm:w-[260px] md:w-[280px] rounded-[14px] border border-[#1B1B1B]'>
                    <img className='rounded-[14px] mb-[24px] w-full h-auto' src={sobirjon} alt="Team Member" />
                    <div className='px-[25px] mb-[25px]'>
                      <h3 className='text-[18px] font-semibold text-[#EEEEEE] mb-[9px]'>Sobirjon Otajanov</h3>
                      <p className='text-[#0086A1] text-[14px] font-normal'>Front-End Developer</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Call to Action */}
          <section className='bg-[#060606]'>
            <div className='py-[128px] px-4 text-center'>
              <h1 className='text-[36px] sm:text-[48px] font-bold text-[#EEEEEE] mb-[24px]'>Ready to Start Your Project?</h1>
              <p className='text-[16px] sm:text-[18px] font-normal text-[#9E9E9E] max-w-[90%] md:max-w-[654px] mx-auto mb-[32px]'>
                Let's work together to bring your vision to life. Get in touch with our team today.
              </p>
              <button className='bg-[#0086A1] py-[12px] sm:py-[15px] px-[24px] sm:px-[32px] rounded-[10px] text-[16px] font-semibold'>
                <a href="/contact">Contact Us</a>
              </button>
            </div>
          </section>
        </main>
      </div>
    )
  }
}