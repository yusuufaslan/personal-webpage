import React from 'react';

const Resume = () => {
  return (
    <section id="resume" className="py-20 bg-gray-200">
      <div className="container mx-auto px-4 text-center flex flex-col md:flex-row items-center justify-center md:justify-between">
        <div className="text-center md:text-left mb-4 md:mb-0 w-full md:w-3/4"> {/* Adjust width */}
          <h2 className="text-4xl font-bold mb-2">Resume</h2>
          <p className="text-lg leading-relaxed mb-4 mt-6">Download my resume to learn more about my professional background and experience.</p>
          <a href="./YusufAslan-resume.pdf" download className="bg-blue-600 text-white px-6 py-3 rounded-full font-semibold mt-4 inline-block mb-8">Download Resume</a>
        </div>
        <div className="border border-gray-300 rounded-lg shadow-lg p-4 w-full md:w-2/4"> {/* Adjust width */}
          {/* Your PDF preview component goes here */}
          {/* <p className="text-gray-600 mb-2">Preview</p> */}
          {/* Replace the next line with your PDF preview component */}
          <iframe
            src="./YusufAslan-resume.pdf"
            width="100%"
            height="510"
            title="Preview"
            className="border-none"
          ></iframe>
        </div>
      </div>
    </section>
  );
}

export default Resume;
