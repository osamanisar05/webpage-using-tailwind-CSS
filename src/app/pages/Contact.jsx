import React from 'react';

const Contact = () => {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-4xl font-bold text-center mb-6">Contact Us</h1>
      <form className="max-w-md mx-auto">
        <input type="text" placeholder="Your Name" className="w-full p-2 mb-4 border border-gray-300 rounded" />
        <input type="email" placeholder="Your Email" className="w-full p-2 mb-4 border border-gray-300 rounded" />
        <textarea placeholder="Your Message" className="w-full p-2 mb-4 border border-gray-300 rounded" rows="4"></textarea>
        <button className="w-full bg-blue-600 text-white p-2 rounded">Send Message</button>
      </form>
    </div>
  );
};

export default Contact;