import React from 'react';

const Footer = () => {
  return (
    <footer className="text-white py-8 bg-[#043873] px-20">
      <div className="container flex flex-col md:flex-row items-center justify-between">
        <div className="items-center mb-4">
          <img src="/logo.svg" alt="Whitepace Logo" className="h-12 mr-4" />
          <p className="text-lg font-bold">Whitepace</p>
        {/* <p className='text-sm'>whitepace was created for the new ways we live and work. We make a better workspace around the world</p> */}
        </div>
        <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-8">
          <div>
            <h4 className="font-bold text-sm mb-2">Product</h4>
            <ul className="space-y-2">
              <li><a href="/">Overview</a></li>
              <li><a href="/">Pricing</a></li>
              <li><a href="/">Customer stories</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-sm mb-2">Resources</h4>
            <ul className="space-y-2">
              <li><a href="/">Blog</a></li>
              <li><a href="/">Guides & tutorials</a></li>
              <li><a href="/">Help center</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-sm mb-2">Company</h4>
            <ul className="space-y-2">
              <li><a href="/">About us</a></li>
              <li><a href="/">Careers</a></li>
              <li><a href="/">Media kit</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-sm mb-2">Try It Today</h4>
            <p className="mb-4">Get started for free. Add your whole team as your needs grow.</p>
            <button className="text-white font-bold py-2 px-4 rounded">
              Start Today →
            </button>
          </div>
        </div>
      </div>
      <hr />
      <div className='flex justify-between text-white'>
        <nav>
            <a href=''>English</a>
            <a href=''>Terms & Privacy</a>
            <a href=''>Security</a>
            <a href=''>Status</a>
            <a href=''>@2021 Whitepace LLC</a>
        </nav>
        <nav>
            <a href=''><img src='' /></a>
            <a href=''><img src='' /></a>
            <a href=''><img src='' /></a>
        </nav>
      </div>
    </footer>
  );
};

export default Footer;