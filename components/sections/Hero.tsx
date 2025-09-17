'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, Play, Star, Award, Users, Clock } from 'lucide-react';

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

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

  const currentSlideData = heroSlides[currentSlide];

  return (
    <section className="relative min-h-[calc(100vh-48px)] lg:min-h-[calc(100vh-56px)] overflow-hidden">
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
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 w-full items-center">
            {/* Left Column - Hero Content */}
            <div className="max-w-2xl">
              <div className="mb-6">
                <span className="inline-block px-4 py-2 bg-accent/10 text-accent rounded-full text-sm font-medium mb-4">
                  ✨ Dream Space Interiors
                </span>
              </div>
              
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 lg:mb-8 leading-tight">
                <span className="block">{currentSlideData.title}</span>
                <span className="block text-accent-400">{currentSlideData.subtitle}</span>
              </h1>
              
              <p className="text-lg sm:text-xl lg:text-2xl text-gray-200 mb-8 lg:mb-12 max-w-2xl leading-relaxed">
                {currentSlideData.description}
              </p>

              <div className="flex flex-col sm:flex-row gap-4 lg:gap-6 mb-12 lg:mb-16">
                <Link
                  href={currentSlideData.ctaLink}
                  className="bg-gradient-to-r from-primary-600 to-primary-700 text-white px-8 py-4 lg:px-10 lg:py-5 rounded-xl font-medium hover:shadow-lg hover:scale-105 transition-all duration-300 text-lg lg:text-xl inline-flex items-center justify-center group"
                >
                  {currentSlideData.cta}
                  <ArrowRight className="ml-2 w-5 h-5 lg:w-6 lg:h-6 group-hover:translate-x-1 transition-transform duration-200" />
                </Link>
                
                <button className="border-2 border-white text-white px-8 py-4 lg:px-10 lg:py-5 rounded-xl font-medium hover:bg-white hover:text-primary-600 transition-all duration-300 text-lg lg:text-xl inline-flex items-center justify-center group">
                  <Play className="mr-2 w-5 h-5 lg:w-6 lg:h-6" />
                  Watch Our Story
                </button>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
                <div className="text-center">
                  <div className="flex items-center justify-center mb-2 lg:mb-3">
                    <Users className="w-6 h-6 lg:w-8 lg:h-8 text-accent-400 mr-2 lg:mr-3" />
                    <span className="text-2xl lg:text-4xl font-bold text-white">500+</span>
                  </div>
                  <p className="text-gray-300 text-sm lg:text-base">Happy Clients</p>
                </div>
                <div className="text-center">
                  <div className="flex items-center justify-center mb-2 lg:mb-3">
                    <Award className="w-6 h-6 lg:w-8 lg:h-8 text-accent-400 mr-2 lg:mr-3" />
                    <span className="text-2xl lg:text-4xl font-bold text-white">50+</span>
                  </div>
                  <p className="text-gray-300 text-sm lg:text-base">Awards Won</p>
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