'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Phone, Mail, MapPin, ChevronDown, Home, Users, Briefcase, Image, Star, BookOpen, MessageCircle, ArrowRight } from 'lucide-react';

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
    { name: 'Portfolio', href: '/portfolio', icon: Image },
    { name: 'Gallery', href: '/gallery', icon: Image },
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
      {/* Top Bar - Hidden on mobile for space */}
      <div className="bg-gradient-to-r from-accent to-brown-600 text-white py-2 hidden lg:block">
        <div className="container-custom">
          <div className="flex justify-between items-center text-sm">
            <div className="flex items-center space-x-6">
              <div className="flex items-center space-x-2">
                <Phone className="w-4 h-4" />
                <span>+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="w-4 h-4" />
                <span>info@eliteinteriordesign.com</span>
              </div>
            </div>
            <div className="flex items-center space-x-2">
              <MapPin className="w-4 h-4" />
              <span>New York, NY</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <header className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/95 backdrop-blur-md shadow-xl' 
          : 'bg-white shadow-sm'
      }`}>
        <div className="container-custom">
          <div className="flex items-center justify-between h-16 lg:h-20">
            {/* Logo */}
            <Link href="/" className="flex items-center space-x-2 group">
              <div className="w-10 h-10 bg-gradient-to-br from-accent to-brown-600 rounded-xl flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300">
                <span className="text-white font-bold text-xl">E</span>
              </div>
              <div className="hidden sm:block">
                <h1 className="text-xl lg:text-2xl font-bold bg-gradient-to-r from-accent to-brown-600 bg-clip-text text-transparent">
                  Elite Interior Design
                </h1>
                <p className="text-xs text-gray-600">Transform Your Space</p>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-1">
              {navigation.map((item) => {
                const Icon = item.icon;
                return (
                  <div key={item.name} className="relative group">
                    <Link
                      href={item.href}
                      className="flex items-center space-x-1 px-4 py-2 text-gray-700 hover:text-accent font-medium transition-all duration-200 rounded-lg hover:bg-gray-50"
                    >
                      <span>{item.name}</span>
                      {item.hasDropdown && <ChevronDown className="w-3 h-3" />}
                    </Link>
                    
                    {item.hasDropdown && (
                      <div className="absolute top-full left-0 mt-2 w-80 bg-white rounded-2xl shadow-2xl border opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform group-hover:translate-y-0 translate-y-2">
                        <div className="p-6">
                          <h3 className="text-lg font-semibold text-gray-900 mb-4">Our Services</h3>
                          <div className="grid grid-cols-1 gap-3">
                            {services.map((service) => (
                              <Link
                                key={service.name}
                                href={service.href}
                                className="flex items-center space-x-3 p-3 rounded-xl hover:bg-gray-50 transition-all duration-200 group"
                              >
                                <div className="w-10 h-10 bg-accent/10 rounded-lg flex items-center justify-center group-hover:bg-accent/20 transition-colors duration-200">
                                  <Briefcase className="w-5 h-5 text-accent" />
                                </div>
                                <div>
                                  <h4 className="font-medium text-gray-900 group-hover:text-accent transition-colors duration-200">
                                    {service.name}
                                  </h4>
                                  <p className="text-sm text-gray-500">{service.description}</p>
                                </div>
                                <ArrowRight className="w-4 h-4 text-gray-400 group-hover:text-accent group-hover:translate-x-1 transition-all duration-200 ml-auto" />
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

                    {/* CTA Button */}
                    <div className="hidden lg:flex items-center space-x-4">
                      <Link
                        href="/contact"
                        className="bg-gradient-to-r from-accent to-brown-600 text-white px-3 py-1.5 rounded-md text-xs font-medium hover:shadow-lg hover:scale-105 transition-all duration-300 whitespace-nowrap"
                      >
                        Get Free Quote
                      </Link>
                    </div>

            {/* Mobile Menu Button */}
            <motion.button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="lg:hidden p-2 rounded-xl hover:bg-gray-100 transition-all duration-200"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <motion.div
                animate={{ rotate: isMenuOpen ? 90 : 0 }}
                transition={{ duration: 0.2 }}
              >
                {isMenuOpen ? (
                  <X className="w-6 h-6 text-gray-700" />
                ) : (
                  <Menu className="w-6 h-6 text-gray-700" />
                )}
              </motion.div>
            </motion.button>
          </div>
        </div>

                {/* Modern Mobile Menu with Framer Motion */}
                <AnimatePresence>
                  {isMenuOpen && (
                    <motion.div 
                      className="lg:hidden bg-white border-t shadow-2xl"
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3, ease: 'easeInOut' }}
                    >
                      <div className="container-custom py-6">
                        {/* Mobile Navigation */}
                        <motion.nav 
                          className="space-y-2"
                          initial={{ y: -20, opacity: 0 }}
                          animate={{ y: 0, opacity: 1 }}
                          transition={{ delay: 0.1, duration: 0.3 }}
                        >
                          {navigation.map((item, index) => {
                            const Icon = item.icon;
                            return (
                              <motion.div 
                                key={item.name}
                                initial={{ x: -20, opacity: 0 }}
                                animate={{ x: 0, opacity: 1 }}
                                transition={{ delay: 0.1 + (index * 0.05), duration: 0.3 }}
                              >
                                <Link
                                  href={item.href}
                                  className="flex items-center space-x-3 px-4 py-3 text-gray-700 hover:text-accent hover:bg-gray-50 font-medium transition-all duration-200 rounded-xl group"
                                  onClick={() => setIsMenuOpen(false)}
                                >
                                  <Icon className="w-5 h-5" />
                                  <span>{item.name}</span>
                                  {item.hasDropdown && (
                                    <motion.button
                                      onClick={(e) => {
                                        e.preventDefault();
                                        setIsServicesOpen(!isServicesOpen);
                                      }}
                                      className="ml-auto"
                                      aria-label="Toggle services menu"
                                      whileHover={{ scale: 1.1 }}
                                      whileTap={{ scale: 0.95 }}
                                    >
                                      <motion.div
                                        animate={{ rotate: isServicesOpen ? 180 : 0 }}
                                        transition={{ duration: 0.2 }}
                                      >
                                        <ChevronDown className="w-4 h-4" />
                                      </motion.div>
                                    </motion.button>
                                  )}
                                </Link>

                                {/* Mobile Services Dropdown with Animation */}
                                <AnimatePresence>
                                  {item.hasDropdown && isServicesOpen && (
                                    <motion.div 
                                      className="ml-8 mt-2 space-y-2"
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
                                            className="flex items-center space-x-3 px-4 py-2 text-sm text-gray-600 hover:text-accent hover:bg-gray-50 transition-all duration-200 rounded-lg"
                                            onClick={() => setIsMenuOpen(false)}
                                          >
                                            <motion.div 
                                              className="w-2 h-2 bg-accent rounded-full"
                                              whileHover={{ scale: 1.5 }}
                                              transition={{ duration: 0.2 }}
                                            ></motion.div>
                                            <span>{service.name}</span>
                                          </Link>
                                        </motion.div>
                                      ))}
                                    </motion.div>
                                  )}
                                </AnimatePresence>
                              </motion.div>
                            );
                          })}
                        </motion.nav>

                        {/* Mobile CTA */}
                        <motion.div 
                          className="mt-6 pt-6 border-t"
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
                              className="bg-gradient-to-r from-accent to-brown-600 text-white px-4 py-2 rounded-md text-sm font-medium text-center block hover:shadow-lg transition-all duration-300"
                              onClick={() => setIsMenuOpen(false)}
                            >
                              Get Free Quote
                            </Link>
                          </motion.div>
                        </motion.div>

                        {/* Mobile Contact Info */}
                        <motion.div 
                          className="mt-6 pt-6 border-t"
                          initial={{ y: 20, opacity: 0 }}
                          animate={{ y: 0, opacity: 1 }}
                          transition={{ delay: 0.4, duration: 0.3 }}
                        >
                          <div className="space-y-3">
                            <motion.div 
                              className="flex items-center space-x-3 text-sm text-gray-600"
                              whileHover={{ x: 5 }}
                              transition={{ duration: 0.2 }}
                            >
                              <Phone className="w-4 h-4 text-accent" />
                              <a href="tel:+15551234567">+1 (555) 123-4567</a>
                            </motion.div>
                            <motion.div 
                              className="flex items-center space-x-3 text-sm text-gray-600"
                              whileHover={{ x: 5 }}
                              transition={{ duration: 0.2 }}
                            >
                              <Mail className="w-4 h-4 text-accent" />
                              <a href="mailto:info@eliteinteriordesign.com">info@eliteinteriordesign.com</a>
                            </motion.div>
                            <motion.div 
                              className="flex items-center space-x-3 text-sm text-gray-600"
                              whileHover={{ x: 5 }}
                              transition={{ duration: 0.2 }}
                            >
                              <MapPin className="w-4 h-4 text-accent" />
                              <span>New York, NY</span>
                            </motion.div>
                          </div>
                        </motion.div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
      </header>

      {/* Spacer for fixed header */}
      <div className="h-16 lg:h-20"></div>
    </>
  );
};

export default Header;
