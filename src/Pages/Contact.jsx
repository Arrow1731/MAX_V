import React, { Component } from 'react'
import { Phone } from 'lucide-react';

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
          <section>
            <div>
                <div>
                  <div>
                    <Phone />
                    <p>Phone</p>
                    <p>+998 (71) 200 12 34</p>
                  </div>
                </div>
            </div>
          </section>
        </main>
      </div>
    )
  }
}