'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, Play, Star, Award, Users, Clock, User, Phone, Send } from 'lucide-react';

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [formData, setFormData] = useState({
    name: '',
    phone: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const heroSlides = [
    {
      id: 1,
      title: 'Transform Your Space',
      subtitle: 'Into Something Extraordinary',
      description: 'Professional interior design services that bring your vision to life with stunning, functional spaces that reflect your unique style.',
      image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=1920&h=1080&fit=crop',
      cta: 'Get Free Consultation',
      ctaLink: '/contact'
    },
    {
      id: 2,
      title: 'Modern Living',
      subtitle: 'Redefined',
      description: 'Create contemporary spaces that blend comfort, style, and functionality. Our expert designers craft interiors that inspire and delight.',
      image: 'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=1920&h=1080&fit=crop',
      cta: 'View Our Work',
      ctaLink: '/portfolio'
    },
    {
      id: 3,
      title: 'Luxury Interiors',
      subtitle: 'Crafted to Perfection',
      description: 'Experience the finest in interior design with our luxury residential and commercial projects that exceed expectations.',
      image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=1920&h=1080&fit=crop',
      cta: 'Start Your Project',
      ctaLink: '/services'
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    // Reset form
    setFormData({ name: '', phone: '' });
    setIsSubmitting(false);
    
    // Show success message
    alert('Thank you! We\'ll contact you soon.');
  };

  const currentSlideData = heroSlides[currentSlide];

  return (
    <section className="relative min-h-[calc(100vh-56px)] lg:min-h-[calc(100vh-72px)] overflow-hidden">
      {/* Background Images */}
      <div className="absolute inset-0">
        {heroSlides.map((slide, index) => (
          <div
            key={slide.id}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentSlide ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <Image
              src={slide.image}
              alt={slide.title}
              fill
              className="object-cover"
              priority={index === 0}
            />
            <div className="absolute inset-0 bg-black/40"></div>
          </div>
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 h-full flex items-start pt-0 lg:pt-0">
        <div className="container-custom px-4 w-full">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 w-full">
            {/* Left Column - Hero Content */}
            <div className="max-w-2xl">
              
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold text-white mb-4 lg:mb-6 leading-tight">
                <span className="inline">{currentSlideData.title}</span>
                <span className="inline text-accent-400 ml-2">{currentSlideData.subtitle}</span>
              </h1>
              
              <p className="text-base sm:text-lg lg:text-xl text-gray-200 mb-6 lg:mb-8 max-w-2xl leading-relaxed">
                {currentSlideData.description}
              </p>

              <div className="flex flex-col sm:flex-row gap-3 lg:gap-4 mb-8 lg:mb-12">
                <Link
                  href={currentSlideData.ctaLink}
                  className="bg-gradient-to-r from-primary-600 to-primary-700 text-white px-6 py-3 lg:px-8 lg:py-4 rounded-xl font-medium hover:shadow-lg hover:scale-105 transition-all duration-300 text-base lg:text-lg inline-flex items-center justify-center group"
                >
                  {currentSlideData.cta}
                  <ArrowRight className="ml-2 w-4 h-4 lg:w-5 lg:h-5 group-hover:translate-x-1 transition-transform duration-200" />
                </Link>
                
                <button className="border-2 border-white text-white px-6 py-3 lg:px-8 lg:py-4 rounded-xl font-medium hover:bg-white hover:text-primary-600 transition-all duration-300 text-base lg:text-lg inline-flex items-center justify-center group">
                  <Play className="mr-2 w-4 h-4 lg:w-5 lg:h-5" />
                  Watch Our Story
                </button>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
                <div className="text-center">
                  <div className="flex items-center justify-center mb-1 lg:mb-2">
                    <Users className="w-4 h-4 lg:w-6 lg:h-6 text-accent-400 mr-1 lg:mr-2" />
                    <span className="text-xl lg:text-3xl font-bold text-white">500+</span>
                  </div>
                  <p className="text-gray-300 text-xs lg:text-sm">Happy Clients</p>
                </div>
                <div className="text-center">
                  <div className="flex items-center justify-center mb-1 lg:mb-2">
                    <Award className="w-4 h-4 lg:w-6 lg:h-6 text-accent-400 mr-1 lg:mr-2" />
                    <span className="text-xl lg:text-3xl font-bold text-white">50+</span>
                  </div>
                  <p className="text-gray-300 text-xs lg:text-sm">Awards Won</p>
                </div>
                <div className="text-center">
                  <div className="flex items-center justify-center mb-1 lg:mb-2">
                    <Star className="w-4 h-4 lg:w-6 lg:h-6 text-accent-400 mr-1 lg:mr-2" />
                    <span className="text-xl lg:text-3xl font-bold text-white">4.9</span>
                  </div>
                  <p className="text-gray-300 text-xs lg:text-sm">Client Rating</p>
                </div>
                <div className="text-center">
                  <div className="flex items-center justify-center mb-1 lg:mb-2">
                    <Clock className="w-4 h-4 lg:w-6 lg:h-6 text-accent-400 mr-1 lg:mr-2" />
                    <span className="text-xl lg:text-3xl font-bold text-white">10+</span>
                  </div>
                  <p className="text-gray-300 text-xs lg:text-sm">Years Experience</p>
                </div>
              </div>
            </div>

            {/* Right Column - Cute Contact Form */}
            <div className="max-w-md mx-auto lg:mx-0 lg:justify-self-end">
              <div className="bg-white/95 backdrop-blur-sm rounded-3xl p-6 shadow-2xl border border-white/20 relative overflow-hidden">
                {/* Cute decorative elements */}
                <div className="absolute -top-2 -right-2 w-8 h-8 bg-accent-400 rounded-full opacity-20"></div>
                <div className="absolute -bottom-1 -left-1 w-6 h-6 bg-primary-400 rounded-full opacity-20"></div>
                
                <div className="text-center mb-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Quick Quote</h3>
                  <p className="text-gray-600 text-sm">Get your free consultation</p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <div className="relative">
                      <User className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        className="w-full pl-10 pr-4 py-3 text-sm border border-gray-200 rounded-xl focus:ring-2 focus:ring-primary-400 focus:border-transparent transition-all duration-200 bg-white/80 placeholder-gray-400"
                        placeholder="Your name"
                      />
                    </div>
                  </div>

                  <div>
                    <div className="relative">
                      <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        required
                        className="w-full pl-10 pr-4 py-3 text-sm border border-gray-200 rounded-xl focus:ring-2 focus:ring-primary-400 focus:border-transparent transition-all duration-200 bg-white/80 placeholder-gray-400"
                        placeholder="Mobile number"
                      />
                    </div>
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-gradient-to-r from-primary-500 to-accent-500 text-white py-3 px-4 rounded-xl text-sm font-medium hover:shadow-lg hover:scale-105 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none flex items-center justify-center"
                  >
                    {isSubmitting ? (
                      <div className="flex items-center">
                        <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                        Sending...
                      </div>
                    ) : (
                      <>
                        <Send className="w-5 h-5 mr-2" />
                        Get Quote
                      </>
                    )}
                  </button>
                </form>

                <div className="mt-4 text-center">
                  <p className="text-xs text-gray-400">
                    We'll call you back within 24 hours
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Slide Indicators */}
      <div className="absolute bottom-6 lg:bottom-8 left-1/2 transform -translate-x-1/2 z-20">
        <div className="flex space-x-2 lg:space-x-3">
          {heroSlides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-2 h-2 lg:w-3 lg:h-3 rounded-full transition-all duration-300 ${
                index === currentSlide
                  ? 'bg-accent-400 scale-125'
                  : 'bg-white/50 hover:bg-white/75'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 right-8 z-20">
        <div className="flex flex-col items-center text-white">
          <span className="text-sm mb-2">Scroll Down</span>
          <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white rounded-full mt-2 animate-bounce"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;