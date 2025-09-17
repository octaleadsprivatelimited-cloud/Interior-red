import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, Ruler, CheckCircle, Star, Home, Users, Target } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Space Planning Services - Dream Space Interiors',
  description: 'Professional space planning services to optimize your layout for maximum functionality and visual appeal.',
  keywords: ['space planning', 'interior layout', 'floor plan design', 'room arrangement', 'space optimization'],
};

const SpacePlanning = () => {
  const services = [
    {
      title: 'Residential Space Planning',
      description: 'Optimize your home layout for better flow, functionality, and visual appeal.',
      features: ['Room layout optimization', 'Traffic flow analysis', 'Furniture placement', 'Storage solutions'],
        image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800&h=600&fit=crop'
    },
    {
      title: 'Commercial Space Planning',
      description: 'Design efficient work environments that boost productivity and collaboration.',
      features: ['Office layout design', 'Workflow optimization', 'Meeting room planning', 'Reception areas'],
        image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&h=600&fit=crop'
    },
    {
      title: 'Small Space Solutions',
      description: 'Maximize functionality in compact spaces with clever design solutions.',
      features: ['Multi-purpose areas', 'Storage optimization', 'Visual space expansion', 'Flexible layouts'],
        image: 'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=800&h=600&fit=crop'
    },
    {
      title: '3D Visualization',
      description: 'See your space before implementation with detailed 3D renderings.',
      features: ['3D floor plans', 'Virtual walkthroughs', 'Material visualization', 'Lighting simulation'],
        image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800&h=600&fit=crop'
    }
  ];

  const benefits = [
    {
      icon: Target,
      title: 'Improved Functionality',
      description: 'Every inch of your space is optimized for maximum efficiency and usability.'
    },
    {
      icon: Users,
      title: 'Better Flow',
      description: 'Smooth traffic patterns that enhance daily activities and reduce congestion.'
    },
    {
      icon: Home,
      title: 'Visual Appeal',
      description: 'Balanced proportions and harmonious layouts that please the eye.'
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-96 flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1566073771259-6a8506099945?w=1920&h=1080&fit=crop"
            alt="Space planning services"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/50"></div>
        </div>
        
        <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4">
          <h1 className="text-4xl lg:text-6xl font-bold mb-6 leading-tight">
            Space <span className="text-accent">Planning</span>
          </h1>
          <p className="text-xl lg:text-2xl text-white/90 mb-8 leading-relaxed">
            Optimize your space layout for maximum functionality and visual appeal.
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
              Professional <span className="text-accent">Space Solutions</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              From residential homes to commercial offices, we create layouts that work 
              perfectly for your specific needs and lifestyle.
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
              Why Space Planning <span className="text-accent">Matters</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Good space planning is the foundation of great interior design. 
              It ensures your space works as hard as it looks.
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
                How We Plan <span className="text-accent">Your Space</span>
              </h2>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Our systematic approach ensures every space is planned to perfection, 
                considering both current needs and future flexibility.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center mr-4 flex-shrink-0">
                    <Ruler className="w-6 h-6 text-accent" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Site Analysis</h3>
                    <p className="text-gray-600">We measure and analyze your space to understand its potential and limitations.</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center mr-4 flex-shrink-0">
                    <CheckCircle className="w-6 h-6 text-accent" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Layout Design</h3>
                    <p className="text-gray-600">We create multiple layout options optimized for your specific needs and preferences.</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center mr-4 flex-shrink-0">
                    <Star className="w-6 h-6 text-accent" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">3D Visualization</h3>
                    <p className="text-gray-600">See your space before implementation with detailed 3D renderings and walkthroughs.</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <Image
                src="https://placehold.co/800x900?text=Space+Planning+Process"
                alt="Space planning process"
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
            Ready to Optimize Your Space?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto leading-relaxed">
            Let's work together to create a space that's both beautiful and perfectly functional 
            for your lifestyle and needs.
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

export default SpacePlanning;
