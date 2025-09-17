import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, Home, Building, Palette, Ruler, Sofa, Wrench, Lightbulb } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: Home,
      title: 'Residential Design',
      description: 'Transform your home into a beautiful, functional space that reflects your personal style and lifestyle needs.',
      features: ['Space Planning', 'Color Schemes', 'Furniture Selection', 'Lighting Design'],
      image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800&h=600&fit=crop',
      link: '/residential-design'
    },
    {
      icon: Building,
      title: 'Commercial Design',
      description: 'Create professional, inspiring work environments that boost productivity and impress clients.',
      features: ['Office Layouts', 'Brand Integration', 'Employee Wellness', 'Client Areas'],
      image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&h=600&fit=crop',
      link: '/commercial-design'
    },
    {
      icon: Palette,
      title: 'Color Consultation',
      description: 'Expert color guidance to create the perfect mood and atmosphere for your space.',
      features: ['Color Psychology', 'Trend Analysis', 'Sample Testing', 'Implementation'],
      image: 'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=800&h=600&fit=crop',
      link: '/color-consultation'
    },
    {
      icon: Ruler,
      title: 'Space Planning',
      description: 'Optimize your space layout for maximum functionality and visual appeal.',
      features: ['Floor Plans', 'Traffic Flow', 'Storage Solutions', 'Multi-purpose Areas'],
      image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800&h=600&fit=crop',
      link: '/space-planning'
    },
    {
      icon: Sofa,
      title: 'Furniture Selection',
      description: 'Curate the perfect furniture pieces that combine style, comfort, and durability.',
      features: ['Custom Pieces', 'Vendor Relations', 'Quality Assurance', 'Installation'],
      image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800&h=600&fit=crop',
      link: '/furniture-selection'
    },
    {
      icon: Wrench,
      title: 'Renovation Services',
      description: 'Complete renovation solutions from concept to completion with minimal disruption.',
      features: ['Project Management', 'Contractor Coordination', 'Timeline Control', 'Quality Control'],
      image: 'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=800&h=600&fit=crop',
      link: '/renovation-services'
    }
  ];

  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 bg-accent/10 text-accent rounded-full text-sm font-medium mb-4">
            Our Services
          </span>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Complete Interior Design
            <span className="block text-accent">Solutions</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            From concept to completion, we offer comprehensive interior design services 
            tailored to your unique needs and vision.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={index}
                className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden card-hover"
              >
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                  <div className="absolute top-4 left-4">
                    <div className="w-12 h-12 bg-accent rounded-lg flex items-center justify-center">
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-accent transition-colors duration-200">
                    {service.title}
                  </h3>
                  
                  <p className="text-gray-600 mb-4 leading-relaxed">
                    {service.description}
                  </p>
                  
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm text-gray-600">
                        <div className="w-1.5 h-1.5 bg-accent rounded-full mr-3 flex-shrink-0"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  
                  <Link
                    href={service.link}
                    className="inline-flex items-center text-accent hover:text-accent/80 font-medium group-hover:translate-x-1 transition-all duration-200"
                  >
                    Learn More
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-primary-600 to-primary-700 rounded-2xl p-8 lg:p-12 text-center text-white">
          <div className="max-w-3xl mx-auto">
            <h3 className="text-3xl lg:text-4xl font-bold mb-4">
              Ready to Transform Your Space?
            </h3>
            <p className="text-xl text-white/90 mb-8 leading-relaxed">
              Let's discuss your project and create something extraordinary together. 
              Our expert team is ready to bring your vision to life.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="bg-gradient-to-r from-yellow-400 to-yellow-500 text-black hover:from-yellow-300 hover:to-yellow-400 px-10 py-5 rounded-xl font-bold text-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 inline-flex items-center justify-center group"
              >
                Get Free Consultation
                <ArrowRight className="ml-3 w-6 h-6 group-hover:translate-x-1 transition-transform duration-200" />
              </Link>
              
              <Link
                href="/portfolio"
                className="border-2 border-white text-white hover:bg-white hover:text-accent px-8 py-4 rounded-lg font-medium transition-colors duration-200 inline-flex items-center justify-center"
              >
                View Our Work
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
