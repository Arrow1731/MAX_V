// import React, { Component } from 'react'

// // Images {
// import sobirjon from "../assets/sobirjon1.png"
// // }

// export default class About extends Component {
//   render() {
//     return (
//       <div>

//         <header className='bg-gradient-to-t from-[#01080f] to-[#001c22] pt-[63px] pb-[128px]'>
//           <div className='text-center flex flex-col items-center'>
//             <h1 className='text-[48px] font-bold text-[#EEEEEE] mb-[24px]'>About</h1>
//             <p className='text-[20px] font-normal text-[#9E9E9E] w-[741px] mb-[67px]'>Learn about MAX-V's journey, mission, and the talented team behind our success.</p>
//           </div>
//         </header>

//         <main >
//           <section className='bg-[#060606] py-[128px]'>
//             <div>
//               <div className='text-center flex flex-col items-center'>
//                 <h1 className='text-[48px] font-bold text-[#EEEEEE] mb-[24px]'>Our Story</h1>
//                 <p className='text-[18px] font-normal text-[#9E9E9E] w-[741px] mb-[67px]'>From humble beginnings to industry leaders, here's how MAX-V evolved.</p>
//               </div>

//               <div className='container flex'>

//                 <div className="relative h-[812px]">
//                   <div
//                     className="absolute left-[574px] bottom-0 h-[812px] w-[4px] bg-gradient-to-b from-[#0086A1] to-[#03172C] z-0" />
//                 </div>

//                 <div>

//                   <div className='text-end w-[542px]'>
//                     <h2 className='text-[24px] font-bold text-[#0086A1] font-lato'>2019</h2>
//                     <h3 className='text-[20px] font-semibold text-[#EEEEEE]'>Founded</h3>
//                     <p className='text-[#9E9E9E]'>MAX-V was established with a simple vision: to provide world-class digital
//                       solutions to businesses worldwide.</p>
//                   </div>
//                   <div className='text-start w-[542px] mt-[50px]'>
//                     <h2 className='text-[24px] font-bold text-[#0086A1] font-lato'>2020</h2>
//                     <h3 className='text-[20px] font-semibold text-[#EEEEEE]'>First Major Project</h3>
//                     <p className='text-[#9E9E9E]'>Completed our first enterprise-level web application, setting the standard
//                       for quality we maintain today.</p>
//                   </div>
//                   <div className='text-end w-[542px] mt-[50px]'>
//                     <h2 className='text-[24px] font-bold text-[#0086A1] font-lato'>2021</h2>
//                     <h3 className='text-[20px] font-semibold text-[#EEEEEE]'>Expansion</h3>
//                     <p className='text-[#9E9E9E]'>Expanded team and services, adding specialized design and bot
//                       development capabilities.</p>
//                   </div>
//                   <div className='text-start mb-[50px] w-[542px]'>
//                     <h2 className='text-[24px] font-bold text-[#0086A1] font-lato'>2023</h2>
//                     <h3 className='text-[20px] font-semibold text-[#EEEEEE]'>Growth</h3>
//                     <p className='text-[#9E9E9E]'>Reached 100+ successful projects and established MAX-V as a leading
//                       digital agency in the region.</p>
//                   </div>
//                   <div className='text-end w-[542px]'>
//                     <h2 className='text-[24px] font-bold text-[#0086A1] font-lato'>2024</h2>
//                     <h3 className='text-[20px] font-semibold text-[#EEEEEE]'>Innovation</h3>
//                     <p className='text-[#9E9E9E]'>Launched cutting-edge AI-powered solutions and expanded international
//                       presence.</p>
//                   </div>
//                 </div>

//               </div>

//             </div>
//           </section>

//           <section className='bg-[#0B0B0B] py-[129px]'>
//             <div>
//               <div className='text-center flex flex-col items-center'>
//                 <h1 className='text-[48px] font-bold text-[#EEEEEE] mb-[24px]'>Meet Our Team</h1>
//                 <p className='text-[18px] font-normal text-[#9E9E9E] w-[741px] mb-[67px]'>The talented individuals who make MAX-V exceptional.</p>
//               </div>

//               <div className='container'>
//                 <div className='flex justify-between gap-[48px] items-center'>
//                   <div>
//                     <img className='border border-[#1B1B1B] rounded-[14px]' src={sobirjon} alt="" />
//                   </div>
//                   <div>
//                     <h1 className='text-[30px] text-[#EEEEEE] font-bold'>Azizbek Kamilov</h1>
//                     <h3 className='text-[18px] text-[#0086A1] font-semibold mb-[19px] mt-[8px]'>CEO & Full-Stack Developer</h3>
//                     <p className='text-[18px] text-[#9E9E9E] w-[578px]'>Azizbek is the visionary founder of MAX-V with 5+ years of experience
//                       in full-stack development. He leads the company with a passion for
//                       innovation and quality.</p>
//                     <span className='flex gap-[15px] mt-[27px]'>
//                       <a href="https://www.linkedin.com/in/azizbek-kamilov-81698132a/" target='_blank' className='text-[16px] font-normal text-[#0086A1]'>LinkedIn</a>
//                       <a href="https://github.com/Arrow1731" target='_blank' className='text-[16px] font-normal text-[#0086A1]'>GitHub</a>
//                     </span>
//                   </div>
//                 </div>
//                 <div className='flex justify-between gap-[48px] items-center'>
//                   <div>
//                     <h1 className='text-[30px] text-[#EEEEEE] font-bold'>Sobirjon Otajanov</h1>
//                     <h3 className='text-[18px] text-[#0086A1] font-semibold mb-[19px] mt-[8px]'>Front-End Developer</h3>
//                     <p className='text-[18px] text-[#9E9E9E] w-[578px]'>Sobirjon specializes in creating stunning user interfaces with modern
//                       frameworks. His expertise in React and Next.js has transformed
//                       countless projects.</p>
//                     <span className='flex gap-[15px] mt-[27px]'>
//                       <a href="https://www.linkedin.com/in/sobirjon-otajonov-1500a23a8/" target='_blank' className='text-[16px] font-normal text-[#0086A1]'>LinkedIn</a>
//                       <a href="https://github.com/SOB1Rake" target='_blank' className='text-[16px] font-normal text-[#0086A1]'>GitHub</a>
//                     </span>
//                   </div>
//                   <div>
//                     <img className='border border-[#1B1B1B] rounded-[14px]' src={sobirjon} alt="" />
//                   </div>
//                 </div>
//                 <div className='flex justify-between gap-[48px] items-center'>
//                   <div>
//                     <img className='border border-[#1B1B1B] rounded-[14px]' src={sobirjon} alt="" />
//                   </div>
//                   <div>
//                     <h1 className='text-[30px] text-[#EEEEEE] font-bold'>Zumrad Bakhtiyorova</h1>
//                     <h3 className='text-[18px] text-[#0086A1] font-semibold mb-[19px] mt-[8px]'>UX/UI Designer</h3>
//                     <p className='text-[18px] text-[#9E9E9E] w-[578px]'>Zumrad brings creative vision to every project with her exceptional
//                       design skills. She ensures every pixel is perfect and every experience is
//                       delightful.</p>
//                     <span className='flex gap-[15px] mt-[27px]'>
//                       <a href="#!" target='_blank' className='text-[16px] font-normal text-[#0086A1]'>LinkedIn</a>
//                       <a href="#!" target='_blank' className='text-[16px] font-normal text-[#0086A1]'>GitHub</a>
//                     </span>
//                   </div>
//                 </div>

//               </div>
//             </div>
//           </section>

//           <section className='bg-[#060606] py-[128px]'>
//             <div className='container'>
//               <div className='flex justify-between'>
//                 <div className='bg-[#0B0B0B] p-[33px] w-[384px] rounded-[14px] border border-[#1B1B1B]'>
//                   <h2 className='text-[24px] font-bold text-[#EEEEEE] mb-[17px]'>Our Mission</h2>
//                   <p className='text-[16px] font-normal text-[#9E9E9E] w-[315px]'>To deliver exceptional digital solutions that
//                     empower businesses to achieve their goals
//                     and transform their industries.</p>
//                 </div>
//                 <div className='bg-[#0B0B0B] p-[33px] w-[384px] rounded-[14px] border border-[#1B1B1B]'>
//                   <h2 className='text-[24px] font-bold text-[#EEEEEE] mb-[17px]'>Our Vision</h2>
//                   <p className='text-[16px] font-normal text-[#9E9E9E] w-[315px]'>To be the most trusted partner for
//                     businesses seeking innovative, reliable, and
//                     transformative digital solutions worldwide.</p>
//                 </div>
//                 <div className='bg-[#0B0B0B] p-[33px] w-[384px] rounded-[14px] border border-[#1B1B1B]'>
//                   <h2 className='text-[24px] font-bold text-[#EEEEEE] mb-[17px]'>Our Values</h2>
//                   <p className='text-[16px] font-normal text-[#9E9E9E] w-[315px]'>Excellence, integrity, innovation, and client-
//                     centric approach guide everything we do.</p>
//                 </div>
//               </div>
//             </div>
//           </section>
//         </main>

//       </div>
//     )
//   }
// }























import React, { Component } from 'react'

// Images
import sobirjon from "../assets/sobirjon1.png"

export default class About extends Component {
  render() {
    return (
      <div>

        {/* Header */}
        <header className='bg-gradient-to-t from-[#01080f] to-[#001c22] pt-[63px] pb-[128px]'>
          <div className='text-center flex flex-col items-center px-4 md:px-0'>
            <h1 className='text-[36px] sm:text-[48px] font-bold text-[#EEEEEE] mb-6 sm:mb-[24px]'>About</h1>
            <p className='text-[16px] sm:text-[20px] font-normal text-[#9E9E9E] max-w-full sm:w-[741px] mb-12 sm:mb-[67px]'>
              Learn about MAX-V's journey, mission, and the talented team behind our success.
            </p>
          </div>
        </header>

        <main>

          {/* Our Story Section */}
          <section className='bg-[#060606] py-[64px] sm:py-[128px] px-4 md:px-0'>
            <div>
              <div className='text-center flex flex-col items-center'>
                <h1 className='text-[36px] sm:text-[48px] font-bold text-[#EEEEEE] mb-6 sm:mb-[24px]'>Our Story</h1>
                <p className='text-[16px] sm:text-[18px] font-normal text-[#9E9E9E] max-w-full sm:w-[741px] mb-12 sm:mb-[67px]'>
                  From humble beginnings to industry leaders, here's how MAX-V evolved.
                </p>
              </div>

              <div className='container flex flex-col lg:flex-row relative'>

                {/* Timeline line */}
                <div className="hidden lg:block relative h-[812px]">
                  <div className="absolute left-[574px] bottom-0 h-[812px] w-[4px] bg-gradient-to-b from-[#0086A1] to-[#03172C] z-0" />
                </div>

                <div className='flex flex-col lg:space-y-12 w-full lg:w-auto'>

                  <div className='text-end lg:text-end w-full lg:w-[542px]'>
                    <h2 className='text-[24px] font-bold text-[#0086A1] font-lato'>2019</h2>
                    <h3 className='text-[20px] font-semibold text-[#EEEEEE]'>Founded</h3>
                    <p className='text-[#9E9E9E]'>MAX-V was established with a simple vision: to provide world-class digital solutions to businesses worldwide.</p>
                  </div>

                  <div className='text-start lg:text-start w-full lg:w-[542px] mt-6 lg:mt-[50px]'>
                    <h2 className='text-[24px] font-bold text-[#0086A1] font-lato'>2020</h2>
                    <h3 className='text-[20px] font-semibold text-[#EEEEEE]'>First Major Project</h3>
                    <p className='text-[#9E9E9E]'>Completed our first enterprise-level web application, setting the standard for quality we maintain today.</p>
                  </div>

                  <div className='text-end lg:text-end w-full lg:w-[542px] mt-6 lg:mt-[50px]'>
                    <h2 className='text-[24px] font-bold text-[#0086A1] font-lato'>2021</h2>
                    <h3 className='text-[20px] font-semibold text-[#EEEEEE]'>Expansion</h3>
                    <p className='text-[#9E9E9E]'>Expanded team and services, adding specialized design and bot development capabilities.</p>
                  </div>

                  <div className='text-start lg:text-start mb-6 lg:mb-[50px] w-full lg:w-[542px]'>
                    <h2 className='text-[24px] font-bold text-[#0086A1] font-lato'>2023</h2>
                    <h3 className='text-[20px] font-semibold text-[#EEEEEE]'>Growth</h3>
                    <p className='text-[#9E9E9E]'>Reached 100+ successful projects and established MAX-V as a leading digital agency in the region.</p>
                  </div>

                  <div className='text-end lg:text-end w-full lg:w-[542px]'>
                    <h2 className='text-[24px] font-bold text-[#0086A1] font-lato'>2024</h2>
                    <h3 className='text-[20px] font-semibold text-[#EEEEEE]'>Innovation</h3>
                    <p className='text-[#9E9E9E]'>Launched cutting-edge AI-powered solutions and expanded international presence.</p>
                  </div>

                </div>

              </div>

            </div>
          </section>

          {/* Team Section */}
          <section className='bg-[#0B0B0B] py-[64px] sm:py-[129px] px-4 md:px-0'>
            <div>
              <div className='text-center flex flex-col items-center'>
                <h1 className='text-[36px] sm:text-[48px] font-bold text-[#EEEEEE] mb-6 sm:mb-[24px]'>Meet Our Team</h1>
                <p className='text-[16px] sm:text-[18px] font-normal text-[#9E9E9E] max-w-full sm:w-[741px] mb-12 sm:mb-[67px]'>
                  The talented individuals who make MAX-V exceptional.
                </p>
              </div>

              <div className='container flex flex-col gap-12'>
                {/* Team Member 1 */}
                <div className='flex flex-col md:flex-row justify-between gap-6 items-center'>
                  <img className='border border-[#1B1B1B] rounded-[14px] w-full md:w-[200px]' src={sobirjon} alt="Azizbek Kamilov" />
                  <div className='text-center md:text-left'>
                    <h1 className='text-[24px] sm:text-[30px] text-[#EEEEEE] font-bold'>Azizbek Kamilov</h1>
                    <h3 className='text-[16px] sm:text-[18px] text-[#0086A1] font-semibold mb-2 sm:mb-[19px] mt-2 sm:mt-[8px]'>CEO & Full-Stack Developer</h3>
                    <p className='text-[16px] sm:text-[18px] text-[#9E9E9E]'>
                      Azizbek is the visionary founder of MAX-V with 5+ years of experience in full-stack development. He leads the company with a passion for innovation and quality.
                    </p>
                    <div className='flex justify-center md:justify-start gap-4 mt-4 sm:mt-[27px]'>
                      <a href="https://www.linkedin.com/in/azizbek-kamilov-81698132a/" target='_blank' className='text-[16px] font-normal text-[#0086A1]'>LinkedIn</a>
                      <a href="https://github.com/Arrow1731" target='_blank' className='text-[16px] font-normal text-[#0086A1]'>GitHub</a>
                    </div>
                  </div>
                </div>

                {/* Team Member 2 */}
                <div className='flex flex-col md:flex-row-reverse justify-between gap-6 items-center'>
                  <img className='border border-[#1B1B1B] rounded-[14px] w-full md:w-[200px]' src={sobirjon} alt="Sobirjon Otajanov" />
                  <div className='text-center md:text-left'>
                    <h1 className='text-[24px] sm:text-[30px] text-[#EEEEEE] font-bold'>Sobirjon Otajanov</h1>
                    <h3 className='text-[16px] sm:text-[18px] text-[#0086A1] font-semibold mb-2 sm:mb-[19px] mt-2 sm:mt-[8px]'>Front-End Developer</h3>
                    <p className='text-[16px] sm:text-[18px] text-[#9E9E9E]'>
                      Sobirjon specializes in creating stunning user interfaces with modern frameworks. His expertise in React and Next.js has transformed countless projects.
                    </p>
                    <div className='flex justify-center md:justify-start gap-4 mt-4 sm:mt-[27px]'>
                      <a href="https://www.linkedin.com/in/sobirjon-otajonov-1500a23a8/" target='_blank' className='text-[16px] font-normal text-[#0086A1]'>LinkedIn</a>
                      <a href="https://github.com/SOB1Rake" target='_blank' className='text-[16px] font-normal text-[#0086A1]'>GitHub</a>
                    </div>
                  </div>
                </div>

                {/* Team Member 3 */}
                <div className='flex flex-col md:flex-row justify-between gap-6 items-center'>
                  <img className='border border-[#1B1B1B] rounded-[14px] w-full md:w-[200px]' src={sobirjon} alt="Zumrad Bakhtiyorova" />
                  <div className='text-center md:text-left'>
                    <h1 className='text-[24px] sm:text-[30px] text-[#EEEEEE] font-bold'>Zumrad Bakhtiyorova</h1>
                    <h3 className='text-[16px] sm:text-[18px] text-[#0086A1] font-semibold mb-2 sm:mb-[19px] mt-2 sm:mt-[8px]'>UX/UI Designer</h3>
                    <p className='text-[16px] sm:text-[18px] text-[#9E9E9E]'>
                      Zumrad brings creative vision to every project with her exceptional design skills. She ensures every pixel is perfect and every experience is delightful.
                    </p>
                    <div className='flex justify-center md:justify-start gap-4 mt-4 sm:mt-[27px]'>
                      <a href="#!" target='_blank' className='text-[16px] font-normal text-[#0086A1]'>LinkedIn</a>
                      <a href="#!" target='_blank' className='text-[16px] font-normal text-[#0086A1]'>GitHub</a>
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </section>

          {/* Mission / Vision / Values */}
          <section className='bg-[#060606] py-[64px] sm:py-[128px] px-4 md:px-0'>
            <div className='container flex flex-col md:flex-row justify-between gap-6'>
              <div className='bg-[#0B0B0B] p-6 sm:p-[33px] w-full md:w-[384px] rounded-[14px] border border-[#1B1B1B]'>
                <h2 className='text-[20px] sm:text-[24px] font-bold text-[#EEEEEE] mb-4 sm:mb-[17px]'>Our Mission</h2>
                <p className='text-[14px] sm:text-[16px] text-[#9E9E9E]'>To deliver exceptional digital solutions that empower businesses to achieve their goals and transform their industries.</p>
              </div>
              <div className='bg-[#0B0B0B] p-6 sm:p-[33px] w-full md:w-[384px] rounded-[14px] border border-[#1B1B1B]'>
                <h2 className='text-[20px] sm:text-[24px] font-bold text-[#EEEEEE] mb-4 sm:mb-[17px]'>Our Vision</h2>
                <p className='text-[14px] sm:text-[16px] text-[#9E9E9E]'>To be the most trusted partner for businesses seeking innovative, reliable, and transformative digital solutions worldwide.</p>
              </div>
              <div className='bg-[#0B0B0B] p-6 sm:p-[33px] w-full md:w-[384px] rounded-[14px] border border-[#1B1B1B]'>
                <h2 className='text-[20px] sm:text-[24px] font-bold text-[#EEEEEE] mb-4 sm:mb-[17px]'>Our Values</h2>
                <p className='text-[14px] sm:text-[16px] text-[#9E9E9E]'>Excellence, integrity, innovation, and client-centric approach guide everything we do.</p>
              </div>
            </div>
          </section>

        </main>

      </div>
    )
  }
}