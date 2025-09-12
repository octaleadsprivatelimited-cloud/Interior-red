'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, Eye, ExternalLink, Filter } from 'lucide-react';

const Portfolio = () => {
  const [activeFilter, setActiveFilter] = useState('all');

  const categories = [
    { id: 'all', name: 'All Projects' },
    { id: 'residential', name: 'Residential' },
    { id: 'commercial', name: 'Commercial' },
    { id: 'luxury', name: 'Luxury' },
    { id: 'modern', name: 'Modern' }
  ];

  const projects = [
    {
      id: 1,
      title: 'Modern Family Home',
      category: 'residential',
      type: 'Complete Renovation',
      location: 'New York, NY',
      year: '2023',
      image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800&h=600&fit=crop',
      description: 'A stunning transformation of a traditional family home into a modern, functional space.',
      link: '/portfolio/modern-family-home'
    },
    {
      id: 2,
      title: 'Luxury Penthouse',
      category: 'luxury',
      type: 'Interior Design',
      location: 'Manhattan, NY',
      year: '2023',
      image: 'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=800&h=600&fit=crop',
      description: 'Elegant penthouse design with panoramic city views and premium finishes.',
      link: '/portfolio/luxury-penthouse'
    },
    {
      id: 3,
      title: 'Tech Startup Office',
      category: 'commercial',
      type: 'Office Design',
      location: 'San Francisco, CA',
      year: '2023',
      image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&h=600&fit=crop',
      description: 'Innovative workspace design that promotes creativity and collaboration.',
      link: '/portfolio/tech-startup-office'
    },
    {
      id: 4,
      title: 'Contemporary Living',
      category: 'modern',
      type: 'Space Planning',
      location: 'Los Angeles, CA',
      year: '2023',
      image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800&h=600&fit=crop',
      description: 'Clean, minimalist design with focus on natural light and open spaces.',
      link: '/portfolio/contemporary-living'
    },
    {
      id: 5,
      title: 'Boutique Hotel Lobby',
      category: 'commercial',
      type: 'Hospitality Design',
      location: 'Miami, FL',
      year: '2023',
      image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800&h=600&fit=crop',
      description: 'Sophisticated hotel lobby design that creates a memorable first impression.',
      link: '/portfolio/boutique-hotel-lobby'
    },
    {
      id: 6,
      title: 'Cozy Apartment',
      category: 'residential',
      type: 'Small Space Design',
      location: 'Brooklyn, NY',
      year: '2023',
      image: 'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=800&h=600&fit=crop',
      description: 'Maximizing space in a small apartment with smart storage solutions.',
      link: '/portfolio/cozy-apartment'
    }
  ];

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  return (
    <section className="section-padding bg-gray-50">
      <div className="container-custom">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 bg-accent/10 text-accent rounded-full text-sm font-medium mb-4">
            Our Portfolio
          </span>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Featured Projects
            <span className="block text-accent">That Inspire</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Explore our carefully curated portfolio of successful interior design projects 
            that showcase our expertise and attention to detail.
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveFilter(category.id)}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                activeFilter === category.id
                  ? 'bg-accent text-white shadow-lg'
                  : 'bg-white text-gray-600 hover:bg-accent hover:text-white shadow-md'
              }`}
            >
              <Filter className="w-4 h-4 mr-2 inline" />
              {category.name}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden card-hover"
            >
              <div className="relative h-64 overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                {/* Overlay Content */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="flex space-x-4">
                    <button 
                      className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/30 transition-colors duration-200"
                      aria-label="View project details"
                    >
                      <Eye className="w-5 h-5 text-white" />
                    </button>
                    <Link
                      href={project.link}
                      className="w-12 h-12 bg-accent rounded-full flex items-center justify-center hover:bg-accent/90 transition-colors duration-200"
                    >
                      <ExternalLink className="w-5 h-5 text-white" />
                    </Link>
                  </div>
                </div>

                {/* Category Badge */}
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 bg-accent text-white text-xs font-medium rounded-full">
                    {project.type}
                  </span>
                </div>
              </div>
              
              <div className="p-6">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-xl font-bold text-gray-900 group-hover:text-accent transition-colors duration-200">
                    {project.title}
                  </h3>
                  <span className="text-sm text-gray-500">{project.year}</span>
                </div>
                
                <p className="text-gray-600 mb-4 leading-relaxed">
                  {project.description}
                </p>
                
                <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                  <span>📍 {project.location}</span>
                  <span className="capitalize">{project.category}</span>
                </div>
                
                <Link
                  href={project.link}
                  className="inline-flex items-center text-accent hover:text-accent/80 font-medium group-hover:translate-x-1 transition-all duration-200"
                >
                  View Project
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <h3 className="text-3xl font-bold text-gray-900 mb-4">
            Ready to Start Your Project?
          </h3>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Let's create something extraordinary together. Our team is ready to bring your vision to life.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/portfolio"
              className="btn-primary inline-flex items-center justify-center group"
            >
              View All Projects
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" />
            </Link>
            
            <Link
              href="/contact"
              className="btn-secondary inline-flex items-center justify-center"
            >
              Start Your Project
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
