"use client";

import React, { useState } from 'react';
import emailjs from 'emailjs-com';

function Contactme() {
  const [formData, setFormData] = useState({
    firstName: '',
    email: '',
    mobileNumber: '',
    emailSubject: '',
    message: ''
  });
  const [status, setStatus] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus('Sending...');

    // Use your User ID here
    emailjs.send('service_qaijbzk', 'template_zmn6g7j', formData, 'OuED3RmUaK8w51jf1')
      .then((response) => {
        console.log('SUCCESS!', response.status, response.text);
        setStatus('Email sent successfully!');
        setFormData({ firstName: '', email: '', mobileNumber: '', emailSubject: '', message: '' }); // Clear form
      })
      .catch((error) => {
        console.error('FAILED...', error);
        setStatus('Failed to send email.');
      });
  };

  return (
    <div className="bg-slate-900 min-h-screen flex items-center justify-center">
      <div className="container p-16">
        {/* Header */}
        <div className="flex gap-5 justify-center">
          <h1 className="text-5xl font-bold">Contact</h1>
          <h1 className="text-cyan-500 text-5xl font-black">Me</h1>
        </div>

        {/* Form Container */}
        <div className="mx-auto p-6 rounded-lg shadow-md w-full max-w-3xl mt-10">
          <form onSubmit={handleSubmit} className="space-y-4">
            {/* First Name and Email in one flex container */}
            <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4">
              <div className="flex-1">
                <input
                  type="text"
                  id="firstName"
                  placeholder="Full Name"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  className="mt-1 h-10 block w-full rounded-md border-gray-300 shadow-sm focus:border-slate-700 focus:ring-indigo-500 pl-3 bg-slate-800 text-white"
                  required
                />
              </div>
              <div className="flex-1">
                <input
                  type="email"
                  id="email"
                  placeholder="Email Address"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="mt-1 h-10 block w-full rounded-md border-gray-300 shadow-sm focus:border-slate-700 focus:ring-indigo-500 pl-3 bg-slate-800 text-white"
                  required
                />
              </div>
            </div>

            {/* Mobile Number and Email Subject in one flex container */}
            <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4">
              <div className="flex-1">
                <input
                  type="tel"
                  id="mobileNumber"
                  placeholder="Mobile Number"
                  name="mobileNumber"
                  value={formData.mobileNumber}
                  onChange={handleChange}
                  className="mt-1 h-10 block w-full rounded-md border-gray-300 shadow-sm focus:border-slate-700 focus:ring-indigo-500 pl-3 bg-slate-800 text-white"
                />
              </div>
              <div className="flex-1">
                <input
                  type="text"
                  id="emailSubject"
                  placeholder="Email Subject"
                  name="emailSubject"
                  value={formData.emailSubject}
                  onChange={handleChange}
                  className="mt-1 h-10 block w-full rounded-md border-gray-300 shadow-sm focus:border-slate-700 focus:ring-indigo-500 pl-3 bg-slate-800 text-white"
                />
              </div>
            </div>

            {/* Message Field */}
            <div>
              <textarea
                id="message"
                name="message"
                placeholder="Your Message"
                value={formData.message}
                onChange={handleChange}
                className="mt-1 h-52 block w-full rounded-md border-gray-300 shadow-sm focus:border-slate-700 focus:ring-indigo-500 pl-3 bg-slate-800 text-white"
                required
              ></textarea>
            </div>

            {/* Send Button */}
            <div className="flex justify-end">
              <button
                type="submit"
                className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-cyan-500 hover:bg-cyan-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                Send
              </button>
            </div>
          </form>
          {status && <p className="mt-4 text-sm text-gray-400">{status}</p>}
        </div>
      </div>
    </div>
  );
}

export default Contactme;
