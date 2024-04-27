'use client';

import React, { FormEvent, useState } from 'react';
import { BackgroundBeams } from '@/components/ui/background-beams';

function ContactUs() {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log('Submitted:', { email, message });
  };

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 py-12 pt-36 relative">
      

      <BackgroundBeams className="absolute top-0 left-0 w-full h-full z-0" />
       
      <div className="max-w-2xl mx-auto p-4 relative z-10">
      <div className='  font-sans font-bold mb-8 text-white'>
      
      <div className="text-neutral-500 max-w-lg    text-lg">
      <h1 className="text-lg md:text-4xl  font-sans font-bold mb-2 text-white">
         Get in Touch with Us
      </h1>
        <p>Delicious Discoveries</p>
        <p>New Delhi, India</p>
        <p>Delhi 10001</p>
        <p>India</p>
      </div>   
      <div className="text-neutral-500 max-w-lg  my-2 text-lg">
      <h1 className="text-lg md:text-4xl  font-sans font-bold mb-2 text-white">
         Call Us :
      </h1>
        <p>(123) 456-7890</p>
      </div>   
      <div className="text-neutral-500 max-w-lg my-2 text-lg">
      <h1 className="text-lg md:text-4xl  font-sans font-bold mb-2 text-white">
         Email Us :
      </h1>
        <p>help@deliciousdiscoveries.com
          </p>
      </div>   
    </div>
        <h1 className="text-lg md:text-4xl font-sans font-bold mb-8  text-white">
        Send Us a Message
        </h1>
        <p className="text-neutral-500 max-w-lg   my-2 text-sm  ">
        Got a question? Want to enroll in a class? Just want to say hi? Fill out the form below and we will get back to you as soon as possible!
        </p>
        <form onSubmit={handleSubmit} className="space-y-4 mt-4">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Your email address"
            className="rounded-lg border border-neutral-800 focus:ring-2 focus:ring-teal-500 w-full p-4  bg-neutral-950 placeholder:text-neutral-700"
            required
          />
          <textarea
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Your message"
            className="rounded-lg border border-neutral-800 focus:ring-2 focus:ring-teal-500 w-full p-4  bg-neutral-950 placeholder:text-neutral-700"
            rows={5}
            required
          ></textarea>
          <div className='flex justify-center item-center'>
          <button className="inline-flex h-12 animate-shimmer items-center justify-center rounded-md border border-slate-500 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] px-6 font-medium text-slate-400 transition-colors focus:outline-none focus:ring-2 focus:ring-slate-600 focus:ring-offset-2 focus:ring-offset-slate-50 ">
            Send Message
          </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default ContactUs;