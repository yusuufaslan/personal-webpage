import React, { useEffect, useState } from 'react';

const Navbar = () => {
  const [smoothScrollSupported, setSmoothScrollSupported] = useState(false);

  useEffect(() => {
    // Check if smooth scrolling is supported by the browser
    const supportsSmoothScroll = 'scrollBehavior' in document.documentElement.style;
    setSmoothScrollSupported(supportsSmoothScroll);
  }, []);

  const smoothScrollTo = (targetId) => {
    const target = document.getElementById(targetId);
    if (target) {
      target.scrollIntoView({
        behavior: smoothScrollSupported ? 'smooth' : 'auto',
        block: 'start',
        duration: 10000,
      });
    }
  };

  return (
    <nav className="bg-white shadow-md">
      <div className="container mx-auto px-4 py-2 flex justify-between items-center">
        <div className="text-2xl font-bold">Yusuf Aslan</div>
        <div className="space-x-4">
          <button onClick={() => smoothScrollTo('home')} className="text-gray-700 hover:text-blue-500">Home</button>
          <button onClick={() => smoothScrollTo('about')} className="text-gray-700 hover:text-blue-500">About</button>
          <button onClick={() => smoothScrollTo('projects')} className="text-gray-700 hover:text-blue-500">Projects</button>
          <button onClick={() => smoothScrollTo('resume')} className="text-gray-700 hover:text-blue-500">Resume</button>
          <button onClick={() => smoothScrollTo('contact')} className="text-gray-700 hover:text-blue-500">Contact Me</button>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
