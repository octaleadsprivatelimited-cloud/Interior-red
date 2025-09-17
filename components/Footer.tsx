'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Phone, Mail, MapPin, Facebook, Instagram, Twitter, Linkedin, Youtube, ArrowRight, ChevronDown, ChevronUp } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const [openDropdowns, setOpenDropdowns] = useState({
    explore: false,
    services: false,
    connect: false
  });

  const toggleDropdown = (dropdown: keyof typeof openDropdowns) => {
    setOpenDropdowns(prev => ({
      ...prev,
      [dropdown]: !prev[dropdown]
    }));
  };

  const mainLinks = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Services', href: '/services' },
    { name: 'Portfolio', href: '/portfolio' },
    { name: 'Gallery', href: '/gallery' },
    { name: 'Contact', href: '/contact' },
  ];

  const serviceLinks = [
    { name: 'Residential', href: '/residential-design' },
    { name: 'Commercial', href: '/commercial-design' },
    { name: 'Space Planning', href: '/space-planning' },
    { name: 'Color Consultation', href: '/color-consultation' },
    { name: 'Furniture', href: '/furniture-selection' },
    { name: 'Renovation', href: '/renovation-services' },
  ];

  const legalLinks = [
    { name: 'Privacy Policy', href: '/privacy-policy' },
    { name: 'Terms of Service', href: '/terms-of-service' },
    { name: 'Reviews', href: '/reviews' },
    { name: 'Blog', href: '/blog' },
  ];

  const socialLinks = [
            { name: 'Instagram', href: 'https://www.instagram.com/dreamspaceinteriorsdecors', icon: Instagram },
  ];

  return (
    <footer className="bg-gradient-to-br from-neutral-900 via-neutral-800 to-neutral-900 text-white">
      <div className="container-custom py-8 px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-6">
          <Link href="/" className="inline-block">
            <Image
              src="/images/logo.png"
              alt="Dream Space Interiors"
              width={100}
              height={100}
              className="mx-auto mb-3"
            />
          </Link>
          <p className="text-neutral-300">Transform Your Space</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
          <div>
            <button 
              onClick={() => toggleDropdown('explore')}
              className="md:hidden flex items-center justify-between w-full text-left mb-3"
            >
              <h4 className="text-lg font-semibold text-white">Explore</h4>
              {openDropdowns.explore ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
            </button>
            <h4 className="hidden md:block text-lg font-semibold mb-3 text-white">Explore</h4>
            <ul className={`space-y-2 ${openDropdowns.explore ? 'block' : 'hidden md:block'}`}>
              {mainLinks.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-neutral-300 hover:text-primary-400 transition-colors duration-200 flex items-center group text-sm font-medium">
                    <ArrowRight className="w-3 h-3 mr-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <button 
              onClick={() => toggleDropdown('services')}
              className="md:hidden flex items-center justify-between w-full text-left mb-3"
            >
              <h4 className="text-lg font-semibold text-white">Services</h4>
              {openDropdowns.services ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
            </button>
            <h4 className="hidden md:block text-lg font-semibold mb-3 text-white">Services</h4>
            <ul className={`space-y-2 ${openDropdowns.services ? 'block' : 'hidden md:block'}`}>
              {serviceLinks.map((service) => (
                <li key={service.name}>
                  <Link href={service.href} className="text-neutral-300 hover:text-primary-400 transition-colors duration-200 flex items-center group text-sm font-medium">
                    <ArrowRight className="w-3 h-3 mr-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-3 text-white">Contact</h4>
            <div className="space-y-2">
              <div className="flex items-center space-x-2">
                <Phone className="w-4 h-4 text-primary-400 flex-shrink-0" />
                        <a href="tel:+918985456887" className="text-neutral-300 hover:text-white transition-colors duration-200 text-sm font-medium">+91 8985456887</a>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="w-4 h-4 text-accent-400 flex-shrink-0" />
                <a href="mailto:info@dreamspaceinteriors.co" className="text-neutral-300 hover:text-white transition-colors duration-200 text-sm font-medium">info@dreamspaceinteriors.co</a>
              </div>
              <div className="flex items-start space-x-2">
                <MapPin className="w-4 h-4 text-primary-400 mt-1 flex-shrink-0" />
                <p className="text-neutral-300 text-sm font-medium">Primark DeStature, F block 702<br />Bachupally, Hyderabad</p>
              </div>
            </div>
          </div>

          <div>
            <button 
              onClick={() => toggleDropdown('connect')}
              className="md:hidden flex items-center justify-between w-full text-left mb-3"
            >
              <h4 className="text-lg font-semibold text-white">Connect</h4>
              {openDropdowns.connect ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
            </button>
            <h4 className="hidden md:block text-lg font-semibold mb-3 text-white">Connect</h4>
            <div className={`${openDropdowns.connect ? 'block' : 'hidden md:block'}`}>
              <div className="flex space-x-3 mb-3">
                {socialLinks.map((s) => {
                  const Icon = s.icon;
                  return (
                    <a key={s.name} href={s.href} target="_blank" rel="noopener noreferrer" aria-label={s.name} className="w-9 h-9 bg-neutral-800/60 rounded-xl flex items-center justify-center hover:bg-primary-600/30 transition-colors duration-200">
                      <Icon className="w-4 h-4 text-neutral-300" />
                    </a>
                  );
                })}
              </div>
              <div className="space-y-1">
                {legalLinks.map((item) => (
                  <Link key={item.name} href={item.href} className="text-neutral-400 hover:text-primary-400 text-sm font-medium transition-colors duration-200 block">
                    {item.name}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-neutral-700/50 pt-4">
          <div className="flex flex-col md:flex-row items-center justify-between space-y-3 md:space-y-0">
                    <p className="text-neutral-400 text-sm font-medium">© {currentYear} Dream Space Interiors. All rights reserved.</p>
            <p className="text-neutral-400 text-sm font-medium">Developed by <a href="https://www.octaleads.com" target="_blank" rel="noopener noreferrer" className="text-primary-400 hover:text-primary-300 font-semibold">octaleads</a></p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;


