import React, { Component } from 'react'

// Images{
import Project1 from "../assets/Background.png"
// }
// Icons{
import { Github } from 'lucide-react';
import { ExternalLink } from 'lucide-react';
// }

export default class Projects extends Component {
  render() {
    return (
      <div>

        <header className='bg-gradient-to-t from-[#01080f] to-[#001c22] pt-[63px] pb-[128px]'>
          <div className='text-center flex flex-col items-center'>
            <h1 className='text-[48px] font-bold text-[#EEEEEE] mb-[24px]'>Projects</h1>
            <p className='text-[20px] font-normal text-[#9E9E9E] w-[741px] mb-[67px]'>Explore our portfolio of successful projects across various categories.</p>
          </div>
        </header>

        <main>
          <section>
            <div>
              <div>
                <div className='flex py-[32px] bg-[#070505] justify-center gap-[12px]'>
                  <button className='bg-[#0086A1] py-[10px] px-[23px] rounded-[10px] text-[16px] font-semibold flex gap-[8px] hover:border-[#0086A1] duration-500'>All Projects</button>
                  <button className='bg-[#0B0B0B] rounded-[10px] border border-[#1B1B1B] text-[16px] font-medium text-[#9E9E9E] px-[25px] py-[10px] hover:border-[#0086A1] duration-500'>Websites</button>
                  <button className='bg-[#0B0B0B] rounded-[10px] border border-[#1B1B1B] text-[16px] font-medium text-[#9E9E9E] px-[25px] py-[10px] hover:border-[#0086A1] duration-500'>Telegram Bots</button>
                  <button className='bg-[#0B0B0B] rounded-[10px] border border-[#1B1B1B] text-[16px] font-medium text-[#9E9E9E] px-[25px] py-[10px] hover:border-[#0086A1] duration-500'>Web Apps</button>
                  <button className='bg-[#0B0B0B] rounded-[10px] border border-[#1B1B1B] text-[16px] font-medium text-[#9E9E9E] px-[25px] py-[10px] hover:border-[#0086A1] duration-500'>Designs</button>
                </div>

                <div className='bg-[#060606] py-[128px] border border-[#1B1B1B]'>
                  <div className='container '>
                    <div className='flex gap-[32px] mb-[32px]'>
                      <div className='bg-[#0B0B0B] w-[384px] rounded-[14px] border border-[#1B1B1B] duration-500 projects'>
                        <div>
                          <img className='rounded-t-[14px] projectimg duration-500' src={Project1} alt="" />

                        </div>
                        <div className='py-[24px] px-[24px]'>
                          <div className='flex'>
                             <div className='icon' >
                             <a href="https://github.com/maxv-coders" target='_blank'><Github /></a>
                           </div>
                           <div className='icons'>
                            <a href="https://des-ux.vercel.app/" target='_blank'>  <ExternalLink/></a>
                              
                           </div>
                          </div>
                          
                          <h2 className='text-[18px] text-[#EEEEEE] font-semibold mb-[9px]'>TechFlow Dashboard</h2>
                          <p className='text-[14px] text-[#9E9E9E] font-normal mb-[17px]'>Modern analytics dashboard with real-time data
                            visualization</p>
                          <span className='text-[#0086A1] text-[12px] font-normal bg-[#0086A11A] rounded-[33554400px] px-[14px] py-[4px]'>apps</span>
                        </div>
                      </div>
                      <div className='bg-[#0B0B0B] w-[384px] rounded-[14px] border border-[#1B1B1B] duration-500 projects'>
                        <div>
                          <img className='rounded-t-[14px] projectimg duration-500' src={Project1} alt="" />

                        </div>
                        <div className='py-[24px] px-[24px]'>
                          <div className='flex'>
                             <div className='icon' >
                             <a href="https://github.com/maxv-coders" target='_blank'><Github /></a>
                           </div>
                           <div className='icons'>
                            <a href="https://des-ux.vercel.app/" target='_blank'>  <ExternalLink/></a>
                              
                           </div>
                          </div>
                          
                          <h2 className='text-[18px] text-[#EEEEEE] font-semibold mb-[9px]'>TechFlow Dashboard</h2>
                          <p className='text-[14px] text-[#9E9E9E] font-normal mb-[17px]'>Modern analytics dashboard with real-time data
                            visualization</p>
                          <span className='text-[#0086A1] text-[12px] font-normal bg-[#0086A11A] rounded-[33554400px] px-[14px] py-[4px]'>apps</span>
                        </div>
                      </div>
                      <div className='bg-[#0B0B0B] w-[384px] rounded-[14px] border border-[#1B1B1B] duration-500 projects'>
                        <div>
                          <img className='rounded-t-[14px] projectimg duration-500' src={Project1} alt="" />

                        </div>
                        <div className='py-[24px] px-[24px]'>
                          <div className='flex'>
                             <div className='icon' >
                             <a href="https://github.com/maxv-coders" target='_blank'><Github /></a>
                           </div>
                           <div className='icons'>
                            <a href="https://des-ux.vercel.app/" target='_blank'>  <ExternalLink/></a>
                              
                           </div>
                          </div>
                          
                          <h2 className='text-[18px] text-[#EEEEEE] font-semibold mb-[9px]'>TechFlow Dashboard</h2>
                          <p className='text-[14px] text-[#9E9E9E] font-normal mb-[17px]'>Modern analytics dashboard with real-time data
                            visualization</p>
                          <span className='text-[#0086A1] text-[12px] font-normal bg-[#0086A11A] rounded-[33554400px] px-[14px] py-[4px]'>apps</span>
                        </div>
                      </div>
                    </div>
                    <div className='flex gap-[32px] mb-[32px]'>
                      <div className='bg-[#0B0B0B] w-[384px] rounded-[14px] border border-[#1B1B1B] duration-500 projects'>
                        <div>
                          <img className='rounded-t-[14px] projectimg duration-500' src={Project1} alt="" />

                        </div>
                        <div className='py-[24px] px-[24px]'>
                          <div className='flex'>
                             <div className='icon' >
                             <a href="https://github.com/maxv-coders" target='_blank'><Github /></a>
                           </div>
                           <div className='icons'>
                            <a href="https://des-ux.vercel.app/" target='_blank'>  <ExternalLink/></a>
                              
                           </div>
                          </div>
                          
                          <h2 className='text-[18px] text-[#EEEEEE] font-semibold mb-[9px]'>TechFlow Dashboard</h2>
                          <p className='text-[14px] text-[#9E9E9E] font-normal mb-[17px]'>Modern analytics dashboard with real-time data
                            visualization</p>
                          <span className='text-[#0086A1] text-[12px] font-normal bg-[#0086A11A] rounded-[33554400px] px-[14px] py-[4px]'>apps</span>
                        </div>
                      </div>
                      <div className='bg-[#0B0B0B] w-[384px] rounded-[14px] border border-[#1B1B1B] duration-500 projects'>
                        <div>
                          <img className='rounded-t-[14px] projectimg duration-500' src={Project1} alt="" />

                        </div>
                        <div className='py-[24px] px-[24px]'>
                          <div className='flex'>
                             <div className='icon' >
                             <a href="https://github.com/maxv-coders" target='_blank'><Github /></a>
                           </div>
                           <div className='icons'>
                            <a href="https://des-ux.vercel.app/" target='_blank'>  <ExternalLink/></a>
                              
                           </div>
                          </div>
                          
                          <h2 className='text-[18px] text-[#EEEEEE] font-semibold mb-[9px]'>TechFlow Dashboard</h2>
                          <p className='text-[14px] text-[#9E9E9E] font-normal mb-[17px]'>Modern analytics dashboard with real-time data
                            visualization</p>
                          <span className='text-[#0086A1] text-[12px] font-normal bg-[#0086A11A] rounded-[33554400px] px-[14px] py-[4px]'>apps</span>
                        </div>
                      </div>
                      <div className='bg-[#0B0B0B] w-[384px] rounded-[14px] border border-[#1B1B1B] duration-500 projects'>
                        <div>
                          <img className='rounded-t-[14px] projectimg duration-500' src={Project1} alt="" />

                        </div>
                        <div className='py-[24px] px-[24px]'>
                          <div className='flex'>
                             <div className='icon' >
                             <a href="https://github.com/maxv-coders" target='_blank'><Github /></a>
                           </div>
                           <div className='icons'>
                            <a href="https://des-ux.vercel.app/" target='_blank'>  <ExternalLink/></a>
                              
                           </div>
                          </div>
                          
                          <h2 className='text-[18px] text-[#EEEEEE] font-semibold mb-[9px]'>TechFlow Dashboard</h2>
                          <p className='text-[14px] text-[#9E9E9E] font-normal mb-[17px]'>Modern analytics dashboard with real-time data
                            visualization</p>
                          <span className='text-[#0086A1] text-[12px] font-normal bg-[#0086A11A] rounded-[33554400px] px-[14px] py-[4px]'>apps</span>
                        </div>
                      </div>
                    </div>
                    <div className='flex gap-[32px]'>
                      <div className='bg-[#0B0B0B] w-[384px] rounded-[14px] border border-[#1B1B1B] duration-500 projects'>
                        <div>
                          <img className='rounded-t-[14px] projectimg duration-500' src={Project1} alt="" />

                        </div>
                        <div className='py-[24px] px-[24px]'>
                          <div className='flex'>
                             <div className='icon' >
                             <a href="https://github.com/maxv-coders" target='_blank'><Github /></a>
                           </div>
                           <div className='icons'>
                            <a href="https://des-ux.vercel.app/" target='_blank'>  <ExternalLink/></a>
                              
                           </div>
                          </div>
                          
                          <h2 className='text-[18px] text-[#EEEEEE] font-semibold mb-[9px]'>TechFlow Dashboard</h2>
                          <p className='text-[14px] text-[#9E9E9E] font-normal mb-[17px]'>Modern analytics dashboard with real-time data
                            visualization</p>
                          <span className='text-[#0086A1] text-[12px] font-normal bg-[#0086A11A] rounded-[33554400px] px-[14px] py-[4px]'>apps</span>
                        </div>
                      </div>
                      <div className='bg-[#0B0B0B] w-[384px] rounded-[14px] border border-[#1B1B1B] duration-500 projects'>
                        <div>
                          <img className='rounded-t-[14px] projectimg duration-500' src={Project1} alt="" />

                        </div>
                        <div className='py-[24px] px-[24px]'>
                          <div className='flex'>
                             <div className='icon' >
                             <a href="https://github.com/maxv-coders" target='_blank'><Github /></a>
                           </div>
                           <div className='icons'>
                            <a href="https://des-ux.vercel.app/" target='_blank'>  <ExternalLink/></a>
                              
                           </div>
                          </div>
                          
                          <h2 className='text-[18px] text-[#EEEEEE] font-semibold mb-[9px]'>TechFlow Dashboard</h2>
                          <p className='text-[14px] text-[#9E9E9E] font-normal mb-[17px]'>Modern analytics dashboard with real-time data
                            visualization</p>
                          <span className='text-[#0086A1] text-[12px] font-normal bg-[#0086A11A] rounded-[33554400px] px-[14px] py-[4px]'>apps</span>
                        </div>
                      </div>
                      <div className='bg-[#0B0B0B] w-[384px] rounded-[14px] border border-[#1B1B1B] duration-500 projects'>
                        <div>
                          <img className='rounded-t-[14px] projectimg duration-500' src={Project1} alt="" />

                        </div>
                        <div className='py-[24px] px-[24px]'>
                          <div className='flex'>
                             <div className='icon' >
                             <a href="https://github.com/maxv-coders" target='_blank'><Github /></a>
                           </div>
                           <div className='icons'>
                            <a href="https://des-ux.vercel.app/" target='_blank'>  <ExternalLink/></a>
                              
                           </div>
                          </div>
                          
                          <h2 className='text-[18px] text-[#EEEEEE] font-semibold mb-[9px]'>TechFlow Dashboard</h2>
                          <p className='text-[14px] text-[#9E9E9E] font-normal mb-[17px]'>Modern analytics dashboard with real-time data
                            visualization</p>
                          <span className='text-[#0086A1] text-[12px] font-normal bg-[#0086A11A] rounded-[33554400px] px-[14px] py-[4px]'>apps</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </main>
      </div>
    )
  }
}