import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, Sofa, CheckCircle, Star, Home, Users, Target } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Furniture Selection Services - Dream Space Interiors',
  description: 'Curate the perfect furniture pieces that combine style, comfort, and durability with our expert furniture selection services.',
  keywords: ['furniture selection', 'interior furniture', 'furniture design', 'custom furniture', 'furniture consultation'],
};

const FurnitureSelection = () => {
  const services = [
    {
      title: 'Residential Furniture Selection',
      description: 'Choose furniture that perfectly complements your home\'s style and meets your family\'s needs.',
      features: ['Living room furniture', 'Bedroom sets', 'Dining room pieces', 'Storage solutions'],
        image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800&h=600&fit=crop'
    },
    {
      title: 'Commercial Furniture Selection',
      description: 'Select furniture that enhances productivity and creates professional work environments.',
      features: ['Office furniture', 'Reception areas', 'Meeting rooms', 'Break areas'],
        image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&h=600&fit=crop'
    },
    {
      title: 'Custom Furniture Design',
      description: 'Create one-of-a-kind pieces tailored to your specific needs and space requirements.',
      features: ['Custom design', 'Material selection', 'Size optimization', 'Unique finishes'],
        image: 'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=800&h=600&fit=crop'
    },
    {
      title: 'Furniture Styling',
      description: 'Arrange and style your existing furniture to maximize both function and visual appeal.',
      features: ['Space planning', 'Accessory selection', 'Color coordination', 'Layout optimization'],
        image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800&h=600&fit=crop'
    }
  ];

  const benefits = [
    {
      icon: Home,
      title: 'Perfect Fit',
      description: 'Every piece is selected to fit your space perfectly and meet your specific needs.'
    },
    {
      icon: Users,
      title: 'Family Friendly',
      description: 'Furniture that works for your entire family\'s lifestyle and comfort requirements.'
    },
    {
      icon: Target,
      title: 'Quality Assurance',
      description: 'We only recommend high-quality pieces that will last for years to come.'
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-96 flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=1920&h=1080&fit=crop"
            alt="Furniture selection services"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/50"></div>
        </div>
        
        <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4">
          <h1 className="text-4xl lg:text-6xl font-bold mb-6 leading-tight">
            Furniture <span className="text-accent">Selection</span>
          </h1>
          <p className="text-xl lg:text-2xl text-white/90 mb-8 leading-relaxed">
            Curate the perfect furniture pieces that combine style, comfort, and durability.
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
              Expert <span className="text-accent">Furniture Solutions</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              From residential homes to commercial spaces, we help you select furniture 
              that perfectly complements your design vision and lifestyle needs.
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
              Why Professional <span className="text-accent">Furniture Selection</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Choosing the right furniture is crucial for creating a cohesive, functional, 
              and beautiful interior design.
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
                How We Select <span className="text-accent">Your Furniture</span>
              </h2>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Our systematic approach ensures every piece of furniture is perfectly 
                suited to your space, style, and budget.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center mr-4 flex-shrink-0">
                    <Sofa className="w-6 h-6 text-accent" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Needs Assessment</h3>
                    <p className="text-gray-600">We analyze your space, lifestyle, and preferences to understand your furniture needs.</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center mr-4 flex-shrink-0">
                    <CheckCircle className="w-6 h-6 text-accent" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Curated Selection</h3>
                    <p className="text-gray-600">We present you with carefully curated options that meet your criteria and budget.</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center mr-4 flex-shrink-0">
                    <Star className="w-6 h-6 text-accent" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Final Selection</h3>
                    <p className="text-gray-600">We help you make the final decisions and coordinate delivery and installation.</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <Image
                src="/images/furniture-process.jpg"
                alt="Furniture selection process"
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
            Ready to Find Your Perfect Furniture?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto leading-relaxed">
            Let's work together to select furniture that perfectly complements your space 
            and reflects your unique style and needs.
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

export default FurnitureSelection;
