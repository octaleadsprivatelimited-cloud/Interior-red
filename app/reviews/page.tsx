'use client';

import { useState } from 'react';
import Image from 'next/image';
import { Star, Quote, ChevronLeft, ChevronRight, Filter, Calendar, MapPin } from 'lucide-react';

const Reviews = () => {
  const [selectedFilter, setSelectedFilter] = useState('all');
  const [currentReview, setCurrentReview] = useState(0);

  const filters = [
    { id: 'all', name: 'All Reviews', count: 127 },
    { id: 'residential', name: 'Residential', count: 89 },
    { id: 'commercial', name: 'Commercial', count: 38 },
    { id: 'luxury', name: 'Luxury', count: 24 }
  ];

  const reviews = [
    {
      id: 1,
      name: 'Sarah Johnson',
      role: 'Homeowner',
      location: 'New York, NY',
      project: 'Complete Home Renovation',
      rating: 5,
      date: '2024-01-15',
      category: 'residential',
      image: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=400&h=400&fit=crop&crop=face',
      content: 'Elite Interior Design transformed our outdated home into a stunning modern space. Their attention to detail and creative solutions exceeded our expectations. The team was professional, punctual, and truly listened to our needs. We couldn\'t be happier with the results!',
      verified: true,
      helpful: 12
    },
    {
      id: 2,
      name: 'Michael Chen',
      role: 'CEO, TechStart Inc.',
      location: 'San Francisco, CA',
      project: 'Corporate Office Design',
      rating: 5,
      date: '2024-01-10',
      category: 'commercial',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face',
      content: 'We needed a modern office space that would inspire our team and impress clients. Elite Interior Design delivered beyond our wildest dreams. The space is not only beautiful but also highly functional for our growing team. Highly recommend!',
      verified: true,
      helpful: 8
    },
    {
      id: 3,
      name: 'Emily Rodriguez',
      role: 'Restaurant Owner',
      location: 'Los Angeles, CA',
      project: 'Restaurant Interior Design',
      rating: 5,
      date: '2024-01-05',
      category: 'commercial',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop&crop=face',
      content: 'The restaurant design they created for us is absolutely perfect. It captures the essence of our brand while providing an amazing dining experience for our customers. Our business has grown significantly since the renovation.',
      verified: true,
      helpful: 15
    },
    {
      id: 4,
      name: 'David Kim',
      role: 'Real Estate Developer',
      location: 'Miami, FL',
      project: 'Luxury Condominium Design',
      rating: 5,
      date: '2023-12-28',
      category: 'luxury',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face',
      content: 'Working with Elite Interior Design on our luxury condominium project was a game-changer. Their expertise in high-end residential design helped us achieve record sales. The attention to detail and quality of work is unmatched.',
      verified: true,
      helpful: 20
    },
    {
      id: 5,
      name: 'Lisa Thompson',
      role: 'Interior Designer',
      location: 'Chicago, IL',
      project: 'Collaborative Design Project',
      rating: 5,
      date: '2023-12-20',
      category: 'residential',
      image: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=400&h=400&fit=crop&crop=face',
      content: 'As a fellow designer, I can attest to the exceptional quality of work from Elite Interior Design. Their innovative approach and flawless execution make them stand out in the industry. Truly professional and creative team.',
      verified: true,
      helpful: 6
    },
    {
      id: 6,
      name: 'Jennifer Martinez',
      role: 'Homeowner',
      location: 'Beverly Hills, CA',
      project: 'Luxury Home Renovation',
      rating: 5,
      date: '2023-12-15',
      category: 'luxury',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face',
      content: 'The team at Elite Interior Design created a masterpiece in our home. Every detail was carefully considered, from the color palette to the furniture selection. The project was completed on time and within budget. Absolutely stunning work!',
      verified: true,
      helpful: 18
    }
  ];

  const filteredReviews = selectedFilter === 'all' 
    ? reviews 
    : reviews.filter(review => review.category === selectedFilter);

  const nextReview = () => {
    setCurrentReview((prev) => (prev + 1) % filteredReviews.length);
  };

  const prevReview = () => {
    setCurrentReview((prev) => (prev - 1 + filteredReviews.length) % filteredReviews.length);
  };

  const stats = [
    { label: 'Total Reviews', value: '127' },
    { label: 'Average Rating', value: '4.9/5' },
    { label: '5-Star Reviews', value: '98%' },
    { label: 'Would Recommend', value: '100%' }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-96 flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=1920&h=1080&fit=crop"
            alt="Client reviews"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/50"></div>
        </div>
        
        <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4">
          <h1 className="text-4xl lg:text-6xl font-bold mb-6 leading-tight">
            Client
            <span className="block text-accent">Reviews</span>
          </h1>
          <p className="text-xl lg:text-2xl text-white/90 mb-8 leading-relaxed">
            Hear what our satisfied clients have to say about their experience with us.
          </p>
        </div>
      </section>

      {/* Stats Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl font-bold text-accent mb-2">{stat.value}</div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Review Carousel */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Featured
              <span className="block text-accent">Testimonials</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Discover why our clients choose us for their interior design needs.
            </p>
          </div>

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

                {/* Review Content */}
                <div className="text-center mb-8">
                  <p className="text-xl lg:text-2xl leading-relaxed mb-8 italic">
                    "{filteredReviews[currentReview]?.content}"
                  </p>
                  
                  {/* Rating */}
                  <div className="flex justify-center mb-6">
                    {[...Array(filteredReviews[currentReview]?.rating || 5)].map((_, i) => (
                      <Star key={i} className="w-6 h-6 text-yellow-400 fill-current" />
                    ))}
                  </div>
                </div>

                {/* Client Info */}
                <div className="flex flex-col lg:flex-row items-center justify-center space-y-4 lg:space-y-0 lg:space-x-6">
                  <div className="relative">
                    <Image
                      src={filteredReviews[currentReview]?.image || '/images/default-avatar.jpg'}
                      alt={filteredReviews[currentReview]?.name || 'Client'}
                      width={80}
                      height={80}
                      className="w-20 h-20 rounded-full object-cover border-4 border-white/20"
                    />
                  </div>
                  
                  <div className="text-center lg:text-left">
                    <h4 className="text-xl font-bold mb-1">{filteredReviews[currentReview]?.name}</h4>
                    <p className="text-white/80 mb-1">{filteredReviews[currentReview]?.role}</p>
                    <p className="text-white/60 text-sm">{filteredReviews[currentReview]?.location}</p>
                    <p className="text-white/60 text-sm font-medium">{filteredReviews[currentReview]?.project}</p>
                  </div>
                </div>
              </div>

              {/* Navigation Arrows */}
              <button
                onClick={prevReview}
                className="absolute left-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-white/20 hover:bg-white/30 rounded-full flex items-center justify-center transition-colors duration-200"
                aria-label="Previous review"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>
              
              <button
                onClick={nextReview}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-white/20 hover:bg-white/30 rounded-full flex items-center justify-center transition-colors duration-200"
                aria-label="Next review"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
            </div>

            {/* Dots Indicator */}
            <div className="flex justify-center mt-8 space-x-2">
              {filteredReviews.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentReview(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentReview
                      ? 'bg-accent scale-125'
                      : 'bg-gray-300 hover:bg-gray-400'
                  }`}
                  aria-label={`Go to review ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* All Reviews */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              All Client Reviews
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Browse through all our client reviews and see what makes us the preferred choice.
            </p>
          </div>

          {/* Filter Buttons */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {filters.map((filter) => (
              <button
                key={filter.id}
                onClick={() => setSelectedFilter(filter.id)}
                className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                  selectedFilter === filter.id
                    ? 'bg-accent text-white shadow-lg'
                    : 'bg-gray-100 text-gray-600 hover:bg-accent hover:text-white shadow-md'
                }`}
              >
                <Filter className="w-4 h-4 mr-2 inline" />
                {filter.name} ({filter.count})
              </button>
            ))}
          </div>

          {/* Reviews Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredReviews.map((review) => (
              <div key={review.id} className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 p-6">
                {/* Header */}
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center space-x-3">
                    <Image
                      src={review.image}
                      alt={review.name}
                      width={50}
                      height={50}
                      className="w-12 h-12 rounded-full object-cover"
                    />
                    <div>
                      <h3 className="font-bold text-gray-900">{review.name}</h3>
                      <p className="text-sm text-gray-600">{review.role}</p>
                    </div>
                  </div>
                  {review.verified && (
                    <span className="px-2 py-1 bg-green-100 text-green-800 text-xs font-medium rounded-full">
                      Verified
                    </span>
                  )}
                </div>

                {/* Rating */}
                <div className="flex items-center mb-4">
                  <div className="flex items-center">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <span className="ml-2 text-sm text-gray-600">{review.rating}/5</span>
                </div>

                {/* Review Content */}
                <p className="text-gray-700 mb-4 leading-relaxed line-clamp-4">
                  {review.content}
                </p>

                {/* Project Info */}
                <div className="border-t pt-4">
                  <div className="flex items-center justify-between text-sm text-gray-500 mb-2">
                    <div className="flex items-center">
                      <MapPin className="w-4 h-4 mr-1" />
                      <span>{review.location}</span>
                    </div>
                    <div className="flex items-center">
                      <Calendar className="w-4 h-4 mr-1" />
                      <span>{new Date(review.date).toLocaleDateString()}</span>
                    </div>
                  </div>
                  <p className="text-sm font-medium text-accent mb-2">{review.project}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-500">
                      {review.helpful} people found this helpful
                    </span>
                    <button className="text-sm text-accent hover:text-accent/80 font-medium">
                      Helpful
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gradient-to-br from-accent to-brown-600 text-white">
        <div className="container-custom text-center">
          <h2 className="text-4xl font-bold mb-6">
            Ready to Join Our Happy Clients?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto leading-relaxed">
            Let's create something extraordinary together. Our track record speaks for itself, 
            and we're ready to add your project to our success stories.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="bg-white text-accent hover:bg-gray-100 px-8 py-4 rounded-lg font-medium transition-colors duration-200 inline-flex items-center justify-center group text-lg"
            >
              Start Your Project
            </a>
            
            <a
              href="/portfolio"
              className="border-2 border-white text-white hover:bg-white hover:text-accent px-8 py-4 rounded-lg font-medium transition-colors duration-200 inline-flex items-center justify-center text-lg"
            >
              View Our Work
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Reviews;
