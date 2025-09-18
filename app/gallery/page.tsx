'use client';

import { useState } from 'react';
import Image from 'next/image';
import { X, ChevronLeft, ChevronRight, Eye, ExternalLink } from 'lucide-react';

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  const galleryImages = [
    {
      id: 1,
      category: 'residential',
      type: 'Living Room',
      location: 'New York, NY',
      year: '2023',
      image: '/images/Gallery-1.jpg',
      description: 'Beautiful interior design showcasing modern aesthetics.',
      tags: ['Modern', 'Elegant', 'Stylish']
    },
    {
      id: 2,
      category: 'luxury',
      type: 'Bedroom',
      location: 'Beverly Hills, CA',
      year: '2023',
      image: '/images/Gallery-2.jpg',
      description: 'Luxurious bedroom design with premium finishes.',
      tags: ['Luxury', 'Premium', 'Elegant']
    },
    {
      id: 3,
      category: 'commercial',
      type: 'Office',
      location: 'San Francisco, CA',
      year: '2023',
      image: '/images/Gallery-3.jpg',
      description: 'Professional office space with modern design elements.',
      tags: ['Commercial', 'Modern', 'Professional']
    },
    {
      id: 4,
      category: 'residential',
      type: 'Kitchen',
      location: 'Los Angeles, CA',
      year: '2023',
      image: '/images/Gallery-4.JPG',
      description: 'Contemporary kitchen with sleek design and functionality.',
      tags: ['Kitchen', 'Contemporary', 'Functional']
    },
    {
      id: 5,
      category: 'commercial',
      type: 'Hospitality',
      location: 'Miami, FL',
      year: '2023',
      image: '/images/Gallery-5.JPG',
      description: 'Sophisticated hospitality space with elegant design.',
      tags: ['Hospitality', 'Elegant', 'Sophisticated']
    },
    {
      id: 6,
      category: 'modern',
      type: 'Dining Room',
      location: 'Seattle, WA',
      year: '2023',
      image: '/images/Gallery-6.JPG',
      description: 'Minimalist dining space with clean, modern aesthetics.',
      tags: ['Minimalist', 'Clean', 'Modern']
    },
    {
      id: 7,
      category: 'luxury',
      type: 'Penthouse',
      location: 'Manhattan, NY',
      year: '2023',
      image: '/images/Gallery-7.JPG',
      description: 'Luxurious penthouse with stunning city views.',
      tags: ['Penthouse', 'Luxury', 'City Views']
    },
    {
      id: 8,
      category: 'residential',
      type: 'Bathroom',
      location: 'Chicago, IL',
      year: '2023',
      image: '/images/Gallery-8.jpg',
      description: 'Modern bathroom with spa-like features and premium fixtures.',
      tags: ['Bathroom', 'Spa-like', 'Modern']
    },
    {
      id: 9,
      category: 'commercial',
      type: 'Co-working',
      location: 'Austin, TX',
      year: '2023',
      image: '/images/Gallery-9.jpg',
      description: 'Flexible co-working space designed for productivity and collaboration.',
      tags: ['Co-working', 'Productive', 'Collaborative']
    }
  ];

  const filteredImages = galleryImages;

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
                    alt={`${image.type} interior design`}
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
                alt={`${filteredImages[selectedImage].type} interior design`}
                width={1200}
                height={800}
                className="w-full h-auto max-h-[80vh] object-contain rounded-lg"
              />
              
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Gallery;
