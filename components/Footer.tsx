import React from 'react';
import Link from 'next/link';
import { Phone, Mail, MapPin, Facebook, Instagram, Twitter, Linkedin, Youtube, ArrowRight } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

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
    { name: 'Facebook', href: 'https://facebook.com/eliteinteriordesign', icon: Facebook },
    { name: 'Instagram', href: 'https://instagram.com/eliteinteriordesign', icon: Instagram },
    { name: 'Twitter', href: 'https://twitter.com/eliteinteriordesign', icon: Twitter },
    { name: 'LinkedIn', href: 'https://linkedin.com/company/eliteinteriordesign', icon: Linkedin },
    { name: 'YouTube', href: 'https://youtube.com/eliteinteriordesign', icon: Youtube },
  ];

  return (
    <footer className="bg-gradient-to-br from-neutral-900 via-neutral-800 to-neutral-900 text-white">
      <div className="container-custom section-padding">
        <div className="text-center mb-10">
          <h3 className="text-2xl font-bold bg-gradient-to-r from-white to-neutral-300 bg-clip-text text-transparent">Elite Interior Design</h3>
          <p className="text-neutral-300">Transform Your Space</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-10">
          <div>
            <h4 className="text-lg font-semibold mb-4 text-white">Explore</h4>
            <ul className="space-y-2">
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
            <h4 className="text-lg font-semibold mb-4 text-white">Services</h4>
            <ul className="space-y-2">
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
            <h4 className="text-lg font-semibold mb-4 text-white">Contact</h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-2">
                <Phone className="w-4 h-4 text-primary-400 flex-shrink-0" />
                <a href="tel:+15551234567" className="text-neutral-300 hover:text-white transition-colors duration-200 text-sm font-medium">+1 (555) 123-4567</a>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="w-4 h-4 text-accent-400 flex-shrink-0" />
                <a href="mailto:info@eliteinteriordesign.com" className="text-neutral-300 hover:text-white transition-colors duration-200 text-sm font-medium">info@eliteinteriordesign.com</a>
              </div>
              <div className="flex items-start space-x-2">
                <MapPin className="w-4 h-4 text-primary-400 mt-1 flex-shrink-0" />
                <p className="text-neutral-300 text-sm font-medium">123 Design Street<br />New York, NY 10001</p>
              </div>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4 text-white">Connect</h4>
            <div className="flex space-x-3 mb-4">
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

        <div className="border-t border-neutral-700/50 pt-6">
          <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
            <p className="text-neutral-400 text-sm font-medium">© {currentYear} Elite Interior Design. All rights reserved.</p>
            <p className="text-neutral-400 text-sm font-medium">Developed by <a href="https://www.octaleads.com" target="_blank" rel="noopener noreferrer" className="text-primary-400 hover:text-primary-300 font-semibold">octaleads</a></p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;


