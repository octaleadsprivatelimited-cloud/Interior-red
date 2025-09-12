import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, Home, Building, Palette, Ruler, Sofa, Wrench, Lightbulb, CheckCircle, Star } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Our Services - Elite Interior Design',
  description: 'Comprehensive interior design services including residential design, commercial design, space planning, color consultation, and more.',
  keywords: ['interior design services', 'residential design', 'commercial design', 'space planning', 'color consultation'],
};

const Services = () => {
  const services = [
    {
      icon: Home,
      title: 'Residential Design',
      description: 'Transform your home into a beautiful, functional space that reflects your personal style and lifestyle needs.',
      features: [
        'Complete home design and renovation',
        'Room-by-room makeovers',
        'Furniture selection and placement',
        'Color scheme development',
        'Lighting design and installation',
        'Custom storage solutions'
      ],
      image: '/images/service-residential.jpg',
      link: '/residential-design',
      price: 'Starting at $5,000',
      duration: '4-8 weeks'
    },
    {
      icon: Building,
      title: 'Commercial Design',
      description: 'Create professional, inspiring work environments that boost productivity and impress clients.',
      features: [
        'Office space planning and design',
        'Reception and lobby areas',
        'Conference room design',
        'Employee break rooms',
        'Brand integration',
        'Workplace wellness design'
      ],
      image: '/images/service-commercial.jpg',
      link: '/commercial-design',
      price: 'Starting at $10,000',
      duration: '6-12 weeks'
    },
    {
      icon: Palette,
      title: 'Color Consultation',
      description: 'Expert color guidance to create the perfect mood and atmosphere for your space.',
      features: [
        'Color psychology analysis',
        'Trend analysis and recommendations',
        'Paint color selection',
        'Sample testing and approval',
        'Color scheme implementation',
        'Accent color coordination'
      ],
      image: '/images/service-color.jpg',
      link: '/color-consultation',
      price: 'Starting at $500',
      duration: '1-2 weeks'
    },
    {
      icon: Ruler,
      title: 'Space Planning',
      description: 'Optimize your space layout for maximum functionality and visual appeal.',
      features: [
        'Detailed floor plan development',
        'Traffic flow optimization',
        'Furniture placement strategies',
        'Storage solution design',
        'Multi-purpose area planning',
        'Accessibility considerations'
      ],
      image: '/images/service-space.jpg',
      link: '/space-planning',
      price: 'Starting at $1,500',
      duration: '2-4 weeks'
    },
    {
      icon: Sofa,
      title: 'Furniture Selection',
      description: 'Curate the perfect furniture pieces that combine style, comfort, and durability.',
      features: [
        'Custom furniture design',
        'Vendor relationship management',
        'Quality assurance and testing',
        'Installation coordination',
        'Maintenance planning',
        'Warranty management'
      ],
      image: '/images/service-furniture.jpg',
      link: '/furniture-selection',
      price: 'Starting at $2,000',
      duration: '3-6 weeks'
    },
    {
      icon: Wrench,
      title: 'Renovation Services',
      description: 'Complete renovation solutions from concept to completion with minimal disruption.',
      features: [
        'Project management and coordination',
        'Contractor and vendor management',
        'Timeline and budget control',
        'Quality control and inspection',
        'Permit and compliance handling',
        'Post-renovation support'
      ],
      image: '/images/service-renovation.jpg',
      link: '/renovation-services',
      price: 'Starting at $15,000',
      duration: '8-16 weeks'
    }
  ];

  const process = [
    {
      step: '01',
      title: 'Initial Consultation',
      description: 'We discuss your vision, needs, and budget to understand your project goals.'
    },
    {
      step: '02',
      title: 'Design Development',
      description: 'Our team creates detailed design concepts and 3D visualizations.'
    },
    {
      step: '03',
      title: 'Project Planning',
      description: 'We develop comprehensive timelines and coordinate all project details.'
    },
    {
      step: '04',
      title: 'Implementation',
      description: 'Our experienced team manages the entire implementation process.'
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-96 flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=1920&h=1080&fit=crop"
            alt="Our services"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/50"></div>
        </div>
        
        <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4">
          <h1 className="text-4xl lg:text-6xl font-bold mb-6 leading-tight">
            Our
            <span className="block text-accent">Services</span>
          </h1>
          <p className="text-xl lg:text-2xl text-white/90 mb-8 leading-relaxed">
            Comprehensive interior design solutions tailored to your unique needs and vision.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-2 bg-accent/10 text-accent rounded-full text-sm font-medium mb-4">
              What We Offer
            </span>
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Complete Design
              <span className="block text-accent">Solutions</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              From concept to completion, we offer a full range of interior design services 
              to transform your space into something extraordinary.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <div
                  key={index}
                  className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden card-hover"
                >
                  <div className="relative h-64 overflow-hidden">
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
                    <div className="absolute top-4 right-4">
                      <span className="px-3 py-1 bg-white/90 text-accent text-sm font-medium rounded-full">
                        {service.price}
                      </span>
                    </div>
                  </div>
                  
                  <div className="p-8">
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
                    
                    <div className="flex items-center justify-between mb-6">
                      <div className="text-sm text-gray-500">
                        <span className="font-medium">Duration:</span> {service.duration}
                      </div>
                      <div className="flex items-center text-yellow-500">
                        <Star className="w-4 h-4 fill-current" />
                        <Star className="w-4 h-4 fill-current" />
                        <Star className="w-4 h-4 fill-current" />
                        <Star className="w-4 h-4 fill-current" />
                        <Star className="w-4 h-4 fill-current" />
                        <span className="ml-2 text-sm text-gray-600">5.0</span>
                      </div>
                    </div>
                    
                    <Link
                      href={service.link}
                      className="btn-primary w-full text-center inline-flex items-center justify-center group"
                    >
                      Learn More
                      <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" />
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-2 bg-accent/10 text-accent rounded-full text-sm font-medium mb-4">
              Our Process
            </span>
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              How We Work
              <span className="block text-accent">Step by Step</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Our proven process ensures your project is completed on time, 
              within budget, and exceeds your expectations.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {process.map((step, index) => (
              <div key={index} className="text-center group">
                <div className="relative mb-6">
                  <div className="w-20 h-20 bg-accent rounded-2xl flex items-center justify-center mx-auto group-hover:scale-110 transition-transform duration-300">
                    <span className="text-2xl font-bold text-white">{step.step}</span>
                  </div>
                  <div className="absolute top-10 left-1/2 transform -translate-x-1/2 w-full h-0.5 bg-gray-300 hidden lg:block"></div>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{step.title}</h3>
                <p className="text-gray-600 leading-relaxed">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="inline-block px-4 py-2 bg-accent/10 text-accent rounded-full text-sm font-medium mb-4">
                Why Choose Us
              </span>
              <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                Experience the
                <span className="block text-accent">Elite Difference</span>
              </h2>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                With over 10 years of experience and 500+ successful projects, 
                we bring unmatched expertise and attention to detail to every project.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center mr-4 flex-shrink-0">
                    <CheckCircle className="w-6 h-6 text-accent" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Award-Winning Design</h3>
                    <p className="text-gray-600">Recognized for excellence with 50+ industry awards and certifications.</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center mr-4 flex-shrink-0">
                    <CheckCircle className="w-6 h-6 text-accent" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Quality Guarantee</h3>
                    <p className="text-gray-600">We stand behind our work with comprehensive warranties and ongoing support.</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center mr-4 flex-shrink-0">
                    <CheckCircle className="w-6 h-6 text-accent" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Timely Delivery</h3>
                    <p className="text-gray-600">We complete projects on schedule without compromising on quality or attention to detail.</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <Image
                src="/images/why-choose-us.jpg"
                alt="Why choose us"
                width={600}
                height={700}
                className="rounded-2xl shadow-2xl"
              />
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-accent/10 rounded-full"></div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gradient-to-br from-accent to-brown-600 text-white">
        <div className="container-custom text-center">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto leading-relaxed">
            Let's discuss your project and see how our services can transform your space. 
            We offer free consultations to help you get started.
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

export default Services;
