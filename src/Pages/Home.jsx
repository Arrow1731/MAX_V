import React, { Component } from 'react'

// Icons{
import { ArrowRight } from 'lucide-react';
import { ChevronDown } from 'lucide-react';
import { Code } from 'lucide-react';
// }

// Images{
  import sobirjon from "../assets/sobirjon.png"
// }

export default class Home extends Component {
  render() {
    return (
      <div>
        <header className='bg-gradient-to-t from-[#01080f] to-[#001c22] pt-[52px] pb-[137px]'>
          <div className='container flex flex-col justify-center items-center'>
            <h1 className='text-[72px] font-bold text-[#EEEEEE] w-[703px] '>Digital Solutions for <br />
              <span className="bg-gradient-to-r from-[#008BA4] to-[#001D35] bg-clip-text text-transparent">
                Modern Businesses
              </span></h1>

            <p className='text-[20px] font-normal text-[#9E9E9E] w-[572px] text-center'>MAX-V specializes in web development, design, and innovative
              solutions that transform your business ideas into reality.</p>
            <div className='flex gap-[16px] mt-[41px]'>
              <button className='bg-[#0086A1] py-[15px] px-[32px] rounded-[10px] text-[16px] font-semibold flex gap-[8px]'>View Projects <ArrowRight /></button>
              <button className='bg-none border border-[#0086A1] px-[34px] py-[15px] rounded-[10px] text-[16px] font-semibold text-[#0086A1]'>Contact Us</button>
            </div>
            <ChevronDown className='text-[#008396] mt-[73px]' />
          </div>
        </header>

        <main>
          <section className='bg-[#0B0B0B] border border-[#1B1B1B]'>
            <div className='flex justify-between py-[65px] container'>
              <div className='text-center'>
                <h1 className='text-[#0086A1] text-[36px] font-bold'>5+</h1>
                <p className='text-[#9E9E9E] text-[14px] font-normal'>Years of Experience</p>
              </div>
              <div className='text-center'>
                <h1 className='text-[#0086A1] text-[36px] font-bold'>150+</h1>
                <p className='text-[#9E9E9E] text-[14px] font-normal'>Completed Projects</p>
              </div>
              <div className='text-center'>
                <h1 className='text-[#0086A1] text-[36px] font-bold'>100+</h1>
                <p className='text-[#9E9E9E] text-[14px] font-normal'>Happy Clients</p>
              </div>
              <div className='text-center'>
                <h1 className='text-[#0086A1] text-[36px] font-bold'>4</h1>
                <p className='text-[#9E9E9E] text-[14px] font-normal'>Team Members</p>
              </div>
            </div>
          </section>

          <section className='bg-[#060606] '>
            <div className='container py-[128px]'>
              <div className='text-center flex flex-col items-center'>
                <h1 className='text-[48px] font-bold text-[#EEEEEE] mb-[18px]'>Our Services</h1>
                <p className='text-[18px] font-normal text-[#9E9E9E] w-[620px] mb-[67px]'>We offer a comprehensive range of digital services tailored to your business
                  needs.</p>
              </div>

              <div className='flex gap-[24px] justify-between'>
                <div className='bg-[#0B0B0B] px-[25px] py-[25px] w-[286px] rounded-[14px] border border-[#1B1B1B]'>
                  <button className='bg-gradient-to-tl from-[#03172C33] to-[#0086A133] px-[12px] py-[12px] rounded-[10px] mb-[16px]'>
                    <Code className='text-[#008396]' />
                  </button>
                  <h3 className='text-[18px] font-semibold text-[#EEEEEE] mb-[9px'>Website Building</h3>
                  <p className='text-[#9E9E9E] text-[14px] font-normal w-[221px]'>Custom website development with
                    modern technologies</p>
                </div>
                <div className='bg-[#0B0B0B] px-[25px] py-[25px] w-[286px] rounded-[14px] border border-[#1B1B1B]'>
                  <button className='bg-gradient-to-tl from-[#03172C33] to-[#0086A133] px-[12px] py-[12px] rounded-[10px] mb-[16px]'>
                    <Code className='text-[#008396]' />
                  </button>
                  <h3 className='text-[18px] font-semibold text-[#EEEEEE] mb-[9px'>Website Building</h3>
                  <p className='text-[#9E9E9E] text-[14px] font-normal w-[221px]'>Custom website development with
                    modern technologies</p>
                </div>
                <div className='bg-[#0B0B0B] px-[25px] py-[25px] w-[286px] rounded-[14px] border border-[#1B1B1B]'>
                  <button className='bg-gradient-to-tl from-[#03172C33] to-[#0086A133] px-[12px] py-[12px] rounded-[10px] mb-[16px]'>
                    <Code className='text-[#008396]' />
                  </button>
                  <h3 className='text-[18px] font-semibold text-[#EEEEEE] mb-[9px'>Website Building</h3>
                  <p className='text-[#9E9E9E] text-[14px] font-normal w-[221px]'>Custom website development with
                    modern technologies</p>
                </div>
                <div className='bg-[#0B0B0B] px-[25px] py-[25px] w-[286px] rounded-[14px] border border-[#1B1B1B]'>
                  <button className='bg-gradient-to-tl from-[#03172C33] to-[#0086A133] px-[12px] py-[12px] rounded-[10px] mb-[16px]'>
                    <Code className='text-[#008396]' />
                  </button>
                  <h3 className='text-[18px] font-semibold text-[#EEEEEE] mb-[9px'>Website Building</h3>
                  <p className='text-[#9E9E9E] text-[14px] font-normal w-[221px]'>Custom website development with
                    modern technologies</p>
                </div>

              </div>
            </div>
          </section>

          <section className='bg-[#0B0B0B] '>
            <div className='container py-[128px]'>
              <div className='text-center flex flex-col items-center'>
                <h1 className='text-[48px] font-bold text-[#EEEEEE] mb-[18px]'>Team</h1>
                <p className='text-[18px] font-normal text-[#9E9E9E] w-[620px] mb-[67px]'>Meet the talented professionals behind MAX-V</p>
              </div>

              <div className='flex gap-[24px] justify-between'>
                <div className='bg-[#0B0B0B] w-[280px] rounded-[14px] border border-[#1B1B1B]'>
                  <img className='rounded-[14px] mb-[24px]' src={sobirjon} alt="" />
                  <div className='ml-[25px] mb-[25px]'>
                  <h3 className='text-[18px] font-semibold text-[#EEEEEE] mb-[9px'>Sobirjon Otajanov</h3>
                  <p className='text-[#0086A1] text-[14px] font-normal w-[221px]'>Front-End Developer</p>
                  </div>
                </div>
                <div className='bg-[#0B0B0B] w-[280px] rounded-[14px] border border-[#1B1B1B]'>
                  <img className='rounded-[14px] mb-[24px]' src={sobirjon} alt="" />
                  <div className='ml-[25px] mb-[25px]'>
                  <h3 className='text-[18px] font-semibold text-[#EEEEEE] mb-[9px'>Sobirjon Otajanov</h3>
                  <p className='text-[#0086A1] text-[14px] font-normal w-[221px]'>Front-End Developer</p>
                  </div>
                </div>
                <div className='bg-[#0B0B0B] w-[280px] rounded-[14px] border border-[#1B1B1B]'>
                  <img className='rounded-[14px] mb-[24px]' src={sobirjon} alt="" />
                  <div className='ml-[25px] mb-[25px]'>
                  <h3 className='text-[18px] font-semibold text-[#EEEEEE] mb-[9px'>Sobirjon Otajanov</h3>
                  <p className='text-[#0086A1] text-[14px] font-normal w-[221px]'>Front-End Developer</p>
                  </div>
                </div>
                <div className='bg-[#0B0B0B] w-[280px] rounded-[14px] border border-[#1B1B1B]'>
                  <img className='rounded-[14px] mb-[24px]' src={sobirjon} alt="" />
                  <div className='ml-[25px] mb-[25px]'>
                  <h3 className='text-[18px] font-semibold text-[#EEEEEE] mb-[9px'>Sobirjon Otajanov</h3>
                  <p className='text-[#0086A1] text-[14px] font-normal w-[221px]'>Front-End Developer</p>
                  </div>
                </div>

              </div>
            </div>
          </section>

        <section className='bg-[#060606]'>
            <div className='py-[128px]'>
              <div className='text-center flex flex-col items-center'>
                <h1 className='text-[48px] font-bold text-[#EEEEEE] mb-[24px]'>Ready to Start Your Project?</h1>
                <p className='text-[18px] font-normal text-[#9E9E9E] w-[654px] mb-[32px]'>Let's work together to bring your vision to life. Get in touch with our team today.</p>
              <button className='bg-[#0086A1] py-[15px] px-[32px] rounded-[10px] text-[16px] font-semibold flex gap-[8px]'>Contact Us</button>
              </div>
            </div>
          </section>
        </main>
      </div>
    )
  }
}
