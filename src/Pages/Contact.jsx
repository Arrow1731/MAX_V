// // import React, { Component } from 'react'
// // import { Phone } from 'lucide-react';
// // import { Mail } from 'lucide-react';
// // import { MapPin } from 'lucide-react';

// // export default class Contact extends Component {
// //   render() {
// //     return (
// //       <div>
// //         <header className='bg-gradient-to-t from-[#01080f] to-[#001c22] pt-[63px] pb-[128px]'>
// //           <div className='text-center flex flex-col items-center'>
// //             <h1 className='text-[48px] font-bold text-[#EEEEEE] mb-[24px]'>Contact Us</h1>
// //             <p className='text-[20px] font-normal text-[#9E9E9E] w-[741px] mb-[67px]'>Have a project in mind? We'd love to hear from you. Let's create something amazing together.</p>
// //           </div>
// //         </header>

// //         <main>
// //           <section className='py-[129px] bg-[#0B0B0B] border-t-2 border-b-2 border-[#1B1B1B]'>
// //             <div className='container'>
// //               <div className='flex gap-[32px]'>
// //                 <div className='py-[33px] border border-[#1B1B1B]  bg-[#060606] text-[#fff] w-[384px] flex flex-col items-center rounded-[14px]'>
// //                   <button className='bg-gradient-to-tl from-[#03172C33] to-[#0086A133] px-[12px] py-[12px] rounded-[10px] mb-[16px]'>
// //                     <Phone className='text-[#008396]' />
// //                   </button>
// //                   <p className='font-semibold text-[18px] mt-[16px]'>Phone</p>
// //                   <p className='font-normal text-[16px] mt-[8px]'>+998 (71) 200 12 34</p>
// //                 </div>
// //                 <div className='py-[33px] border border-[#1B1B1B]  bg-[#060606] text-[#fff] w-[384px] flex flex-col items-center rounded-[14px]'>
// //                   <button className='bg-gradient-to-tl from-[#03172C33] to-[#0086A133] px-[12px] py-[12px] rounded-[10px] mb-[16px]'>
// //                     <Mail className='text-[#008396]' />
// //                   </button>
// //                   <p className='font-semibold text-[18px] mt-[16px]'>Email</p>
// //                   <p className='font-normal text-[16px] mt-[8px]'>hello@max-v.uz</p>
// //                 </div>
// //                 <div className='py-[33px] border border-[#1B1B1B]  bg-[#060606] text-[#fff] w-[384px] flex flex-col items-center rounded-[14px]'>
// //                   <button className='bg-gradient-to-tl from-[#03172C33] to-[#0086A133] px-[12px] py-[12px] rounded-[10px] mb-[16px]'>
// //                     <MapPin className='text-[#008396]' />
// //                   </button>
// //                   <p className='font-semibold text-[18px] mt-[16px]'>Location</p>
// //                   <p className='font-normal text-[16px] mt-[8px]'>Tashkent, Uzbekistan</p>
// //                 </div>
// //               </div>
// //             </div>
// //           </section>
// //         </main>
// //       </div>
// //     )
// //   }
// // }






























// import React, { Component } from 'react';
// import { Phone, Mail, MapPin } from 'lucide-react';

// export default class Contact extends Component {
//   render() {
//     return (
//       <div>
//         {/* Header */}
//         <header className='bg-gradient-to-t from-[#01080f] to-[#001c22] pt-[63px] pb-[128px]'>
//           <div className='text-center flex flex-col items-center px-4 md:px-0'>
//             <h1 className='text-[36px] sm:text-[48px] font-bold text-[#EEEEEE] mb-[24px]'>Contact Us</h1>
//             <p className='text-[16px] sm:text-[20px] font-normal text-[#9E9E9E] max-w-[90%] md:max-w-[741px] mb-[67px]'>
//               Have a project in mind? We'd love to hear from you. Let's create something amazing together.
//             </p>
//           </div>
//         </header>

//         {/* Contact Cards */}
//         <main>
//           <section className='py-[64px] sm:py-[129px] bg-[#0B0B0B] border-t-2 border-b-2 border-[#1B1B1B]'>
//             <div className='container px-4'>
//               <div className='flex flex-wrap justify-center md:justify-between gap-[24px] md:gap-[32px]'>
                
//                 {/* Phone Card */}
//                 <div className='py-[33px] border border-[#1B1B1B] bg-[#060606] text-[#fff] w-full sm:w-[300px] md:w-[384px] flex flex-col items-center rounded-[14px]'>
//                   <button className='bg-gradient-to-tl from-[#03172C33] to-[#0086A133] px-[12px] py-[12px] rounded-[10px] mb-[16px]'>
//                     <Phone className='text-[#008396]' />
//                   </button>
//                   <p className='font-semibold text-[18px] mt-[16px]'>Phone</p>
//                   <p className='font-normal text-[16px] mt-[8px]'>+998 (71) 200 12 34</p>
//                 </div>

//                 {/* Email Card */}
//                 <div className='py-[33px] border border-[#1B1B1B] bg-[#060606] text-[#fff] w-full sm:w-[300px] md:w-[384px] flex flex-col items-center rounded-[14px]'>
//                   <button className='bg-gradient-to-tl from-[#03172C33] to-[#0086A133] px-[12px] py-[12px] rounded-[10px] mb-[16px]'>
//                     <Mail className='text-[#008396]' />
//                   </button>
//                   <p className='font-semibold text-[18px] mt-[16px]'>Email</p>
//                   <p className='font-normal text-[16px] mt-[8px]'>hello@max-v.uz</p>
//                 </div>

//                 {/* Location Card */}
//                 <div className='py-[33px] border border-[#1B1B1B] bg-[#060606] text-[#fff] w-full sm:w-[300px] md:w-[384px] flex flex-col items-center rounded-[14px]'>
//                   <button className='bg-gradient-to-tl from-[#03172C33] to-[#0086A133] px-[12px] py-[12px] rounded-[10px] mb-[16px]'>
//                     <MapPin className='text-[#008396]' />
//                   </button>
//                   <p className='font-semibold text-[18px] mt-[16px]'>Location</p>
//                   <p className='font-normal text-[16px] mt-[8px]'>Tashkent, Uzbekistan</p>
//                 </div>

//               </div>
//             </div>
//           </section>
//         </main>
//       </div>
//     )
//   }
// }






















import React, { Component, useState } from 'react';
import { Phone, Mail, MapPin } from 'lucide-react';

// Replace with your actual Google Maps embed link
const GOOGLE_MAP_EMBED = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2478.1792097008483!2d60.812950051839145!3d41.3551195!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x41dfeb004910cd6f%3A0x53d4308d98c476a5!2sBogot%20IT%20park!5e1!3m2!1sru!2s!4v1770984713265!5m2!1sru!2s"; 

export default class Contact extends Component {
  render() {
    return (
      <div>
        {/* Header */}
        <header className='bg-gradient-to-t from-[#01080f] to-[#001c22] pt-[63px] pb-[128px]'>
          <div className='text-center flex flex-col items-center px-4 md:px-0'>
            <h1 className='text-[36px] sm:text-[48px] font-bold text-[#EEEEEE] mb-[24px]'>Contact Us</h1>
            <p className='text-[16px] sm:text-[20px] font-normal text-[#9E9E9E] max-w-[90%] md:max-w-[741px] mb-[67px]'>
              Have a project in mind? We'd love to hear from you. Let's create something amazing together.
            </p>
          </div>
        </header>

        {/* Contact Section: Left - Cards, Right - Request Form */}
        <main className='bg-[#000]'>
          <section className='py-[64px] sm:py-[129px] bg-[#0B0B0B] border-t-2 border-b-2 border-[#1B1B1B]'>
            <div className='container items-center px-4 flex flex-col lg:flex-row gap-8 lg:gap-16'>

              {/* Left: Contact Cards */}
              <div className='flex flex-col gap-6 w-full lg:w-1/2'>
                <ContactCard icon={<Phone className='text-[#008396]' />} title="Phone" info="+998 (71) 200 12 34" />
                <ContactCard icon={<Mail className='text-[#008396]' />} title="Email" info="hello@max-v.uz" />
                <ContactCard icon={<MapPin className='text-[#008396]' />} title="Location" info="Tashkent, Uzbekistan" />
              </div>

              {/* Right: Request Form */}
              <div className='w-full lg:w-1/2'>
                <div className='bg-[#0B0B0B] p-6 rounded-[14px] border border-[#1B1B1B]'>
                  <h2 className='text-[24px] font-bold text-[#EEEEEE] mb-4 text-center'>Request a Project</h2>
                  <RequestForm />
                </div>
              </div>

            </div>
          </section>

          {/* Google Map Section */}
          <section className='container mt-8'>
            <div className='w-full h-[420px]'>
              <iframe
                src={GOOGLE_MAP_EMBED}
                className='w-full h-full'
              />
            </div>
          </section>
        </main>
      </div>
    )
  }
}

// Contact Card Component
const ContactCard = ({ icon, title, info }) => (
  <div className='py-[33px] border border-[#1B1B1B] bg-[#060606] text-[#fff] w-full flex flex-col items-center rounded-[14px]'>
    <button className='bg-gradient-to-tl from-[#03172C33] to-[#0086A133] px-[12px] py-[12px] rounded-[10px] mb-[16px]'>
      {icon}
    </button>
    <p className='font-semibold text-[18px] mt-[16px]'>{title}</p>
    <p className='font-normal text-[16px] mt-[8px]'>{info}</p>
  </div>
);

// Request Form Component
const RequestForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    tg: '',
    type: 'Website',
    description: ''
  });

  const admins = [6611171894, 6536432455];
  const TELEGRAM_TOKEN = '7644223923:AAHrDqT-aV1w7LpWH3OjrcF31NaYs5IdE0k';

  const handleChange = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async e => {
    e.preventDefault();

    const message = `
New Project Request:
Full Name: ${formData.name}
Phone: ${formData.phone}
Telegram: ${formData.tg || 'N/A'}
Type: ${formData.type}
Description: ${formData.description}
    `;

    for (let adminId of admins) {
      await fetch(`https://api.telegram.org/bot${TELEGRAM_TOKEN}/sendMessage`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ chat_id: adminId, text: message })
      });
    }

    alert('Your request has been sent successfully!');
    setFormData({ name: '', phone: '', tg: '', type: 'Website', description: '' });
  };

  return (
    <form onSubmit={handleSubmit} className='flex flex-col gap-4'>
      <input
        type="text"
        name="name"
        placeholder="Full Name"
        value={formData.name}
        onChange={handleChange}
        required
        className='p-3 rounded-md bg-[#1B1B1B] border border-[#333] text-white w-full'
      />
      <input
        type="text"
        name="phone"
        placeholder="Phone Number"
        value={formData.phone}
        onChange={handleChange}
        required
        className='p-3 rounded-md bg-[#1B1B1B] border border-[#333] text-white w-full'
      />
      <input
        type="text"
        name="tg"
        placeholder="Telegram Username (optional)"
        value={formData.tg}
        onChange={handleChange}
        className='p-3 rounded-md bg-[#1B1B1B] border border-[#333] text-white w-full'
      />
      <select
        name="type"
        value={formData.type}
        onChange={handleChange}
        className='p-3 rounded-md bg-[#1B1B1B] border border-[#333] text-white w-full'
      >
        <option value="Website">Website</option>
        <option value="Telegram Bot">Telegram Bot</option>
        <option value="Web App">Web App</option>
        <option value="Design">Design</option>
      </select>
      <textarea
        name="description"
        placeholder="Project Description"
        value={formData.description}
        onChange={handleChange}
        required
        className='p-3 rounded-md bg-[#1B1B1B] border border-[#333] text-white w-full h-32'
      />
      <button
        type="submit"
        className='bg-[#0086A1] text-white py-3 rounded-md hover:bg-[#00a5c2] transition-colors font-semibold mt-2'
      >
        Send Request
      </button>
    </form>
  );
};