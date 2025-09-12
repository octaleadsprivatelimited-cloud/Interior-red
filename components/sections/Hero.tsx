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
    <section className="relative h-screen overflow-hidden">
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
      <div className="relative z-10 h-full flex items-center">
        <div className="container-custom px-4">
          <div className="max-w-4xl">
            <div className="mb-4 lg:mb-6">
              <span className="inline-block px-3 py-1 lg:px-4 lg:py-2 bg-accent/90 text-white rounded-full text-xs lg:text-sm font-medium mb-3 lg:mb-4">
                ✨ Award-Winning Design Studio
              </span>
            </div>
            
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold text-white mb-4 lg:mb-6 leading-tight">
              <span className="block">{currentSlideData.title}</span>
              <span className="block text-accent">{currentSlideData.subtitle}</span>
            </h1>
            
            <p className="text-base sm:text-lg lg:text-xl text-gray-200 mb-6 lg:mb-8 max-w-2xl leading-relaxed">
              {currentSlideData.description}
            </p>

            <div className="flex flex-col sm:flex-row gap-3 lg:gap-4 mb-8 lg:mb-12">
              <Link
                href={currentSlideData.ctaLink}
                className="bg-gradient-to-r from-accent to-brown-600 text-white px-6 py-3 lg:px-8 lg:py-4 rounded-xl font-medium hover:shadow-lg hover:scale-105 transition-all duration-300 text-base lg:text-lg inline-flex items-center justify-center group"
              >
                {currentSlideData.cta}
                <ArrowRight className="ml-2 w-4 h-4 lg:w-5 lg:h-5 group-hover:translate-x-1 transition-transform duration-200" />
              </Link>
              
              <button className="border-2 border-white text-white px-6 py-3 lg:px-8 lg:py-4 rounded-xl font-medium hover:bg-white hover:text-accent transition-all duration-300 text-base lg:text-lg inline-flex items-center justify-center group">
                <Play className="mr-2 w-4 h-4 lg:w-5 lg:h-5" />
                Watch Our Story
              </button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
              <div className="text-center">
                <div className="flex items-center justify-center mb-1 lg:mb-2">
                  <Users className="w-4 h-4 lg:w-6 lg:h-6 text-accent mr-1 lg:mr-2" />
                  <span className="text-xl lg:text-3xl font-bold text-white">500+</span>
                </div>
                <p className="text-gray-300 text-xs lg:text-sm">Happy Clients</p>
              </div>
              <div className="text-center">
                <div className="flex items-center justify-center mb-1 lg:mb-2">
                  <Award className="w-4 h-4 lg:w-6 lg:h-6 text-accent mr-1 lg:mr-2" />
                  <span className="text-xl lg:text-3xl font-bold text-white">50+</span>
                </div>
                <p className="text-gray-300 text-xs lg:text-sm">Awards Won</p>
              </div>
              <div className="text-center">
                <div className="flex items-center justify-center mb-1 lg:mb-2">
                  <Star className="w-4 h-4 lg:w-6 lg:h-6 text-accent mr-1 lg:mr-2" />
                  <span className="text-xl lg:text-3xl font-bold text-white">4.9</span>
                </div>
                <p className="text-gray-300 text-xs lg:text-sm">Client Rating</p>
              </div>
              <div className="text-center">
                <div className="flex items-center justify-center mb-1 lg:mb-2">
                  <Clock className="w-4 h-4 lg:w-6 lg:h-6 text-accent mr-1 lg:mr-2" />
                  <span className="text-xl lg:text-3xl font-bold text-white">10+</span>
                </div>
                <p className="text-gray-300 text-xs lg:text-sm">Years Experience</p>
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
                  ? 'bg-accent scale-125'
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
