import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, Award, Users, Clock, CheckCircle } from 'lucide-react';

const AboutPreview = () => {
  const features = [
    'Expert Design Team',
    'Custom Solutions',
    'Premium Materials',
    'Timely Delivery',
    '5-Year Warranty',
    'Free Consultation'
  ];

  const stats = [
    { number: '500+', label: 'Projects Completed' },
    { number: '98%', label: 'Client Satisfaction' },
    { number: '10+', label: 'Years Experience' },
    { number: '50+', label: 'Awards Won' }
  ];

  return (
    <section className="section-padding bg-gray-50">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div>
            <div className="mb-6">
              <span className="inline-block px-4 py-2 bg-accent/10 text-accent rounded-full text-sm font-medium mb-4">
                About Elite Interior Design
              </span>
            </div>
            
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Creating Beautiful Spaces
              <span className="block text-accent">Since 2013</span>
            </h2>
            
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              We are a team of passionate interior designers dedicated to transforming 
              your vision into reality. With over 10 years of experience, we specialize 
              in creating stunning, functional spaces that reflect your unique style and 
              enhance your quality of life.
            </p>

            <p className="text-gray-600 mb-8 leading-relaxed">
              Our approach combines creativity with functionality, ensuring every project 
              not only looks beautiful but also serves your practical needs. From concept 
              to completion, we work closely with you to bring your dream space to life.
            </p>

            {/* Features Grid */}
            <div className="grid grid-cols-2 gap-4 mb-8">
              {features.map((feature, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-accent flex-shrink-0" />
                  <span className="text-gray-700 font-medium">{feature}</span>
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/about"
                className="btn-primary inline-flex items-center justify-center group"
              >
                Learn More About Us
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" />
              </Link>
              
              <Link
                href="/contact"
                className="btn-secondary inline-flex items-center justify-center"
              >
                Get Free Consultation
              </Link>
            </div>
          </div>

          {/* Image and Stats */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&h=1000&fit=crop"
                alt="Our design team at work"
                width={600}
                height={700}
                className="w-full h-auto"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
              
              {/* Floating Stats Card */}
              <div className="absolute bottom-6 left-6 right-6 bg-white/95 backdrop-blur-sm rounded-xl p-6 shadow-xl">
                <div className="grid grid-cols-2 gap-4">
                  {stats.map((stat, index) => (
                    <div key={index} className="text-center">
                      <div className="text-2xl font-bold text-accent mb-1">
                        {stat.number}
                      </div>
                      <div className="text-sm text-gray-600">
                        {stat.label}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Floating Elements */}
            <div className="absolute -top-6 -right-6 w-24 h-24 bg-accent/10 rounded-full flex items-center justify-center">
              <Award className="w-12 h-12 text-accent" />
            </div>
            
            <div className="absolute -bottom-6 -left-6 w-20 h-20 bg-primary-500/10 rounded-full flex items-center justify-center">
              <Users className="w-10 h-10 text-primary-500" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutPreview;
