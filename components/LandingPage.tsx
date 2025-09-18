'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { 
  Star, 
  Phone, 
  Mail, 
  MapPin, 
  CheckCircle, 
  ArrowRight, 
  Users, 
  Award, 
  Clock,
  Shield,
  Home,
  Building,
  Palette,
  Wrench,
  MessageCircle,
  ChevronRight,
  Play,
  Quote
} from 'lucide-react';

const LandingPage = () => {
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);

  const services = [
    {
      icon: Home,
      title: 'Residential Design',
      description: 'Transform your home into a beautiful, functional space',
      features: ['3D Design', 'Material Selection', 'Project Management']
    },
    {
      icon: Building,
      title: 'Commercial Design',
      description: 'Professional spaces that boost productivity',
      features: ['Office Design', 'Retail Spaces', 'Hospitality']
    },
    {
      icon: Palette,
      title: 'Color Consultation',
      description: 'Perfect color schemes for every space',
      features: ['Color Psychology', 'Trend Analysis', 'Custom Palettes']
    },
    {
      icon: Wrench,
      title: 'Renovation Services',
      description: 'Complete home makeovers with expert execution',
      features: ['Kitchen Renovation', 'Bathroom Makeover', 'Living Room']
    }
  ];

  const testimonials = [
    {
      name: 'Priya Sharma',
      location: 'Hyderabad',
      rating: 5,
      text: 'Dream Space Interiors transformed our 3BHK into a stunning modern home. The attention to detail and quality of work is exceptional.',
      project: '3BHK Modern Home'
    },
    {
      name: 'Rajesh Kumar',
      location: 'Hyderabad',
      rating: 5,
      text: 'Professional team, on-time delivery, and beautiful results. Highly recommend for anyone looking for quality interior design.',
      project: 'Office Space Design'
    },
    {
      name: 'Anita Reddy',
      location: 'Hyderabad',
      rating: 5,
      text: 'From concept to completion, the entire process was smooth. Our home looks exactly like the 3D designs they showed us.',
      project: '2BHK Renovation'
    }
  ];

  const stats = [
    { number: '500+', label: 'Happy Customers' },
    { number: '1000+', label: 'Projects Completed' },
    { number: '5+', label: 'Years Experience' },
    { number: '98%', label: 'Customer Satisfaction' }
  ];

  const processSteps = [
    {
      step: '01',
      title: 'Free Consultation',
      description: 'Schedule a free home visit to discuss your requirements and budget'
    },
    {
      step: '02',
      title: '3D Design',
      description: 'Get realistic 3D visualizations of your space before work begins'
    },
    {
      step: '03',
      title: 'Material Selection',
      description: 'Choose from our curated collection of premium materials and finishes'
    },
    {
      step: '04',
      title: 'Project Execution',
      description: 'Expert team handles everything from procurement to final installation'
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
        <div className="absolute inset-0">
          <Image
            src="/images/slider-1.jpg"
            alt="Beautiful Interior Design"
            fill
            className="object-cover opacity-40"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-transparent"></div>
        </div>
        
        <div className="relative z-10 container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="text-white"
            >
              <div className="inline-flex items-center bg-accent/20 backdrop-blur-sm rounded-full px-4 py-2 mb-6">
                <Star className="w-4 h-4 text-accent mr-2" />
                <span className="text-sm font-medium">#1 Interior Design Company in Hyderabad</span>
              </div>
              
              <h1 className="text-4xl lg:text-6xl font-bold mb-6 leading-tight">
                Transform Your <span className="text-accent">Dream Home</span> into Reality
              </h1>
              
              <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                Professional interior design services with 3D visualization, 
                premium materials, and expert execution. Get your dream home 
                designed and delivered in 45 days.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <Link
                  href="/contact"
                  className="bg-accent hover:bg-accent/90 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 flex items-center justify-center group"
                >
                  Get Free Consultation
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </Link>
                
                <button className="border-2 border-white text-white hover:bg-white hover:text-gray-900 px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 flex items-center justify-center group">
                  <Play className="w-5 h-5 mr-2" />
                  Watch Our Work
                </button>
              </div>

              <div className="flex items-center space-x-8 text-sm text-gray-300">
                <div className="flex items-center">
                  <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                  Free 3D Design
                </div>
                <div className="flex items-center">
                  <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                  45-Day Delivery
                </div>
                <div className="flex items-center">
                  <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                  Warranty Included
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
                <h3 className="text-2xl font-bold text-white mb-6">Get Your Free Quote</h3>
                
                <form className="space-y-4">
                  <div>
                    <input
                      type="text"
                      placeholder="Your Name"
                      className="w-full px-4 py-3 rounded-lg bg-white/90 text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-accent"
                    />
                  </div>
                  
                  <div>
                    <input
                      type="tel"
                      placeholder="Phone Number"
                      className="w-full px-4 py-3 rounded-lg bg-white/90 text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-accent"
                    />
                  </div>
                  
                  <div>
                    <select className="w-full px-4 py-3 rounded-lg bg-white/90 text-gray-900 focus:outline-none focus:ring-2 focus:ring-accent">
                      <option>Select Property Type</option>
                      <option>1BHK</option>
                      <option>2BHK</option>
                      <option>3BHK</option>
                      <option>4BHK+</option>
                      <option>Villa</option>
                      <option>Office</option>
                    </select>
                  </div>
                  
                  <div>
                    <select className="w-full px-4 py-3 rounded-lg bg-white/90 text-gray-900 focus:outline-none focus:ring-2 focus:ring-accent">
                      <option>Select Budget Range</option>
                      <option>₹2-5 Lakhs</option>
                      <option>₹5-10 Lakhs</option>
                      <option>₹10-20 Lakhs</option>
                      <option>₹20+ Lakhs</option>
                    </select>
                  </div>
                  
                  <button
                    type="submit"
                    className="w-full bg-accent hover:bg-accent/90 text-white py-3 rounded-lg font-semibold transition-all duration-300"
                  >
                    Get Free Quote Now
                  </button>
                </form>
                
                <p className="text-sm text-gray-300 mt-4 text-center">
                  No spam. We'll call you within 24 hours.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="text-4xl lg:text-5xl font-bold text-accent mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-600 font-medium">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Our Interior Design Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From concept to completion, we handle every aspect of your interior design project
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 group"
              >
                <div className="w-16 h-16 bg-accent/10 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-accent group-hover:text-white transition-all duration-300">
                  <service.icon className="w-8 h-8 text-accent group-hover:text-white" />
                </div>
                
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {service.title}
                </h3>
                
                <p className="text-gray-600 mb-4">
                  {service.description}
                </p>
                
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-gray-500">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              How We Work
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our proven 4-step process ensures your project is delivered on time and within budget
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center relative"
              >
                <div className="w-20 h-20 bg-accent rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-6">
                  {step.step}
                </div>
                
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {step.title}
                </h3>
                
                <p className="text-gray-600">
                  {step.description}
                </p>
                
                {index < processSteps.length - 1 && (
                  <div className="hidden lg:block absolute top-10 left-full w-full h-0.5 bg-gray-200 transform translate-x-4">
                    <div className="absolute right-0 top-1/2 transform -translate-y-1/2 w-0 h-0 border-l-4 border-l-gray-200 border-t-2 border-b-2 border-t-transparent border-b-transparent"></div>
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              What Our Customers Say
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Don't just take our word for it - hear from our satisfied customers
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-2xl p-8 shadow-lg"
              >
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                
                <Quote className="w-8 h-8 text-accent mb-4" />
                
                <p className="text-gray-600 mb-6 italic">
                  "{testimonial.text}"
                </p>
                
                <div className="border-t pt-4">
                  <div className="font-semibold text-gray-900">
                    {testimonial.name}
                  </div>
                  <div className="text-sm text-gray-500">
                    {testimonial.location} • {testimonial.project}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-accent">
        <div className="container-custom">
          <div className="text-center text-white">
            <h2 className="text-4xl font-bold mb-4">
              Ready to Transform Your Space?
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Get a free consultation and 3D design for your home. 
              No commitment required.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="bg-white text-accent hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 flex items-center justify-center group"
              >
                Get Free Consultation
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
              
              <Link
                href="/gallery"
                className="border-2 border-white text-white hover:bg-white hover:text-accent px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 flex items-center justify-center"
              >
                View Our Work
              </Link>
            </div>
            
            <div className="flex items-center justify-center mt-8 text-white/80">
              <Phone className="w-5 h-5 mr-2" />
              <span>Call us: +91-8985456887</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default LandingPage;
