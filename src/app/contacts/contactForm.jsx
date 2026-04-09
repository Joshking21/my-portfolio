'use client'
import { useState } from 'react';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Form Submitted:", formData);
    alert('Message Sent to Joshking!');
    setFormData({ name: '', email: '', phone: '', message: '' });
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col w-full max-w-md gap-6">
      <div className="space-y-4 w-full">
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Your Name"
          required
          className="w-full bg-transparent border-l-2 border-b-2 border-black p-3 outline-none focus:bg-black/5 transition-colors"
        />
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Your Email"
          required
          className="w-full bg-transparent border-l-2 border-b-2 border-black p-3 outline-none focus:bg-black/5 transition-colors"
        />
        <input
          type="text"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          placeholder="Phone Number (Optional)"
          className="w-full bg-transparent border-l-2 border-b-2 border-black p-3 outline-none focus:bg-black/5 transition-colors"
        />
        <textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
          placeholder="How can I help you?"
          required
          rows={4}
          className="w-full bg-transparent border-l-2 border-b-2 border-black p-3 outline-none focus:bg-black/5 transition-colors resize-none"
        />
      </div>

      <button 
        type="submit"
        className="self-center lg:self-start mt-4 px-12 py-1 border-x-2 border-black font-extrabold hover:bg-black hover:text-[var(--primary)] transition-all duration-300 active:scale-95"
      >
        Submit
      </button>
    </form>
  );
}