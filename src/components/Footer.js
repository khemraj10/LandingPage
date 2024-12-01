import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const Footer = () => {
  return (
    <footer className="text-white py-8 bg-[#043873] px-20">
      <div className="container flex flex-col md:flex-row items-center justify-between">
        <div className="items-center mb-4">
          <Image src="/logo.svg" alt="Whitepace Logo" className="h-12 mr-4" />
          <p className="text-lg font-bold">Whitepace</p>
        {/* <p className='text-sm'>whitepace was created for the new ways we live and work. We make a better workspace around the world</p> */}
        </div>
        <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-8">
          <div>
            <h4 className="font-bold text-sm mb-2">Product</h4>
            <ul className="space-y-2">
              <li><Link href="/">Overview</Link></li>
              <li><Link href="/">Pricing</Link></li>
              <li><Link href="/">Customer stories</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-sm mb-2">Resources</h4>
            <ul className="space-y-2">
              <li><Link href="/">Blog</Link></li>
              <li><Link href="/">Guides & tutorials</Link></li>
              <li><Link href="/">Help center</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-sm mb-2">Company</h4>
            <ul className="space-y-2">
              <li><Link href="/">About us</Link></li>
              <li><Link href="/">Careers</Link></li>
              <li><Link href="/">Media kit</Link></li>
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
            <Link href=''>English</Link>
            <Link href=''>Terms & Privacy</Link>
            <Link href=''>Security</Link>
            <Link href=''>Status</Link>
            <Link href=''>@2021 Whitepace LLC</Link>
        </nav>
        <nav>
            <Link href=''><img src='' /></Link>
            <Link href=''><img src='' /></Link>
            <Link href=''><img src='' /></Link>
        </nav>
      </div>
    </footer>
  );
};

export default Footer;