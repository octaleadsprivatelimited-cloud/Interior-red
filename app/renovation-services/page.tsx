import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, Wrench, CheckCircle, Star, Home, Users, Target } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Renovation Services - Elite Interior Design',
  description: 'Complete renovation solutions from concept to completion with minimal disruption. Professional renovation services for homes and businesses.',
  keywords: ['renovation services', 'home renovation', 'interior renovation', 'renovation design', 'project management'],
};

const RenovationServices = () => {
  const services = [
    {
      title: 'Kitchen Renovation',
      description: 'Transform your kitchen into a beautiful, functional space that\'s the heart of your home.',
      features: ['Layout redesign', 'Cabinet installation', 'Countertop selection', 'Appliance integration'],
        image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800&h=600&fit=crop',
      price: 'Starting at $15,000'
    },
    {
      title: 'Bathroom Renovation',
      description: 'Create a spa-like retreat with modern fixtures and finishes.',
      features: ['Plumbing updates', 'Tile installation', 'Fixture selection', 'Lighting design'],
        image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&h=600&fit=crop',
      price: 'Starting at $12,000'
    },
    {
      title: 'Living Space Renovation',
      description: 'Refresh your living areas with modern design and improved functionality.',
      features: ['Flooring updates', 'Wall treatments', 'Lighting installation', 'Furniture placement'],
        image: 'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=800&h=600&fit=crop',
      price: 'Starting at $8,000'
    },
    {
      title: 'Complete Home Renovation',
      description: 'Transform your entire home with a comprehensive renovation project.',
      features: ['Full home design', 'Structural updates', 'Systems upgrade', 'Finishing touches'],
        image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800&h=600&fit=crop',
      price: 'Starting at $50,000'
    }
  ];

  const benefits = [
    {
      icon: Home,
      title: 'Increased Value',
      description: 'Professional renovations can significantly increase your property value.'
    },
    {
      icon: Users,
      title: 'Improved Functionality',
      description: 'Better use of space and modern amenities enhance your daily living experience.'
    },
    {
      icon: Target,
      title: 'Minimal Disruption',
      description: 'We work efficiently to minimize disruption to your daily routine.'
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-96 flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1566073771259-6a8506099945?w=1920&h=1080&fit=crop"
            alt="Renovation services"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/50"></div>
        </div>
        
        <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4">
          <h1 className="text-4xl lg:text-6xl font-bold mb-6 leading-tight">
            Renovation
            <span className="block text-accent">Services</span>
          </h1>
          <p className="text-xl lg:text-2xl text-white/90 mb-8 leading-relaxed">
            Complete renovation solutions from concept to completion with minimal disruption.
          </p>
        </div>
      </section>

      {/* Services Overview */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-2 bg-accent/10 text-accent rounded-full text-sm font-medium mb-4">
              Our Services
            </span>
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Complete
              <span className="block text-accent">Renovation Solutions</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              From single rooms to entire homes, we provide comprehensive renovation 
              services that transform your space while maintaining quality and efficiency.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <div key={index} className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden card-hover">
                <div className="relative h-64 overflow-hidden">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                  <div className="absolute top-4 right-4">
                    <span className="px-3 py-1 bg-accent text-white text-sm font-medium rounded-full">
                      {service.price}
                    </span>
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-accent transition-colors duration-200">
                    {service.title}
                  </h3>
                  
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {service.description}
                  </p>
                  
                  <div className="mb-6">
                    <h4 className="font-semibold text-gray-900 mb-3">What's Included:</h4>
                    <ul className="space-y-2">
                      {service.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center text-sm text-gray-600">
                          <CheckCircle className="w-4 h-4 text-accent mr-3 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Why Choose Our
              <span className="block text-accent">Renovation Services</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Professional renovation services that deliver exceptional results 
              while minimizing disruption to your daily life.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon;
              return (
                <div key={index} className="text-center group">
                  <div className="w-16 h-16 bg-accent rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">{benefit.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{benefit.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="inline-block px-4 py-2 bg-accent/10 text-accent rounded-full text-sm font-medium mb-4">
                Our Process
              </span>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                How We Manage
                <span className="block text-accent">Your Renovation</span>
              </h2>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Our systematic approach ensures your renovation project is completed 
                on time, within budget, and to the highest quality standards.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center mr-4 flex-shrink-0">
                    <Wrench className="w-6 h-6 text-accent" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Project Planning</h3>
                    <p className="text-gray-600">We create detailed plans and timelines to ensure smooth project execution.</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center mr-4 flex-shrink-0">
                    <CheckCircle className="w-6 h-6 text-accent" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Quality Control</h3>
                    <p className="text-gray-600">Rigorous quality control ensures every detail meets our high standards.</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center mr-4 flex-shrink-0">
                    <Star className="w-6 h-6 text-accent" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Final Inspection</h3>
                    <p className="text-gray-600">Comprehensive final inspection ensures everything meets your expectations.</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <Image
                src="/images/renovation-process.jpg"
                alt="Renovation process"
                width={600}
                height={700}
                className="rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gradient-to-br from-accent to-brown-600 text-white">
        <div className="container-custom text-center">
          <h2 className="text-4xl font-bold mb-6">
            Ready to Transform Your Space?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto leading-relaxed">
            Let's discuss your renovation project and create a plan that brings 
            your vision to life while minimizing disruption to your daily routine.
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
              href="/portfolio"
              className="border-2 border-white text-white hover:bg-white hover:text-accent px-8 py-4 rounded-lg font-medium transition-colors duration-200 inline-flex items-center justify-center text-lg"
            >
              View Our Work
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default RenovationServices;
