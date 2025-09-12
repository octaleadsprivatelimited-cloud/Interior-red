import Link from 'next/link';
import { Phone, Mail, MapPin, Clock, Facebook, Instagram, Twitter, Linkedin, Youtube, ArrowRight, Star, Award, Users, Heart } from 'lucide-react';

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
    { name: 'Color Consult', href: '/color-consultation' },
    { name: 'Furniture', href: '/furniture-selection' },
    { name: 'Renovation', href: '/renovation-services' },
  ];

  const legalLinks = [
    { name: 'Privacy', href: '/privacy-policy' },
    { name: 'Terms', href: '/terms-of-service' },
    { name: 'Reviews', href: '/reviews' },
    { name: 'Blog', href: '/blog' },
  ];

  const socialLinks = [
    { name: 'Facebook', icon: Facebook, href: 'https://facebook.com/eliteinteriordesign' },
    { name: 'Instagram', icon: Instagram, href: 'https://instagram.com/eliteinteriordesign' },
    { name: 'Twitter', icon: Twitter, href: 'https://twitter.com/eliteinteriordesign' },
    { name: 'LinkedIn', icon: Linkedin, href: 'https://linkedin.com/company/eliteinteriordesign' },
    { name: 'YouTube', icon: Youtube, href: 'https://youtube.com/eliteinteriordesign' },
  ];

  return (
    <footer className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 left-10 w-32 h-32 bg-accent rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 right-10 w-40 h-40 bg-accent rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-60 h-60 bg-accent rounded-full blur-3xl"></div>
      </div>

      {/* Main Footer Content */}
      <div className="relative z-10 container-custom py-12">
        {/* Top Section - Brand & Stats */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center space-x-3 mb-6">
            <div className="w-12 h-12 bg-gradient-to-br from-accent to-brown-600 rounded-xl flex items-center justify-center shadow-lg">
              <span className="text-white font-bold text-2xl">E</span>
            </div>
            <div>
              <h3 className="text-2xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                Elite Interior Design
              </h3>
              <p className="text-accent font-medium">Transform Your Space</p>
            </div>
          </div>
          
          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-2xl mx-auto">
            <div className="text-center">
              <div className="flex items-center justify-center mb-2">
                <Users className="w-6 h-6 text-accent mr-2" />
                <span className="text-2xl font-bold">500+</span>
              </div>
              <p className="text-sm text-gray-400">Happy Clients</p>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center mb-2">
                <Award className="w-6 h-6 text-accent mr-2" />
                <span className="text-2xl font-bold">50+</span>
              </div>
              <p className="text-sm text-gray-400">Awards Won</p>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center mb-2">
                <Star className="w-6 h-6 text-accent mr-2" />
                <span className="text-2xl font-bold">4.9</span>
              </div>
              <p className="text-sm text-gray-400">Rating</p>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center mb-2">
                <Heart className="w-6 h-6 text-accent mr-2" />
                <span className="text-2xl font-bold">10+</span>
              </div>
              <p className="text-sm text-gray-400">Years Exp</p>
            </div>
          </div>
        </div>

        {/* Links Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-8">
          {/* Main Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-accent">Explore</h4>
            <ul className="space-y-2">
              {mainLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-gray-300 hover:text-accent transition-colors duration-200 flex items-center group"
                  >
                    <ArrowRight className="w-3 h-3 mr-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-accent">Services</h4>
            <ul className="space-y-2">
              {serviceLinks.map((service) => (
                <li key={service.name}>
                  <Link
                    href={service.href}
                    className="text-gray-300 hover:text-accent transition-colors duration-200 flex items-center group"
                  >
                    <ArrowRight className="w-3 h-3 mr-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-accent">Contact</h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-2">
                <Phone className="w-4 h-4 text-accent flex-shrink-0" />
                <a
                  href="tel:+15551234567"
                  className="text-gray-300 hover:text-accent transition-colors duration-200 text-sm"
                >
                  +1 (555) 123-4567
                </a>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="w-4 h-4 text-accent flex-shrink-0" />
                <a
                  href="mailto:info@eliteinteriordesign.com"
                  className="text-gray-300 hover:text-accent transition-colors duration-200 text-sm"
                >
                  info@eliteinteriordesign.com
                </a>
              </div>
              <div className="flex items-start space-x-2">
                <MapPin className="w-4 h-4 text-accent mt-1 flex-shrink-0" />
                <p className="text-gray-300 text-sm">
                  123 Design Street<br />
                  New York, NY 10001
                </p>
              </div>
            </div>
          </div>

          {/* Social & Legal */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-accent">Connect</h4>
            <div className="space-y-4">
              {/* Social Links */}
              <div className="flex space-x-3">
                {socialLinks.slice(0, 3).map((social) => {
                  const Icon = social.icon;
                  return (
                    <a
                      key={social.name}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-8 h-8 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-accent transition-colors duration-300"
                      aria-label={social.name}
                    >
                      <Icon className="w-4 h-4" />
                    </a>
                  );
                })}
              </div>
              
              {/* Legal Links */}
              <div className="space-y-1">
                {legalLinks.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className="text-gray-400 hover:text-accent text-sm transition-colors duration-200 block"
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Newsletter Section */}
        <div className="bg-gradient-to-r from-accent/10 to-brown-600/10 rounded-2xl p-6 mb-8">
          <div className="text-center">
            <h4 className="text-xl font-semibold mb-2">Stay Updated with Design Trends</h4>
            <p className="text-gray-300 mb-4">Get exclusive design tips and project inspiration delivered to your inbox.</p>
            <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 bg-white/10 border border-white/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent placeholder-gray-400"
              />
              <button className="px-6 py-3 bg-accent hover:bg-accent/90 text-white rounded-lg font-medium transition-colors duration-300 flex items-center justify-center">
                Subscribe
                <ArrowRight className="w-4 h-4 ml-2" />
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700 pt-6">
          <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
            <div className="text-center md:text-left">
              <p className="text-gray-400 text-sm">
                © {currentYear} Elite Interior Design. All rights reserved.
              </p>
            </div>
            <div className="text-center md:text-right">
              <p className="text-white text-sm">
                Developed by{' '}
                <a
                  href="https://www.octaleads.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white hover:underline font-medium"
                >
                  octaleads
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
