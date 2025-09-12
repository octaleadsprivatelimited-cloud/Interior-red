'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { Star, Quote, ChevronLeft, ChevronRight } from 'lucide-react';

const Testimonials = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const testimonials = [
    {
      id: 1,
      name: 'Sarah Johnson',
      role: 'Homeowner',
      location: 'New York, NY',
      rating: 5,
      content: 'Elite Interior Design transformed our outdated home into a stunning modern space. Their attention to detail and creative solutions exceeded our expectations. The team was professional, punctual, and truly listened to our needs.',
      image: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=400&h=400&fit=crop&crop=face',
      project: 'Complete Home Renovation'
    },
    {
      id: 2,
      name: 'Michael Chen',
      role: 'CEO, TechStart Inc.',
      location: 'San Francisco, CA',
      rating: 5,
      content: 'We needed a modern office space that would inspire our team and impress clients. Elite Interior Design delivered beyond our wildest dreams. The space is not only beautiful but also highly functional for our growing team.',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face',
      project: 'Corporate Office Design'
    },
    {
      id: 3,
      name: 'Emily Rodriguez',
      role: 'Restaurant Owner',
      location: 'Los Angeles, CA',
      rating: 5,
      content: 'The restaurant design they created for us is absolutely perfect. It captures the essence of our brand while providing an amazing dining experience for our customers. Our business has grown significantly since the renovation.',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop&crop=face',
      project: 'Restaurant Interior Design'
    },
    {
      id: 4,
      name: 'David Kim',
      role: 'Real Estate Developer',
      location: 'Miami, FL',
      rating: 5,
      content: 'Working with Elite Interior Design on our luxury condominium project was a game-changer. Their expertise in high-end residential design helped us achieve record sales. Highly recommend their services.',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face',
      project: 'Luxury Condominium Design'
    },
    {
      id: 5,
      name: 'Lisa Thompson',
      role: 'Interior Designer',
      location: 'Chicago, IL',
      rating: 5,
      content: 'As a fellow designer, I can attest to the exceptional quality of work from Elite Interior Design. Their innovative approach and flawless execution make them stand out in the industry. Truly professional.',
      image: '/images/testimonial-5.jpg',
      project: 'Collaborative Design Project'
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const currentTestimonialData = testimonials[currentTestimonial];

  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 bg-accent/10 text-accent rounded-full text-sm font-medium mb-4">
            Client Testimonials
          </span>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            What Our Clients
            <span className="block text-accent">Say About Us</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Don't just take our word for it. Here's what our satisfied clients have to say 
            about their experience working with us.
          </p>
        </div>

        {/* Testimonial Carousel */}
        <div className="relative max-w-4xl mx-auto">
          <div className="bg-gradient-to-br from-accent to-brown-600 rounded-3xl p-8 lg:p-12 text-white relative overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -translate-y-16 translate-x-16"></div>
            <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/10 rounded-full translate-y-12 -translate-x-12"></div>
            
            <div className="relative z-10">
              {/* Quote Icon */}
              <div className="flex justify-center mb-8">
                <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center">
                  <Quote className="w-8 h-8" />
                </div>
              </div>

              {/* Testimonial Content */}
              <div className="text-center mb-8">
                <p className="text-xl lg:text-2xl leading-relaxed mb-8 italic">
                  "{currentTestimonialData.content}"
                </p>
                
                {/* Rating */}
                <div className="flex justify-center mb-6">
                  {[...Array(currentTestimonialData.rating)].map((_, i) => (
                    <Star key={i} className="w-6 h-6 text-yellow-400 fill-current" />
                  ))}
                </div>
              </div>

              {/* Client Info */}
              <div className="flex flex-col lg:flex-row items-center justify-center space-y-4 lg:space-y-0 lg:space-x-6">
                <div className="relative">
                  <Image
                    src={currentTestimonialData.image}
                    alt={currentTestimonialData.name}
                    width={80}
                    height={80}
                    className="w-20 h-20 rounded-full object-cover border-4 border-white/20"
                  />
                </div>
                
                <div className="text-center lg:text-left">
                  <h4 className="text-xl font-bold mb-1">{currentTestimonialData.name}</h4>
                  <p className="text-white/80 mb-1">{currentTestimonialData.role}</p>
                  <p className="text-white/60 text-sm">{currentTestimonialData.location}</p>
                  <p className="text-white/60 text-sm font-medium">{currentTestimonialData.project}</p>
                </div>
              </div>
            </div>

            {/* Navigation Arrows */}
            <button
              onClick={prevTestimonial}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-white/20 hover:bg-white/30 rounded-full flex items-center justify-center transition-colors duration-200"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            
            <button
              onClick={nextTestimonial}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-white/20 hover:bg-white/30 rounded-full flex items-center justify-center transition-colors duration-200"
              aria-label="Next testimonial"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center mt-8 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentTestimonial(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentTestimonial
                    ? 'bg-accent scale-125'
                    : 'bg-gray-300 hover:bg-gray-400'
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16">
          <div className="text-center">
            <div className="text-4xl font-bold text-accent mb-2">500+</div>
            <div className="text-gray-600">Happy Clients</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-accent mb-2">98%</div>
            <div className="text-gray-600">Satisfaction Rate</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-accent mb-2">4.9</div>
            <div className="text-gray-600">Average Rating</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-accent mb-2">10+</div>
            <div className="text-gray-600">Years Experience</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
