import React, { Component } from 'react'
import { Phone } from 'lucide-react';
import { Mail } from 'lucide-react';
import { MapPin } from 'lucide-react';

export default class Contact extends Component {
  render() {
    return (
      <div>
         <header className='bg-gradient-to-t from-[#01080f] to-[#001c22] pt-[63px] pb-[128px]'>
          <div className='text-center flex flex-col items-center'>
            <h1 className='text-[48px] font-bold text-[#EEEEEE] mb-[24px]'>Contact Us</h1>
            <p className='text-[20px] font-normal text-[#9E9E9E] w-[741px] mb-[67px]'>Have a project in mind? We'd love to hear from you. Let's create something amazing together.</p>
          </div>
        </header>

        <main>
          <section className='py-[129px] bg-[#0B0B0B] border-t-2 border-b-2 border-[#1B1B1B]'>
            <div className='container'>
                <div className='flex gap-[32px]'>
                  <div className='py-[33px] border border-[#1B1B1B]  bg-[#060606] text-[#fff] w-[384px] flex flex-col items-center rounded-[14px]'>
                    <button className='bg-gradient-to-tl from-[#03172C33] to-[#0086A133] px-[12px] py-[12px] rounded-[10px] mb-[16px]'>
                    <Phone className='text-[#008396]' />
                  </button>
                    <p className='font-semibold text-[18px] mt-[16px]'>Phone</p>
                    <p className='font-normal text-[16px] mt-[8px]'>+998 (71) 200 12 34</p>
                  </div>
                  <div className='py-[33px] border border-[#1B1B1B]  bg-[#060606] text-[#fff] w-[384px] flex flex-col items-center rounded-[14px]'>
                    <button className='bg-gradient-to-tl from-[#03172C33] to-[#0086A133] px-[12px] py-[12px] rounded-[10px] mb-[16px]'>
                    <Mail className='text-[#008396]' />
                  </button>
                    <p className='font-semibold text-[18px] mt-[16px]'>Email</p>
                    <p className='font-normal text-[16px] mt-[8px]'>hello@max-v.uz</p>
                  </div>
                  <div className='py-[33px] border border-[#1B1B1B]  bg-[#060606] text-[#fff] w-[384px] flex flex-col items-center rounded-[14px]'>
                    <button className='bg-gradient-to-tl from-[#03172C33] to-[#0086A133] px-[12px] py-[12px] rounded-[10px] mb-[16px]'>
                    <MapPin className='text-[#008396]' />
                  </button>
                    <p className='font-semibold text-[18px] mt-[16px]'>Location</p>
                    <p className='font-normal text-[16px] mt-[8px]'>Tashkent, Uzbekistan</p>
                  </div>
                </div>
            </div>
          </section>
        </main>
      </div>
    )
  }
}