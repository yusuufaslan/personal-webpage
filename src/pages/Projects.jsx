import React from 'react';

const Projects = () => {
  return (
    <section id="projects" className="py-20 bg-white">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-4xl font-bold mb-4">Projects</h2>
        <p className="text-lg leading-relaxed">Here are some of the projects I've worked on recently. Each project showcases my skills and dedication to creating excellent software.</p>
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Add project cards here */}
          <div className="bg-gray-100 p-6 rounded-lg shadow-md">
            <h3 className="text-2xl font-bold mb-2">Project 1</h3>
            <p className="leading-relaxed">Description of project 1. This project involves...</p>
          </div>
          <div className="bg-gray-100 p-6 rounded-lg shadow-md">
            <h3 className="text-2xl font-bold mb-2">Project 2</h3>
            <p className="leading-relaxed">Description of project 2. This project involves...</p>
          </div>
          <div className="bg-gray-100 p-6 rounded-lg shadow-md">
            <h3 className="text-2xl font-bold mb-2">Project 3</h3>
            <p className="leading-relaxed">Description of project 3. This project involves...</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Projects;
