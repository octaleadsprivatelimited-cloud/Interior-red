'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  CheckCircle, 
  Star, 
  ArrowRight, 
  ChevronLeft, 
  ChevronRight,
  Home,
  Users,
  Building,
  Crown
} from 'lucide-react';

const PricingSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [selectedBHK, setSelectedBHK] = useState('2BHK');

  const pricingPlans = [
    {
      id: '2BHK',
      name: '2BHK Package',
      icon: Home,
      price: '₹8-12 Lakhs',
      duration: '45-60 Days',
      description: 'Perfect for small families and couples',
      features: [
        'Complete Interior Design',
        '3D Visualization',
        'Material Selection',
        'Project Management',
        'Quality Assurance',
        '1 Year Warranty'
      ],
      popular: false,
      image: '/images/Gallery-1.jpg'
    },
    {
      id: '3BHK',
      name: '3BHK Package',
      icon: Users,
      price: '₹12-18 Lakhs',
      duration: '60-75 Days',
      description: 'Ideal for growing families',
      features: [
        'Complete Interior Design',
        '3D Visualization',
        'Premium Materials',
        'Project Management',
        'Quality Assurance',
        '2 Year Warranty',
        'Free Maintenance'
      ],
      popular: true,
      image: '/images/Gallery-2.jpg'
    },
    {
      id: '4BHK',
      name: '4BHK Package',
      icon: Building,
      price: '₹18-25 Lakhs',
      duration: '75-90 Days',
      description: 'Luxury living for large families',
      features: [
        'Complete Interior Design',
        '3D Visualization',
        'Luxury Materials',
        'Project Management',
        'Quality Assurance',
        '3 Year Warranty',
        'Free Maintenance',
        'Custom Furniture'
      ],
      popular: false,
      image: '/images/Gallery-3.jpg'
    },
    {
      id: '4BHK+',
      name: '4BHK+ Package',
      icon: Crown,
      price: '₹25+ Lakhs',
      duration: '90+ Days',
      description: 'Premium luxury homes and villas',
      features: [
        'Complete Interior Design',
        '3D Visualization',
        'Premium Luxury Materials',
        'Dedicated Project Manager',
        'Quality Assurance',
        '5 Year Warranty',
        'Free Maintenance',
        'Custom Furniture',
        'Smart Home Integration'
      ],
      popular: false,
      image: '/images/Gallery-4.JPG'
    }
  ];

  const sliderImages = [
    {
      id: 1,
      image: '/images/Gallery-1.jpg',
      title: 'Modern Living Room',
      description: 'Contemporary design with clean lines'
    },
    {
      id: 2,
      image: '/images/Gallery-2.jpg',
      title: 'Luxury Bedroom',
      description: 'Elegant master bedroom design'
    },
    {
      id: 3,
      image: '/images/Gallery-3.jpg',
      title: 'Professional Office',
      description: 'Modern workspace design'
    },
    {
      id: 4,
      image: '/images/Gallery-4.JPG',
      title: 'Contemporary Kitchen',
      description: 'Sleek kitchen with premium finishes'
    },
    {
      id: 5,
      image: '/images/Gallery-5.JPG',
      title: 'Hospitality Space',
      description: 'Sophisticated commercial design'
    },
    {
      id: 6,
      image: '/images/Gallery-6.JPG',
      title: 'Minimalist Dining',
      description: 'Clean, modern dining space'
    }
  ];

  // Auto-slide functionality
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % sliderImages.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % sliderImages.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + sliderImages.length) % sliderImages.length);
  };

  const selectedPlan = pricingPlans.find(plan => plan.id === selectedBHK);

  return (
    <section className="py-20 bg-gray-50">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Choose Your <span className="text-accent">Perfect Package</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Transparent pricing for every home size. No hidden costs, no surprises.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Pricing Cards */}
          <div className="space-y-6">
            {pricingPlans.map((plan) => {
              const Icon = plan.icon;
              return (
                <motion.div
                  key={plan.id}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6 }}
                  className={`relative bg-white rounded-2xl p-6 shadow-lg cursor-pointer transition-all duration-300 ${
                    selectedBHK === plan.id
                      ? 'ring-2 ring-accent shadow-xl'
                      : 'hover:shadow-xl'
                  } ${plan.popular ? 'border-2 border-accent' : ''}`}
                  onClick={() => setSelectedBHK(plan.id)}
                >
                  {plan.popular && (
                    <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                      <span className="bg-accent text-white px-4 py-1 rounded-full text-sm font-medium">
                        Most Popular
                      </span>
                    </div>
                  )}
                  
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center">
                      <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center mr-4">
                        <Icon className="w-6 h-6 text-accent" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-gray-900">{plan.name}</h3>
                        <p className="text-gray-600 text-sm">{plan.description}</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-2xl font-bold text-accent">{plan.price}</div>
                      <div className="text-sm text-gray-500">{plan.duration}</div>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-2 mb-4">
                    {plan.features.slice(0, 4).map((feature, index) => (
                      <div key={index} className="flex items-center text-sm text-gray-600">
                        <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                        {feature}
                      </div>
                    ))}
                  </div>

                  {plan.features.length > 4 && (
                    <div className="text-sm text-gray-500">
                      +{plan.features.length - 4} more features
                    </div>
                  )}
                </motion.div>
              );
            })}
          </div>

          {/* Image Slider */}
          <div className="relative">
            <div className="relative h-96 lg:h-[500px] rounded-2xl overflow-hidden shadow-2xl">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentSlide}
                  initial={{ opacity: 0, scale: 1.1 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.5 }}
                  className="relative w-full h-full"
                >
                  <Image
                    src={sliderImages[currentSlide].image}
                    alt={sliderImages[currentSlide].title}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  
                  <div className="absolute bottom-6 left-6 right-6 text-white">
                    <h3 className="text-2xl font-bold mb-2">
                      {sliderImages[currentSlide].title}
                    </h3>
                    <p className="text-white/90">
                      {sliderImages[currentSlide].description}
                    </p>
                  </div>
                </motion.div>
              </AnimatePresence>

              {/* Navigation Buttons */}
              <button
                onClick={prevSlide}
                className="absolute left-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-white/20 hover:bg-white/30 rounded-full flex items-center justify-center transition-all duration-200"
              >
                <ChevronLeft className="w-6 h-6 text-white" />
              </button>
              
              <button
                onClick={nextSlide}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-white/20 hover:bg-white/30 rounded-full flex items-center justify-center transition-all duration-200"
              >
                <ChevronRight className="w-6 h-6 text-white" />
              </button>

              {/* Dots Indicator */}
              <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
                {sliderImages.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentSlide(index)}
                    className={`w-3 h-3 rounded-full transition-all duration-200 ${
                      index === currentSlide ? 'bg-white' : 'bg-white/50'
                    }`}
                  />
                ))}
              </div>
            </div>

            {/* Selected Plan Info */}
            {selectedPlan && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="mt-6 bg-white rounded-xl p-6 shadow-lg"
              >
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-gray-900">{selectedPlan.name}</h3>
                    <p className="text-gray-600">{selectedPlan.description}</p>
                  </div>
                  <div className="text-right">
                    <div className="text-3xl font-bold text-accent">{selectedPlan.price}</div>
                    <div className="text-sm text-gray-500">{selectedPlan.duration}</div>
                  </div>
                </div>
                
                <button className="w-full bg-accent hover:bg-accent/90 text-white py-3 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center group">
                  Get Free Quote
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </button>
              </motion.div>
            )}
          </div>
        </div>

        {/* Trust Indicators */}
        <div className="mt-16 text-center">
          <div className="flex items-center justify-center space-x-8 text-sm text-gray-600">
            <div className="flex items-center">
              <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
              No Hidden Costs
            </div>
            <div className="flex items-center">
              <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
              Free 3D Design
            </div>
            <div className="flex items-center">
              <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
              Warranty Included
            </div>
            <div className="flex items-center">
              <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
              On-Time Delivery
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingSlider;
