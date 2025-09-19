'use client';

import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, Eye, ExternalLink } from 'lucide-react';

const Portfolio = () => {

  const projects = [
    {
      id: 1,
      title: 'Modern Family Home',
      category: 'residential',
      type: 'Complete Renovation',
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
      year: '2023',
      image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800&h=600&fit=crop',
      description: 'Clean, minimalist design with focus on natural light and open spaces.',
      link: '/portfolio/contemporary-living'
    },
    {
      id: 5,
      title: 'Boutique Hotel Lobby',
      category: 'commercial',
      type: 'Hospitality Design',
      year: '2023',
      image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800&h=600&fit=crop',
      description: 'Sophisticated hotel lobby design that creates a memorable first impression.',
      link: '/portfolio/boutique-hotel-lobby'
    },
    {
      id: 6,
      title: 'Cozy Apartment',
      category: 'residential',
      type: 'Small Space Design',
      year: '2023',
      image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800&h=600&fit=crop',
      description: 'Maximizing space in a small apartment with smart storage solutions.',
      link: '/portfolio/cozy-apartment'
    }
  ];


  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-96 flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=1920&h=1080&fit=crop"
            alt="Portfolio"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/50"></div>
        </div>
        
        <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4">
          <h1 className="text-4xl lg:text-6xl font-bold mb-6 leading-tight">
            Our <span className="text-accent">Portfolio</span>
          </h1>
          <p className="text-xl lg:text-2xl text-white/90 mb-8 leading-relaxed">
            Explore our carefully curated collection of successful interior design projects.
          </p>
        </div>
      </section>

      {/* Filter Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Featured Projects
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Browse through our portfolio of successful interior design projects 
              that showcase our expertise and creativity.
            </p>
          </div>


          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
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
                  
                  <div className="flex items-center justify-end text-sm text-gray-500 mb-4">
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
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
        <div className="container-custom text-center">
          <h2 className="text-4xl font-bold mb-6 text-white">
            Ready to Start Your Project?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto leading-relaxed">
            Let's create something extraordinary together. Our team is ready to bring your vision to life.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-white text-accent hover:bg-gray-100 px-8 py-4 rounded-lg font-medium transition-colors duration-200 inline-flex items-center justify-center group text-lg"
            >
              Get Free Consultation
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" />
            </Link>
            
            <Link
              href="/gallery"
              className="border-2 border-white text-white hover:bg-white hover:text-accent px-8 py-4 rounded-lg font-medium transition-colors duration-200 inline-flex items-center justify-center text-lg"
            >
              View Gallery
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Portfolio;
