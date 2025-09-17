'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, Star, Users, Clock, Send } from 'lucide-react';

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [formData, setFormData] = useState({
    name: '',
    mobile: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
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
    try {
      await new Promise(resolve => setTimeout(resolve, 2000));
      setSubmitStatus('success');
      setFormData({
        name: '',
        mobile: '',
        message: ''
      });
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const heroSlides = [
    {
      id: 1,
      title: 'Transform Your Space',
      subtitle: 'Into Something Extraordinary',
      description: 'Professional interior design services that bring your vision to life with stunning, functional spaces that reflect your unique style.',
      image: '/images/slider-1.jpg',
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
      image: '/images/slider-3.jpg',
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

  const currentSlideData = heroSlides[currentSlide];

  return (
    <section className="relative min-h-[calc(80vh-48px)] lg:min-h-[calc(80vh-56px)] overflow-hidden">
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
      <div className="relative z-10 h-full flex items-center py-16 lg:py-24">
        <div className="container-custom px-4 w-full">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 w-full items-start lg:items-center">
            {/* Left Column - Hero Content */}
            <div className="max-w-2xl order-1 lg:order-1">
              
              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 lg:mb-8 leading-tight">
                <span className="block">{currentSlideData.title}</span>
                <span className="block text-accent-400">{currentSlideData.subtitle}</span>
              </h1>
              
              <p className="text-lg sm:text-xl lg:text-2xl text-gray-200 mb-8 lg:mb-12 max-w-2xl leading-relaxed">
                {currentSlideData.description}
              </p>

              <div className="flex flex-col sm:flex-row gap-4 lg:gap-6 mb-12 lg:mb-16">
                <Link
                  href={currentSlideData.ctaLink}
                  className="bg-gradient-to-r from-yellow-500 to-yellow-600 text-black px-8 py-4 lg:px-10 lg:py-5 rounded-xl font-medium hover:shadow-lg hover:scale-105 transition-all duration-300 text-base lg:text-lg inline-flex items-center justify-center group"
                >
                  {currentSlideData.cta}
                  <ArrowRight className="ml-2 w-5 h-5 lg:w-6 lg:h-6 group-hover:translate-x-1 transition-transform duration-200" />
                </Link>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8">
                <div className="text-center">
                  <div className="flex items-center justify-center mb-2 lg:mb-3">
                    <Users className="w-6 h-6 lg:w-8 lg:h-8 text-accent-400 mr-2 lg:mr-3" />
                    <span className="text-2xl lg:text-4xl font-bold text-white">500+</span>
                  </div>
                  <p className="text-gray-300 text-sm lg:text-base">Happy Clients</p>
                </div>
                <div className="text-center">
                  <div className="flex items-center justify-center mb-2 lg:mb-3">
                    <Star className="w-6 h-6 lg:w-8 lg:h-8 text-accent-400 mr-2 lg:mr-3" />
                    <span className="text-2xl lg:text-4xl font-bold text-white">4.9</span>
                  </div>
                  <p className="text-gray-300 text-sm lg:text-base">Client Rating</p>
                </div>
                <div className="text-center">
                  <div className="flex items-center justify-center mb-2 lg:mb-3">
                    <Clock className="w-6 h-6 lg:w-8 lg:h-8 text-accent-400 mr-2 lg:mr-3" />
                    <span className="text-2xl lg:text-4xl font-bold text-white">10+</span>
                  </div>
                  <p className="text-gray-300 text-sm lg:text-base">Years Experience</p>
                </div>
              </div>
            </div>

            {/* Right Column - Contact Form */}
            <div className="lg:max-w-sm order-2 lg:order-2 lg:justify-self-end lg:mt-8">
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-5 border border-white/20">
                <h3 className="text-lg font-bold text-white mb-3">Get Free Quote</h3>
                <form onSubmit={handleSubmit} className="space-y-3">
                  <div>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="Your Name"
                      className="w-full px-3 py-2 bg-white/20 border border-white/30 rounded-lg text-white placeholder-white/70 focus:ring-2 focus:ring-yellow-400 focus:border-transparent transition-colors duration-200 text-sm"
                    />
                  </div>
                  
                  <div>
                    <input
                      type="tel"
                      name="mobile"
                      value={formData.mobile}
                      onChange={handleInputChange}
                      placeholder="Mobile Number *"
                      required
                      className="w-full px-3 py-2 bg-white/20 border border-white/30 rounded-lg text-white placeholder-white/70 focus:ring-2 focus:ring-yellow-400 focus:border-transparent transition-colors duration-200 text-sm"
                    />
                  </div>
                  
                  <div>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      placeholder="Tell us about your project..."
                      rows={2}
                      className="w-full px-3 py-2 bg-white/20 border border-white/30 rounded-lg text-white placeholder-white/70 focus:ring-2 focus:ring-yellow-400 focus:border-transparent transition-colors duration-200 resize-none text-sm"
                    />
                  </div>

                  {submitStatus === 'success' && (
                    <div className="p-2 bg-green-500/20 border border-green-400/30 rounded-lg">
                      <p className="text-green-200 text-xs">Thank you! We'll contact you soon.</p>
                    </div>
                  )}

                  {submitStatus === 'error' && (
                    <div className="p-2 bg-red-500/20 border border-red-400/30 rounded-lg">
                      <p className="text-red-200 text-xs">Sorry, there was an error. Please try again.</p>
                    </div>
                  )}

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-gradient-to-r from-yellow-500 to-yellow-600 text-black px-5 py-2 rounded-lg font-medium hover:shadow-lg hover:scale-105 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center group text-sm"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="animate-spin rounded-full h-3 w-3 border-b-2 border-black mr-2"></div>
                        Sending...
                      </>
                    ) : (
                      <>
                        Send Message
                        <Send className="ml-2 w-3 h-3 group-hover:translate-x-1 transition-transform duration-200" />
                      </>
                    )}
                  </button>
                </form>
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

    </section>
  );
};

export default Hero;