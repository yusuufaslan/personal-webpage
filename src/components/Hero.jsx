import React, { useEffect, useState } from 'react';

const Hero = () => {
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
        duration: 10000, // Adjust the duration for a slower transition if needed
      });
    }
  };

  return (
    <section id="home" className="bg-blue-600 text-white py-20">
      <div className="container mx-auto px-4 text-center">
        <h1 className="text-5xl font-bold mb-4">Hello, I'm Yusuf Aslan</h1>
        <p className="text-xl mb-8">I'm a software developer specializing in building exceptional digital experiences.</p>
        <button onClick={() => smoothScrollTo('contact')} className="bg-white text-blue-600 px-6 py-3 rounded-full font-semibold">Get in Touch</button>
      </div>
    </section>
  );
}

export default Hero;
