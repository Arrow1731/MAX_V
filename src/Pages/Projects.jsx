// import React, { Component } from 'react'

// // Images{
// import Project1 from "../assets/Background.png"
// // }
// // Icons{
// import { Github } from 'lucide-react';
// import { ExternalLink } from 'lucide-react';
// // }

// export default class Projects extends Component {
//   render() {
//     return (
//       <div>

//         <header className='bg-gradient-to-t from-[#01080f] to-[#001c22] pt-[63px] pb-[128px]'>
//           <div className='text-center flex flex-col items-center'>
//             <h1 className='text-[48px] font-bold text-[#EEEEEE] mb-[24px]'>Projects</h1>
//             <p className='text-[20px] font-normal text-[#9E9E9E] w-[741px] mb-[67px]'>Explore our portfolio of successful projects across various categories.</p>
//           </div>
//         </header>

//         <main>
//           <section>
//             <div>
//               <div>
//                 <div className='flex py-[32px] bg-[#070505] justify-center gap-[12px]'>
//                   <button className='bg-[#0086A1] py-[10px] px-[23px] rounded-[10px] text-[16px] font-semibold flex gap-[8px] hover:border-[#0086A1] duration-500'>All Projects</button>
//                   <button className='bg-[#0B0B0B] rounded-[10px] border border-[#1B1B1B] text-[16px] font-medium text-[#9E9E9E] px-[25px] py-[10px] hover:border-[#0086A1] duration-500'>Websites</button>
//                   <button className='bg-[#0B0B0B] rounded-[10px] border border-[#1B1B1B] text-[16px] font-medium text-[#9E9E9E] px-[25px] py-[10px] hover:border-[#0086A1] duration-500'>Telegram Bots</button>
//                   <button className='bg-[#0B0B0B] rounded-[10px] border border-[#1B1B1B] text-[16px] font-medium text-[#9E9E9E] px-[25px] py-[10px] hover:border-[#0086A1] duration-500'>Web Apps</button>
//                   <button className='bg-[#0B0B0B] rounded-[10px] border border-[#1B1B1B] text-[16px] font-medium text-[#9E9E9E] px-[25px] py-[10px] hover:border-[#0086A1] duration-500'>Designs</button>
//                 </div>

//                 <div className='bg-[#060606] py-[128px] border border-[#1B1B1B]'>
//                   <div className='container '>
//                     <div className='flex gap-[32px] mb-[32px]'>
//                       <div className='bg-[#0B0B0B] w-[384px] rounded-[14px] border border-[#1B1B1B] duration-500 projects'>
//                         <div>
//                           <img className='rounded-t-[14px] projectimg duration-500' src={Project1} alt="" />

//                         </div>
//                         <div className='py-[24px] px-[24px]'>
//                           <div className='flex'>
//                             <div className='icon' >
//                               <a href="https://github.com/maxv-coders" target='_blank'><Github /></a>
//                             </div>
//                             <div className='icons'>
//                               <a href="https://des-ux.vercel.app/" target='_blank'>  <ExternalLink /></a>

//                             </div>
//                           </div>

//                           <h2 className='text-[18px] text-[#EEEEEE] font-semibold mb-[9px]'>TechFlow Dashboard</h2>
//                           <p className='text-[14px] text-[#9E9E9E] font-normal mb-[17px]'>Modern analytics dashboard with real-time data
//                             visualization</p>
//                           <span className='text-[#0086A1] text-[12px] font-normal bg-[#0086A11A] rounded-[33554400px] px-[14px] py-[4px]'>apps</span>
//                         </div>
//                       </div>
//                       <div className='bg-[#0B0B0B] w-[384px] rounded-[14px] border border-[#1B1B1B] duration-500 projects'>
//                         <div>
//                           <img className='rounded-t-[14px] projectimg duration-500' src={Project1} alt="" />

//                         </div>
//                         <div className='py-[24px] px-[24px]'>
//                           <div className='flex'>
//                             <div className='icon' >
//                               <a href="https://github.com/maxv-coders" target='_blank'><Github /></a>
//                             </div>
//                             <div className='icons'>
//                               <a href="https://des-ux.vercel.app/" target='_blank'>  <ExternalLink /></a>

//                             </div>
//                           </div>

//                           <h2 className='text-[18px] text-[#EEEEEE] font-semibold mb-[9px]'>TechFlow Dashboard</h2>
//                           <p className='text-[14px] text-[#9E9E9E] font-normal mb-[17px]'>Modern analytics dashboard with real-time data
//                             visualization</p>
//                           <span className='text-[#0086A1] text-[12px] font-normal bg-[#0086A11A] rounded-[33554400px] px-[14px] py-[4px]'>apps</span>
//                         </div>
//                       </div>
//                       <div className='bg-[#0B0B0B] w-[384px] rounded-[14px] border border-[#1B1B1B] duration-500 projects'>
//                         <div>
//                           <img className='rounded-t-[14px] projectimg duration-500' src={Project1} alt="" />

//                         </div>
//                         <div className='py-[24px] px-[24px]'>
//                           <div className='flex'>
//                             <div className='icon' >
//                               <a href="https://github.com/maxv-coders" target='_blank'><Github /></a>
//                             </div>
//                             <div className='icons'>
//                               <a href="https://des-ux.vercel.app/" target='_blank'>  <ExternalLink /></a>

//                             </div>
//                           </div>

//                           <h2 className='text-[18px] text-[#EEEEEE] font-semibold mb-[9px]'>TechFlow Dashboard</h2>
//                           <p className='text-[14px] text-[#9E9E9E] font-normal mb-[17px]'>Modern analytics dashboard with real-time data
//                             visualization</p>
//                           <span className='text-[#0086A1] text-[12px] font-normal bg-[#0086A11A] rounded-[33554400px] px-[14px] py-[4px]'>apps</span>
//                         </div>
//                       </div>
//                     </div>
//                     <div className='flex gap-[32px] mb-[32px]'>
//                       <div className='bg-[#0B0B0B] w-[384px] rounded-[14px] border border-[#1B1B1B] duration-500 projects'>
//                         <div>
//                           <img className='rounded-t-[14px] projectimg duration-500' src={Project1} alt="" />

//                         </div>
//                         <div className='py-[24px] px-[24px]'>
//                           <div className='flex'>
//                             <div className='icon' >
//                               <a href="https://github.com/maxv-coders" target='_blank'><Github /></a>
//                             </div>
//                             <div className='icons'>
//                               <a href="https://des-ux.vercel.app/" target='_blank'>  <ExternalLink /></a>

//                             </div>
//                           </div>

//                           <h2 className='text-[18px] text-[#EEEEEE] font-semibold mb-[9px]'>TechFlow Dashboard</h2>
//                           <p className='text-[14px] text-[#9E9E9E] font-normal mb-[17px]'>Modern analytics dashboard with real-time data
//                             visualization</p>
//                           <span className='text-[#0086A1] text-[12px] font-normal bg-[#0086A11A] rounded-[33554400px] px-[14px] py-[4px]'>apps</span>
//                         </div>
//                       </div>
//                       <div className='bg-[#0B0B0B] w-[384px] rounded-[14px] border border-[#1B1B1B] duration-500 projects'>
//                         <div>
//                           <img className='rounded-t-[14px] projectimg duration-500' src={Project1} alt="" />

//                         </div>
//                         <div className='py-[24px] px-[24px]'>
//                           <div className='flex'>
//                             <div className='icon' >
//                               <a href="https://github.com/maxv-coders" target='_blank'><Github /></a>
//                             </div>
//                             <div className='icons'>
//                               <a href="https://des-ux.vercel.app/" target='_blank'>  <ExternalLink /></a>

//                             </div>
//                           </div>

//                           <h2 className='text-[18px] text-[#EEEEEE] font-semibold mb-[9px]'>TechFlow Dashboard</h2>
//                           <p className='text-[14px] text-[#9E9E9E] font-normal mb-[17px]'>Modern analytics dashboard with real-time data
//                             visualization</p>
//                           <span className='text-[#0086A1] text-[12px] font-normal bg-[#0086A11A] rounded-[33554400px] px-[14px] py-[4px]'>apps</span>
//                         </div>
//                       </div>
//                       <div className='bg-[#0B0B0B] w-[384px] rounded-[14px] border border-[#1B1B1B] duration-500 projects'>
//                         <div>
//                           <img className='rounded-t-[14px] projectimg duration-500' src={Project1} alt="" />

//                         </div>
//                         <div className='py-[24px] px-[24px]'>
//                           <div className='flex'>
//                             <div className='icon' >
//                               <a href="https://github.com/maxv-coders" target='_blank'><Github /></a>
//                             </div>
//                             <div className='icons'>
//                               <a href="https://des-ux.vercel.app/" target='_blank'>  <ExternalLink /></a>

//                             </div>
//                           </div>

//                           <h2 className='text-[18px] text-[#EEEEEE] font-semibold mb-[9px]'>TechFlow Dashboard</h2>
//                           <p className='text-[14px] text-[#9E9E9E] font-normal mb-[17px]'>Modern analytics dashboard with real-time data
//                             visualization</p>
//                           <span className='text-[#0086A1] text-[12px] font-normal bg-[#0086A11A] rounded-[33554400px] px-[14px] py-[4px]'>apps</span>
//                         </div>
//                       </div>
//                     </div>
//                     <div className='flex gap-[32px]'>
//                       <div className='bg-[#0B0B0B] w-[384px] rounded-[14px] border border-[#1B1B1B] duration-500 projects'>
//                         <div>
//                           <img className='rounded-t-[14px] projectimg duration-500' src={Project1} alt="" />

//                         </div>
//                         <div className='py-[24px] px-[24px]'>
//                           <div className='flex'>
//                             <div className='icon' >
//                               <a href="https://github.com/maxv-coders" target='_blank'><Github /></a>
//                             </div>
//                             <div className='icons'>
//                               <a href="https://des-ux.vercel.app/" target='_blank'>  <ExternalLink /></a>

//                             </div>
//                           </div>

//                           <h2 className='text-[18px] text-[#EEEEEE] font-semibold mb-[9px]'>TechFlow Dashboard</h2>
//                           <p className='text-[14px] text-[#9E9E9E] font-normal mb-[17px]'>Modern analytics dashboard with real-time data
//                             visualization</p>
//                           <span className='text-[#0086A1] text-[12px] font-normal bg-[#0086A11A] rounded-[33554400px] px-[14px] py-[4px]'>apps</span>
//                         </div>
//                       </div>
//                       <div className='bg-[#0B0B0B] w-[384px] rounded-[14px] border border-[#1B1B1B] duration-500 projects'>
//                         <div>
//                           <img className='rounded-t-[14px] projectimg duration-500' src={Project1} alt="" />

//                         </div>
//                         <div className='py-[24px] px-[24px]'>
//                           <div className='flex'>
//                             <div className='icon' >
//                               <a href="https://github.com/maxv-coders" target='_blank'><Github /></a>
//                             </div>
//                             <div className='icons'>
//                               <a href="https://des-ux.vercel.app/" target='_blank'>  <ExternalLink /></a>

//                             </div>
//                           </div>

//                           <h2 className='text-[18px] text-[#EEEEEE] font-semibold mb-[9px]'>TechFlow Dashboard</h2>
//                           <p className='text-[14px] text-[#9E9E9E] font-normal mb-[17px]'>Modern analytics dashboard with real-time data
//                             visualization</p>
//                           <span className='text-[#0086A1] text-[12px] font-normal bg-[#0086A11A] rounded-[33554400px] px-[14px] py-[4px]'>apps</span>
//                         </div>
//                       </div>
//                       <div className='bg-[#0B0B0B] w-[384px] rounded-[14px] border border-[#1B1B1B] duration-500 projects'>
//                         <div>
//                           <img className='rounded-t-[14px] projectimg duration-500' src={Project1} alt="" />

//                         </div>
//                         <div className='py-[24px] px-[24px]'>
//                           <div className='flex'>
//                             <div className='icon' >
//                               <a href="https://github.com/maxv-coders" target='_blank'><Github /></a>
//                             </div>
//                             <div className='icons'>
//                               <a href="https://des-ux.vercel.app/" target='_blank'>  <ExternalLink /></a>

//                             </div>
//                           </div>

//                           <h2 className='text-[18px] text-[#EEEEEE] font-semibold mb-[9px]'>TechFlow Dashboard</h2>
//                           <p className='text-[14px] text-[#9E9E9E] font-normal mb-[17px]'>Modern analytics dashboard with real-time data
//                             visualization</p>
//                           <span className='text-[#0086A1] text-[12px] font-normal bg-[#0086A11A] rounded-[33554400px] px-[14px] py-[4px]'>apps</span>
//                         </div>
//                       </div>
//                     </div>
//                   </div>
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
import Project1 from "../assets/Background.png"

// Icons
import { Github, ExternalLink } from 'lucide-react'

export default class Projects extends Component {
  state = {
    selectedCategory: "all",
    projects: [
      // Websites - 4
      { title: "TechFlow Dashboard", description: "Modern analytics dashboard with real-time data visualization", link: "https://des-ux.vercel.app/", github: "https://github.com/maxv-coders", category: "websites", img: Project1 },
      { title: "Portfolio Site", description: "Responsive portfolio website", link: "#", github: "#", category: "websites", img: Project1 },
      { title: "Landing Page", description: "Marketing landing page", link: "#", github: "#", category: "websites", img: Project1 },
      { title: "E-commerce Site", description: "Online store platform", link: "#", github: "#", category: "websites", img: Project1 },

      // Telegram Bots - 2
      { title: "Bot One", description: "Telegram automation bot", link: "#", github: "#", category: "bots", img: Project1 },
      { title: "Bot Two", description: "Telegram notification bot", link: "#", github: "#", category: "bots", img: Project1 },

      // Web Apps - 5
      { title: "WebApp One", description: "Interactive web application", link: "#", github: "#", category: "webapps", img: Project1 },
      { title: "WebApp Two", description: "Dashboard application", link: "#", github: "#", category: "webapps", img: Project1 },
      { title: "WebApp Three", description: "Task management app", link: "#", github: "#", category: "webapps", img: Project1 },
      { title: "WebApp Four", description: "Analytics platform", link: "#", github: "#", category: "webapps", img: Project1 },
      { title: "WebApp Five", description: "Data visualization tool", link: "#", github: "#", category: "webapps", img: Project1 },

      // Designs - 12
      ...Array.from({ length: 12 }, (_, i) => ({
        title: `Design ${i + 1}`,
        description: "Creative UI/UX design",
        link: "#",
        github: "#",
        category: "designs",
        img: Project1
      }))
    ]
  }

  setCategory = (cat) => {
    this.setState({ selectedCategory: cat })
  }

  render() {
    const { selectedCategory, projects } = this.state
    const filteredProjects = selectedCategory === "all" ? projects : projects.filter(p => p.category === selectedCategory)

    return (
      <div>

        <header className='bg-gradient-to-t from-[#01080f] to-[#001c22] pt-[63px] pb-[128px]'>
          <div className='text-center flex flex-col items-center'>
            <h1 className='text-[48px] font-bold text-[#EEEEEE] mb-[24px]'>Projects</h1>
            <p className='text-[20px] font-normal text-[#9E9E9E] w-[741px] mb-[67px]'>
              Explore our portfolio of successful projects across various categories.
            </p>
          </div>
        </header>

        <main>
          <section>
            <div>
              <div className='flex flex-wrap py-[32px] bg-[#070505] justify-center gap-[12px]'>
                <button 
                  className={`py-[10px] px-[23px] rounded-[10px] text-[16px] font-semibold flex gap-[8px] duration-500 ${selectedCategory === "all" ? "bg-[#0086A1]" : "bg-[#0B0B0B] border border-[#1B1B1B] text-[#9E9E9E]"}`}
                  onClick={() => this.setCategory("all")}
                >
                  All Projects
                </button>
                <button 
                  className={`py-[10px] px-[25px] rounded-[10px] text-[16px] font-medium duration-500 ${selectedCategory === "websites" ? "bg-[#0086A1]" : "bg-[#0B0B0B] border border-[#1B1B1B] text-[#9E9E9E]"}`}
                  onClick={() => this.setCategory("websites")}
                >
                  Websites
                </button>
                <button 
                  className={`py-[10px] px-[25px] rounded-[10px] text-[16px] font-medium duration-500 ${selectedCategory === "bots" ? "bg-[#0086A1]" : "bg-[#0B0B0B] border border-[#1B1B1B] text-[#9E9E9E]"}`}
                  onClick={() => this.setCategory("bots")}
                >
                  Telegram Bots
                </button>
                <button 
                  className={`py-[10px] px-[25px] rounded-[10px] text-[16px] font-medium duration-500 ${selectedCategory === "webapps" ? "bg-[#0086A1]" : "bg-[#0B0B0B] border border-[#1B1B1B] text-[#9E9E9E]"}`}
                  onClick={() => this.setCategory("webapps")}
                >
                  Web Apps
                </button>
                <button 
                  className={`py-[10px] px-[25px] rounded-[10px] text-[16px] font-medium duration-500 ${selectedCategory === "designs" ? "bg-[#0086A1]" : "bg-[#0B0B0B] border border-[#1B1B1B] text-[#9E9E9E]"}`}
                  onClick={() => this.setCategory("designs")}
                >
                  Designs
                </button>
              </div>

              <div className='bg-[#060606] py-[64px] md:py-[128px] border border-[#1B1B1B]'>
                <div className='container flex flex-wrap justify-center gap-[32px]'>
                  {filteredProjects.map((project, index) => (
                    <div key={index} className='bg-[#0B0B0B] w-full sm:w-[300px] md:w-[384px] rounded-[14px] border border-[#1B1B1B] duration-500 projects'>
                      <div>
                        <img className='rounded-t-[14px] projectimg duration-500' src={project.img} alt={project.title} />
                      </div>
                      <div className='py-[24px] px-[24px]'>
                        <div className='flex gap-4 mb-4'>
                          <div className='icon'>
                            <a href={project.github} target='_blank'><Github /></a>
                          </div>
                          <div className='icons'>
                            <a href={project.link} target='_blank'><ExternalLink /></a>
                          </div>
                        </div>
                        <h2 className='text-[18px] text-[#EEEEEE] font-semibold mb-[9px]'>{project.title}</h2>
                        <p className='text-[14px] text-[#9E9E9E] font-normal mb-[17px]'>{project.description}</p>
                        <span className='text-[#0086A1] text-[12px] font-normal bg-[#0086A11A] rounded-[33554400px] px-[14px] py-[4px]'>{project.category}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

            </div>
          </section>
        </main>
      </div>
    )
  }
}