'use client';

import Image from 'next/image';
import { Star, Quote, Calendar, MapPin } from 'lucide-react';

const Reviews = () => {

  const reviews = [
    {
      id: 1,
      name: 'Priya Sharma',
      role: 'Homeowner',
      project: 'Complete Home Renovation',
      rating: 5,
      date: '2024-01-15',
      category: 'residential',
      content: 'Dream Space Interiors transformed our outdated home into a stunning modern space. Their attention to detail and creative solutions exceeded our expectations. The team was professional, punctual, and truly listened to our needs. We couldn\'t be happier with the results!',
      verified: true,
      helpful: 12
    },
    {
      id: 2,
      name: 'Rajesh Kumar',
      role: 'CEO, TechStart Inc.',
      project: 'Corporate Office Design',
      rating: 5,
      date: '2024-01-10',
      category: 'commercial',
      content: 'We needed a modern office space that would inspire our team and impress clients. Dream Space Interiors delivered beyond our wildest dreams. The space is not only beautiful but also highly functional for our growing team. Highly recommend!',
      verified: true,
      helpful: 8
    },
    {
      id: 3,
      name: 'Anita Reddy',
      role: 'Restaurant Owner',
      project: 'Restaurant Interior Design',
      rating: 5,
      date: '2024-01-05',
      category: 'commercial',
      content: 'The restaurant design they created for us is absolutely perfect. It captures the essence of our brand while providing an amazing dining experience for our customers. Our business has grown significantly since the renovation.',
      verified: true,
      helpful: 15
    },
    {
      id: 4,
      name: 'Vikram Singh',
      role: 'Real Estate Developer',
      project: 'Luxury Condominium Design',
      rating: 5,
      date: '2023-12-28',
      category: 'luxury',
      content: 'Working with Dream Space Interiors on our luxury condominium project was a game-changer. Their expertise in high-end residential design helped us achieve record sales. The attention to detail and quality of work is unmatched.',
      verified: true,
      helpful: 20
    },
    {
      id: 5,
      name: 'Sneha Patel',
      role: 'Interior Designer',
      project: 'Collaborative Design Project',
      rating: 5,
      date: '2023-12-20',
      category: 'residential',
      content: 'As a fellow designer, I can attest to the exceptional quality of work from Dream Space Interiors. Their innovative approach and flawless execution make them stand out in the industry. Truly professional and creative team.',
      verified: true,
      helpful: 6
    },
    {
      id: 6,
      name: 'Arjun Mehta',
      role: 'Homeowner',
      project: 'Luxury Home Renovation',
      rating: 5,
      date: '2023-12-15',
      category: 'luxury',
      content: 'The team at Dream Space Interiors created a masterpiece in our home. Every detail was carefully considered, from the color palette to the furniture selection. The project was completed on time and within budget. Absolutely stunning work!',
      verified: true,
      helpful: 18
    }
  ];



  const stats = [
    { label: 'Total Reviews', value: '127' },
    { label: 'Average Rating', value: '4.9/5' },
    { label: '5-Star Reviews', value: '100%' },
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
            Client <span className="text-accent">Reviews</span>
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


          {/* Reviews Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {reviews.map((review) => (
              <div key={review.id} className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 p-6">
                {/* Header */}
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="font-bold text-gray-900">{review.name}</h3>
                    <p className="text-sm text-gray-600">{review.role}</p>
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
                  <div className="flex items-center justify-end text-sm text-gray-500 mb-2">
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
      <section className="py-16 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
        <div className="container-custom text-center">
          <h2 className="text-4xl font-bold mb-6 text-white">
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
