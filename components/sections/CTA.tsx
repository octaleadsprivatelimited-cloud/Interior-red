import Link from 'next/link';
import { ArrowRight, Phone, Mail, MessageCircle, Calendar, Star, Clock } from 'lucide-react';

const CTA = () => {
  const contactMethods = [
    {
      icon: Phone,
      title: 'Call Us',
      description: 'Speak directly with our design team',
      contact: '+1 (555) 123-4567',
      action: 'Call Now',
      href: 'tel:+15551234567'
    },
    {
      icon: Mail,
      title: 'Email Us',
      description: 'Send us your project details',
      contact: 'info@eliteinteriordesign.com',
      action: 'Send Email',
      href: 'mailto:info@eliteinteriordesign.com'
    },
    {
      icon: MessageCircle,
      title: 'WhatsApp',
      description: 'Chat with us instantly',
      contact: 'Quick Response',
      action: 'Start Chat',
      href: 'https://wa.me/15551234567'
    },
    {
      icon: Calendar,
      title: 'Book Consultation',
      description: 'Schedule a free design consultation',
      contact: '30 minutes',
      action: 'Book Now',
      href: '/contact'
    }
  ];

  const benefits = [
    'Free initial consultation',
    'Custom design solutions',
    'Expert project management',
    'Quality guarantee',
    'Timely delivery',
    'Ongoing support'
  ];

  return (
    <section className="section-padding bg-gradient-to-br from-gray-900 via-accent to-brown-600 text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full -translate-x-48 -translate-y-48"></div>
        <div className="absolute bottom-0 right-0 w-80 h-80 bg-white rounded-full translate-x-40 translate-y-40"></div>
        <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-white rounded-full -translate-x-32 -translate-y-32"></div>
      </div>

      <div className="container-custom relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div>
            <div className="mb-6">
              <span className="inline-block px-4 py-2 bg-white/20 text-white rounded-full text-sm font-medium mb-4">
                Ready to Get Started?
              </span>
            </div>
            
            <h2 className="text-4xl lg:text-6xl font-bold mb-6 leading-tight">
              Transform Your Space
              <span className="block text-yellow-300">Today</span>
            </h2>
            
            <p className="text-xl text-white/90 mb-8 leading-relaxed">
              Don't wait to create the space of your dreams. Our expert design team 
              is ready to bring your vision to life with professional excellence 
              and attention to detail.
            </p>

            {/* Benefits */}
            <div className="grid grid-cols-2 gap-4 mb-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-center">
                  <Star className="w-5 h-5 text-yellow-300 mr-3 flex-shrink-0" />
                  <span className="text-white/90">{benefit}</span>
                </div>
              ))}
            </div>

            {/* Primary CTA */}
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <Link
                href="/contact"
                className="bg-white text-accent hover:bg-gray-100 px-8 py-4 rounded-lg font-medium transition-colors duration-200 inline-flex items-center justify-center group text-lg"
              >
                Get Free Consultation
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" />
              </Link>
              
              <Link
                href="/portfolio"
                className="border-2 border-white text-white hover:bg-white hover:text-accent px-8 py-4 rounded-lg font-medium transition-colors duration-200 inline-flex items-center justify-center text-lg"
              >
                View Our Work
              </Link>
            </div>

            {/* Trust Indicators */}
            <div className="flex items-center space-x-6 text-sm text-white/80">
              <div className="flex items-center">
                <div className="flex -space-x-2 mr-3">
                  {[1, 2, 3, 4].map((i) => (
                    <div
                      key={i}
                      className="w-8 h-8 bg-white/20 rounded-full border-2 border-white flex items-center justify-center text-xs font-medium"
                    >
                      {i}
                    </div>
                  ))}
                </div>
                <span>500+ Happy Clients</span>
              </div>
              <div className="flex items-center">
                <Star className="w-4 h-4 text-yellow-300 mr-1" />
                <span>4.9/5 Rating</span>
              </div>
            </div>
          </div>

          {/* Contact Methods */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {contactMethods.map((method, index) => {
              const Icon = method.icon;
              return (
                <div
                  key={index}
                  className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 hover:bg-white/20 transition-colors duration-300 group cursor-pointer"
                >
                  <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center mb-4 group-hover:bg-white/30 transition-colors duration-300">
                    <Icon className="w-6 h-6" />
                  </div>
                  
                  <h3 className="text-xl font-bold mb-2">{method.title}</h3>
                  <p className="text-white/80 mb-3 text-sm">{method.description}</p>
                  <p className="text-white font-medium mb-4">{method.contact}</p>
                  
                  <a
                    href={method.href}
                    className="inline-flex items-center text-yellow-300 hover:text-yellow-200 font-medium group-hover:translate-x-1 transition-all duration-200"
                  >
                    {method.action}
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </a>
                </div>
              );
            })}
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-16 text-center">
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl lg:text-3xl font-bold mb-4">
              Limited Time Offer
            </h3>
            <p className="text-white/90 mb-6 text-lg">
              Book your free consultation this month and get 10% off your first project. 
              Don't miss this opportunity to transform your space at a special price.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="bg-yellow-400 text-gray-900 hover:bg-yellow-300 px-8 py-4 rounded-lg font-bold transition-colors duration-200 inline-flex items-center justify-center group text-lg"
              >
                Claim Your Discount
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" />
              </Link>
              <div className="text-white/80 text-sm flex items-center justify-center">
                <Clock className="w-4 h-4 mr-2" />
                Offer expires in 7 days
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
