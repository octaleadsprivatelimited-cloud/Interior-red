'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Phone, Mail, MapPin, ChevronDown, Home, Users, Briefcase, Image as ImageIcon, Star, BookOpen, MessageCircle, ArrowRight } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navigation = [
    { name: 'Home', href: '/', icon: Home },
    { name: 'About', href: '/about', icon: Users },
    { name: 'Services', href: '/services', icon: Briefcase, hasDropdown: true },
    { name: 'Portfolio', href: '/portfolio', icon: ImageIcon },
    { name: 'Gallery', href: '/gallery', icon: ImageIcon },
    { name: 'Reviews', href: '/reviews', icon: Star },
    { name: 'Blog', href: '/blog', icon: BookOpen },
    { name: 'Contact', href: '/contact', icon: MessageCircle },
  ];

  const services = [
    { name: 'Residential Design', href: '/residential-design', description: 'Transform your home' },
    { name: 'Commercial Design', href: '/commercial-design', description: 'Professional spaces' },
    { name: 'Space Planning', href: '/space-planning', description: 'Optimize layouts' },
    { name: 'Color Consultation', href: '/color-consultation', description: 'Perfect color schemes' },
    { name: 'Furniture Selection', href: '/furniture-selection', description: 'Curated pieces' },
    { name: 'Renovation Services', href: '/renovation-services', description: 'Complete makeovers' },
  ];

  return (
    <>
      {/* Fixed wrapper containing top bar + main header */}
      <div className="fixed top-0 left-0 right-0 z-50">
        {/* Top Bar (desktop only) - hides on scroll */}
        <div
          className={`hidden lg:block bg-gradient-to-r from-primary-600 to-primary-700 text-white overflow-hidden transition-all duration-300 ${
            isScrolled ? 'max-h-0 py-0' : 'max-h-12 py-2'
          }`}
        >
          <div className="container-custom">
            <div className="flex justify-between items-center text-sm">
              <div className="flex items-center space-x-6">
                <div className="flex items-center space-x-2">
                        <span>+91 8985456887</span>
                </div>
                <div className="flex items-center space-x-2">
                  <span>info@dreamspaceinteriors.co</span>
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <span>Hyderabad, India</span>
              </div>
            </div>
          </div>
        </div>

        {/* Main Header */}
        <header
          className={`w-full transition-all duration-300 ${
            isScrolled
              ? 'bg-white/90 backdrop-blur-custom shadow-xl border-b'
              : 'bg-white/80 backdrop-blur-custom border-b'
          }`}
        >
          <div className="container-custom">
            <div className="flex items-center justify-between h-14 lg:h-14">
              {/* Logo */}
              <div className="flex items-center flex-shrink-0">
                <Link href="/" className="flex items-center">
                  <img
                    src="/images/logo.png"
                    alt="Dream Space Interiors"
                    className="h-12 sm:h-16 lg:h-[72px] w-auto"
                  />
                </Link>
              </div>

              {/* Left spacer to center nav */}
              <div className="hidden lg:block flex-1" aria-hidden="true"></div>

              {/* Desktop Navigation */}
              <nav className="hidden lg:flex items-center space-x-1 mx-auto">
                {navigation.map((item) => {
                  return (
                    <div key={item.name} className="relative group">
                      <Link
                        href={item.href}
                        className="flex items-center space-x-2 px-4 py-2 text-gray-700 hover:text-primary-700 font-medium text-sm xl:text-[15px] tracking-wide transition-all duration-200 rounded-full hover:bg-primary-50"
                      >
                        <span>{item.name}</span>
                      </Link>
                      
                      {item.hasDropdown && (
                        <div className="absolute top-full left-0 mt-3 w-96 bg-white rounded-2xl shadow-2xl border opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform group-hover:translate-y-0 translate-y-2">
                          <div className="p-6">
                            <h3 className="text-base font-semibold text-gray-900 mb-4">Our Services</h3>
                            <div className="grid grid-cols-1 gap-2">
                              {services.map((service) => (
                                <Link
                                  key={service.name}
                                  href={service.href}
                                  className="flex items-center space-x-3 p-3 rounded-xl hover:bg-primary-50 transition-all duration-200 group"
                                >
                                  <div>
                                    <h4 className="font-medium text-gray-900 group-hover:text-primary-700 transition-colors duration-200">
                                      {service.name}
                                    </h4>
                                    <p className="text-sm text-gray-500">{service.description}</p>
                                  </div>
                                </Link>
                              ))}
                            </div>
                          </div>
                        </div>
                      )}
                    </div>
                  );
                })}
              </nav>

              {/* Right side - CTA Button (desktop) and Mobile Menu Button */}
              <div className="flex items-center space-x-2 flex-shrink-0">
                {/* CTA Button - Desktop only */}
                <div className="hidden lg:flex">
                  <Link
                    href="/contact"
                    className="bg-gradient-to-r from-primary-600 to-accent text-white px-4 py-2 rounded-full text-sm font-medium hover:shadow-md hover:scale-[1.02] transition-all duration-300 whitespace-nowrap"
                  >
                    Get Free Quote
                  </Link>
                </div>

                {/* WhatsApp Button - Mobile only */}
                <motion.a
                  href="https://wa.me/918985456887?text=Hello!%20I'm%20interested%20in%20your%20interior%20design%20services.%20Can%20you%20help%20me?"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="lg:hidden p-2 rounded-lg bg-green-500 hover:bg-green-600 transition-all duration-200 text-white"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  aria-label="Chat on WhatsApp"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 2.079.549 4.125 1.595 5.918L.028 24l6.305-1.654c1.746.951 3.686 1.454 5.684 1.454h.005c6.624 0 11.99-5.367 11.99-11.987C24.007 5.367 18.641.001 12.017.001zM12.017 19.362c-1.816 0-3.579-.49-5.11-1.424l-.366-.218-3.799.998.998-3.648-.235-.374c-.951-1.51-1.454-3.25-1.454-5.05 0-4.081 3.32-7.401 7.401-7.401s7.401 3.32 7.401 7.401-3.32 7.401-7.401 7.401z"/>
                    <path d="M17.847 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
                  </svg>
                </motion.a>

                {/* Mobile Menu Button */}
                <motion.button
                  onClick={() => setIsMenuOpen(!isMenuOpen)}
                  className="lg:hidden p-2 rounded-lg hover:bg-primary-50 transition-all duration-200 text-primary-700"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
                >
                  <motion.div
                    animate={{ rotate: isMenuOpen ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    {isMenuOpen ? (
                      <X className="w-5 h-5" />
                    ) : (
                      <Menu className="w-5 h-5" />
                    )}
                  </motion.div>
                </motion.button>
              </div>
            </div>
          </div>

          {/* Modern Mobile Menu with Framer Motion */}
                <AnimatePresence>
                  {isMenuOpen && (
                    <motion.div 
                      className="lg:hidden bg-white/90 backdrop-blur-custom border-t shadow-2xl"
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3, ease: 'easeInOut' }}
                    >
                      <div className="container-custom py-4">
                        {/* Mobile Navigation */}
                        <motion.nav 
                          className="space-y-1"
                          initial={{ y: -20, opacity: 0 }}
                          animate={{ y: 0, opacity: 1 }}
                          transition={{ delay: 0.1, duration: 0.3 }}
                        >
                          {navigation.map((item, index) => {
                            return (
                              <motion.div 
                                key={item.name}
                                initial={{ x: -20, opacity: 0 }}
                                animate={{ x: 0, opacity: 1 }}
                                transition={{ delay: 0.1 + (index * 0.05), duration: 0.3 }}
                              >
                                {item.hasDropdown ? (
                                  <div>
                                    <button
                                      onClick={() => setIsServicesOpen(!isServicesOpen)}
                                      className="flex items-center justify-between w-full px-3 py-2 text-gray-700 hover:text-primary-700 hover:bg-primary-50 font-medium transition-all duration-200 rounded-full group text-sm"
                                    >
                                      <span>{item.name}</span>
                                      <motion.div
                                        animate={{ rotate: isServicesOpen ? 180 : 0 }}
                                        transition={{ duration: 0.2 }}
                                      >
                                        <ChevronDown className="w-4 h-4" />
                                      </motion.div>
                                    </button>

                                    {/* Mobile Services Dropdown with Animation */}
                                    <AnimatePresence>
                                      {isServicesOpen && (
                                    <motion.div 
                                      className="ml-6 mt-1 space-y-1"
                                      initial={{ opacity: 0, height: 0 }}
                                      animate={{ opacity: 1, height: 'auto' }}
                                      exit={{ opacity: 0, height: 0 }}
                                      transition={{ duration: 0.2 }}
                                    >
                                      {services.map((service, serviceIndex) => (
                                        <motion.div
                                          key={service.name}
                                          initial={{ x: -10, opacity: 0 }}
                                          animate={{ x: 0, opacity: 1 }}
                                          transition={{ delay: serviceIndex * 0.05, duration: 0.2 }}
                                        >
                                          <Link
                                            href={service.href}
                                            className="flex items-center space-x-2 px-3 py-1 text-xs text-gray-600 hover:text-primary-700 hover:bg-primary-50 transition-all duration-200 rounded-full"
                                            onClick={() => setIsMenuOpen(false)}
                                          >
                                            <span>{service.name}</span>
                                          </Link>
                                        </motion.div>
                                      ))}
                                    </motion.div>
                                  )}
                                </AnimatePresence>
                                  </div>
                                ) : (
                                  <Link
                                    href={item.href}
                                    className="flex items-center space-x-2 px-3 py-2 text-gray-700 hover:text-primary-700 hover:bg-primary-50 font-medium transition-all duration-200 rounded-full group text-sm"
                                    onClick={() => setIsMenuOpen(false)}
                                  >
                                    <span>{item.name}</span>
                                  </Link>
                                )}
                              </motion.div>
                            );
                          })}
                        </motion.nav>

                        {/* Mobile CTA */}
                        <motion.div 
                          className="mt-4 pt-4 border-t"
                          initial={{ y: 20, opacity: 0 }}
                          animate={{ y: 0, opacity: 1 }}
                          transition={{ delay: 0.3, duration: 0.3 }}
                        >
                          <motion.div
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                          >
                            <Link
                              href="/contact"
                              className="bg-gradient-to-r from-primary-600 to-accent text-white px-3 py-2 rounded-full text-xs font-semibold text-center block hover:shadow-lg transition-all duration-300"
                              onClick={() => setIsMenuOpen(false)}
                            >
                              Get Free Quote
                            </Link>
                          </motion.div>
                        </motion.div>

                        {/* Mobile Contact Info */}
                        <motion.div 
                          className="mt-4 pt-4 border-t"
                          initial={{ y: 20, opacity: 0 }}
                          animate={{ y: 0, opacity: 1 }}
                          transition={{ delay: 0.4, duration: 0.3 }}
                        >
                          <div className="space-y-2">
                            <motion.div 
                              className="flex items-center space-x-2 text-xs text-gray-600"
                              whileHover={{ x: 3 }}
                              transition={{ duration: 0.2 }}
                            >
                              <Phone className="w-3 h-3 text-accent" />
                              <a href="tel:+918985456887">+91 8985456887</a>
                            </motion.div>
                            <motion.div 
                              className="flex items-center space-x-2 text-xs text-gray-600"
                              whileHover={{ x: 3 }}
                              transition={{ duration: 0.2 }}
                            >
                              <Mail className="w-3 h-3 text-accent" />
                              <a href="mailto:info@dreamspaceinteriors.co">info@dreamspaceinteriors.co</a>
                            </motion.div>
                            <motion.div 
                              className="flex items-center space-x-2 text-xs text-gray-600"
                              whileHover={{ x: 3 }}
                              transition={{ duration: 0.2 }}
                            >
                              <MapPin className="w-3 h-3 text-accent" />
                              <span>Hyderabad, India</span>
                            </motion.div>
                          </div>
                        </motion.div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
        </header>
      </div>

      {/* Spacer for fixed header + top bar */}
      {/* Main header height */}
      <div className="h-14 lg:h-14"></div>
      {/* Top bar height (desktop only) collapses on scroll */}
      <div className={`hidden lg:block transition-all duration-300 ${isScrolled ? 'h-0' : 'h-10'}`}></div>
    </>
  );
};

export default Header;
