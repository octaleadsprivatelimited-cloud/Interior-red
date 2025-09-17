'use client';

import { useState } from 'react';
import Image from 'next/image';
import { X, ChevronLeft, ChevronRight, Filter, Eye, ExternalLink } from 'lucide-react';

const Gallery = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  const categories = [
    { id: 'all', name: 'All Projects', count: 48 },
    { id: 'residential', name: 'Residential', count: 24 },
    { id: 'commercial', name: 'Commercial', count: 12 },
    { id: 'luxury', name: 'Luxury', count: 8 },
    { id: 'modern', name: 'Modern', count: 4 }
  ];

  const galleryImages = [
    {
      id: 1,
      title: 'Modern Living Room',
      category: 'residential',
      type: 'Living Room',
      location: 'New York, NY',
      year: '2023',
      image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800&h=600&fit=crop',
      description: 'A stunning modern living room with clean lines and natural materials.',
      tags: ['Modern', 'Minimalist', 'Natural Light']
    },
    {
      id: 2,
      title: 'Luxury Master Bedroom',
      category: 'luxury',
      type: 'Bedroom',
      location: 'Beverly Hills, CA',
      year: '2023',
      image: 'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=800&h=600&fit=crop',
      description: 'Elegant master bedroom with custom furniture and premium finishes.',
      tags: ['Luxury', 'Custom', 'Elegant']
    },
    {
      id: 3,
      title: 'Corporate Office Space',
      category: 'commercial',
      type: 'Office',
      location: 'San Francisco, CA',
      year: '2023',
      image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&h=600&fit=crop',
      description: 'Innovative office design promoting collaboration and productivity.',
      tags: ['Commercial', 'Modern', 'Collaborative']
    },
    {
      id: 4,
      title: 'Contemporary Kitchen',
      category: 'residential',
      type: 'Kitchen',
      location: 'Los Angeles, CA',
      year: '2023',
      image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800&h=600&fit=crop',
      description: 'Sleek kitchen design with premium appliances and custom cabinetry.',
      tags: ['Kitchen', 'Contemporary', 'Premium']
    },
    {
      id: 5,
      title: 'Boutique Hotel Lobby',
      category: 'commercial',
      type: 'Hospitality',
      location: 'Miami, FL',
      year: '2023',
      image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800&h=600&fit=crop',
      description: 'Sophisticated hotel lobby creating a memorable first impression.',
      tags: ['Hospitality', 'Luxury', 'Sophisticated']
    },
    {
      id: 6,
      title: 'Minimalist Dining Room',
      category: 'modern',
      type: 'Dining Room',
      location: 'Seattle, WA',
      year: '2023',
      image: 'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=800&h=600&fit=crop',
      description: 'Clean, minimalist dining space with focus on functionality.',
      tags: ['Minimalist', 'Clean', 'Functional']
    },
    {
      id: 7,
      title: 'Luxury Penthouse',
      category: 'luxury',
      type: 'Penthouse',
      location: 'Manhattan, NY',
      year: '2023',
      image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&h=600&fit=crop',
      description: 'Stunning penthouse with panoramic city views and premium finishes.',
      tags: ['Penthouse', 'Luxury', 'City Views']
    },
    {
      id: 8,
      title: 'Modern Bathroom',
      category: 'residential',
      type: 'Bathroom',
      location: 'Chicago, IL',
      year: '2023',
      image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800&h=600&fit=crop',
      description: 'Spa-like bathroom with modern fixtures and natural stone.',
      tags: ['Bathroom', 'Spa-like', 'Natural Stone']
    },
    {
      id: 9,
      title: 'Co-working Space',
      category: 'commercial',
      type: 'Co-working',
      location: 'Austin, TX',
      year: '2023',
      image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800&h=600&fit=crop',
      description: 'Flexible co-working space designed for modern professionals.',
      tags: ['Co-working', 'Flexible', 'Modern']
    },
    {
      id: 10,
      title: 'Family Room',
      category: 'residential',
      type: 'Family Room',
      location: 'Denver, CO',
      year: '2023',
      image: 'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=800&h=600&fit=crop',
      description: 'Comfortable family room perfect for relaxation and entertainment.',
      tags: ['Family', 'Comfortable', 'Entertainment']
    },
    {
      id: 11,
      title: 'Restaurant Interior',
      category: 'commercial',
      type: 'Restaurant',
      location: 'Portland, OR',
      year: '2023',
      image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&h=600&fit=crop',
      description: 'Trendy restaurant design with industrial and modern elements.',
      tags: ['Restaurant', 'Industrial', 'Trendy']
    },
    {
      id: 12,
      title: 'Luxury Study',
      category: 'luxury',
      type: 'Study',
      location: 'Boston, MA',
      year: '2023',
      image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800&h=600&fit=crop',
      description: 'Elegant home office with custom built-ins and premium materials.',
      tags: ['Study', 'Custom', 'Elegant']
    }
  ];

  const filteredImages = selectedCategory === 'all' 
    ? galleryImages 
    : galleryImages.filter(image => image.category === selectedCategory);

  const openLightbox = (index: number) => {
    setSelectedImage(index);
  };

  const closeLightbox = () => {
    setSelectedImage(null);
  };

  const nextImage = () => {
    if (selectedImage !== null) {
      setSelectedImage((selectedImage + 1) % filteredImages.length);
    }
  };

  const prevImage = () => {
    if (selectedImage !== null) {
      setSelectedImage((selectedImage - 1 + filteredImages.length) % filteredImages.length);
    }
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-96 flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=1920&h=1080&fit=crop"
            alt="Design gallery"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/50"></div>
        </div>
        
        <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4">
          <h1 className="text-4xl lg:text-6xl font-bold mb-6 leading-tight">
            Design <span className="text-accent">Gallery</span>
          </h1>
          <p className="text-xl lg:text-2xl text-white/90 mb-8 leading-relaxed">
            Explore our stunning portfolio of completed interior design projects.
          </p>
        </div>
      </section>

      {/* Filter Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Our Latest Work
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Browse through our carefully curated collection of interior design projects 
              that showcase our expertise and creativity.
            </p>
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                  selectedCategory === category.id
                    ? 'bg-accent text-white shadow-lg'
                    : 'bg-gray-100 text-gray-600 hover:bg-accent hover:text-white shadow-md'
                }`}
              >
                <Filter className="w-4 h-4 mr-2 inline" />
                {category.name} ({category.count})
              </button>
            ))}
          </div>

          {/* Gallery Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredImages.map((image, index) => (
              <div
                key={image.id}
                className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden card-hover cursor-pointer"
                onClick={() => openLightbox(index)}
              >
                <div className="relative h-64 overflow-hidden">
                  <Image
                    src={image.image}
                    alt={image.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  
                  {/* Overlay Content */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="flex space-x-4">
                      <button 
                        className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/30 transition-colors duration-200"
                        aria-label="View image details"
                      >
                        <Eye className="w-5 h-5 text-white" />
                      </button>
                    </div>
                  </div>

                  {/* Category Badge */}
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 bg-accent text-white text-xs font-medium rounded-full">
                      {image.type}
                    </span>
                  </div>
                </div>
                
                <div className="p-4">
                  <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-accent transition-colors duration-200">
                    {image.title}
                  </h3>
                  
                  <div className="flex items-center justify-between text-sm text-gray-500 mb-3">
                    <span>📍 {image.location}</span>
                    <span>{image.year}</span>
                  </div>
                  
                  <div className="flex flex-wrap gap-1">
                    {image.tags.slice(0, 2).map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                    {image.tags.length > 2 && (
                      <span className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-full">
                        +{image.tags.length - 2}
                      </span>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox Modal */}
      {selectedImage !== null && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-sm">
          <div className="relative max-w-6xl max-h-[90vh] mx-4">
            {/* Close Button */}
            <button
              onClick={closeLightbox}
              className="absolute top-4 right-4 z-10 w-10 h-10 bg-white/20 hover:bg-white/30 rounded-full flex items-center justify-center transition-colors duration-200"
              aria-label="Close lightbox"
            >
              <X className="w-6 h-6 text-white" />
            </button>

            {/* Navigation Buttons */}
            <button
              onClick={prevImage}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 z-10 w-12 h-12 bg-white/20 hover:bg-white/30 rounded-full flex items-center justify-center transition-colors duration-200"
              aria-label="Previous image"
            >
              <ChevronLeft className="w-6 h-6 text-white" />
            </button>
            
            <button
              onClick={nextImage}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 z-10 w-12 h-12 bg-white/20 hover:bg-white/30 rounded-full flex items-center justify-center transition-colors duration-200"
              aria-label="Next image"
            >
              <ChevronRight className="w-6 h-6 text-white" />
            </button>

            {/* Image */}
            <div className="relative">
              <Image
                src={filteredImages[selectedImage].image}
                alt={filteredImages[selectedImage].title}
                width={1200}
                height={800}
                className="w-full h-auto max-h-[80vh] object-contain rounded-lg"
              />
              
              {/* Image Info */}
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6 rounded-b-lg">
                <h3 className="text-2xl font-bold text-white mb-2">
                  {filteredImages[selectedImage].title}
                </h3>
                <p className="text-white/90 mb-2">
                  {filteredImages[selectedImage].description}
                </p>
                <div className="flex items-center justify-between text-sm text-white/80">
                  <span>📍 {filteredImages[selectedImage].location}</span>
                  <span>{filteredImages[selectedImage].year}</span>
                </div>
                <div className="flex flex-wrap gap-2 mt-3">
                  {filteredImages[selectedImage].tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="px-3 py-1 bg-white/20 text-white text-sm rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Gallery;
