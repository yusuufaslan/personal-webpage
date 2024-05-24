import React from 'react';

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-white">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-4xl font-bold mb-4">Contact Me</h2>
        <p className="text-lg leading-relaxed">I'd love to hear from you! Whether you have a question or just want to say hi, feel free to reach out.</p>
        <form className="mt-8 space-y-4">
          <div>
            <input type="text" className="w-full p-4 rounded-lg shadow-sm border-2 border-gray-200" placeholder="Your Name" />
          </div>
          <div>
            <input type="email" className="w-full p-4 rounded-lg shadow-sm border-2 border-gray-200" placeholder="Your Email" />
          </div>
          <div>
            <textarea className="w-full p-4 rounded-lg shadow-sm border-2 border-gray-200" rows="4" placeholder="Your Message"></textarea>
          </div>
          <div>
            <button type="submit" className="bg-blue-600 text-white px-6 py-3 rounded-full font-semibold">Send Message</button>
          </div>
        </form>
      </div>
    </section>
  );
}

export default Contact;
