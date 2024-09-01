"use client";
import React from 'react';

function Contactme() {
  return (
    <div className="bg-slate-900 min-h-screen flex items-center justify-center">
      <div className="container p-16">
        {/* Header */}
        <div className="flex gap-5 justify-center">
          <h1 className="text-5xl font-bold">Contact</h1>
          <h1 className="text-cyan-500 text-5xl font-black">Me</h1>
        </div>

        {/* Form Container */}
        <div className="mx-auto p-6 rounded-lg shadow-md w-full max-w-3xl  mt-10">
          <form className="space-y-4">
            {/* First Name and Email in one flex container */}
            <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4">
              <div className="flex-1">
                <input
                  type="text"
                  id="firstName"
                  placeholder="Full Name"
                  name="firstName"
                  className="mt-1 h-10 block w-full rounded-md border-gray-300 shadow-sm focus:border-slate-700 focus:ring-indigo-500 pl-3 bg-slate-800 text-white"
                />
              </div>
              <div className="flex-1">
                <input
                  type="email"
                  id="email"
                  placeholder="Email Address"
                  name="email"
                  className="mt-1 h-10 block w-full rounded-md border-gray-300 shadow-sm focus:border-slate-700 focus:ring-indigo-500 pl-3 bg-slate-800 text-white"
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
                  className="mt-1 h-10 block w-full rounded-md border-gray-300 shadow-sm focus:border-slate-700 focus:ring-indigo-500 pl-3 bg-slate-800 text-white"
                />
              </div>
              <div className="flex-1">
                <input
                  type="text"
                  id="emailSubject"
                  placeholder="Email Subject"
                  name="emailSubject"
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
                className="mt-1 h-52 block w-full rounded-md border-gray-300 shadow-sm focus:border-slate-700 focus:ring-indigo-500 pl-3 bg-slate-800 text-white"
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
        </div>
      </div>
    </div>
  );
}

export default Contactme;
