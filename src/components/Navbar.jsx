import React, { useEffect, useState } from 'react';

const Navbar = () => {
  const [smoothScrollSupported, setSmoothScrollSupported] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

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
      });
      // Close the mobile menu after clicking on a menu item
      setMobileMenuOpen(false);
    }
  };

  return (
    <nav className="bg-gray-900 shadow-md">
      <div className="container mx-auto px-4 py-2 flex justify-between items-center">
        <div className="text-white text-xl font-bold">Yusuf Aslan</div>
        <div className="md:hidden">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="text-white focus:outline-none"
          >
            <svg
              className="w-8 h-8"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
            </svg>
          </button>
        </div>
        <div className="hidden md:flex items-center space-x-6">
          <button onClick={() => smoothScrollTo('home')} className="text-white hover:text-blue-500">Home</button>
          <button onClick={() => smoothScrollTo('about')} className="text-white hover:text-blue-500">About</button>
          <button onClick={() => smoothScrollTo('projects')} className="text-white hover:text-blue-500">Projects</button>
          <button onClick={() => smoothScrollTo('resume')} className="text-white hover:text-blue-500">Resume</button>
          <button onClick={() => smoothScrollTo('contact')} className="text-white hover:text-blue-500">Contact Me</button>
        </div>
      </div>
      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden">
          <div className="bg-gray-800 px-2 pt-2 pb-4">
            <button
              onClick={() => setMobileMenuOpen(false)}
              className="text-white float-right focus:outline-none"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
              </svg>
            </button>
            <div className="flex flex-col space-y-2">
              <button onClick={() => smoothScrollTo('home')} className="text-white hover:text-blue-500">Home</button>
              <button onClick={() => smoothScrollTo('about')} className="text-white hover:text-blue-500">About</button>
              <button onClick={() => smoothScrollTo('projects')} className="text-white hover:text-blue-500">Projects</button>
              <button onClick={() => smoothScrollTo('resume')} className="text-white hover:text-blue-500">Resume</button>
              <button onClick={() => smoothScrollTo('contact')} className="text-white hover:text-blue-500">Contact Me</button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
